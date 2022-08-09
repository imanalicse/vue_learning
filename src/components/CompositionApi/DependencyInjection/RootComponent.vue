<template>
<div>
  Message: <input v-model="message">
  <Child />
</div>
</template>

<script setup>
import { provide, ref} from 'vue'
import Child from '@/components/CompositionApi/DependencyInjection/ChildComp.vue'
const message = ref('Hello');
provide('message', message)
</script>

<style scoped>

</style>