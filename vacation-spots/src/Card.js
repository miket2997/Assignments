export default function Card(props){
    return(
        <div className="card--container" style={{backgroundColor: (props.timeToGo === "Fall") ? "lightgray" : 
        (props.timeToGo === "Summer") ? "orange" : (props.timeToGo === "Spring") ? "red" : "lightblue" }}>
            <h1>Location: {props.place}</h1>
            <h1>Price: {(props.price < 500) ? "$" : (props.price < 1000 && props.price > 500) ? "$$" : "$$$"}{props.price}</h1>
            <h1>Best Time to Go: {props.timeToGo}</h1>
        </div>
    )
}