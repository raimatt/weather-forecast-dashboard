import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'

export default function CityInput(props) {
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY
    const [ city, setCity ] = useState("")

    const mutation = useMutation({
        mutationFn: async (coordinates) => {
            const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}`)
            return res.json()
        },
        onSuccess: (data) => {
        props.getWeatherData(data)
        }
    })

    return (
        <div>
            <form className="w-2xs m-2 shadow-lg" onSubmit={async (e) => {
                e.preventDefault()
                
                const [ cityName, state, country ] = city.split(',')
                const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${state},${country}&limit=1&appid=${API_KEY}`)
                const data = await res.json()

                mutation.mutate({ lat: data[0].lat, lon: data[0].lon })
            }}>
                <div>
                    <input className="border p-2 m-2" placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
                </div>
                <button type="submit" className="bg-sky-500 p-2 m-2 cursor-pointer">Submit</button>
            </form>
        </div>
    )
}