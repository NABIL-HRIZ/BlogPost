import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 

const ArticleDetail = () => {
  const { id } = useParams(); 
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        const apiPosts = data.posts;

        const localArticles = JSON.parse(localStorage.getItem('articles')) || [];

        const combined = [...localArticles, ...apiPosts];

        // Find the article by id (convert id to number)
        const foundArticle = combined.find((item) => item.id === parseInt(id));

        setArticle(foundArticle);
      } catch (error) {
        console.error("can't upload data", error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div className="container">Article introuvable...</div>;
  }

  return (
   <div className="container">
  <h1 className="title">Détails de l'article</h1>

  <div className="post-card">
    <strong className="post-title">Titre : {article.title}</strong>
    <p className="post-body"><strong>Description :</strong> {article.body}</p>

   
    <div style={{ marginTop: '10px' }}>
      <strong>Tags:</strong>{" "}
      
        {article.tags.map((tag, index) => (
          <span key={index} style={{
            padding: '4px 8px',
            marginRight: '6px',
            backgroundColor: '#e0e0e0',
            borderRadius: '5px',
            fontSize: '15px'
          }}>
            {tag}
          </span>
        ))}
    </div>

   
      <div style={{ marginTop: '10px' }}>
        <p><strong>👍 Likes:</strong> {article.reactions.likes}</p>
        <p><strong>👎 Dislikes:</strong> {article.reactions.dislikes}</p>
      </div>
      <p><strong>👁️ Vues:</strong> {article.views}</p>
  </div>
</div>

  );
};

export default ArticleDetail;
