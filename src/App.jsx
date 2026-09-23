import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./componets/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <HashRouter>

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

    </HashRouter>
  );
}

export default App;