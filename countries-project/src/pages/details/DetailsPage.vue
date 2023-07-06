<template>
  <div
    :class="{
      'bg-very-dark-blue': darkMode,
      'bg-very-light-gray': !darkMode,
    }"
    class="detail-page q-px-lg"
    v-for="(detail, idx) in countryDetail"
    :key="idx"
  >
    <q-btn
      class="q-my-lg"
      :class="{
        'bg-very-light-gray': !darkMode,
        'bg-blue-mode-element': darkMode,
      }"
      @click="backHome()"
    >
      <q-icon
        name="arrow_back"
        :class="{
          'text-very-dark-blue': !darkMode,
          'text-white': darkMode,
        }"
      >
      </q-icon>

      <span
        class="q-ml-sm"
        :class="{
          'text-very-dark-blue': !darkMode,
          'text-white': darkMode,
        }"
        >Back</span
      >
    </q-btn>

    <DetailsCard
      :image="detail.flags.png"
      :name="detail.name.common"
      :native-name="detail.name.official"
      :population="detail.population"
      :region="detail.region"
      :sub-region="detail.subregion"
      :capital="detail.capital?.length > 0 ? detail.capital[0] : ''"
      :top-level-domain="detail.tld?.length > 0 ? detail.tld[0] : ''"
      :currencies="detail.currencies"
      :languages="detail.languages"
      :border-countries="borderCountriesNames"
      :dark-mode="darkMode"
    >
    </DetailsCard>
  </div>
</template>

<script src="./detailsPage"></script>

<style lang="scss"></style>
