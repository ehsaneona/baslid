import React, { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import Chart from '@/components/chart';
import DashboardLayout from '@/components/dashboardLayout';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import Box from '@/components/box';
import Table from '@/components/table';
import { earningHistoryApi } from '@/services/core/earningHistory';
import { getEarningInChartFormat } from '@/utils/getEarningInChartFormat';
import { Spinner } from '@/components/ui/spinner';
import { getProductsStatisticsApi } from '@/services/core/productsStatistics';
import { getProductsStatisticsTableFormat } from '@/utils/getProductsStatisticsTableFormat';
import { toast } from 'react-toastify';
import { useProvider } from '@/context/Store';

function WalletPage() {
    const productHeaders = [
        { key: 'name', title: 'Product name', left: true },
        { key: 'date', title: 'Date' },
        { key: 'tendered', title: 'Tendered' },
        { key: 'earnings', title: 'Earnings' },
        { key: 'status', title: 'Status' },
    ];
    const { user } = useProvider();
    const [earningHistoryLoading, setEarningHistoryLoading] = useState(true);
    const [productsStatisticsLoading, setProductsStatisticsLoading] =
        useState(true);
    const [earningHistory, setEarningHistory] = useState(null);
    const [productsStatistics, setProductsStatistics] = useState(null);
    const hasEarning = useMemo(() => {
        return earningHistory?.find(({ earn }) => earn > 0);
    }, [earningHistory]);

    useEffect(async () => {
        await getEarningHistory();
        await getProductsStatistics();
    }, []);

    const getEarningHistory = async prevDays => {
        setEarningHistoryLoading(true);
        try {
            const { data } = await earningHistoryApi(prevDays ?? 4);
            setEarningHistory(getEarningInChartFormat(data));
        } catch (e) {
            toast.error(e?.response?.data?.message);
        }
        setEarningHistoryLoading(false);
    };
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
                <title>Wallet | Baslid</title>
            </Head>
            <div className="pt-3 lg:p-6 pb-0 mb-2">
                <div className="flex flex-col lg:flex-row lg:mb-2">
                    <Box
                        className="!ml-0"
                        title="Your Sales"
                        value={user.salesProductCount}
                        linkTitle="Payouts occur 1st of each month."
                        linkIcon={false}
                    />
                    <Box
                        title="Your Balance"
                        value={`$${user.balance}`}
                        linkTitle="There will be no balance after each settlement"
                        pattern="right"
                        linkIcon={false}
                    />
                    <Box
                        title="Total Paid Out"
                        value={`$${user.paidOut}`}
                        linkTitle="Update your payout method in Settings"
                        pattern="right"
                        linkIcon={false}
                    />
                </div>
                <div className="w-full bg-black-800 lg:rounded-lg p-4">
                    <div className="flex justify-between items-center">
                        <span className="inline-flex font-semibold text-xl pl-2">
                            Earnings History
                        </span>
                        <div className="hidden lg:block">
                            <Select
                                onValueChange={e => {
                                    getEarningHistory(e);
                                }}>
                                <SelectTrigger className="w-fit" isSlim outline>
                                    <SelectValue placeholder="Last 4 Days" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value={4}>
                                            Last 4 Days
                                        </SelectItem>
                                        <SelectItem value={7}>
                                            Last 7 Days
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="h-80 flex items-center justify-center mt-6">
                        {earningHistoryLoading && (
                            <Spinner
                                className="-mt-6"
                                color="white"
                                height={50}
                                width={50}
                            />
                        )}
                        {!hasEarning && !earningHistoryLoading && (
                            <p className="text-xl font-semibold -mt-6">
                                You have no earning
                            </p>
                        )}
                        {hasEarning &&
                            !earningHistoryLoading &&
                            earningHistory && <Chart data={earningHistory} />}
                    </div>
                </div>
            </div>
            <Table
                headers={productHeaders}
                values={productsStatistics}
                isLoading={productsStatisticsLoading}
            />
        </>
    );
}

WalletPage.getLayout = function getLayout(page) {
    return <DashboardLayout headerTitle="Your Wallet">{page}</DashboardLayout>;
};

export async function getServerSideProps() {
    return {
        props: {},
    };
}

export default WalletPage;
