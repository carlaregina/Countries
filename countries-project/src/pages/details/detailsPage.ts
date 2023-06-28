import {defineComponent, onMounted, ref} from 'vue';
import {useCoutryStore} from 'stores/country-store';
import {useRouter} from 'vue-router';
import {getCountryByCode, getCountryByName} from 'pages/details/detailsPage.service';
import DetailsCard from 'components/details-card/DetailsCard.vue';
import {Countries} from 'src/interfaces/countries/countriesInterfaces';
export default defineComponent({

  components: { DetailsCard},

  setup(){

    const country = ref('')
    const storeCountry = useCoutryStore()
    const router = useRouter()
    const countryDetail = ref<Countries[]>([])

    const borderCountriesNames = ref<string[]>([])


    onMounted( () => {
      if (storeCountry.country) {
        country.value = storeCountry.country
       getCountryByName(country.value).then(value => {
          countryDetail.value = value

         countryDetail.value[0].borders.map(item => {
           getCountryByCode(item).then(countryName => {
             borderCountriesNames.value.push(countryName[0].name.common)
             console.log(borderCountriesNames, 'borderCountriesNames')
           })
         })


        })
      } else {
        router.push('/')
      }
    })


    return{

      country,
      countryDetail,
      borderCountriesNames

    }

  }

})
