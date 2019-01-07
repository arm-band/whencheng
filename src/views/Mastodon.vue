<template>
    <main class="main youtube">
        <div class="container my-5">
            <h2 class="text-center mt-4 mb-3"><i class="fab fa-fw fa-mastodon" aria-hidden="true"></i>Mastodon(Catdon)</h2>
            <p class="text-center"><a :href="this.metaInfo.url.mastodon" target="_blank"><i class="fas fa-fw fa-external-link-alt" aria-hidden="true"></i>アカウントページへ</a></p>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Mastodon',
    data () {
        return {
            metaInfo: this.$store.getters.metaInfo
        }
    }
}
</script>
