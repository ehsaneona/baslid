import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import DashboardLayout from '@/components/dashboardLayout';
import Table from '@/components/table';
import { Badge } from '@/components/ui/badge';
import CopyIcon from '@/components/icons/copyIcon';
import Box from '@/components/box';
import CopyCode from '@/components/copyCode';
import { useProvider } from '@/context/Store';
import { getUserName } from '@/utils/getUserName';
import { getAccountType } from '@/utils/getAccountType';
import { getProductsStatisticsApi } from '@/services/core/productsStatistics';
import { getProductsStatisticsTableFormat } from '@/utils/getProductsStatisticsTableFormat';
import { toast } from 'react-toastify';

function StatisticsPage() {
    const productHeaders = [
        { key: 'name', title: 'Product name', left: true },
        { key: 'date', title: 'Date' },
        { key: 'tendered', title: 'Tendered' },
        { key: 'earnings', title: 'Earnings' },
        { key: 'status', title: 'Status' },
    ];
    const { user } = useProvider();
    const [productsStatisticsLoading, setProductsStatisticsLoading] =
        useState(true);
    const [productsStatistics, setProductsStatistics] = useState(null);

    useEffect(async () => {
        await getProductsStatistics();
    }, []);

    const getProductsStatistics = async () => {
        setProductsStatisticsLoading(true);
        try {
            const { data } = await getProductsStatisticsApi();
            setProductsStatistics(
                getProductsStatisticsTableFormat(data.content)
            );
        } catch (e) {
            toast.error(e?.response?.data?.message);
        }
        setProductsStatisticsLoading(false);
    };

    return (
        <>
            <Head>
                <title>Statistics | Baslid</title>
            </Head>
            <div className="p-6 flex">
                <div className="bg-black-800 rounded-lg min-w-fit">
                    <div className="flex">
                        <div className="flex flex-col justify-between py-6 px-4">
                            <div className="flex items-center text-white space-x-3">
                                <img
                                    className="rounded-full w-12 h-12 object-cover"
                                    src={user.avatar ?? '/profile.jpg'}
                                    alt="profile"
                                />
                                <div className="flex flex-col">
                                    <span className="font-bold text-base">
                                        {getUserName(user)}
                                    </span>
                                    <span className="font-normal text-gray-600">
                                        {getAccountType(user.type)}
                                    </span>
                                </div>
                            </div>
                            <CopyCode
                                className="mt-[18px] mb-[26px]"
                                title="Your Code:"
                                code={user.discountCode}
                            />
                            <div className="flex justify-center pb-1.5">
                                <img src="../logo-white.png" alt="logo" />
                            </div>
                        </div>
                        <div className="p-2.5">
                            <div className="p-6 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-md h-full flex items-center">
                                <div className="p-4 rounded-lg bg-white w-fit">
                                    <img
                                        height={125}
                                        width={125}
                                        src={`https://api.qrserver.com/v1/create-qr-code/?size=125x125&data=${user.discountCode}`}
                                        alt={user.discountCode}
                                    />
                                </div>
                                {/*<button className="bg-yellow-200 rounded-md py-2 px-3 flex items-center mx-auto mt-4 text-sm font-semibold">*/}
                                {/*    <CopyIcon className="mr-2" />*/}
                                {/*    Copy your link*/}
                                {/*</button>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <Box
                    title="Your Sales"
                    value={user.salesProductCount}
                    linkTitle="See Details"
                    link="/dashboard/wallet"
                />
                <Box
                    title="Your Balance"
                    value={`$${user.balance}`}
                    linkTitle="See Details"
                    link="/dashboard/wallet"
                    pattern="right"
                />
            </div>
            <Table
                headers={productHeaders}
                values={productsStatistics}
                isLoading={productsStatisticsLoading}
            />
        </>
    );
}

StatisticsPage.getLayout = function getLayout(page) {
    return (
        <DashboardLayout headerTitle="Sell Statistics" hasSearch>
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
