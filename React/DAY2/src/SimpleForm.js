import React,{useState} from 'react'

export default function App() {
    let [userForm,setUserForm] = useState({
        name: "",
        email: "",
        password: "",
        gender:""
    })

    function handleSubmit(event){
        event.preventDefault();
        console.log(userForm.name);
    }

    const handleChange = async(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setUserForm({...userForm,[name]:value})
        console.log(userForm);
    }

  return (
    <>
{/*     
    <h1 className="text-9xl">Hello world!</h1>
    <h2 className="text-7xl text-red-900">Hey There</h2> */}
    <div className='max-w-md mx-auto shadow-md mt-16 rounded p-8 bg-white'>
    <form className='flex flex-col'>

    <h2 className='text-center text-xl font-bold mb-2'>Enter your details to signup</h2>

    <label>Enter your name</label>
    <input type="text" className='border border-gray-500 h-8 rounded-sm focus:outline-none focus:border-blue-600'
    value={userForm.name}
    name="name"
    onChange={handleChange}></input>

    <label>Enter your Email</label>
    <input type="Email" className='border border-gray-500 h-8 rounded-sm focus:outline-none focus:border-blue-600'
    value={userForm.email}
    name="email"
    onChange={handleChange}></input>

    <label>Enter your Password</label>
    <input type="Password" className='border border-gray-500 h-8 rounded-sm focus:outline-none focus:border-blue-600'
    value={userForm.password}
    name="password"
    onChange={handleChange}></input>

    <select
    name='gender'
    onChange={handleChange}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
    </select>

    <div>
        {userForm.name && <p>Username is : {userForm.name}</p>}
    </div>
    
    <button type="submit" onClick={handleSubmit} className='px-6 py-1 bg-blue-600 rounded-md shadow-md inline-block mt-4 text-white'>Submit</button>
    </form>
    </div>
  </>
  )
}
