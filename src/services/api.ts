import axios from 'axios'

interface Person {
  name: string
  height: string
}

export const getSomePerson = async (personId: number) => {
  const { data } = await axios.get<Person>(`https://swapi.info/api/people/${personId}`)
  return data
}
