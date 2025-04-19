import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import './globals.css';
import './navbar.css';

function Navbar () {
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects';

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-theme");
    }
  }, []);

  return (
      <div className="nav-header">
        <Link to="/">Vonne Dew</Link>
        <ul>
          <li><Link to={isProjectsPage ? '/' : '/projects'} className="one">{isProjectsPage ? "Home" : "Projects"}</Link></li>
          <li><Link to="#" id="toggle" onClick={toggleMode}>
                <span className="material-icons" id="theme">{isDarkMode ? "light_mode" : "dark_mode"}</span>
              </Link>
          </li>
        </ul>
      </div>
  );
}
export default Navbar;