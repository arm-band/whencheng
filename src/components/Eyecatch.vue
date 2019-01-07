<template>
    <div class="container-fluid eyecatch" :class="{[className]: true}">
    </div>
</template>

<script>
export default {
    name: 'Eyecatch',
    props: ['className']
}
</script>