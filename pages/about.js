import Head from 'next/head';

export default function About() {
  return (
    <div>
      <Head>
        <title>About Me | Software Elements</title>
        <meta name="description" content="About Manikanta Gopi - Software Engineer" />
      </Head>

      <main>
        <div>
          <h1>Manikanta Gopi</h1>
          <h3>Techie 💻</h3>
        </div>
        
        <div>
          <h3>🦾 Skills:</h3>
          
          <h4>Frameworks:</h4>
          <div>
            NestJS, Socket.IO, Ruby on Rails, Flutter, Terraform
          </div>
          
          <h4>Databases:</h4>
          <div>
            MongoDB, MySql, Redis
          </div>
          
          <h4>System Design Practices and Principles:</h4>
          <div>
            Event Driven Systems, Micro services, RESTful APIs, WebSockets, Pub/Sub Systems
          </div>
          
          <h4>Tools:</h4>
          <div>
            Docker, Kubernetes, Git, CI/CD, TDD, BDD, GitHub, GCP, Azure
          </div>
          
          <h4>Languages:</h4>
          <div>
            Dart, JavaScript, TypeScript, Ruby, Python
          </div>
        </div>
      </main>
    </div>
  );
}
