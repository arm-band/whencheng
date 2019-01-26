<template>
    <transition name="r2pt">
        <div class="returnPageTop" v-if="this.stater2pt.show" v-on:click="r2pt">
            <i class="fas fa-fw fa-paw" aria-hidden="true" title="ページトップへもどる"></i>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'PartialR2pt',
    data() {
        return {
            stater2pt: {
                scrollY: 0,
                show: false
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollDistance)
    },
    methods: {
        scrollDistance() {
            this.stater2pt.scrollY = window.scrollY
            if(this.stater2pt.scrollY > 400) {
                this.stater2pt.show = true
            }
            else {
                this.stater2pt.show = false
            }
        },
        r2pt() {
            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        }
    }
}
</script>