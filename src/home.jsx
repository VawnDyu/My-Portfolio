import { Link } from 'react-router-dom';
import './globals.css';
import './home.css';
import { AssetsImg } from './imports.jsx';

function Home() {
  return (
    <section className="main-container">
        <div className="profile-container">
            <div className="profile">
                <img src={AssetsImg.ProfilePic} alt="My Profile" />
            </div>
            <div className="profile-content">
                <div>
                    <div>Hi, I'm</div>
                    <div>Vonne Dew</div>
                    <div className="socmed-icons">
                        <Link to="https://github.com/VawnDyu"><img src={AssetsImg.GithubImg} /></Link>
                    </div>
                </div>
            </div>
        </div>
        <section className="about-me">
        <h1>About Me</h1>
        <p>
          Hi! I'm Vonne Dew — a passionate Full Stack Web Developer with a focus on the MERN stack (MongoDB, Express, React, Node.js). I love transforming ideas into interactive digital experiences, from building responsive user interfaces to developing robust backend systems.
          <br /><br />
          While my strengths lie in web development, I'm also curious about game development, especially creating visual novel-style experiences — it’s something I’m still learning, but very excited to grow in.
          <br /><br />
          I enjoy crafting clean, user-friendly applications that work smoothly across devices. Whether it's building dynamic frontends with React or designing secure APIs with Node and Express, I thrive on solving real-world problems and constantly learning.
          <br /><br />
          I'm currently looking for opportunities to grow professionally — either through freelance work or by collaborating with a creative team. Outside of coding, I love sketching, exploring design trends, and sipping coffee while dreaming up my next passion project.
        </p>
        <div className="tech-stacks">
          <div className="frontend-stack">
            <h2>Frontend</h2>
            <ul>
              <li><img src={AssetsImg.HTMLImg} title="HTML" /></li>
              <li><img src={AssetsImg.CSSImg} title="CSS" /></li>
              <li><img src={AssetsImg.JavaScriptImg} title="JavaScript" /></li>
              <li><img src={AssetsImg.ReactImg} title="React" /></li>
              <li><img src={AssetsImg.BootstrapImg} title="Bootstrap" /></li>
            </ul>
          </div>
          <div className="backend-stack">
            <h2>Backend</h2>
            <ul>
              <li><img src={AssetsImg.PHPImg} title="PHP" /></li>
              <li><img src={AssetsImg.JavaImg} title="Java" /></li>
              <li><img src={AssetsImg.PythonImg} title="Python" /></li>
              <li><img src={AssetsImg.NodeJSImg} title="Node.js" /></li>
              <li><img src={AssetsImg.ExpressJSImg} title="Express.js" /></li>
            </ul>
          </div>
        </div>
        <div className="tech-stacks-two">
            <div className="database-stack">
              <h2>Database</h2>
              <ul>
                <li><img src={AssetsImg.MySQLImg} title="MySQL" /></li>
                <li><img src={AssetsImg.MongoDBImg} alt="MongoDB" /></li>
              </ul>
            </div>
            <div className="dev-tools-stack">
              <h2>Dev Tools/Others</h2>
              <ul>
                <li><img src={AssetsImg.GithubImg} title="Github" /></li>
                <li><img src={AssetsImg.VSCodeImg} title="VS Code" /></li>
                <li><img src={AssetsImg.NPMImg} title="NPM" /></li>
                <li><img src={AssetsImg.ViteImg} title="Vite" /></li>
              </ul>
            </div>
        </div>
      </section>
    </section>
  );
}

export default Home;