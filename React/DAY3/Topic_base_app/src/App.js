import React, {useEffect,useState} from 'react'

export default function App() {
  //useEffect
  // Allows you to perform sideEffects in your components 
  let [count,setCount] = useState(0);
  let [name,setName] = useState('John');

  // This is without ant dependency
  // will run when the component is mounted and also when the component is updated

  // useEffect(()=> {
  //   console.log("Hey!The Component is now loaded");
  //   setCount(5);
  // })

  

  // This is with empty dependency array
  // will run when the component is mounted or rendered

  useEffect(()=>{
    // console.log("Hey!I will only run once")
    
    const interval = setInterval(()=> {
      setCount(count+1)
    },1000)
    // componentWillUnmount - 
    // cleanUp
    return ()=> clearInterval(interval);
  })
  
  // This will run on component load and also when the name is changed

  // useEffect(()=> {
  //   console.log("Hey! I will run on component mount and also when the name changes")
  //   doSomething("Ricky")
  // },[name])

  let doSomething = (updateName)=>{
    console.log("This willconsole log name",updateName)
  }
  return (
    <div className='text-7xl'>
        {count}
        <p>Hey my name is : {name}</p>
        <button onClick={()=> {
          setName("Max");
          setCount(count + 1)
        }}>Change Name</button>
    </div>
  )
}
