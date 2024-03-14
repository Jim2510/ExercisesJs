export function Alertclock({ onClick, label }) {

    return (
        <div>
            <p>Click the button below to show the current time</p>
            <button onClick={onClick}>{label}</button>
        </div>
    )

}