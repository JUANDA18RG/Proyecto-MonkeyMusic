import Navbar from "./Navbar.jsx";
import Home from "../views/Home.jsx";

export default function Content() {
  return (
    <main className="flex-auto overflow-auto">
      <Navbar />
      <div className="px-8 py-5">
        <Home />
      </div>
    </main>
  );
}
