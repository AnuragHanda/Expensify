
import React from 'react';
import AppBar from "./components/AppBar";

import { Outlet } from "react-router-dom";
function App() {
//   const InitialForm={
//     amount:0,
//     description:"",
//     date:"",
// }; 
 
//   const[form, setForm]=useState(InitialForm);

//   function handleInput(e){
//     setForm({...form, [e.target.name]:e.target.value});
//   }
//   async function handleSubmit(e){
//     e.preventDefault();
//     console.log("working");
//     const res=await fetch("http://localhost:3001/transaction",{
//       method:"POST",
//       body:JSON.stringify(form),
//       headers:{
//         "content-type":"application/json",
//       }
//     });
//     if(res.ok){
//       setForm(InitialForm);
//       fetchTransactions();
//     }
//   }
  

  return (
    <>
    <div>
      

    <AppBar/>
    <Outlet/>
    
    

    <br />
    {/* <form onSubmit={handleSubmit}>
        <input type="number" name="amount" value={form.amount} onChange={handleInput}></input>
        <input type="text" name="description" value={form.description} onChange={handleInput}></input>
        <input type="date" name="date" value={form.date} onChange={handleInput}></input>
        <button type="submit">submit2</button>
      </form>
    <table>
      <thead>
        <th>Amount</th>
        <th>Description</th>
        <th>Date</th>
      </thead>
      <tbody>
        {transactions.map((trx)=> (
        <tr key={trx._id}>
        <td>{trx.amount}</td>
        <td>{trx.description}</td>
        <td>{trx.date}</td>
        </tr>
        ))} 
      </tbody>
    </table> */}
    </div>
    </>
    
  );
}

export default App;
