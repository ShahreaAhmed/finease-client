import React, { useState } from "react";
import { useLoaderData } from "react-router";
import TransactionHistoryCard from "../../components/TransactionHistoryCard/TransactionHistoryCard";

const MyTransactionPage = () => {

  const loaderData = useLoaderData()

  const [transactions, setTransactions] = useState(loaderData)

  const handleDeleteTransaction = (id) => {
    setTransactions((transaction) => transaction.filter((card) => card._id !== id))
  }
  
  console.log(loaderData)

  return (
    <div>
      <div className="text-center text-2xl font-bold">Transaction History</div>
      <div>
        {transactions.length > 0 ? (
          transactions.map((transaction) => (<TransactionHistoryCard transaction={transaction} key={transaction._id}
            onDelete={handleDeleteTransaction}
          ></TransactionHistoryCard>))) : (
            <p className="text-center text-gray-400 mt-10 text-lg">No transaction found.</p>
          
        )}
        {/* // {data.map(transaction => <TransactionHistoryCard transaction={transaction} key={transaction._id}></TransactionHistoryCard>)} */}
      </div>
    </div>
  );
};

export default MyTransactionPage;
