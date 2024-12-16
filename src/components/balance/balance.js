'use client'
import React, {useContext} from "react"
import { GlobalContext } from "@/Context/GlobalState"

export default function Balance(){
   
    const { transcations } = useContext(GlobalContext);

    const amounts = transcations.map(transcations => transcations.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return <div style={{textAlign: "center"}}>
        <h3>
            TOTAL BILL
        </h3>
        <h1>
            ${total}
        </h1>
    </div>
}