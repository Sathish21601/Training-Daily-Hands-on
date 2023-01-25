// import React from "react";
// import Mounting from "./Mounting";
// import Updating from "./Updating";
// import Unmounting from "./Unmounting";
// import Forms from "./Forms";
// import BuggyComponent from "./BuggyComponent";
// import ErrorBoundary from "./ErrorBoundary";

// export default function App() {
//   // Function logic
//   let name = "Tata Nexon";
//   return (
//     <div>
//       <Updating />
//       <Unmounting />
//       <Forms />
//       <br />
//       <ErrorBoundary>
//         <BuggyComponent />
//       </ErrorBoundary>
//     </div>
//   );
// }

import React from "react";
import { Link, Route, Routes } from "react-router-dom";
// import About from './pages/About'
// import Contact from './pages/Contact'
import Home from "./pages/Home";
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));

export default function App() {
  return (
    <div>
      <h1>React Router Lazy Loading</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <About />
            </React.Suspense>
          }
        />

        <Route
          path="contact"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Contact />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

const NoMatch = () => {
  return <p>There is nothing here !!! 404!!!</p>;
};
