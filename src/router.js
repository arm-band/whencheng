import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: 'ホーム',
                description: '橙のポータルサイトです。',
                ogpimage: ''
            }
        },
        {
            path: '/youtube',
            name: 'youtube',
            component: function () {
                return import ('./views/Youtube.vue')
            },
            meta: {
                title: 'Youtube',
                description: 'YouTubeのチャンネルへのリンクです。',
                ogpimage: ''
            }
        },
        {
            path: '/twitter',
            name: 'twitter',
            component: function () {
                return import ('./views/Twitter.vue')
            },
            meta: {
                title: 'Twitetr',
                description: 'Twitterの投稿ギャラリーです。',
                ogpimage: ''
            }
        },
        {
            path: '/instagram',
            name: 'instagram',
            component: function () {
                return import ('./views/Instagram.vue')
            },
            meta: {
                title: 'Instagram',
                description: 'Instagramのギャラリーです。',
                ogpimage: ''
            }
        },
        {
            path: '/coten',
            name: 'coten',
            component: function () {
                return import ('./views/Coten.vue')
            },
            meta: {
                title: 'Coten',
                description: 'cotenのギャラリーです。',
                ogpimage: ''
            }
        }
    ]
})