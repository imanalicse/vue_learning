<template>
<div>
  <p>Message to grand child: <strong style="color: darkgreen"><i>{{message}}</i> </strong> </p>
</div>
</template>

<script setup>
import {inject, watch} from 'vue'
const message = inject('message', 'Default Message')
watch(message, function () {
  console.log(message.value)
})
</script>

<style scoped>

</style>