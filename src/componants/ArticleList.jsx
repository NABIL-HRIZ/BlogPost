import React, { useEffect, useState } from 'react'
import '../styles/ArticleList.css'
const ArticleList = () => {
    const [users,setUsers]=useState([])

    useEffect(()=>{
        const url ="https://dummyjson.com/posts?limit=8"
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUsers(data.posts))
        .catch((error)=>{
            console.error("cant upload data",error)
        })
    })
  return (
    <div  className='container'>
        <h1 className="title">📚 Posts Infos</h1>
        <ul className="post-list">
            {users.map(user=>(
                <li key={user.id} className="post-card">
                <strong className="post-title">{user.title}</strong>
                <p className="post-body">{user.body.split(' ').slice(0,20).join(' ')}</p>
                <button class="myBtn btn-pulse">Lire le suit </button>

                </li>
            ))}
        </ul>
      
    </div>
  )
}

export default ArticleList
