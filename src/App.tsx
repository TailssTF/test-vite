import { Scale } from "./components/Scale";
import "./styles/index.scss";

function App() {
  return (
    <>
      <div className="wrap">
        <div className="content">
          {new Array(10).fill(0).map((_, index) => (
            <Scale key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
