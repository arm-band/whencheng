<template>
    <main class="main twitter">
        <div class="container my-5">
            <h2 class="text-center mt-4 mb-3"><i class="fab fa-fw fa-twitter" aria-hidden="true"></i>Twitter</h2>
            <p class="text-center"><a :href="this.metaInfo.url.twitter" target="_blank"><i class="fas fa-fw fa-external-link-alt" aria-hidden="true"></i>アカウントページへ</a></p>
            <div class="twitter">
                <div class="twitter-widget">
                    <v-timeline
                        :id="twitterId"
                        :source-type="'profile'"
                        :options="{ 'height': twitterHeight }" />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Timeline from 'vue-tweet-embed/timeline'

export default {
    name: 'Twitter',
    components: {
        'v-timeline': Timeline
    },
    data() {
        return {
            twitterId: 'today__s_cheng',
            twitterHeight: '1000',
            metaInfo: this.$store.getters.metaInfo
        }
    }
}
</script>
