// import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import Main from "./Main";
// function App() {
//   let companyName = "ABC Inc..";
//   let year = 1990;
//   let founder = "John Doe";
//   let car = {
//     brand: "Tata",
//     name: "Nexon",
//     model: "2021",
//     color: "Red",
//   };

//   let colors = ["red", "blue", "green", "orange", "pink", "yellow", "black"];

//   let users = [
//     {
//       id: 1,
//       first_name: "Carine",
//       last_name: "Columbine",
//       email: "ccolumbine0@dagondesign.com",
//       gender: "Female",
//       ip_address: "54.100.22.86",
//     },
//     {
//       id: 2,
//       first_name: "Natalya",
//       last_name: "Hartop",
//       email: "nhartop1@europa.eu",
//       gender: "Female",
//       ip_address: "218.103.78.94",
//     },
//     {
//       id: 3,
//       first_name: "Keen",
//       last_name: "Fudge",
//       email: "kfudge2@altervista.org",
//       gender: "Male",
//       ip_address: "197.81.64.102",
//     },
//     {
//       id: 4,
//       first_name: "Kirsten",
//       last_name: "Denis",
//       email: "kdenis3@acquirethisname.com",
//       gender: "Female",
//       ip_address: "46.225.174.121",
//     },
//     {
//       id: 5,
//       first_name: "Shell",
//       last_name: "Warne",
//       email: "swarne4@techcrunch.com",
//       gender: "Female",
//       ip_address: "47.152.241.70",
//     },
//     {
//       id: 6,
//       first_name: "Garrott",
//       last_name: "Rogeron",
//       email: "grogeron5@cpanel.net",
//       gender: "Male",
//       ip_address: "212.137.180.189",
//     },
//     {
//       id: 7,
//       first_name: "Libbey",
//       last_name: "Antoshin",
//       email: "lantoshin6@indiatimes.com",
//       gender: "Female",
//       ip_address: "125.53.183.202",
//     },
//     {
//       id: 8,
//       first_name: "Angel",
//       last_name: "Cocklin",
//       email: "acocklin7@weebly.com",
//       gender: "Male",
//       ip_address: "233.197.104.52",
//     },
//     {
//       id: 9,
//       first_name: "Gerianna",
//       last_name: "Wimlett",
//       email: "gwimlett8@foxnews.com",
//       gender: "Female",
//       ip_address: "39.46.37.252",
//     },
//     {
//       id: 10,
//       first_name: "Lamond",
//       last_name: "Aubray",
//       email: "laubray9@dmoz.org",
//       gender: "Male",
//       ip_address: "156.215.16.135",
//     },
//     {
//       id: 11,
//       first_name: "Elaina",
//       last_name: "Hofler",
//       email: "ehoflera@upenn.edu",
//       gender: "Female",
//       ip_address: "221.231.124.215",
//     },
//     {
//       id: 12,
//       first_name: "Corrinne",
//       last_name: "Ragbourn",
//       email: "cragbournb@opera.com",
//       gender: "Female",
//       ip_address: "228.171.123.161",
//     },
//     {
//       id: 13,
//       first_name: "Marline",
//       last_name: "Gatecliff",
//       email: "mgatecliffc@aboutads.info",
//       gender: "Female",
//       ip_address: "34.115.60.28",
//     },
//     {
//       id: 14,
//       first_name: "Norry",
//       last_name: "Redihalgh",
//       email: "nredihalghd@wikispaces.com",
//       gender: "Male",
//       ip_address: "6.231.54.48",
//     },
//     {
//       id: 15,
//       first_name: "Flossi",
//       last_name: "Broadhead",
//       email: "fbroadheade@house.gov",
//       gender: "Female",
//       ip_address: "216.25.205.98",
//     },
//   ];
//   return (
//     // <React.Fragment>
//     //   <Header></Header>
//     //   <h1>Hello from App Component</h1>
//     //   <p>Hey! Good Morning</p>
//     //   <Main></Main>
//     //   <Footer></Footer>
//     // </React.Fragment>
//     <div>
//       <h3>Hey! our company name is: {companyName}</h3>
//       <p>
//         We were established in {year} and was founded by {founder}.
//       </p>
//       <h3>Car Details:</h3>
//       <p>Brand: {car.brand}</p>
//       <p>Name: {car.name}</p>
//       <p>Model: {car.model}</p>
//       <p>Color: {car.color}</p>

