import { useEffect, useState } from 'react';

const useBlogFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
            title: item.querySelector('title')?.textContent || '',
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

  return { posts, loading, error };
};

const BlogFeed = () => {
  const { posts, loading, error } = useBlogFeed();

  if (loading) return <div>블로그 포스트를 불러오는 중...</div>;
  if (error) return <div>에러 발생: {error}</div>;

  return (
    <div className="blog-feed">
      <h2>최근 블로그 포스트</h2>
      <div className="posts-container">
        {posts.map((post, index) => (
          <article key={index} className="post-card">
            <h3>{post.title}</h3>
            <div className="description">
              {post.description.split('\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              자세히 보기
            </a>
            <time>{new Date(post.pubDate).toLocaleDateString()}</time>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogFeed;