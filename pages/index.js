import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Software Elements - Manikanta Gopi</title>
        <meta name="description" content="Welcome to my blog. Here you will find a collection of my thoughts, ideas, and projects." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Software Elements
        </h1>
        
        <p>
          Welcome to my blog. Here you will find a collection of my thoughts, ideas, and projects. I hope you find something interesting here. Enjoy!
        </p>

        <h2>Recent Posts</h2>
        
        <div>
          <div>
            <h3>Scalable Systems</h3>
            <p>March 4, 2024</p>
            <p>Scalability is a crucial aspect of any system. As the user base grows, the system should be able to handle the increased load without compromising performance...</p>
            <Link href="/posts/scalable-systems">
              Read more →
            </Link>
          </div>
        </div>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Manikanta Gopi. All rights reserved.</p>
      </footer>
    </div>
  );
}
