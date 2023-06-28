import {defineComponent} from 'vue';
import {useCoutryStore} from 'stores/country-store';
import {useRouter} from 'vue-router';

export default defineComponent({

  props:{
    image: String,
    name: String,
    population: Number,
    region: String,
    capital: String
  },

  setup(props){

    const storeCountry = useCoutryStore()
    const router = useRouter()


    function getDetails(){

      storeCountry.$patch({
        country: props.name
      })
      router.push('/details')
    }
    return{
      props,
      getDetails,

    }

  }

})
