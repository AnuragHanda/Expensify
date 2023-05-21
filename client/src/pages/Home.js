import React from 'react'
import TransactionForm from "../components/TransactionForm.js";
import TransactionsList from "../components/TransactionList.js";
import Cookies from  'js-cookie'; 
import Container from '@mui/material/Container';
import { useEffect, useState } from "react";
export default function Home() {
  
    useEffect(()=>{
        fetchTransactions()
      },[])   

async function fetchTransactions(){
  const token = Cookies.get('token');
    //const res = await fetch(`${process.env.REACT_APP_API_URL}/transaction`,{
      const res = await fetch(`http://localhost:3001/transaction`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    });

    const { data }=await res.json();
    setTransactions(data);
     }

const [transactions,setTransactions]=useState([]);
const [editTransaction,setEditTransaction]=useState({});
  return (
    <div>
      <Container>
    <TransactionForm fetchTransactions={fetchTransactions} editTransaction={editTransaction}/>
    <TransactionsList transactions={transactions} 
    fetchTransactions={fetchTransactions}
    setEditTransaction={setEditTransaction}/> 
    </Container>
    </div>
  )
}
