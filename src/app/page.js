
import Header from "@/components/header/header"
import Balance from "@/components/balance/balance"
import ExpensesCover from "@/components/ExpensesWrite/expensesWrite"
import TransitionHistory from "@/components/transitionHistory/transitionHistory"
import NewTransactionForm from "@/components/newTransactionForm/newTransactionForm"
import { GlobalProvider } from "@/Context/GlobalState"



export default function(){
  return <div>

    <Header></Header>
    <Balance></Balance>
    <ExpensesCover></ExpensesCover>
    <TransitionHistory></TransitionHistory>
    <NewTransactionForm></NewTransactionForm>
  </div>
}