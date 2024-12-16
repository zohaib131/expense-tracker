'use client'
// import './ExpansesWrite.css'
import React, {useContext} from "react"
import { GlobalContext } from "@/Context/GlobalState"

export default function ExpensesCover(){

    const { transcations } = useContext(GlobalContext);

    const amounts = transcations.map(transcations => transcations.amount);

    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1)
        .toFixed(2)

    return <div className="inc-exp-container">
        <div>
        <h5>
            BILL
        </h5>
        <p className="money plus"> ${income}</p>
        </div>

        <div>
            <h5>
                LESS
            </h5>
            <p className="money minus">
                ${expense}
            </p>
        </div>
        
    </div>
}