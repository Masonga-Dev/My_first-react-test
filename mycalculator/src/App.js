import React, { useState } from 'react';

function App() {
    const [result, setResult] = useState("");

    const clickHandle = (event) => {
        setResult(result.concat(event.target.value));
    };

    const clearDisplay = () => {
        setResult("");
    };

    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult("Error");
        }
    };

    return (
        <div className='calc'>
            <input type="text" placeholder="0" id="answer" value={result} readOnly />
            <input type="button" value={"9"} className="button" onClick={clickHandle} />
            <input type="button" value={"8"} className="button" onClick={clickHandle} />
            <input type="button" value={"7"} className="button" onClick={clickHandle} />
            <input type="button" value={"6"} className="button" onClick={clickHandle} />
            <input type="button" value={"5"} className="button" onClick={clickHandle} />
            <input type="button" value={"4"} className="button" onClick={clickHandle} />
            <input type="button" value={"3"} className="button" onClick={clickHandle} />
            <input type="button" value={"2"} className="button" onClick={clickHandle} />
            <input type="button" value={"1"} className="button" onClick={clickHandle} />
            <input type="button" value={"0"} className="button" onClick={clickHandle} />
            <input type="button" value={"."} className="button" onClick={clickHandle} />
            <input type="button" value={"+"} className="button" onClick={clickHandle} />
            <input type="button" value={"-"} className="button" onClick={clickHandle} />
            <input type="button" value={"*"} className="button" onClick={clickHandle} />
            <input type="button" value={"/"} className="button" onClick={clickHandle} />
            <input type="button" value={"%"} className="button" onClick={clickHandle} />
            <input type="button" value={"Del"} className="button button1" onClick={clearDisplay} />
            <input type="button" value={"="} className="button" onClick={calculate} />
        </div>
    );
}

export default App;
