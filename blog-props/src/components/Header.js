import Navbar from "./Navbar"

export default function Header(){
    return(
        <div className="header--container">
            <Navbar />
            <div className="headers">
                <h1 className="clean--blog">Clean Blog</h1>
                <h3 className="blog--theme">A Blog Theme by Start Bootstrap</h3>
            </div>
        </div>
    )
}