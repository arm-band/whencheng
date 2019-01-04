<template>
    <!-- header -->
    <header class="header" id="navbar">
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <div class="container">
                <router-link to="/" class="navbar-brand my-0"><h1 class="my-0 marugo">{{ this.headInfo.sitename }}</h1></router-link>
            </div>
        </nav>
    </header>
    <!-- /header -->
</template>

<script>
export default {
    name: 'PartialHeader',
    data() {
        return {
            headInfo: this.$store.getters.headInfo
        }
    }
}
</script>