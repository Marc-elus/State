import React, {useState} from 'react';


function App () {

  const [count, setCount] = useState(4) 
  const [theme,setTheme] =useState ('black')
 
  
function decrementCount() {
  setCount (prevCount => prevCount -1 )
  
}
    function incrementCount () {
    setCount (prevCount => prevCount +1)
    setTheme(`blue`)
  }
  
 const mystyle= {
  backgroundColor: 'yellow',
  borderRadius: '3px',
 } 
 const mybutton= {
  backgroundColor:'blue',
  borderRadius: '3px',
 }

  return(
    <>
    <button style = {mystyle}
      onClick={decrementCount}>-</button>
    <span>{count}</span>
    <span>{theme}</span>
    <button style= {mybutton}
    onClick={incrementCount}>+</button>
    </>
  )
}
export default App;