<template>
  <div
    class="q-mt-lg detail-desktop"
    :class="{
      'text-very-dark-blue': !props.darkMode,
      'text-white': props.darkMode,
    }"
  >
    <img class="img-desktop" :src="props.image" />

    <div>
      <p class="font-size-detail w800 q-my-lg">{{ props.name }}</p>

      <div class="details-country-desktop">
        <div class="font-size-home w600 q-mb-xl q-mr-md">
          <p>
            Native Name: <span class="w300">{{ props.nativeName }}</span>
          </p>
          <p>
            Population: <span class="w300">{{ props.population }}</span>
          </p>
          <p>
            Region: <span class="w300">{{ props.region }}</span>
          </p>
          <p>
            Sub Region: <span class="w300">{{ props.subRegion }}</span>
          </p>
          <p>
            Capital: <span class="w300">{{ props.capital }}</span>
          </p>
        </div>

        <div class="font-size-home w600">
          <p>
            Top Level Domain:
            <span class="w300">{{ props.topLevelDomain }}</span>
          </p>

          <div v-for="(currency, idx) of props.currencies" :key="idx">
            <p>
              Curreny: <span class="w300">{{ currency.name }}</span>
            </p>
          </div>

          <div class="flex row q-mb-lg">
            <p class="q-mr-sm">Languages:</p>
            <div v-for="(language, idx) in languageArray" :key="idx">
              <span class="q-mr-sm w300">
                {{ language
                }}<span v-if="idx < languageArray.length - 1">, </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="border-countries-desktop">
        <p class="font-size-detail w600 q-mr-md">Border Countries:</p>
        <div class="q-gutter-md row">
          <div
            class="q-px-lg q-py-xs q-mb-xs border-radius flex items-center justify-center"
            :class="{
              'bg-very-light-gray border-very-dark-blue': !darkMode,
              'bg-blue-mode-element': darkMode,
            }"
            v-for="(borderCountry, idx) of props.borderCountries"
            :key="idx"
          >
            <span>{{ borderCountry }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./detailsCard"></script>

<style lang="scss">
.border-radius {
  border-radius: 2px;
}
.border-very-dark-blue {
  box-shadow: 1px 1px 1px 1px #d5d5d5;
}
@media screen and (min-width: 992px) {
  .detail-desktop {
    display: flex;
    flex-direction: row;
  }
  .img-desktop {
    height: 200px;
    margin-right: 80px;
  }
  .details-country-desktop {
    display: flex;
    flex-direction: row;
  }
  .border-countries-desktop {
    display: flex;
    flex-direction: row;
  }
}
</style>
