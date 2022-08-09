<template>
<div class="posts">
    <div v-for="post in posts" :key="post.id">
      <h3>{{post.title}} </h3>
    </div>
</div>
</template>

<script>
export default {
  // props:["posts"],
  setup(props) {
    console.log(props)
    return {
      posts: props.posts
    }
  }
}
</script>

<style scoped>

</style>