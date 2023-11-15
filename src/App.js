import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Search } from "./components/Search";
import Babies from "./pages/Babies";
import Home from "./pages/Home";
import Men from "./pages/Men";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Women from "./pages/Women";
import Editor from "./pages/Editor";
import { Routes, Route, Navigate } from "react-router-dom";
import { Cart } from "./components/Cart";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Cart />

      <Routes>
        <Route path="/" element={<Navigate to={"/men"} />} />
        <Route path="/" element={<Home />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="babies" element={<Babies />} />
        </Route>
        <Route path="/security" element={<Privacy />} />
        <Route path="/editor/:slug" element={<Editor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
