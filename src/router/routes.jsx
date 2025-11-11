import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import AddTransactionPage from '../pages/Transactions/AddTransactionPage';
import MyTransactionPage from '../pages/Transactions/MyTransactionPage';
import TransactionDetailsPage from '../pages/Transactions/TransactionDetailsPage';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import ReportsPage from '../pages/Reports/ReportsPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/add-transaction',
                element: <AddTransactionPage></AddTransactionPage>
            },
            {
                path: '/my-transaction',
                element: <MyTransactionPage></MyTransactionPage>
            },
            {
                path: '/transaction-details',
                element: <TransactionDetailsPage></TransactionDetailsPage>
            },
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
            {
                path:'/reports',
                element: <ReportsPage></ReportsPage>
            }
        ]
    }
])
