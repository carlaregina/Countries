import {api} from 'src/boot/axios';
import {Countries} from 'src/interfaces/countries/countriesInterfaces';

export const allCountries = async ():Promise<Countries[]> => {
  const response = await api.get('/all')

  return response.data;
}

export const getCountriesByRegion = async (
  params: string
): Promise<Countries[]> => {
  const response = await api.get(`/region/${params}`);

  return response.data;
}

export const getCountryByName = async (
  params:string
):Promise<Countries[]> => {
  const response = await api.get(`/name/${params}`)
  return response.data
}
