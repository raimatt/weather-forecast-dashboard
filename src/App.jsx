import { useState } from 'react'
import CityInput from './CityInput'

export default function App() {
    const [ weatherData, setWeatherData ] = useState(null)

    return (
        <div>
            <h1 className="p-4 font-bold text-xl">Weather App</h1>
            <div>
                <CityInput getWeatherData={(weather) => {
                    setWeatherData(weather)
                }}/>
            </div>
        </div>
    )
}
