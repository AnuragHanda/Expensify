import { useEffect, useState } from 'react';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';

const InitialForm={
      amount:0,
      description:"",
      date:dayjs(),  
  }; 
  
export default function TransactionForm({fetchTransactions,editTransaction}) {
    const[form, setForm]=useState(InitialForm);
   
    useEffect(()=>{
      if(editTransaction.amount !== undefined){
        setForm(editTransaction);
      }
      console.log(editTransaction);
    },[editTransaction]);

    function handleChange(e){
        setForm({ ...form, [e.target.name]:e.target.value});
    }

    function handleDate(newValue){
        setForm({ ...form,date:newValue});
    }

    async function handleSubmit(e){
        e.preventDefault();

         const res = editTransaction.amount === undefined ? create() : update();
    }
    function reload(res){
      if(res.ok){
          setForm(InitialForm);
          fetchTransactions();
        }
       
       }

      async function create(){
        const res=await fetch(`${process.env.REACT_APP_API_URL}/transaction`,{
          method:"POST",
          body:JSON.stringify(form),
          headers:{
            "content-type":"application/json",
          }
        });
        reload(res);
      }
      
      async function update() {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/transaction/${editTransaction._id}`, {
            method: "PATCH",
            body: JSON.stringify(form),
            headers: {
              "content-type": "application/json",
            },
          }
        );
        reload(res);
      }

  return (
    <Card sx={{ minWidth: 275 , marginTop: 10}}>
      <CardContent>
        <form onSubmit={handleSubmit}>
        <Typography variant="h6" sx={{ marginBottom: 1}}>
          Add New Transaction
          
        </Typography>
          <TextField
            sx={{ marginRight: 5}}
            id="outlined-basic"
            label="Amount"
            type="number"
            //size="small"
            name="amount"
            variant="outlined"
            value={form.amount}
            onChange={handleChange}
          />
          <TextField
            sx={{ marginRight: 5}}
            id="outlined-basic"
            label="Description"
            //size="small"
            name="description"
            variant="outlined"
            value={form.description}
            onChange={handleChange}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Transaction Date"
              inputFormat="MM/DD/YYYY"
              value={dayjs(form.date)}
              onChange={handleDate}
              renderInput={(params) => (
                <TextField sx={{ marginRight: 5}} size="small" {...params} />
              )}
            />
          </LocalizationProvider>
          {
            editTransaction.amount !== undefined && (
            <Button type="submit" variant="secondary" sx={{ marginLeft: 2}}>Update</Button>
          )}
          {
            editTransaction.amount === undefined && (
            <Button type="submit" variant="contained" sx={{ marginLeft: 2}}>Submit</Button>
          )}
        {/* <Button type="submit" sx={{ marginLeft: 5 ,marginTop: 1}} size="large" variant="outlined">Submit</Button> */}
        </form>
        
      </CardContent>
      
    </Card>
  );
}