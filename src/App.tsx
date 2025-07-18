import "@coreui/coreui/dist/css/coreui.min.css";
import "./styles/index.scss";

import { Header } from "./components/Header";
import { Progress } from "./components/Progress";
import { Scale } from "./components/Scale";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div className="wrap">
        <div className="main">
          <Header />
          <Progress />
          <div className="content">
            {new Array(10).fill(0).map((_, index) => (
              <Scale key={index} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
