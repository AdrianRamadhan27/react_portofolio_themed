import { useContext, useEffect } from 'react'
import { ThemeContext } from './context/ThemeContext';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

export default function Component() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const root = document.getElementById('root');

    if (theme === 'light') {
      root.classList.add('light-mode');
      root.classList.remove('dark-mode');
    } else {
      root.classList.add('dark-mode');
      root.classList.remove('light-mode');
    }
  }, [theme]);

  const handleChangeTheme = () => {
    toggleTheme();
  };

  return (
    <Router>
      <div className="App">
        <nav className="topnav">
          <div>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>

              <Link to="/contact">
                <li>Contact</li>
              </Link>
              <Link to="/project">
                <li>Projects</li>
              </Link>
              <li>
              <button onClick={handleChangeTheme}>
              ☾/𖤓
            </button>
              </li>
            </ul>
            
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />

          <Route
            path="/project/*"
            element={
              <Projects />
            }>
          </Route>

          <Route
            path="/project/details/:projectId/*"
            element={
              <ProjectDetail />
            }></Route>
          {/* Tambahkan rute login jika perlu */}
        </Routes>
      </div>
    </Router>
  )
}
