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
        Hi! I'm Vonne Dew — a passionate Web Developer who loves turning ideas into interactive digital experiences.
        I'm skilled in HTML, CSS, JavaScript, ReactJS, PHP, and MySQL. I enjoy building responsive and user-friendly websites that not only look great but also function smoothly.
        Whether it's creating dynamic frontends with React or connecting databases with PHP and MySQL, I thrive on solving problems and learning new things every day.
        <br/> <br/>
        I'm currently seeking opportunities to grow as a developer — whether it's through freelance projects or joining a creative development team.
        When I'm not coding, you might find me sketching, exploring design trends, or sipping coffee while brainstorming my next side project.
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
                <li><img src={AssetsImg.SQLImg} title="SQL" /></li>
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
      {/* <Link to="/projects" className="btn btn-primary">
        View My Projects
      </Link> */}
    </section>
  );
}

export default Home;