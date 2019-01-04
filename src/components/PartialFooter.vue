<template>
    <!-- footer -->
    <footer class="footer">
        <small class="pt-1 pb-2 copyRight">Copyright © {{ calcCRYear() }} {{ this.footerInfo.author }} All Right Reserved.</small>
    </footer>
    <!-- /footer -->
</template>

<script>
export default {
    name: 'PartialFooter',
    data() {
        return {
            footerInfo: this.$store.getters.footerInfo
        }
    },
    methods: {
        calcCRYear() {
            const nowYear = new Date().getUTCFullYear()
            let copyRightYear = String(this.footerInfo.cryear);
            if(nowYear > this.footerInfo.cryear) {
                copyRightYear = `${String(this.footerInfo.cryear)} - ${String(nowYear)}`
            }
            return copyRightYear
        }
    }
}
</script>