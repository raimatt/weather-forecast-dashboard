export default function Day(props) {
    return (
        <div className="flex flex-col rounded-md bg-white border shadow-sm hover:shadow-md transition-shadow lg:flex-row my-4 w-full">
            <div className="bg-blue-950 text-white py-3 px-4 relative rounded-t-md lg:rounded-l-md lg:rounded-tr-none text-center lg:min-w-20 lg:max-w-20 lg:min-h-75 lg:flex lg:items-center lg:justify-center">
                <h1 className="uppercase font-bold text-sm lg:text-base lg:-rotate-90 whitespace-nowrap">
                    {new Date(props.forecasts[0].dt_txt).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                    })}
                </h1>
            </div>

            <div className="flex flex-col sm:grid sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 grow divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                {props.forecasts.map((forecast, i) => (
                    <div key={i} className="flex flex-col justify-center items-center p-3 gap-1">
                        <p className="text-xl font-bold text-blue-950 mb-1">
                            {new Date(forecast.dt_txt).toLocaleTimeString('en-US', {
                                hour: 'numeric',
                                minute: '2-digit',
                                hour12: true
                            })}
                        </p>
                        <img 
                            src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} 
                            alt={forecast.weather[0].description}
                            className="w-16 h-16"
                        />
                        <p className="text-xs text-gray-700 capitalize">{forecast.weather[0].description}</p>
                        <p className="text-sm font-semibold">High: {Math.round(forecast.main.temp_max)}°</p>
                        <p className="text-sm text-gray-600">Low: {Math.round(forecast.main.temp_min)}°</p>
                        <p className="text-sm text-blue-600">{Math.round(forecast.pop * 100)}%</p>
                    </div>
                ))}
            </div>
        </div>
    )
}