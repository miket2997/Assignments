import './App.css';
import BlogPost from './components/BlogPost';
import Header from "./components/Header"
import data from "./data"
import Footer from "./components/Footer"


function App() {
  const posts = data.map(item => {
    return (
      <BlogPost 
        key={item.title}
        title={item.title}
        subTitle={item.subTitle}
        author={item.author}
        date={item.date}
        />
    )
  })
  return(
    <div>
      <Header />
      {posts}
      <Footer />
    </div>
  )
    
}

export default App;
