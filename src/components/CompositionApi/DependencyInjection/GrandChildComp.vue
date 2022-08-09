<template>
<div>
  <p>Message to grand child: <strong style="color: darkgreen"><i>{{message}}</i> </strong> </p>
</div>
</template>

<script setup>
import { inject } from 'vue'
const message = inject('message')
console.log('username:', message.value)
</script>

<style scoped>

</style>