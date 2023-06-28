import {Countries} from 'src/interfaces/countries/countriesInterfaces';
import {api} from 'boot/axios';


export const getCountryByName = async (
  params:string
):Promise<Countries[]> => {
  const response = await api.get(`/name/${params}`)
  return response.data
}

export const getCountryByCode =  async (
  params: string
):Promise<Countries[]> => {
  const response = await api.get(`/alpha/${params}`)
  return response.data
}
