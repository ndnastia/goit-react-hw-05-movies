import { lazy, Suspense } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

const Home = lazy(() => import('pages/Home'));

export const App = () => {
return(
  <div>
    <header>
    <nav>
      <NavLink to='/'>
        Home
      </NavLink>
    </nav>
  </header>
  
  

  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Suspense>
  </div>
)
};
