<template>
  <v-navigation-drawer
    app
    clipped
    permanent
  >
    <v-list
      nav
      dense
    >
      <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link>
        <v-list-item-icon>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{item.text}}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Menu',

  data: () => ({
    items: [
      {
        icon: '',
        text: 'Home',
        link: '/',
      },
      {
        icon: '',
        text: 'Test',
        link: '/test',
      },
      {
        icon: '',
        text: 'Test1',
        link: '/test1',
      },
    ],
  }),
};
</script>