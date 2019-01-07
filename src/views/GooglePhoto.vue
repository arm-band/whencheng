<template>
    <main class="main gphoto">
        <div class="container my-5">
            <h2 class="text-center mt-4 mb-3"><i class="far fa-fw fa-images" aria-hidden="true"></i>Googleフォト</h2>
            <ul
                v-for="post in metaInfo.url.googlephoto"
                class="post my-3"
            >
                <li>
                    <a :href="post.url" target="_blank"><i class="fas fa-fw fa-external-link-alt" aria-hidden="true"></i>{{ post.title }}</a>
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
export default {
    name: 'GooglePhoto',
    data () {
        return {
            metaInfo: this.$store.getters.metaInfo
        }
    }
}
</script>
