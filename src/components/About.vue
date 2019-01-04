<template>
    <div class="my-5">
        <section class="container aboutPage">
            <h2 class="text-center">このページについて</h2>
            <p class="text-center">橙のフォトギャラリーや各種SNSの情報をまとめたポータルサイトです。</p>
        </section>
        <section class="container aboutCheng">
            <h2 class="text-center">橙について</h2>
            <p class="text-center">橙(ちぇん)は{{ calcAge() }}歳オスの雑種のネコです。</p>
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