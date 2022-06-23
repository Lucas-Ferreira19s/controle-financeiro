import React, { useState, useEffect } from "react"; 
import Form from "./components/form";
import Header from "./components/header";
import Resumo from "./components/resumo";
import GlobalStyle from "./styles/global"

const App = () =>{
    const data = localStorage.getItem("transaction");
    const [transactionsList, setTransactionsList] = useState(
        data ? JSON.parse(data) : []
    );
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(()=>{
        const amountExpense = transactionsList
            .filter((item)=> item.expense)
            .map((transaction)=> Number(transaction.amount));
        const amountIncome = transactionsList
            .filter((item)=> !item.expense)
            .map((transaction)=> Number(transaction.amount));

        const Expense = amountExpense.reduce((acc, cur) => acc + cur , 0).toFixed(2);
        const Income = amountIncome.reduce((acc, cur) => acc + cur , 0).toFixed(2);

        const Total = Math.abs(Income - Expense).toFixed(2);

        setIncome(`R$ ${Income}`);
        setExpense(`R$ ${Expense}`);
        setTotal(`${Number(Income) < Number(Expense) ? "-" : ""} R$ ${Total}`);
    }, [transactionsList]);

    const handleAdd = (transaction) => {
        const newArrayTransaction = [...transactionsList, transaction];

        setTransactionsList(newArrayTransaction);

        localStorage.setItem("transaction", JSON.stringify(newArrayTransaction));
    }

    return(
        <>
            <Header/>
            <Resumo income={income} expense={expense} total={total}/>
            <Form handleAdd={handleAdd} transactionsList={transactionsList} 
            setTransactionsList={setTransactionsList} />
            <GlobalStyle/>
        </>
    )
}

export default App;