import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <main>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/users"
            element={<Users />}
          />

          <Route
            path="/users/:id"
            element={<UserDetails />}
          />

        </Routes>

      </main>

    </BrowserRouter>
  );
}

export default App;