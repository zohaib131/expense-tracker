// 'use client'
// import React, {createContext , useReducer} from "react";
// import AppReducer from "./AppReducer";

// const initialState = {
//     transcations: [
//         { id: 1, text: 'Flower', amount: -20 },
//         { id: 2, text: 'Salary', amount: 300 },
//         { id: 3, text: 'Book', amount: -10 },
//         { id: 4, text: 'Camera', amount: 150 }
//     ]
// }

// export const GlobalContext = createContext(initialState.transcations);

// export const GlobalProvider = ({children})=>{

//     const [state , dispatch] = useReducer( AppReducer , initialState);

//     return (
//         <GlobalContext.Provider value={{
//             transcations: state.transcations
//         }}>
//             {children}
//         </GlobalContext.Provider>
//     );

// }


'use client'
import React, {createContext , useReducer} from "react";
import AppReducer from "./AppReducer";


const initialState = {
    transcations: [    ]
}

// Create context with the whole state object
export const GlobalContext = createContext(initialState);



export const GlobalProvider = ({children})=>{

    const [state , dispatch] = useReducer(AppReducer, initialState);


    function deleteTrnasaction(id){
        dispatch({
            type: 'Delete_Transaction',
            payload: id
        })
    }

    function addTrnasaction(transaction){
        dispatch({
            type: 'add_Transaction',
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={{
            transcations: state.transcations,
            deleteTrnasaction,
            addTrnasaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
}   
