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
            <div className="py-3 lg:p-6 flex flex-col lg:flex-row">
                <div className="bg-black-800 lg:rounded-lg min-w-fit mb-3 lg:mb-0">
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex flex-col justify-between pt-6 lg:py-6 px-4">
                            <div className="flex items-center text-white space-x-3">
                                <img
                                    className="rounded-full w-12 h-12 object-cover"
                                    src={user.avatar ?? '/profile.jpg'}
                                    alt="profile"
                                />
                                <div className="flex flex-col">
                                    <span className="font-bold text-base">
                                        {getUserName(user)}
                                        <svg
                                            className="ml-1 inline"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M17.9667 8.95003L16.8334 7.63336C16.6167 7.38336 16.4417 6.9167 16.4417 6.58336V5.1667C16.4417 4.28336 15.7167 3.55836 14.8334 3.55836H13.4167C13.0917 3.55836 12.6167 3.38336 12.3667 3.1667L11.0501 2.03336C10.4751 1.5417 9.5334 1.5417 8.95007 2.03336L7.64173 3.17503C7.39173 3.38336 6.91673 3.55836 6.59173 3.55836H5.15006C4.26673 3.55836 3.54173 4.28336 3.54173 5.1667V6.5917C3.54173 6.9167 3.36673 7.38336 3.1584 7.63336L2.0334 8.95836C1.55007 9.53336 1.55007 10.4667 2.0334 11.0417L3.1584 12.3667C3.36673 12.6167 3.54173 13.0834 3.54173 13.4084V14.8334C3.54173 15.7167 4.26673 16.4417 5.15006 16.4417H6.59173C6.91673 16.4417 7.39173 16.6167 7.64173 16.8334L8.9584 17.9667C9.5334 18.4584 10.4751 18.4584 11.0584 17.9667L12.3751 16.8334C12.6251 16.6167 13.0917 16.4417 13.4251 16.4417H14.8417C15.7251 16.4417 16.4501 15.7167 16.4501 14.8334V13.4167C16.4501 13.0917 16.6251 12.6167 16.8417 12.3667L17.9751 11.05C18.4584 10.475 18.4584 9.52503 17.9667 8.95003ZM13.4667 8.42503L9.44173 12.45C9.32507 12.5667 9.16673 12.6334 9.00007 12.6334C8.8334 12.6334 8.67507 12.5667 8.5584 12.45L6.54173 10.4334C6.30007 10.1917 6.30007 9.7917 6.54173 9.55003C6.7834 9.30836 7.1834 9.30836 7.42507 9.55003L9.00007 11.125L12.5834 7.5417C12.8251 7.30003 13.2251 7.30003 13.4667 7.5417C13.7084 7.78336 13.7084 8.18336 13.4667 8.42503Z"
                                                fill="#00B2FF"
                                            />
                                        </svg>
                                    </span>
                                    <span className="font-normal text-gray-600">
                                        {getAccountType(user.type)}
                                    </span>
                                </div>
                            </div>
                            <CopyCode
                                className="mt-[18px] lg:mb-[26px]"
                                title="Your Code:"
                                code={user.discountCode}
                            />
                            <div className="justify-center pb-1.5 hidden lg:flex">
                                <img src="../logo-white.png" alt="logo" />
                            </div>
                        </div>
                        <div className="p-4 lg:p-2.5">
                            <div className="p-6 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-md h-full flex flex-col items-center justify-center">
                                <div className="p-4 rounded-lg bg-white w-fit">
                                    <img
                                        height={125}
                                        width={125}
                                        src={`https://api.qrserver.com/v1/create-qr-code/?size=125x125&data=${user.discountCode}`}
                                        alt={user.discountCode}
                                    />
                                </div>
                                <button className="bg-yellow-200 rounded-md py-2 px-3 flex items-center mx-auto mt-4 text-sm font-semibold">
                                    <CopyIcon className="mr-2" />
                                    Copy your link
                                </button>
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
                    className="mb-0"
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
