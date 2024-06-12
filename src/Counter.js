import { useState } from "react"

const Counter = ()=>{
    const [count,setCount]=useState(0)
    function increment(){
        setCount(count + 1)
    }
    const decrement=()=>{
      setCount(count - 1)  
    }
    return (
        <div>
            <h1>CounterApp</h1>
            
{
    count
}
<button type='button'onClick={increment}>+</button>
<button type='button'onClick={decrement}>-</button>
        </div>
    )

}
export default Counter