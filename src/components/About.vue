<template>
    <div>
        <section class="container aboutPage">
            <h2 class="text-center mt-4 mb-3">このページについて</h2>
            <p class="text-center">橙のフォトギャラリーや各種SNSの情報をまとめたポータルサイトです。</p>
        </section>
        <section class="container aboutCheng">
            <h2 class="text-center mt-4 mb-3">橙について</h2>
            <div class="card border-0 col-10 offset-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                <img class="card-img-top" src="@/assets/img/icon.jpg" alt="橙の顔写真">
                <div class="card-body">
                    <p class="card-text text-center">橙(ちぇん)は{{ calcAge() }}歳オスの雑種のネコです。</p>
                    <p class="card-text text-center">2015年5月に里親から引き取られ、気ままに暮らしてます。昼間はだいたい寝ていて、夜になると家の中で縦横無尽に駆け回ります！</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            metaInfo: this.$store.getters.metaInfo
        }
    },
    methods: {
        calcAge() {
            const nowDate = Date.now()
            const birthDate = new Date(this.metaInfo.birthday.year, this.metaInfo.birthday.month - 1, this.metaInfo.birthday.day).getTime()
            return new Date(nowDate - birthDate).getUTCFullYear() - 1970
        }
    }
}
</script>