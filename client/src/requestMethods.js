import axios from 'axios'

const BASE_URL = 'http://localhost:8080/api/'
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDdmYzBkZjA1YjM3MDkxOTliYzUwNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTA5OTE1NiwiZXhwIjoxNjc1MTg1NTU2fQ.xc_K2xDvNbe7OU2SWlLiIqDKUJfv0qQGvVJbmyDdnk0'

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
})
