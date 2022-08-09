<template>
<div>
  <h2>Root Component</h2>
  Type Username: <input v-model="username">
  <ComponentA />
</div>
</template>

<script setup>
import {provide, ref} from 'vue'
  import ComponentA from '@/components/CompositionApi/DependencyInjection/ComponentA'
  const username = ref('Iman');
  provide('username', username)
</script>

<style scoped>

</style>