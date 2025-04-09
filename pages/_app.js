import '../styles/globals.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <nav>
          <Link href="/">
            Software Elements
          </Link>
          <div>
            <Link href="/posts">
              Blog
            </Link>
            <Link href="/about">
              About Me
            </Link>
          </div>
        </nav>
      </header>
      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
