<template>
    <div class="home">
        <Eyecatch class-name="homeEyecatch"/>
        <main class="main homeMain">
            <div class="container my-5">
                <About/>
            </div>
        </main>
    </div>
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
