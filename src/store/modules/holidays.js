Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

/**
 * store for holidays
 */
export default {
    state: {
        holidays: [{
            date:  (new Date()).addDays(1),
            name: 'Новый год',
            Active: true,
        },{
            date: (new Date()).addDays(2),
            name: 'День ВДВ',
            description: 'ВДВ - сила',
            Active: false
        },{
            date: (new Date()).addDays(3),
            name: 'День ВМФ',
            description: 'мор флот',
            Active: false
        }]
    },
    getters: {
        getHolidays: (state) => state.holidays,
        getHoliday: (state)=> state.holidays.find(x=>x.Active),
    },
    actions: {
        checkHoliday: function(ctx, holiday){
            ctx.commit('checkStateHoliday', holiday);
        }
    },
    mutations: {
        checkStateHoliday: function(state, holiday) {
            let active = state.holidays.filter(x=>x.Active);
            active.forEach(x=>x.Active = false);
            let el = state.holidays.find(x=>x.date == holiday.date);

            el.Active = true;
        }
    }
}