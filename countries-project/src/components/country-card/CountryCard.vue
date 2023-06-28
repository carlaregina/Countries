<template>

  <div class="column" @click="getDetails()">
    <img :src="props.image">

    <div class="q-pa-md">
      <h3>{{ props.name }}</h3>
      <p>Population: {{ props.population }}</p>
      <p>Region: {{ props.region}}</p>
  <p>Capital:{{props.capital}}</p>

    </div>
  </div>



</template>


<script src="./countryCard">

</script>
<style lang="scss">

</style>
