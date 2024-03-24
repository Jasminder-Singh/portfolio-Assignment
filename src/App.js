import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeDark from './pages/dark/Home';
import Blogs from './pages/dark/blogs';
import Works from './pages/dark/works';
import SingleProject from './pages/dark/single-project';
import HomeLight from './pages/light/Home';
import LightBlogs from './pages/light/blogs';
import LightSingleBlog from './pages/light/single-blog';
import LightSingleProject from './pages/light/single-project';
import LightWorks from './pages/light/works';
import SingleBlog from './pages/dark/single-blog';
import { useEffect, useState } from 'react';
function App() {
  // Fetching data from api
  const [userData, setUserData] = useState(null);
  async function fetchData() {
    try {
      const response = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae", {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        }
      });
      const data = await response.json()
      setUserData(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (!userData)
      fetchData();


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dark" element={<HomeDark data={userData} />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/works" element={<Works allProjects={userData?.user?.projects} />} />
        <Route path="/single-project/:id" element={<SingleProject projects={userData?.user?.projects} />} />
        <Route path="/single-blog" element={<SingleBlog />} />
        <Route path="/light-m" element={<HomeLight data={userData} />} />
        <Route path="/l-blogs" element={<LightBlogs />} />
        <Route path="/l-single-blog" element={<LightSingleBlog />} />
        <Route path="/l-single-project/:id" element={<LightSingleProject projects={userData?.user?.projects} />} />
        <Route path="/l-works" element={<LightWorks allProjects={userData?.user?.projects} />} />
      </Routes>
    </Router>
  );
}

export default App;
