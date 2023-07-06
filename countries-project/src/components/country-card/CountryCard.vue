<template>
  <div
    class="column card-country q-mb-xl"
    @click="getDetails()"
    :class="{
      'bg-card-white': !darkMode,
      'bg-blue-mode-element text-white-input': darkMode,
    }"
  >
    <img :src="props.image" />
    <div
      class="q-pa-md font-size-home w600"
      :class="{
        'text-very-dark-blue': !props.darkMode,
        'text-white': props.darkMode,
      }"
    >
      <p class="font-size-detail w800 q-pb-md">{{ props.name }}</p>
      <p>
        Population: <span class="w300">{{ props.population }}</span>
      </p>
      <p>
        Region: <span class="w300">{{ props.region }}</span>
      </p>
      <p>
        Capital: <span class="w300">{{ props.capital }}</span>
      </p>
    </div>
  </div>
</template>

<script src="./countryCard"></script>
<style lang="scss">
.card-country {
  cursor: pointer;
  p {
    margin-bottom: 2px;
  }
  width: 270px;
  border-radius: 4px;
  flex-wrap: unset;
  img {
    border-radius: 4px 4px 0 0;
    height: 150px;
  }
}
.bg-card-white {
  background-color: white;
  box-shadow: 1px solid #d5d5d5;
}
</style>
