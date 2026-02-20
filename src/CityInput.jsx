import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'

export default function CityInput(props) {
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY
    const [ city, setCity ] = useState("")

    const mutation = useMutation({
        mutationFn: async (coordinates) => {
            const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}&units=imperial`)
            return res.json()
        },
        onSuccess: (data) => {
            props.getWeatherData(data)
        }
    })

    return (
        <div>
            <form className="flex flex-row gap-3 p-4 bg-white rounded-lg shadow-md" onSubmit={async (e) => {
                e.preventDefault()
                
                const [ cityName, state, country ] = city.split(',')
                const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${state},${country}&limit=1&appid=${API_KEY}`)
                const data = await res.json()

                mutation.mutate({ lat: data[0].lat, lon: data[0].lon })
            }}>
                <input 
                    className="border-2 border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-blue-950 transition-colors" 
                    placeholder="City, State, Country (e.g., Seattle,WA,US)" 
                    value={city} 
                    onChange={e => setCity(e.target.value)}
                    required
                />
                <button 
                    type="submit" 
                    className="bg-blue-950 text-white px-4 py-2.5 rounded-md text-sm font-semibold hover:bg-blue-900 transition-colors cursor-pointer"
                >
                    Get Weather
                </button>
            </form>
        </div>
    )
}