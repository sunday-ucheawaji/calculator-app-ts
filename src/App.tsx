import './App.css';
import Button from './components/Button';
import Screen from './components/Screen';
import React,{FC, useState, useEffect} from 'react'


const App: FC=():JSX.Element=> {

  const [preState, setPreState]= useState<string>("");
  const [curState, setCurState] = useState<string>("");
  const [input, setInput] = useState<string>("0");
  const [operator, setOperator]= useState<string>("");
  const [total, setTotal]= useState<boolean>(false);


  const inputNum = (event:React.MouseEvent<HTMLDivElement, MouseEvent>):void=>{
      const myEvent = event.target as HTMLElement;
      if (curState.includes(".") && myEvent.innerText === ".") return;

      if (total){
        setPreState("");
      }

      curState
        ? setCurState((pre)=> pre + myEvent.innerText):
          setCurState(myEvent.innerText);
      setTotal(false);
  };

  useEffect(()=>{
    setInput(curState);
  }, [curState]);

  useEffect(() => {
  setInput("0");
  }, []);

  const operatorType = (event:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const myEvent = event.target as HTMLElement;
    setTotal(false);
    setOperator((myEvent.innerText) );
    if (curState === "") return;
    if (preState !== "") {
      equals(event);
    } else {
      setPreState(curState);
      setCurState("");
    }
  }

  const equals = (event:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
   
    setTotal(true);
    let cal;
    switch (operator) {
      case "/":
        cal = String(parseFloat(preState) / parseFloat(curState));
        break;

      case "+":
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case "X":
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      case "-":
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      default:
        return;
    }
    setInput("");
    setPreState(cal);
    setCurState("");
  };
  
  const minusPlus = () => {
    if (curState !== '') {
      if (curState.charAt(0) === "-") {
        setCurState(curState.substring(1));
      } else {
        setCurState("-" + curState);
      }
    } else {
      if (preState.charAt(0) === "-") {
        setPreState(preState.substring(1));
      } else {
        setPreState("-" + preState);
      }
    }

  };

  const percent = () => {
    preState
      ? setCurState(String((parseFloat(curState) / 100) * parseFloat(preState)))
      : setCurState(String(parseFloat(curState) / 100));
  };

  const reset = () => {
    setPreState("");
    setCurState("");
    setInput("0");
  };

  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='screen'>
          <Screen  input={input} preState={preState}/>
        </div> 
        <Button reset={reset} percent={percent} minusPlus={minusPlus}
                equals={equals} operatorType={operatorType} inputNum={inputNum}
          />       
      </div>
      <div></div>
    </div>
  )
}

export default App
