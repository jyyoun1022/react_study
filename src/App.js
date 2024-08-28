import logo from "./logo.svg";
import "./App.css";
import Title from "./component/Title";
import Footer from "./component/Footer";
import useWindowSize from "./component/WindowSize";
import { useEffect, useRef, useState } from "react";

// presentation component

//
function App() {
  let [tmp, setTmp] = useState(14);
  const tmp2 = useRef(0);

  const [address, setAddress] = useState("");
  const sub = "ddddd";
  useEffect(() => {
    console.log("최초 발생");

    return () => {
      console.log("종료");
    };
  }, []);

  useEffect(() => {
    console.log("tmp 변경");

    return () => {
      console.log("tmp 종료");
    };
  }, [tmp]);

  const increment = () => {
    setTmp(tmp + 1);
    tmp2.current += 1;
  };

  const decrement = () => {
    setTmp(tmp - 1);
    tmp2.current -= 1;
  };

  const inputText = (e) => {
    setAddress(e.target.value);
  };

  const [param, setParam] = useState("INIT");
  const callbackTest = (param) => {
    console.log(param);
    setParam(param);
  };

  const sizeObject = useWindowSize();

  return (
    <div className="App">
      {tmp2.current}
      <Title subTitle={sub} />
      <div>
        <input onChange={inputText}></input>
      </div>
      <div>
        <button onClick={increment}>up</button>
        <button onClick={decrement}>down</button>
      </div>
      <Footer address={address} callback={callbackTest} />
      <h2>{param}</h2>
      <div>
        <h1>{sizeObject.width}</h1>
        <h1>{sizeObject.height}</h1>
      </div>
    </div>
  );
}

export default App;
