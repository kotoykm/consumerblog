import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null);

  useEffect(() =>{
    fetch("http://localhost:3000/api/v1/articles")
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])

  return (
    <>
    <h1>Consumiendo API en ReactJs + Vite</h1>
    <section id='first'>

    {data?.map((article) => (
    <article key={article.id}>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <em>Editado por <strong>{article.author}</strong> a las {article.created_at} </em>
    </article>
    
    ))}

    </section>
    </>
  )
}

export default App
