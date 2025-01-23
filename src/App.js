import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/main/Main";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}

export default App;
