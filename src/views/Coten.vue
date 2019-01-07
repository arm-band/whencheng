<template>
    <main class="main coten">
        <div class="container my-5">
            <h2 class="text-center mt-4 mb-3"><i class="fas fa-fw fa-camera" aria-hidden="true"></i>Coten</h2>
            <p class="text-center"><a :href="this.metaInfo.url.coten" target="_blank"><i class="fas fa-fw fa-external-link-alt" aria-hidden="true"></i>アカウントページへ</a></p>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Coten',
    data () {
        return {
            metaInfo: this.$store.getters.metaInfo
        }
    }
}
</script>
