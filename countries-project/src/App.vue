<template>
  <div :class="{
        'bg-very-dark-blue': darkMode,
        'bg-very-light-gray':!darkMode
      }">
    <router-view
    />
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import { useCoutryStore } from './stores/country-store';


export default defineComponent({
  name: 'App',
  setup() {
    const darkStore = useCoutryStore()
    const darkMode = ref(false)

    darkStore.$subscribe((mutation, state) => {
      darkMode.value = state.dark
    })



    return{
      darkStore,
      darkMode
    }
  }



})
</script>
