<template>
  <div
    class="q-mx-md"
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
      class="bg-white q-my-md input-search"
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
      borderless
      class="q-select-width only-select q-mb-md q-mt-lg"
      v-model="region"
      :options="optionsRegion"
      label="Filter By Region"
      @update:model-value="getByRegion(region)"
      :class="{
        'text-very-dark-blue-input': !darkMode,
        'text-white-input': darkMode,
      }"
    />

    <div v-for="(country, idx) in countryList" :key="idx">
      <CountryCard
        :dark-mode="darkMode"
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
.q-menu {
  background-color: red;
}
.q-select-width {
  width: 200px !important;
}
.only-select {
  .q-field__label {
    margin-left: 20px;
  }
}
.q-field__control-container {
  border-radius: 4px 0 0 4px;
}
.q-field__append {
  border-radius: 0 4px 4px 0;
}

.text-very-dark-blue-input {
  .q-field__label {
    color: $very-dark-blue-light-mode-text;
  }
  .q-select__dialog {
    background-color: $dark-blue-mode-elements !important;
    color: $white-dark-mode-text-and-light-mode-elements !important;
  }

  .q-field__control-container {
    background-color: $very-light-gray-light-mode-background !important;
  }
  .q-field__append {
    background-color: $very-light-gray-light-mode-background !important;
  }
}

.text-white-input {
  .q-field__control-container {
    background-color: $dark-blue-mode-elements !important;
  }
  .q-field__append {
    background-color: $dark-blue-mode-elements !important;
    color: $white-dark-mode-text-and-light-mode-elements;
  }
  .q-field__label {
    color: $white-dark-mode-text-and-light-mode-elements !important;
  }
  .q-select__dialog {
    border: 1px solid red !important;
    background-color: $very-light-gray-light-mode-background !important;
    color: $very-dark-blue-light-mode-text !important;
  }
}
</style>
