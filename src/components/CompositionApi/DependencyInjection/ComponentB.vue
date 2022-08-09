<template>
<div>
  <h2>Display username in component B:</h2>
   {{username}}
</div>
</template>

<script setup>
import { inject } from 'vue'
const username = inject('username')
console.log('username:', username.value)
</script>

<style scoped>

</style>