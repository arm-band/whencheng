<template>
    <main class="main instagram">
        <div class="container my-5">
            <h2 class="text-center mt-4 mb-3"><i class="fab fa-fw fa-instagram" aria-hidden="true"></i>Instagram</h2>
            <p class="text-center"><a :href="this.metaInfo.url.instagram" target="_blank"><i class="fas fa-fw fa-external-link-alt" aria-hidden="true"></i>アカウントページへ</a></p>
            <section v-if="errored">
                <p>Instagramのデータが読み込めませんでした……</p>
            </section>
            <section v-else>
                <div v-if="apiloading">
                    <ApiLoading/>
                </div>
                <div v-else class="card-columns">
                   <div
                        v-for="post in data.data"
                        class="post card border-0 my-3"
                    >
                        <a :href="post.link" target="_blank"><img :src="post.images.standard_resolution.url" :alt="post.caption.text" class="card-img-top"></a>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
import axios from 'axios'
import ApiLoading from '@/components/PartialLoading.vue'

export default {
    name: 'Instagram',
    components: {
        ApiLoading
    },
    data() {
        return {
            data: null,
            apiloading: true,
            errored: false,
            msg: '',
            metaInfo: this.$store.getters.metaInfo
        }
    },
    mounted() {
        axios
            .get(this.metaInfo.api.instagram)
            .then(response => (
                this.data = response.data
            ))
            .catch(error => {
                this.errored = true
                if(this.data !== null && this.data !== undefined) {
                    if(400 <= this.data.meta.code) {
                        switch (this.data.meta.code) {
                            case 400:
                                this.msg = 'Bad request'
                                break
                            case 401:
                                this.msg = 'Authentication Required'
                                break
                            case 403:
                                this.msg = 'Forbidden'
                                break
                            case 404:
                                this.msg = 'Not Found'
                                break
                            case 500:
                                this.msg = 'Internal Server Error'
                                break
                            case 503:
                                this.msg = 'Service Unavailable'
                                break
                            default:
                                this.msg = 'Unexcepted Error'
                                break
                        }
                    }
                }
            })
            .finally(() => this.apiloading = false)
    }
}
</script>