//       {colors.map((color, index) => {
//         return <p key={color}>{color}</p>;
//       })}

//       <table>
//        <thead>
//         <tr>
//           <th>ID</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Email</th>
//           <th>Gender</th>
//           <th>IP Address</th>
//         </tr>
//        </thead>
//        <tbody>
//         {users.map((user) => (
//           <tr key={user.id}>
//             <td>{user.id}</td>
//             <td>{user.first_name}</td>
//             <td>{user.last_name}</td>
//             <td>{user.email}</td>
//             <td>{user.gender}</td>
//             <td>{user.ip_address}</td>
//           </tr>
//         ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// // export default App;

// import React from 'react'
// import Header from './Header'
// import Footer from './Footer'
// import UserRow from './UserRow';

// function App() {
//     let companyName = "ABC Inc..";
//    let year = 1990;
//    let founder = "John Doe";

//    let users = [
//     {
//       id: 1,
//       first_name: "Carine",
//       last_name: "Columbine",
//       email: "ccolumbine0@dagondesign.com",
//       gender: "Female",
//       ip_address: "54.100.22.86",
//     },
//     {
//       id: 2,
//       first_name: "Natalya",
//       last_name: "Hartop",
//       email: "nhartop1@europa.eu",
//       gender: "Female",
//       ip_address: "218.103.78.94",
//     },
//     {
//       id: 3,
//       first_name: "Keen",
//       last_name: "Fudge",
//       email: "kfudge2@altervista.org",
//       gender: "Male",
//       ip_address: "197.81.64.102",
//     },
//     {
//       id: 4,
//       first_name: "Kirsten",
//       last_name: "Denis",
//       email: "kdenis3@acquirethisname.com",
//       gender: "Female",
//       ip_address: "46.225.174.121",
//     },
//     {
//       id: 5,
//       first_name: "Shell",
//       last_name: "Warne",
//       email: "swarne4@techcrunch.com",
//       gender: "Female",
//       ip_address: "47.152.241.70",
//     },
//     {
//       id: 6,
//       first_name: "Garrott",
//       last_name: "Rogeron",
//       email: "grogeron5@cpanel.net",
//       gender: "Male",
//       ip_address: "212.137.180.189",
//     },
//     {
//       id: 7,
//       first_name: "Libbey",
//       last_name: "Antoshin",
//       email: "lantoshin6@indiatimes.com",
//       gender: "Female",
//       ip_address: "125.53.183.202",
//     },
//     {
//       id: 8,
//       first_name: "Angel",
//       last_name: "Cocklin",
//       email: "acocklin7@weebly.com",
//       gender: "Male",
//       ip_address: "233.197.104.52",
//     },
//     {
//       id: 9,
//       first_name: "Gerianna",
//       last_name: "Wimlett",
//       email: "gwimlett8@foxnews.com",
//       gender: "Female",
//       ip_address: "39.46.37.252",
//     },
//     {
//       id: 10,
//       first_name: "Lamond",
//       last_name: "Aubray",
//       email: "laubray9@dmoz.org",
//       gender: "Male",
//       ip_address: "156.215.16.135",
//     },
//     {
//       id: 11,
//       first_name: "Elaina",
//       last_name: "Hofler",
//       email: "ehoflera@upenn.edu",
//       gender: "Female",
//       ip_address: "221.231.124.215",
//     },
//     {
//       id: 12,
//       first_name: "Corrinne",
//       last_name: "Ragbourn",
//       email: "cragbournb@opera.com",
//       gender: "Female",
//       ip_address: "228.171.123.161",
//     },
//     {
//       id: 13,
//       first_name: "Marline",
//       last_name: "Gatecliff",
//       email: "mgatecliffc@aboutads.info",
//       gender: "Female",
//       ip_address: "34.115.60.28",
//     },
//     {
//       id: 14,
//       first_name: "Norry",
//       last_name: "Redihalgh",
//       email: "nredihalghd@wikispaces.com",
//       gender: "Male",
//       ip_address: "6.231.54.48",
//     },
//     {
//       id: 15,
//       first_name: "Flossi",
//       last_name: "Broadhead",
//       email: "fbroadheade@house.gov",
//       gender: "Female",
//       ip_address: "216.25.205.98",
//     },
//   ];

