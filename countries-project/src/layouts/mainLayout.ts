import {defineComponent, ref} from 'vue';
import {useCoutryStore} from 'stores/country-store';


export default defineComponent({

  setup () {

    const darkStore = useCoutryStore()
    const darkMode = ref(false)



    function changeDarkMode (){
      darkMode.value = !darkStore.dark
      darkStore.$patch({
        dark: darkMode.value
      })


    }


    return {
      changeDarkMode,
      darkMode
      }

  }
});
