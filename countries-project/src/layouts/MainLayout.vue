<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar
        :class="{
          'bg-very-light-gray': !darkMode,
          'bg-blue-mode-element': darkMode,
        }"
        class="header-desktop q-px-md"
      >
        <q-toolbar-title
          :class="{
            'text-very-dark-blue': !darkMode,
            'text-white': darkMode,
          }"
          class="q-my-lg font-size-home w800"
        >
          Where in the world ?</q-toolbar-title
        >

        <div @click="changeDarkMode()" class="cursor-pointer">
          <q-icon
            :name="!darkMode ? 'dark_mode' : 'light_mode'"
            :class="{
              'text-very-dark-blue': !darkMode,
              'text-white': darkMode,
            }"
          >
          </q-icon>
          <span
            class="q-ml-sm w600"
            :class="{
              'text-very-dark-blue': !darkMode,
              'text-white': darkMode,
            }"
          >
            {{ !darkMode ? 'Dark' : 'Light' }} Mode</span
          >
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script src="./mainLayout"></script>

<style lang="scss">
@media screen and (min-width: 992px) {
  .header-desktop {
    padding: 0 50px 0 50px !important;
  }
}
</style>
