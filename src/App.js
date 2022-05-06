import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";

import AppHeader from "./components/common/header";
import AppHome from "./components/views/home";

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content></Content>
      <AppHome />
    </Layout>
  );
}

export default App;
