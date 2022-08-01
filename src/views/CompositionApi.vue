<template>
  <div class="CompositionApi">
    <p>{{name}}</p>
    <button @click="handleClick">Click</button>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: 'CompositionApi',
  components: {

  },
  mounted() {
    console.log("mounted")
  },
  setup() {
    let name = ref("Iman")
    const handleClick = () => {
      name.value = "Ishak"
    }
    return {
      name,
      handleClick
    }
  }  
}
</script>
