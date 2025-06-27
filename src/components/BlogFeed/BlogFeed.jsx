import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import './BlogFeed.scss'
import noImage from '../../assets/no_image.jpg';

const BlogFeed = () => {
  const [getImage, setGetImage] = useState('');

  // Define the fetch function
  const fetchBlogFeed = async () => {
    const proxyUrl = 'https://api.allorigins.win/raw?url=';
    const blogUrl = encodeURIComponent('https://life-explorer.tistory.com/rss');
    const response = await fetch(`${proxyUrl}${blogUrl}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, 'text/xml');
    
    const items = xmlDoc.querySelectorAll('item');
    const img = xmlDoc.querySelector('image').querySelector('url')?.textContent || "";

    // Process items into posts
    const parsedPosts = Array.from(items).map(item => {
      const descriptionContent = item.querySelector('description')?.textContent || '';
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = descriptionContent;
      
      const paragraphs = Array.from(tempDiv.querySelectorAll('p'))
        .map(p => p.textContent?.trim())
        .filter(text => text && text !== '&nbsp;');

      const firstParagraph = tempDiv.querySelector('p')?.textContent?.trim() || '';

      return {
        title: item.querySelector('title')?.textContent.replace(/&quot;/g, '') || '',
        link: item.querySelector('link')?.textContent || '',
        description: firstParagraph,
        pubDate: item.querySelector('pubDate')?.textContent || '',
      };
    });

    return { posts: parsedPosts, imageUrl: img };
  };

  // Use TanStack Query hook
  const { data, isLoading, error } = useQuery({
    queryKey: ['blogFeed'],
    queryFn: fetchBlogFeed,
    staleTime: 30 * 60 * 1000, 
    refetchOnWindowFocus: false,
  });

  // Set image URL when data is available
  useEffect(() => {
    if (data?.imageUrl) {
      setGetImage(data.imageUrl);
    }
  }, [data]);

  // Loading state
  if (isLoading) return (
    <div className="blog-feed">
      <h2>BLOG POSTING</h2>
      <div className='blog-loading-Skeleton'>
        {/* Skeleton UI */}
        {[...Array(5)].map((_, index) => (
          <div key={index}>
            <div className='skeleton-img'></div>
            <div className='skeleton-title'></div>
            <div className='skeleton-description'></div>
            <div className='skeleton-date'></div>
          </div>
        ))}
      </div>
    </div>
  );

  // Error state
  if (error) return (
    <div className="blog-feed">
      <h2>BLOG POSTING</h2>
      <section className='blog-error-container'>
        <div className='blog-error-text'>
          <h3>에고...데이터가 무거워요😭</h3>
          <p>가져오는 데 실패했어요. <br />괜찮으시면 직접 Blog에 방문해 줄 수 있을까요?</p>
        </div>
        <div className='blog-error-btn'>
          <a
            href='https://life-explorer.tistory.com/'
            target='_blank'
            rel="noopener noreferrer"
          >
            방문하기
          </a>
        </div>
      </section>
    </div>
  );

  // Success state
  const posts = data?.posts || [];

  return (
    <div className="blog-feed">
      <h2>BLOG POSTING</h2>

      <div className='scroll-container'>
        <div className="posts-container">
          {posts.map((post, index) => (
            <a href={post.link} target='_blank' rel="noopener noreferrer" key={index}>
              <article className="post-card">
                <img 
                  className="post-img"
                  src={getImage || noImage} 
                  alt="Blog 대표 이미지" 
                />
                <h4>{post.title}</h4>
                <div className="description">
                  {post.description.split('\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                <time>{new Date(post.pubDate).toLocaleDateString()}</time>
              </article>
            </a>
          ))}
        </div>
      </div>

      <a 
        className='blog-more'
        href="https://life-explorer.tistory.com/"
        target='_blank' 
        rel="noopener noreferrer"
      >
        방문하기
      </a>
    </div>
  );
};

export default BlogFeed;