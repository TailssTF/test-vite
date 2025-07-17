import { Header } from "./components/Header";
import { Scale } from "./components/Scale";
import "./styles/index.scss";

function App() {
  return (
    <>
      <div className="wrap">
        <Header />
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
