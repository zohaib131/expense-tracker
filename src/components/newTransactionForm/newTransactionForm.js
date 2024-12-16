

'use client'
import React, {useState} from "react"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { GlobalContext } from "@/Context/GlobalState";

export default function NewTransactionForm(){
    const {addTrnasaction} = useContext(GlobalContext);

    let {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      

      const saveTransaction = e => {
        
        e.preventDefault();

        let notAdd = parseFloat(amount)
        if(notAdd === 0){
            return;
        }

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000), 
            text,
            amount: +amount 
        }
        addTrnasaction(newTransaction);
    };
    

    const [text, setText]= useState('');
    const [amount, setAmount]= useState('0');
    return <div>
        <div>
            <h3>
                Add New Bill
            </h3>
            <form onSubmit={saveTransaction}>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label><br/>
                    <input type="text" 
                    value={text}
                    onChange={(e)=> setText(e.target.value)} 
                    placeholder="Detail of Transaction"/><br/>
                    </div>
                    <div className="form-control">
                    <label htmlFor="transectionamount">
                        Bill Amount
                    </label><br/>
                    <input type="number" 
                    value={amount}
                    onChange={(e)=> setAmount(e.target.value)} placeholder="Dollar value of Transaction"/>

                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    </div>
}