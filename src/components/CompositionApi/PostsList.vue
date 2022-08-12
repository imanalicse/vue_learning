<template>
  <div :style="{ fontSize: postFontSize + 'em' }">
      <BlogPost v-for="post in posts" :key="post.id" :post="post" @enlarge-text="postFontSize +=0.1"/>
  </div>
</template>

<script setup>
import BlogPost from "@/components/CompositionApi/BlogPost.vue"
import {ref} from "vue";

const posts = ref([
    { id: 1, title: 'My journey with Vue' },
    { id: 2, title: 'Blogging with Vue' },
    { id: 3, title: 'Why Vue is so fun' }
  ]);
  const postFontSize = ref(1)
</script>

<style scoped>

</style>