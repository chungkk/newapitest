import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3004/',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },

})

export const getMovie = () => {
  return instance.get('/movies')
}
export const addMovies = (data) => {
  console.log('server', data)
  return instance.post('/movies', data)
}

export const removeMovie = (id) => {
  console.log('get ID', id)
  return instance.delete(`/movies/${id}`)

}
export const editMovies = (id) => {
  console.log('get ID', id)
  return instance.put(`/movies/${id}`)

}


