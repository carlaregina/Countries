
<template >
  <div class="country-page">
    <p>COUNTRIES TITLE uhbasudhb</p>

    <q-input
      id="input-search"
      color="black"
       v-model="country "
              class="bg-white q-mx-md input-search"
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
  </div>


</template>

<script src="./countriesPage">

</script>

<style lang="scss">

.country-page{
  background-color: hsl(0, 0%, 98%);
}
.input-search{
  background-color: hsl(0, 0%, 98%);
  border-radius: 5px;
}
</style>
