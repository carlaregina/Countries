import { defineComponent, onMounted, ref } from 'vue';
import {
  allCountries,
  getCountriesByRegion,
  getCountryByName,
} from 'pages/countries/countriesPage.service';
import CountryCard from 'components/country-card/CountryCard.vue';
import { Countries } from 'src/interfaces/countries/countriesInterfaces';
import { useCoutryStore } from 'stores/country-store';

export default defineComponent({
  components: { CountryCard },

  setup() {
    const darkMode = ref(false);

    const storeCountry = useCoutryStore();
    const country = ref('');
    const region = ref('');
    const optionsRegion = ref([
      'Africa',
      'America',
      'Asia',
      'Europe',
      'Oceania',
    ]);
    const countryList = ref<Countries[]>([]);

    storeCountry.$subscribe((mutation, state) => {
      darkMode.value = state.dark;
    });

    function getAllCountries() {
      allCountries().then((value) => {
        countryList.value = value;
        console.log(countryList.value, 'COUNTRYLIST');
      });
    }
    function getByRegion(region: string) {
      getCountriesByRegion(region).then((value) => {
        countryList.value = value;
      });
    }
    function getByCountry(country: string) {
      getCountryByName(country.toLowerCase()).then((value) => {
        countryList.value = value;
      });
    }

    onMounted(() => {
      getAllCountries();
      darkMode.value = storeCountry.dark;
    });

    return {
      countryList,
      region,
      optionsRegion,
      getByRegion,
      country,
      getByCountry,
      darkMode,
    };
  },
});
