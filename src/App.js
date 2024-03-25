import { Route, Routes, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrency,
  CryptoDetails,
  News,
} from "./components";
import "../src/App.css";
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/cryptocurrency" element={<Cryptocurrency />} />
            <Route path="/cryptoDetails/:coinId" element={<CryptoDetails />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            CryptoCash <br />
            All Right Reserved 2024
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/Exchanges">Exchanges</Link>
            <Link to="/News">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
