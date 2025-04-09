import Head from 'next/head';
import Link from 'next/link';

export default function Posts() {
  return (
    <div>
      <Head>
        <title>Blog Posts | Software Elements</title>
        <meta name="description" content="All blog posts by Manikanta Gopi" />
      </Head>

      <main>
        <h1>All Blog Posts</h1>
        
        <div>
          <div>
            <h2>
              <Link href="/posts/scalable-systems">
                Scalable Systems
              </Link>
            </h2>
            
            <div>
              <time>March 4, 2024</time>
            </div>
            
            <p>Scalability is a crucial aspect of any system. As the user base grows, the system should be able to handle the increased load without compromising performance...</p>
            
            <div>
              <span>#scalability</span>
              <span>#load balancing</span>
              <span>#horizontal scaling</span>
              <span>#vertical scaling</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
