

import React, { useEffect, useState } from 'react'

const BlogFeed = () => {
  const [postMessage, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const proxyUrl = 'https://api.allorigins.win/raw?url=';
        const blogUrl = encodeURIComponent('https://life-explorer.tistory.com/rss');

        const res = await  fetch(`${proxyUrl}${blogUrl}`);

        if(!res.ok){
          throw new Error('HTTP ERROR', res.status)
        }
        const data = await res.text();

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data , 'text/xml')


        //RSS 아이템을 추출
        const items = xmlDoc.querySelectorAll('item')
        const parsedPosts = Array.from(items).map(item => ({
          title : item.querySelector('title')?.textContent || "",
          link : item.querySelector('link')?.textContent || "",
          pubDate: item.querySelector('pubDate')?.textContent || '',
        }))

        setPosts(parsedPosts);
        setLoading(false);
        
      }catch(error) {
        setError(error.message);
        setLoading(false);
        console.error('블로그 피드 로딩 실패:', error);
      }
    }

    fetchData()

  },[])

  return (
    <div>BlogFeed</div>
  )
}

export default BlogFeed