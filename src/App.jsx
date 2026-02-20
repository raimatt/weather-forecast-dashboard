import { useState } from 'react'
import CityInput from './CityInput'
import DayList from './DayList'

export default function App() {
    const [ weatherData, setWeatherData ] = useState(null)

    let groupedForecasts = []

    if (weatherData) {
        const forecasts = weatherData.list
        const groupedObject = {}

        for (let i = 0; i < forecasts.length; i++) {
            const forecast = forecasts[i]

            const date = forecast.dt_txt.split(" ")[0]

            if(!groupedObject[date]) {
                groupedObject[date] = []
            }
            
            groupedObject[date].push(forecast)
        }
        groupedForecasts = Object.values(groupedObject)
    }

    console.log(groupedForecasts)

    return (
    <div className="flex flex-col items-center mt-3 lg:mt-6">
        <div className="w-full max-w-[95vw]">
            <div className="flex justify-between items-center mb-4 lg:mb-5 pb-3 border-b-2 border-red-600">
                <h1 className="text-2xl lg:text-3xl font-bold" style={{ color: 'rgb(0, 45, 98)' }}>Weather App</h1>
                <CityInput getWeatherData={(weather) => {
                    setWeatherData(weather)
                }}/>
            </div>
            <DayList groupedForecasts={groupedForecasts} />
        </div>
    </div>
)
}
