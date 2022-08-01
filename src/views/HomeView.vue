<template>
  <div class="home">
    <CompositionApi />
  </div>
</template>

<script>
// @ is an alias to /src
import CompositionApi from '@/views/CompositionApi.vue'

export default {
  name: 'HomeView',
  components: {
    CompositionApi
  }
}
</script>
