import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/main/Main";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
