<template>
    <div id="app">
        <PartialHeader/>
        <transition name="fade">
            <router-view/>
        </transition>
        <PartialMenu/>
        <PartialR2pt/>
        <PartialFooter/>
    </div>
</template>

<script>
// @ is an alias to /src
import PartialHeader from '@/components/PartialHeader.vue'
import PartialMenu from '@/components/PartialMenu.vue'
import PartialR2pt from '@/components/PartialR2pt.vue'
import PartialFooter from '@/components/PartialFooter.vue'

export default {
    name: 'all',
    components: {
        PartialHeader,
        PartialMenu,
        PartialR2pt,
        PartialFooter
    },
    data() {
        return {
            headInfo: this.$store.getters.headInfo,
            headMeta: {
                description: 'meta[name="description"]',
                ogTitle: 'meta[name="og:title"]',
                ogDescription: 'meta[name="description"]'
            },
            footerInfo: this.$store.getters.footerInfo,
            metaInfo: this.$store.getters.metaInfo,
        }
    },
    methods: {
        createPageTitle : function(to) {
            const headInfo = this.headInfo
            const sitename = headInfo.sitename
            // タイトルを設定
            if(to.meta.title) {
                const setTitle = `${to.meta.title} | ${sitename}`;
                document.title = setTitle;
                document.querySelector(this.headMeta.ogTitle).setAttribute('content', setTitle)
            } else {
                document.title = sitename
                document.querySelector(this.headMeta.ogTitle).setAttribute('content', sitename)
            }
            // メタタグdescription設定
            if(to.meta.description){
                const setDesc = to.meta.description;
                document.querySelector(this.headMeta.description).setAttribute('content', setDesc)
                document.querySelector(this.headMeta.ogDescription).setAttribute('content', setDesc)
            } else {
                document.querySelector(this.headMeta.description).setAttribute('content', sitename)
                document.querySelector(this.headMeta.ogDescription).setAttribute('content', sitename)
            }
        }
    },
    mounted() {
        const to = this.$route;
        this.createPageTitle(to);
      },
    watch: {
        '$route' (to, from) {
            this.createPageTitle(to);
        }
    }
}
</script>

<style lang="scss">
@import './assets/scss/assets/bootstrap/bootstrap';
@import './assets/scss/common';

//&.router-link-exact-active {
</style>
