import { useState } from "react";

function App() {
  const[form, setForm]=useState({
    amount:0,
    description:"",
    date:"",
  });
  async function handleSubmit(e){
    e.preventDefault();
    console.log(form);
    const res=await fetch('http:localhost:3001/transaction',{
      method:"POST",
      body:form,
    });
    console.log(res);
  }
  function handleInput(e){
    console.log(e.target.value);
    setForm({...form,[e.target.name]:e.target.value});
  }
  return (
    <>
    <div>
    <form onSubmit={handleSubmit}>
      <input type="number" name="amount" value={form.amount} onChange={handleInput} placeholder="Enter transaction amount"/>
      <input type="text" name="description" value={form.description} onChange={handleInput} placeholder="Enter transaction details"/>
      <input type="date" name="date" value={form.date} onChange={handleInput}/>
      <button type="submit">submit</button>

    </form>
    </div>
    </>
    
  );
}

export default App;
