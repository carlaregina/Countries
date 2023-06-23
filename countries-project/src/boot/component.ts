import CountryCard from 'components/country-card/countryCard';
import {boot} from 'quasar/wrappers';

export default boot(({app }) => {
  app.component('country-card', CountryCard)
})
