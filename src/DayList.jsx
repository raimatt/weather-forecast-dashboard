import Day from './Day.jsx'

export default function DayList(props) {
    return (
        <div className="flex justify-center">
            <ul className="flex flex-col w-full max-w-[95vw]">
                {props.groupedForecasts.map((day, i) => (
                    <li className="mb-2"><Day key={i} forecasts={day} /></li>
                ))}
            </ul>
        </div>
    )
}