import React from 'react';
import Head from 'next/head';
import DashboardLayout from '@/components/dashboardLayout';

function ProfilePage() {
    return (
        <>
            <Head>
                <title>Profile | Baslid</title>
            </Head>
            <div>تست</div>
        </>
    );
}

ProfilePage.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export async function getServerSideProps() {
    return {
        props: {},
    };
}

export default ProfilePage;
