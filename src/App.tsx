import "@coreui/coreui/dist/css/coreui.min.css";
import "./styles/index.scss";

import { Header } from "@components/Header";
import { Progress } from "@components/Progress";
import { Footer } from "@components/Footer";
import { Content } from "@components/Content";

function App() {
  return (
    <>
      <div className="wrap">
        <div className="main">
          <Header />
          <Progress />
          <Content />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
