
// 'use client'
// import React, {useContext} from "react"
// import { GlobalContext } from "@/Context/GlobalState";

// export default function TransitionHistory(){
//     const transcations = useContext(GlobalContext);


//     return <div>
//         <div>
//             <h3>
//                 Transaction History
//             </h3>
//             <ul className="list">
//             {
//                 transcations.map(transcation =>( <li className="plus">
//                     {transcation.text}
//                     <span>
//                         +$10000
//                     </span>
//                     <button className="delete-btn">X</button>
//                 </li>))
//             }

//                 {/* <li className="minus">
//                     Expense of Months
//                     <span>
//                         -$5000
//                     </span>
//                     <button className="delete-btn"> x </button>

//                 </li> */}
//             </ul>
//         </div>
//     </div>
// }



'use client'
import React, {useContext} from "react";
import { GlobalContext } from "@/Context/GlobalState";

export default function TransitionHistory(){
    const { transcations } = useContext(GlobalContext);
    const {deleteTrnasaction} = useContext(GlobalContext);

    return (
        <div>
            <h3>Bill History</h3>
            <ul className="list">
                {
                    transcations.map(transaction => (
                        <li className={transaction.amount > 0 ? "plus" : "minus"}>
                            {transaction.text}
                            <span>{transaction.amount > 0 ? `+$${transaction.amount}` : `-$${Math.abs(transaction.amount)}`}</span>
                            <button className="delete-btn" onClick={() => {
                                deleteTrnasaction(transaction.id)}
                                }>X</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
