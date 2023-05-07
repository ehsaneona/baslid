import React from 'react';
import Head from 'next/head';
import DashboardLayout from '@/components/dashboardLayout';
import Chart from '@/components/chart';
import Table from '@/components/table';
import { Badge } from '@/components/ui/badge';

function ProfilePage() {
    const productHeaders = [
        { key: 'name', title: 'Product name', left: true },
        { key: 'date', title: 'Date' },
        { key: 'tendered', title: 'Tendered' },
        { key: 'earnings', title: 'Earnings' },
        { key: 'status', title: 'Status' },
    ];
    const products = [
        {
            id: 1,
            name: (
                <div className="flex items-center">
                    <img
                        src="../Rectangle%2039807.png"
                        alt="product image"
                        className="mr-2.5"
                    />
                    Sports Research Healthy Skin & Hair Biotin Supplement, 1,00
                </div>
            ),
            date: 'Jan 25th, 2022',
            tendered: '$120.50',
            earnings: '$12.05',
            status: (
                <Badge className="w-[105px]">
                    <span className="h-2 w-2 bg-black-900 rounded-full mr-2" />
                    Paid
                </Badge>
            ),
        },
        {
            id: 2,
            name: (
                <div className="flex items-center">
                    <img
                        src="../Rectangle%2039807.png"
                        alt="product image"
                        className="mr-2.5"
                    />
                    Sports Research Healthy Skin & Hair Biotin Supplement, 1,00
                </div>
            ),
            date: 'Jan 25th, 2022',
            tendered: '$1140.50',
            earnings: '$114.05',
            status: (
                <Badge variant="secondary" className="w-[105px]">
                    <span className="h-2 w-2 bg-white rounded-full mr-2" />
                    Not Paid
                </Badge>
            ),
        },
        {
            id: 3,
            name: (
                <div className="flex items-center">
                    <img
                        src="../Rectangle%2039807.png"
                        alt="product image"
                        className="mr-2.5"
                    />
                    Sports Research Healthy Skin & Hair Biotin Supplement, 1,00
                </div>
            ),
            date: 'Jan 24th, 2032',
            tendered: '$9.50',
            earnings: '$1.05',
            status: (
                <Badge variant="secondary" className="w-[105px]">
                    <span className="h-2 w-2 bg-white rounded-full mr-2" />
                    Not Paid
                </Badge>
            ),
        },
        {
            id: 4,
            name: (
                <div className="flex items-center">
                    <img
                        src="../Rectangle%2039807.png"
                        alt="product image"
                        className="mr-2.5"
                    />
                    Sports Research Healthy Skin & Hair Biotin Supplement, 1,00
                </div>
            ),
            date: 'Jan 22th, 2322',
            tendered: '$110.50',
            earnings: '$11.05',
            status: (
                <Badge variant="secondary" className="w-[105px]">
                    <span className="h-2 w-2 bg-white rounded-full mr-2" />
                    Not Paid
                </Badge>
            ),
        },
        {
            id: 5,
            name: (
                <div className="flex items-center">
                    <img
                        src="../Rectangle%2039807.png"
                        alt="product image"
                        className="mr-2.5"
                    />
                    Sports Research Healthy Skin & Hair Biotin Supplement, 1,00
                </div>
            ),
            date: 'Jan 15th, 2022',
            tendered: '$110.50',
            earnings: '$11.05',
            status: (
                <Badge variant="secondary" className="w-[105px]">
                    <span className="h-2 w-2 bg-white rounded-full mr-2" />
                    Not Paid
                </Badge>
            ),
        },
        {
            id: 6,
            name: (
                <div className="flex items-center">
                    <img
                        src="../Rectangle%2039807.png"
                        alt="product image"
                        className="mr-2.5"
                    />
                    Sports Research Healthy Skin & Hair Biotin Supplement, 1,00
                </div>
            ),
            date: 'Jan 21th, 2020',
            tendered: '$110.50',
            earnings: '$11.05',
            status: (
                <Badge variant="secondary" className="w-[105px]">
                    <span className="h-2 w-2 bg-white rounded-full mr-2" />
                    Not Paid
                </Badge>
            ),
        },
        {
            id: 7,
            name: (
                <div className="flex items-center">
                    <img
                        src="../Rectangle%2039807.png"
                        alt="product image"
                        className="mr-2.5"
                    />
                    Sports Research Healthy Skin & Hair Biotin Supplement, 1,00
                </div>
            ),
            date: 'Jan 25th, 2019',
            tendered: '$120.50',
            earnings: '$12.05',
            status: (
                <Badge variant="secondary" className="w-[105px]">
                    <span className="h-2 w-2 bg-white rounded-full mr-2" />
                    Not Paid
                </Badge>
            ),
        },
    ];

    return (
        <>
            <Head>
                <title>Profile | Baslid</title>
            </Head>
            <div>
                <div className="p-6 hidden">
                    <div className="w-full h-80 bg-black-800 rounded-lg">
                        <Chart
                            data={[
                                {
                                    country: 'AE',
                                    'hot dog': 500,
                                    'hot dogColor': 'hsl(271, 70%, 50%)',
                                },
                                {
                                    country: 'AF',
                                    'hot dog': 900,
                                    'hot dogColor': 'hsl(106, 70%, 50%)',
                                },
                                {
                                    country: 'AG',
                                    'hot dog': 1100,
                                    'hot dogColor': 'hsl(295, 70%, 50%)',
                                },
                                {
                                    country: 'AI',
                                    'hot dog': 800,
                                    'hot dogColor': 'hsl(314, 70%, 50%)',
                                },
                                {
                                    country: 'AL',
                                    'hot dog': 1200,
                                    'hot dogColor': 'hsl(34, 70%, 50%)',
                                },
                                {
                                    country: 'AM',
                                    'hot dog': 1000,
                                    'hot dogColor': 'hsl(114, 70%, 50%)',
                                },
                            ]}
                        />
                    </div>
                </div>
                <div>
                    <Table headers={productHeaders} values={products} />
                </div>
            </div>
        </>
    );
}

ProfilePage.getLayout = function getLayout(page) {
    return (
        <DashboardLayout headerTitle="Sell Statistics">{page}</DashboardLayout>
    );
};

export async function getServerSideProps() {
    return {
        props: {},
    };
}

export default ProfilePage;
