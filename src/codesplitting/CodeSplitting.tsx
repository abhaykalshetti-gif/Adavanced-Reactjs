import React, { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";

// Code Splitting (Lazy Import)
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));

const CodeSplitting: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-center gap-6 p-4 bg-gray-100 shadow-md">
        <Link to="/codesplitting/home" className="text-blue-600 hover:underline">
          Home
        </Link>
        <Link to="/codesplitting/about" className="text-green-600 hover:underline">
          About
        </Link>
        <Link to="/codesplitting/contact" className="text-purple-600 hover:underline">
          Contact
        </Link>
      </nav>
   <h1>Code Splitting Implementation</h1>
      {/* Suspense Fallback Loader */}
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-64 text-xl font-semibold text-gray-600">
            Loading Page...
          </div>
        }
      >
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Suspense>
   </>
  );
};

export default CodeSplitting;
