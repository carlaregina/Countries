<template>
  <div class="q-ml-sm" v-for="(detail, idx) in countryDetail" :key="idx">


  <DetailsCard
    :image="detail.flags.png"
    :name="detail.name.common"
    :native-name="detail.name.official"
    :population="detail.population"
    :region="detail.region"
    :sub-region="detail.subregion"
    :capital="detail.capital?.length>0 ? detail.capital[0] : ''"
    :top-level-domain="detail.tld?.length>0 ? detail.tld[0] : ''"
    :currencies="detail.currencies"
    :languages="detail.languages"
    :border-countries="borderCountriesNames"
  >
  </DetailsCard>


  </div>
</template>

<script src="./detailsPage">

</script>

<style lang="scss">

</style>
