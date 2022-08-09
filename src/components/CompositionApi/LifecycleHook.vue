<template>
   <div ref="el"> {{name}}</div>
   Counter: <button id="count" @click="count++">{{ count }}</button>
</template>

<script setup>
import {ref, onMounted, onUpdated, onUnmounted, onCreated} from "vue";

const el = ref(null);
const name = ref("Iman");
const count = ref(0)
onMounted(() => {
  console.log('-- onMounted --')
  console.log(el.value)
})
onUnmounted(() => console.log('-- onUnmounted --'))
onCreated(() => console.log('-- onCreated --'))

onUpdated(() => {
  console.log('-- onUpdated --')
  console.log(document.getElementById('count').textContent)
})


</script>

<style scoped>

</style>