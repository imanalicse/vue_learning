<template>
  <div class="home">
    <RootComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import RootComponent from '@/components/CompositionApi/DependencyInjection/RootComponent.vue'

export default {
  name: 'HomeView',
  components: {
    RootComponent
  }
}
</script>
