export default function Card(props){
    return(
        <div className="card--container">
            <h1>Location: {props.place}</h1>
            <h1>Price: ${props.price}</h1>
            <h1>Best Time to Go: {props.timeToGo}</h1>
        </div>
    )
}