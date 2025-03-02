import { useEffect, useRef, useState } from 'react';
import './BlogFeed.scss'
import noImage from '../../assets/no_image.jpg';

const BlogFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  const [getImage, setGetImage] = useState('')

  useEffect(() => {
    const fetchBlogFeed = async () => {
      try {
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
        const img =  xmlDoc.querySelector('image').querySelector('url')?.textContent ||"";

        setGetImage(img)

        const parsedPosts = Array.from(items).map(item => {
          // description 내용을 임시 div에 파싱
          const descriptionContent = item.querySelector('description')?.textContent || '';
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = descriptionContent;
          
          // p 태그들의 텍스트만 추출(여러개)
          const paragraphs = Array.from(tempDiv.querySelectorAll('p'))
            .map(p => p.textContent?.trim())
            .filter(text => text && text !== '&nbsp;'); // 빈 텍스트와 &nbsp; 제거

            const firstParagraph = tempDiv.querySelector('p')?.textContent?.trim() || '';

          return {
            title: item.querySelector('title')?.textContent.replace(/&quot;/g, '') || '',
            link: item.querySelector('link')?.textContent || '',
            // description: paragraphs.join('\n'), // 추출된 텍스트들을 줄바꿈으로 연결
            description: firstParagraph,
            pubDate: item.querySelector('pubDate')?.textContent || '',
          };
        });

        setPosts(parsedPosts);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error('블로그 피드 로딩 실패:', err);
      }
    };

    fetchBlogFeed();
  }, []);


  const cardRef = useRef(null);
  const [ style, setStyle ] = useState({
    transform : 'rotateX(0) rotateY(0)',
    transition : ''
  });

  const handleMouseMove = (e) =>{
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const multiplier = 6;

     // 마우스 위치에 따른 회전 각도 계산
    setStyle({
      transform: `rotateX(${-y / multiplier}deg) rotateY(${x / multiplier}deg)`,
      transition: 'all 500ms ease'
    });
  }

  const handleMouseLeave = () => {
    // 마우스가 떠나면 원래 상태로 부드럽게 돌아가기
    setStyle({
      transform: 'rotateX(0) rotateY(0)',
      transition: 'all 1.3s ease'
    });
  };

  if (loading) return (
    <div className="blog-feed">
      <h2>BLOG POSTING</h2>
      <div className='blog-loading-Skeleton' >
        {/* Skeleton UI) */}
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
  )
  if (error) return (
    <div className="blog-feed">
      <h2>BLOG POSTING</h2>
      <section className='blog-error-container' >
        <div  className='blog-error-text'>
          <h3>에고...데이터가 무거워요😭</h3>
          <p>가져오는 데 실패했어요. <br />괜찮으면 직접 Blog에 방문해 줄 수 있을까요?</p>
        </div>

      <div
        className='blog-error-btn'
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
      >
        <a
          href='https://life-explorer.tistory.com/'
          target='_blacnk'
          >
          방문하기
        </a>

      </div>

      </section>
    </div>
    )
    ;

  return (
    <div className="blog-feed">
      <h2>BLOG POSTING</h2>

      <div className='scroll-container'>
        <div className="posts-container">
          {posts.map((post, index) => (
            <a href={post.link} target='_blank' rel="noopener noreferrer" key={index} >
              <article  className="post-card">
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
      target='_blank' rel="noopener noreferrer"
      >
        방문하기
      </a>

    </div>
  );
};

export default BlogFeed;