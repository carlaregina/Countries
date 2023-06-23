
<template>
<p>COUNTRIES TITLE uhbasudhb</p>

  <q-input  filled v-model="country"
            label="Search for a country..."
            @keyup.enter="getByCountry(country)"
  >
    <template v-slot:prepend>
      <div @click="getByCountry(country)">
        <q-icon
          name="search" />
      </div>

    </template>
  </q-input>


  <q-select standout v-model="region"
            :options="optionsRegion"
            label="Filter By Region"
            @update:model-value="getByRegion(region)"
  />

  <div v-for="(country, idx) in countryList" :key="idx">
    <CountryCard :image="country.flags.png"
                 :name="country.name.common"
                 :population="country.population"
                 :region="country.region"
                 :capital="country.capital?.length>0 ? country.capital[0] : ''"
    ></CountryCard>
  </div>

</template>

<script src="./countriesPage">

</script>

<style lang="scss">

</style>
