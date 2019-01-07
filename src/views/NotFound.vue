<template>
    <div class="notfound">
        <Eyecatch class-name="notfoundEyecatch"/>
        <main class="main notfoundMain">
            <div class="container my-5">
                <h2 class="text-center mt-4 mb-3">橙が見つかりません</h2>
                <p class="text-center">お探しのページが見つかりませんでした。</p>
                <p class="text-center">URLを確認していただくか、<router-link to="/"><i class="fa fa-fw fa-undo" aria-hidden="true"></i>トップページ</router-link>に戻ってお探しください。</p>
            </div>
        </main>
    </div>
</template>

<script>
import Eyecatch from '@/components/Eyecatch.vue'

export default {
    name: 'NotFound',
    components: {
        Eyecatch
    }
}
</script>
