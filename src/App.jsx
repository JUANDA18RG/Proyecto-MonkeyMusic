import Sider from "./Components/sider.jsx";
import ButtomBar from "./Components/ButtomBar.jsx";
import Content from "./Components/Content.jsx";
import Singin from "./Components/Login/singin.jsx";
import Portada from "./Components/Login/portada.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Portada />} />
          <Route path="/Singin" element={<Singin />} />
          <Route path="/Content" element={<Content />} />
          <Route
            path="/app"
            element={
              <>
                <div className="wrapper">
                  <Sider />
                  <Content />
                </div>
                <ButtomBar />
              </>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
