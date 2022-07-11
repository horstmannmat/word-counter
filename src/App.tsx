import React, {useState} from 'react';
import './App.css';




function App() {
  const [wordCounter,setWordCounter] = useState<number>(0);
  const [charCounter,setCharCounter] = useState<number>(0);
  const [textMessage,setTextMessage] = useState<string>("");
  const CountText = () => {
    setWordCounter(textMessage.split(" ").length) 
    setCharCounter(textMessage.replace(/\s/g, "").length)
  }
  function CountAndClean() {
    CountText();
    setTextMessage("");
  }
  function ChangeText(e: React.ChangeEvent<HTMLTextAreaElement>) {
    CountText();
    setTextMessage(e.target.value);
  }
  return (
    <div className="App">
      <header>
        <p>
         Word counter
        </p>
      </header>
      <body>
        <form>
          <textarea onChange={ChangeText} value={textMessage} />
        </form>
        <button onClick={CountAndClean}>Count</button>
        <p>You Have {wordCounter} words and {charCounter} characteres</p>
      </body>
    </div>
  );
}

export default App;
