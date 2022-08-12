<template>
 <div class="blog-post">
  <h4> {{post.title}} </h4>
  <button @click="$emit('enlarge-text')">Enlarge text</button>
 </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
const props = defineProps(['post'])
console.log(props.post)
</script>

<style scoped>

</style>