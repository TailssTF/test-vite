import { Header } from "./components/Header";
import { Progress } from "./components/Progress";
import { Scale } from "./components/Scale";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./styles/index.scss";

function App() {
  return (
    <>
      <div className="wrap">
        <Header />
        <Progress />
        <div className="content">
          {new Array(20).fill(0).map((_, index) => (
            <Scale key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
