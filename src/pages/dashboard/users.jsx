import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import DashboardLayout from '@/components/dashboardLayout';
import Table from '@/components/table';
import CopyIcon from '@/components/icons/copyIcon';
import Box from '@/components/box';
import CopyCode from '@/components/copyCode';
import { useProvider } from '@/context/Store';
import { getUserName } from '@/utils/getUserName';
import { getAccountType } from '@/utils/getAccountType';
import { getProductsStatisticsApi } from '@/services/core/productsStatistics';
import { getProductsStatisticsTableFormat } from '@/utils/getProductsStatisticsTableFormat';
import { toast } from 'react-toastify';
import { usersApi } from '@/services/core/users';
import { updateProfileApi } from '@/services/core/updateProfile';

function StatisticsPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState(null);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        setIsLoading(true);
        try {
            const users = await usersApi();
            setUsers(users.data.content);
            console.log(users);
        } catch (e) {}
        setIsLoading(false);
    };
    const updateBalance = async () => {
        setIsLoading(true);
        try {
            toast.success('paid out.');
        } catch (e) {
            toast.error(e?.response?.data?.message);
        }
        setIsLoading(false);
    };

    const tableHeaders = [
        { key: 'firstName', title: 'First Name', left: true },
        { key: 'lastName', title: 'Last Name' },
        { key: 'email', title: 'Email' },
        { key: 'balance', title: 'Balance' },
        { key: 'paypalAddress', title: 'Paypal' },
        {
            key: 'action',
            title: 'Action',
            content: userId => (
                <div className="flex items-center justify-center">
                    <svg
                        className="cursor-pointer"
                        onClick={() => updateBalance(userId)}
                        width="18"
                        height="18"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.0498 3.87018L2.6598 5.48018L6.9598 1.18018"
                            stroke="#fff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            ),
        },
    ];

    return (
        <>
            <Head>
                <title>Users | Baslid</title>
            </Head>
            <div className="mt-6">
                <Table
                    headers={tableHeaders}
                    values={users}
                    isLoading={isLoading}
                />
            </div>
        </>
    );
}

StatisticsPage.getLayout = function getLayout(page) {
    return (
        <DashboardLayout headerTitle="Users" hasSearch>
            {page}
        </DashboardLayout>
    );
};

export async function getServerSideProps() {
    return {
        props: {},
    };
}

export default StatisticsPage;
