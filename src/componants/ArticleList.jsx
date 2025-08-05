import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import '../styles/ArticleList.css'
const ArticleList = () => {
    const [users,setUsers]=useState([])

    // useEffect(()=>{
    //     const url ="https://dummyjson.com/posts"
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>setUsers(data.posts))
    //     .catch((error)=>{
    //         console.error("cant upload data",error)
    //     })
    // })
    useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Fetch from API
        const response = await fetch("https://dummyjson.com/posts?limit=8");
        const data = await response.json();
        let allPosts = data.posts;

        // Fetch from localStorage
        const localArticles = JSON.parse(localStorage.getItem('articles')) || [];

        // Merge local articles at the beginning
        const combined = [...localArticles, ...allPosts];

        setUsers(combined);
      } catch (error) {
        console.error("can't upload data", error);
      }
    };

    fetchArticles();
  }, []); 

  return (
    <div  className='container'>
        <h1 className="title"> Nos Articles</h1>
        <ul className="post-list">
            {users.map(user=>(
                <li key={user.id} className="post-card">
                <strong className="post-title">{user.title}</strong>
                <p className="post-body" style={{maxHeight:"200px",overflow:'hidden'}}>{user.body}</p>
                <Link to={`/article/${user.id}`} class="myBtn btn-pulse" style={{textDecoration:'none'}}>Lire le suit</Link>

                </li>
            ))}
        </ul>
      
    </div>
  )
}

export default ArticleList
