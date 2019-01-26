import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        headinfo: {
            sitename: '何時の橙',
            description: '橙のポータルサイトです。',
            themecolor: '#FC8D00',
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
            },
            api: {
                instagram: 'https://whencheng.ewigleere.net/phpapi/instaapi.php'
            },
            url: {
                googlephoto: [
                    {
                        url: 'https://photos.app.goo.gl/5UX8es4hgfgJ3PLy5',
                        title: '2019年の橙'
                    },
                    {
                        url: 'https://photos.app.goo.gl/DjptEGFM5ZC5LAVNA',
                        title: '2018年の橙'
                    },
                    {
                        url: 'https://photos.app.goo.gl/zXuM2v5gU5eQDZwN8',
                        title: '2017年の橙'
                    },
                    {
                        url: 'https://photos.app.goo.gl/fAXdQkK5jWtjTZ1x8',
                        title: '2016年の橙'
                    },
                    {
                        url: 'https://photos.app.goo.gl/BWN6aR95VibjiwxE9',
                        title: '2015年の橙'
                    },
                    {
                        url: 'https://photos.app.goo.gl/1sVjUsksywtUfFFLA',
                        title: 'ウォーターファウンテイン⛲'
                    },
                    {
                        url: 'https://photos.app.goo.gl/SwM2kDkG8LBPxEew8',
                        title: 'おおあくび！'
                    },
                    {
                        url: 'https://photos.app.goo.gl/jKiDY8t1Mhi5mQWF9',
                        title: 'ヘンな寝相'
                    },
                    {
                        url: 'https://photos.app.goo.gl/kkQ5FkufUxygRUuv5',
                        title: '箱入り橙'
                    },
                    {
                        url: 'https://photos.app.goo.gl/6VxVrD5acRTVTd7V6',
                        title: 'ごはん'
                    },
                    {
                        url: 'https://photos.app.goo.gl/X6jRyqH3p4uZ3pYh7',
                        title: 'にくきゅー🐾'
                    },
                    {
                        url: 'https://photos.app.goo.gl/fHJtU2pQsuU9LDeSA',
                        title: 'シネマグラフ'
                    },
                    {
                        url: 'https://photos.app.goo.gl/tdhNZsZR2W2bhq8i7',
                        title: '輪飾りと橙'
                    },
                    {
                        url: 'https://photos.app.goo.gl/GCA572wWavG4edwX6',
                        title: '雪と橙'
                    },
                    {
                        url: 'https://photos.app.goo.gl/Gkz4s6QVoWJrzLVM6',
                        title: '小さい頃の橙'
                    }
                ],
                youtube: 'https://www.youtube.com/channel/UCgB8_sT96a5y4FVX4xajaSQ',
                twitter: 'https://twitter.com/today__s_cheng',
                instagram: 'https://www.instagram.com/today_s_cheng/',
                mastodon: 'https://catdon.life/@today_s_cheng',
                coten: 'https://coten.pics/today_s_cheng'
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