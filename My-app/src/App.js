import react,{ usestate } from 'react'
function App (){
    const [result, setResult] =usestate("")
    const clickHandle =(event)=> {
    setResult(result.concat(event.target.value))
    }
    const clearDisplay =() =>{
    setResult("")
    }
    const calculate = () =>{
    setResult(eval(result).toString())
    }
    return( 
        <div classname='calc'>
            <input type="text" placeholder="0" id ="annswer" value ={result}/>
            <input type="button" value={"9"} classname="button" onClick= {clickHandle}/>
            <input type="button" value={"8"} classname="button" onClick= {clickHandle}/>
            <input type="button" value={"7"} classname="button" onClick= {clickHandle}/>
            <input type="button" value={"6"} classname="button" onClick= {clickHandle}/>
            <input type="button" value={"6"} classname="button" onClick= {clickHandle}/>
            <input type="button" value={"6"} classname="button" onClick= {clickHandle}/>
            <input type="button" value={"6"} classname="button" onClick= {clickHandle}/>
            <input type="button" value={"6"} classname="button" onClick= {clickHandle}/>
            <input type="button" value={"6"} classname="button" onClick= {clickHandle}/>
            <input type="button" value={"6"} classname="button" onClick= {clickHandle}/>
            <input type="button" value={"6"} classname="button" onClick= {clickHandle}/>
            <input type="button" value={"6"} classname="button" onClick= {clickHandle}/>
            <input type="button" value={"5"} classname="button" onClick= {clickHandle}/>
            <input type="button" value={"4"} classname="button" onClick= {clickHandle}/>
            <input type="button" value={"3"} classname="button" onClick= {clickHandle}/>
            <input type="button" value={"2"} classname="button" onClick= {clickHandle}/>
            <input type="button" value={"1"} classname="button" onClick= {clickHandle}/>
            <input type="button" value={"0"} classname="button" onClick= {clickHandle}/>
            <input type="button" value={"."} classname="button" onClick= {clickHandle}/>
            <input type="button" value={"+"} classname="button" onClick= {clickHandle}/>
            <input type="button" value={"-"} classname="button" onClick= {clickHandle}/>
            <input type="button" value={"*"} classname="button" onClick= {clickHandle}/>
            <input type="button" value={"/"} classname="button" onClick= {clickHandle}/>
            <input type="button" value={"%"} classname="button" onClick= {clickHandle}/>
            <input type="button" value={"Del"} classname="button button1" onClick= {clickHandle}/>
            <input type="button" value={"="} classname="button" onClick= {clickHandle}/>
            

        </div>
    )
}