import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const pathInfo = {
    notfound: {
        path: '/404',
        name: 'NotFound',
        title: 'Not found'
    }
}

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
            path: '/gphoto',
            name: 'gphoto',
            component: function () {
                return import ('./views/GooglePhoto.vue')
            },
            meta: {
                title: 'Googleフォト',
                description: 'Googleフォトのギャラリーへのリンクです。',
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
            path: '/mastodon',
            name: 'mastodon',
            component: function () {
                return import ('./views/Mastodon.vue')
            },
            meta: {
                title: 'Mastodon',
                description: 'Mastodonのアカウントページへのリンクです。',
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
                description: 'cotenのアカウントページへのリンクです。',
                ogpimage: ''
            }
        },
        {
            path: pathInfo.notfound.path,
            name: pathInfo.notfound.name,
            component: function () {
                return import (`./views/${pathInfo.notfound.name}.vue`)
            },
            meta: {
                title: pathInfo.notfound.title,
                description: 'ページが見つかりませんでした。',
                ogpimage: ''
            }
        },
        {
            path: '/*',
            redirect: {
                name: pathInfo.notfound.name
            }
        }
    ]
})