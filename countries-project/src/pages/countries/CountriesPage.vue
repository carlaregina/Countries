<template>
  <div
    :class="{
      'bg-very-dark-blue': darkMode,
      'bg-very-light-gray': !darkMode,
    }"
  >
    <q-input
      :class="{
        'bg-very-light-gray text-very-dark-blue-input': !darkMode,
        'bg-blue-mode-element text-white-input': darkMode,
      }"
      v-model="country"
      class="bg-white q-my-md q-mx-md input-search"
      label="Search for a country..."
      @keyup.enter="getByCountry(country)"
    >
      <template v-slot:prepend>
        <div @click="getByCountry(country)">
          <q-icon
            class="q-ml-lg"
            name="search"
            :class="{
              'text-very-dark-blue': !darkMode,
              'text-white': darkMode,
            }"
          />
        </div>
      </template>
    </q-input>

    <q-select
      standout
      v-model="region"
      :options="optionsRegion"
      label="Filter By Region"
      @update:model-value="getByRegion(region)"
    />

    <div v-for="(country, idx) in countryList" :key="idx">
      <CountryCard
        :image="country.flags.png"
        :name="country.name.common"
        :population="country.population"
        :region="country.region"
        :capital="country.capital?.length > 0 ? country.capital[0] : ''"
      ></CountryCard>
    </div>
  </div>
</template>

<script src="./countriesPage"></script>

<style lang="scss">
.text-very-dark-blue-input {
  .q-field__label {
    color: $very-dark-blue-light-mode-text;
  }
}
.text-white-input {
  .q-field__label {
    color: $white-dark-mode-text-and-light-mode-elements !important;
  }
}
</style>
