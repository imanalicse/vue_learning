<template>
  <div class="CompositionApi">
    <h3>Composition API</h3>
    <p ref="paragraph"> My Name is {{name}}</p>
    <input typeof="text" v-model="name" placeholder="Type Name"> <br>
    <button @click="updateValue">Update value</button>
    <h4>Reactive</h4>
    <p> {{person.name}} - {{person.age}}</p>
    <h4>Search computed property</h4>
    <input type="text" v-model="search">
    <p>Search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="stopWatchEvent">Stop watching</button>
  </div>
</template>

<script>
/**
 * reactive:
 *  does not work with primitive data type
 *  Value can be assigned directly without .value operator
 *
 */
import {computed, reactive, ref, watch, watchEffect} from "vue";
// import PostsList from "@/components/CompositionApi/PostsList.vue";

export default {
  name: 'CompositionApi',
  components: {
   // PostsList
  },
  mounted() {
    console.log("mounted")
    this.score = 10;
  },
  setup() {
    console.log("setup")
    let name = ref("Iman")
    const paragraph = ref(null);
    const person = reactive({ name: "Iman", age: 35 });
    const updateValue = () => {
      name.value = "Ishak"
      paragraph.value.classList.add("test");
      console.log(paragraph.value)
      person.name = "Mukta"
    }
    const search = ref("")
    const names = ref(["Rashid", "Feroza", "Iman", "Mukta", "Ishak"])
    const matchingNames = computed(() =>{
      return names.value.filter((name) => name.toLowerCase().includes(search.value.toLowerCase()))
    });

    const stopWatch = watch(search, () => {
      console.log("watch run") // run when search value chane
    })
    const stopWatchEffect = watchEffect(() => {
      // console.log('watchEffect run') // run initial
      console.log('watchEffect->>', search.value) //run when search value change
    })

    const stopWatchEvent = () => {
      stopWatch()
      stopWatchEffect()
    }
    return { name, updateValue, paragraph, person, search, names, matchingNames, stopWatchEvent}
  },
  data() {
    return {
      score: 5
    }
  }
}
</script>
