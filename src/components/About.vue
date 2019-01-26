<template>
    <div>
        <section class="container aboutPage">
            <h2 class="text-center mt-4 mb-3"><i class="fas fa-fw fa-bookmark" aria-hidden="true"></i>このページについて</h2>
            <p class="text-center">橙のフォトギャラリーや各種SNSの情報をまとめたポータルサイトです。</p>
            <p class="text-center">「whencheng」というURLは、橙の鳴き声が「にゃー」より「うぇーん」「わーん」に近いので、『「うぇーん」と鳴く橙』という意味で付けました。</p>
        </section>
        <section class="container aboutCheng">
            <h2 class="text-center mt-4 mb-3"><i class="fas fa-fw fa-cat" aria-hidden="true"></i>橙について</h2>
            <div class="card border-0 col-10 offset-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                <img class="card-img-top" src="@/assets/img/icon.jpg" alt="橙の顔写真">
                <div class="card-body">
                    <p class="card-text text-center">橙(ちぇん)は{{ calcAge() }}歳オスの雑種のネコです。</p>
                    <p class="card-text text-center">2015年5月に里親から引き取られ、気ままに暮らしてます。昼間はだいたい寝ていて、夜になると家の中で縦横無尽に駆け回ります！</p>
                </div>
            </div>
        </section>
        <section class="container snsShare">
            <h2 class="text-center mt-4 mb-3"><i class="fas fa-fw fa-share-alt" aria-hidden="true"></i>しぇあ</h2>
            <p class="text-center">もしよろしければシェアしてください！</p>
            <div class="text-center">
                <div class="btn-group" role="group">
                    <a class="btn btnTwitter" :href="twitterURL()" target="_blank" title="Twitterでツイート"><i class="fab fa-fw fa-twitter" aria-hidden="true"></i>ツイート</a>
                    <a class="btn btnFacebook" :href="facebookURL()" target="_blank" title="Facebookに投稿"><i class="fab fa-fw fa-facebook" aria-hidden="true"></i>投稿</a>
                    <a class="btn btnLine" :href="lineURL()" target="_blank" title="LINEトークに送る"><i class="fas fa-fw fa-comment" aria-hidden="true"></i>送る</a>
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
            metaInfo: this.$store.getters.metaInfo,
            headInfo: this.$store.getters.headInfo
        }
    },
    methods: {
        calcAge() {
            const nowDate = Date.now()
            const birthDate = new Date(this.metaInfo.birthday.year, this.metaInfo.birthday.month - 1, this.metaInfo.birthday.day).getTime()
            return new Date(nowDate - birthDate).getUTCFullYear() - 1970
        },
        twitterURL() {
            return `http://twitter.com/share?url=${this.headInfo.url}&text=${this.headInfo.sitename}`
        },
        facebookURL() {
            return `https://www.facebook.com/sharer/sharer.php?u=${this.headInfo.url}`
        },
        lineURL() {
            return `http://line.me/R/msg/text/?${this.headInfo.sitename}%20${this.headInfo.url}`
        },
    }
}
</script>