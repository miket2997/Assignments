export default function BlogPost(props){
    return(
        <div className="post--container">
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
            <div className="author--date">
                <p>Posted by <span className="writer">{props.author}</span> on {props.date}</p>
            </div>
            
        </div>
    )
}