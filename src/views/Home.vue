<template>
    <main class="main home">
        <Eyecatch/>
        <About/>
    </main>
</template>

<script>
// @ is an alias to /src
import About from '@/components/About.vue'
import Eyecatch from '@/components/Eyecatch.vue'

export default {
    name: 'home',
    components: {
        About,
        Eyecatch
    }
}
</script>
