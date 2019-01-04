import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        headinfo: {
            sitename: '何時の橙',
            description: '橙のポータルサイトです。',
            themecolor: '#FC8D00',
            themecolor2: '#6EE200',
            themecolor3: '#4D0DAB',
            twitter: 'today__s_cheng',
            url: 'https://whencheng.ewigleere.net/'
        },
        footerInfo: {
            author: 'アルム＝バンド',
            cryear: 2019
        },
        metaInfo: {
            birthday: {
                year: 2015,
                month: 3,
                day: 28
            }
        }
    },
    getters: {
        headInfo(state) {
            return state.headinfo
        },
        footerInfo(state) {
            return state.footerInfo
        },
        metaInfo(state) {
            return state.metaInfo
        }
    },
    mutations: {

    },
    actions: {

    }
})