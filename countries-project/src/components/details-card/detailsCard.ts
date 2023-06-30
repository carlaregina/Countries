import {defineComponent, PropType, ref} from 'vue';
import {Jod, Languages} from 'src/interfaces/countries/countriesInterfaces';


export default defineComponent({

  props:{
    image: String,
    name: String,
    nativeName: String,
    population: Number,
    region: String,
    subRegion: String,
    capital: String,
    topLevelDomain: String,
    currencies:  Object as PropType<Jod>,
    languages: Object as PropType<Languages>,
    borderCountries: Array<string>,
    darkMode: Boolean

  },
  setup(props){

    const languageArray = ref<string[]>([])

    function changeLanguageObjForArray(){
      if(props.languages){
        languageArray.value = Object.values(props.languages)
      }

    }
    changeLanguageObjForArray()
    return{
      props,
      languageArray

    }
  }
})
