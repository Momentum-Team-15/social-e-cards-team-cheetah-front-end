import axios from 'axios'

const handleLogout = () => {
  axios
  .post('https://ecard-web-service.onrender.com/logout/',
  {},
  { 
    headers: {
      Authorization: `Token ${token}`,
    },
  })
  .then(() => setAuth('', null))
  .catch(() => setAuth('', null))
}