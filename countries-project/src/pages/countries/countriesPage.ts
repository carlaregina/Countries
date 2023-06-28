import {defineComponent, onMounted, ref} from 'vue';
import {allCountries, getCountriesByRegion, getCountryByName} from 'pages/countries/countriesPage.service';
import CountryCard from 'components/country-card/CountryCard.vue';
import {Countries} from 'src/interfaces/countries/countriesInterfaces';

export default defineComponent({
  components: {CountryCard},

  setup (){

    const country= ref('')
    const region= ref('')
    const optionsRegion=ref([
        'Africa', 'America', 'Asia', 'Europe', 'Oceania'
      ])
    const countryList = ref<Countries[]>([])

    function getAllCountries(){
      allCountries().then(value => {
        countryList.value = value
        console.log(countryList.value, 'COUNTRYLIST')
      })
    }
    function getByRegion(region: string) {
      getCountriesByRegion(region).then(value => {
        countryList.value = value
      });
    }
    function getByCountry(country: string){
      getCountryByName(country.toLowerCase()).then( value => {
        countryList.value = value
      });
    }

    onMounted(() => {
      getAllCountries();
    })

    return {
      countryList,
      region,
      optionsRegion,
      getByRegion,
      country,
      getByCountry
    }

  }
})
