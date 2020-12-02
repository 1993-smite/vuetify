<template>
    <p>
        Test
    </p>
</template>

<script>

//const axios = require('axios')
//const jq = require('jquery')

export default {
  name: 'Test',

  components: {
  },

  data: () => ({
    //
  }),

  async mounted(){
    this.$store.dispatch('setPage', 'Test');

    let dtTocken = {
      grant_type: 'password',
      username: 'sasov',
      password: '1950'
    };

  //   axios.request({
  //     method: "post",
  //     url: "/token",
  //     mode: 'no-cors',
  //     baseURL: "http://localhost:59609",
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       'Sec-Fetch-Mode': 'no-cors'
  //     },
  //     auth: {
  //       username: dtTocken.username, // This is the client_id
  //       password: dtTocken.password // This is the client_secret
  //     },
  //     data: {
  //       "grant_type": "password",   
  //       'username': dtTocken.username,
  //       'password': dtTocken.password
  //     }
  //   }).then(respose => {
  //   console.log(respose);  
  // }); 

    let response = await fetch('http://localhost:59609/token', {
      // mode: 'no-cors',
      method: "post",
      body: `grant_type=password&username=${dtTocken.username}&password=${dtTocken.password}`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    let result = await response;

    console.log(result, result.json());

  }
};
</script>