//   return (
//     <div>
//     <Header companyName = {companyName} founder = {founder}></Header>
//     <Footer year = {year}></Footer>

//     <img src="img/car.webp" alt="logo" />

//     <table>
//         <thead>
//            <td>ID</td>
//            <td>First Name</td>
//            <td>Last Name</td>
//            <td>Email</td>
//            <td>Gender</td>
//            <td>IP Address</td>
//         </thead>

//         <tbody>
//            {users.map((user) => {
//             return (
//                 <userRow key = {user.id} user = {user}/>
//             )
//            })}
//         </tbody>
//     </table>
//     </div>
//   )
// }

// export default App;

// import React from 'react'
// import Header from './Header';
// import styles from './App.module.css';

// function App() {

//   return (
//     <div>
//     <Header/>
//        <h1 className={styles.heading}>Hello! I am Heading</h1>
//     </div>
//   )
// }

// export default App;

// import React, { useState } from "react";
// function App() {
//   let num1 = 15;
//   let num2 = 30;
//   let [total, setTotal] = useState(0);

//   let [name, setName] = useState("John");

//   let [car,setCar] = useState({
//     brand: "Tata",
//     name: "Nexon",
//     model: "2021",
//     color: "Red",
//   });

//   function handleClick() {
//     console.log("Button was Clicked");
//     // total = num1 + num2;
//     setTotal(num1 + num2);
//     console.log("Final Total is :", total);
//   }

//   function changeName(updateName) {
//     console.log("Function has Started");
//     console.log("On Line 379");
//     setName(updateName);
//     setTimeout(() => {
//       console.log(name);
//     }, 6000);

//     console.log("On Line 388");
//     console.log("On Line 391");
//   }

//   function updateCar() {
//     setCar({...car,model:"2022",brand:"Hyndai"})
//   }

//   return (
//     <div>
//       <p>Number One is : {num1}</p>
//       <p>Number Two is : {num2}</p>
//       <p>Total : {total}</p>
//       <button onClick={handleClick}>Calculate Total</button>
//       <p>Current Name is: {name}</p>
//       <button
//         onClick={() => {
//           changeName("max");
//         }}
//       >
//         Change Name
//       </button>
//       <h3>Car Details:</h3>
//       <p>Brand: {car.brand}</p>
//       <p>Name: {car.name}</p>
//       <p>Model: {car.model}</p>
//       <p>Color: {car.color}</p>
//       <button onClick={updateCar}>Change Car Info</button>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import Todo from "./Todo";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
function App() {
  let [todos, setTodos] = useState([
    { task: "HTML I", done: true, id: 1 },
    { task: "CSS", done: true, id: 2 },
    { task: "Responsive Design", done: true, id: 3 },
    { task: "Git", done: true, id: 4 },
    { task: "JavaScript I", done: true, id: 5 },
    { task: "JavaScript II", done: true, id: 6 },
  ]);

  let [user, setUser] = useState(false);
  let updateUser = () => {
    setUser(!user);
  };

  function deleteTodo(id) {
    console.log("Deleting Todo with the id:", id);
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  }
  return (
    <div>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />;
      })}
      {user? <LoggedIn/>:<LoggedOut/>}

       <button onClick = {updateUser}>Update User Status</button>
    </div>
  );
}

export default App;
