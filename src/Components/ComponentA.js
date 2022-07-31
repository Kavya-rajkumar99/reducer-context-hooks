import { useContext } from "react"
import { CountContext } from "../App"
export function ComponentA(){
    const [count,dispatch] = useContext(CountContext)
    return(
        <div>
        <h3>Component A Count - {count} </h3>
        <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
        <button onClick={()=>dispatch({type:'increment5',payload:5})}>Increment5</button>
        <button onClick={()=>dispatch({type:'decrement5',payload:5})}>Decrement5</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}