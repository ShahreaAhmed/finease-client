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
import PrivateRoute from './PrivateRoute';
import UpdateTransaction from '../pages/Transactions/UpdateTransaction';
import ProfilePage from '../pages/Profile/ProfilePage';
import UpdateProfile from '../pages/UpdateProfile/UpdateProfile';

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
                element: <PrivateRoute>
                    <AddTransactionPage></AddTransactionPage>
                </PrivateRoute>
            },
            {
                path: '/my-transaction',
                element: <PrivateRoute>
                    <MyTransactionPage></MyTransactionPage>
                </PrivateRoute>,
                loader: () => fetch('http://localhost:4000/finease')
            },
            {
                path: '/transaction-details/:id',
                element: <PrivateRoute>
                    <TransactionDetailsPage></TransactionDetailsPage>
                </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:4000/finease/${params.id}`)
            },
            {
                path: '/update-transaction/:id',
                element: <PrivateRoute>
                    <UpdateTransaction></UpdateTransaction>
                </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:4000/finease/${params.id}`)
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
                path: '/profile',
                element: <PrivateRoute>
                    <ProfilePage></ProfilePage>
                </PrivateRoute>
            },
            {
                path: '/update-profile',
                element: <PrivateRoute>
                    <UpdateProfile></UpdateProfile>
                </PrivateRoute>
            },
            {
                path:'/reports',
                element: <PrivateRoute>
                    <ReportsPage></ReportsPage>
                </PrivateRoute>
            }
        ]
    }
])
