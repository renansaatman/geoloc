import { useEffect, useState } from 'react'

export function App() {
  const [lat, setLat] = useState('')
  const [long, setLong] = useState('')


  useEffect(() => {
    navigator.geolocation.getCurrentPosition((posicao) => {
      setLat(posicao.coords.latitude.toString())
      setLong(posicao.coords.longitude.toString())
    })
  }, [])

  return (
    <div>
      <h2>lat {lat}</h2>
      <h2>long {long}</h2>
    </div>
  )
}