
<template>
  <div class="q-mt-lg"
       :class="{
        'text-very-dark-blue': !props.darkMode,
        'text-white': props.darkMode
        }"
  >
    <img :src="props.image">

    <p >{{props.name}}</p>
    <P>Native Name: {{props.nativeName}}</P>
    <p>Population: {{props.population}}</p>
    <p>Region:{{props.region}}</p>
    <p>Sub Region:{{props.subRegion}}</p>
    <p>Capital:{{props.capital}}</p>

    <p>Top Level Domain: {{props.topLevelDomain}}</p>

    <div v-for="(currency, idx) of props.currencies" :key="idx">
    <span>Curreny:  {{currency.name}}</span>
    </div>

    <div class="flex row">
      <p class="q-mr-sm">Languages:  </p>
      <div  v-for="(language, idx) in languageArray" :key="idx">

        <span class="q-mr-sm"> {{language}}<span v-if="idx < languageArray.length - 1">, </span> </span>
      </div>
    </div>


    <p>Border Countries: </p>
    <div v-for="(borderCountry, idx) of props.borderCountries" :key="idx" >
      <span>{{borderCountry}}</span>
    </div>
  </div>

</template>

<script src="./detailsCard">

</script>

<style  lang="scss">

</style>
