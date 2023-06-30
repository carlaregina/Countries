import { defineStore } from 'pinia';

export const useCoutryStore = defineStore('country', {
  state: () => ({
    country: '',
    dark: false,
  }),

});
