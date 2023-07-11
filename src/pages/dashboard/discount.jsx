import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import DashboardLayout from '@/components/dashboardLayout';
import CopyCode from '@/components/copyCode';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useProvider } from '@/context/Store';
import { useForm } from 'react-hook-form';
import { Spinner } from '@/components/ui/spinner';
import { toast } from 'react-toastify';
import { updateProfileApi } from '@/services/core/updateProfile';
import Table from '@/components/table';
import { usersApi } from '@/services/core/users';
import { discountStatusApi } from '@/services/core/discountStatus';

function DiscountPage() {
    const { user, isSuperAdmin } = useProvider();
    const { register, handleSubmit } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [isUsersLoading, setIsUsersLoading] = useState(false);
    const [users, setUsers] = useState(null);

    useEffect(() => {
        if (isSuperAdmin) getUsers();
    }, []);

    const getUsers = async () => {
        setIsUsersLoading(true);
        try {
            const users = await usersApi(1);
            setUsers(users.data.content);
        } catch (e) {}
        setIsUsersLoading(false);
    };
    const onSubmit = async formData => {
        setIsLoading(true);
        try {
            const { data } = await updateProfileApi(formData);
            toast.success('Updated successfully');
        } catch (e) {
            toast.error(e?.response?.data?.message);
        }
        setIsLoading(false);
    };
    const changeDiscountStatus = async data => {
        try {
            await discountStatusApi(data);
            getUsers();
            toast.success('Updated successfully');
        } catch (e) {
            toast.error(e?.response?.data?.message);
        }
    };

    const tableHeaders = [
        { key: 'firstName', title: 'First Name', left: true },
        { key: 'lastName', title: 'Last Name' },
        { key: 'email', title: 'Email' },
        { key: 'discountPercent', title: 'Current' },
        { key: 'discountRequestPercent', title: 'Requested' },
        {
            key: 'action',
            title: 'Action',
            content: userId => (
                <div className="flex items-center justify-center space-x-4">
                    <svg
                        className="cursor-pointer"
                        onClick={() =>
                            changeDiscountStatus({
                                status: true,
                                userId,
                            })
                        }
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
                    <svg
                        className="cursor-pointer"
                        onClick={() =>
                            changeDiscountStatus({
                                status: false,
                                userId,
                            })
                        }
                        width="18"
                        height="18"
                        viewBox="0 0 6 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.15039 5.43994L0.900391 1.18994"
                            stroke="#fff"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M5.09961 1.24023L0.849609 5.49023"
                            stroke="#fff"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
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
                <title>Discount | Baslid</title>
            </Head>
            <div className="lg:p-6">
                <div className="lg:bg-black-800 lg:p-4 lg:rounded-lg">
                    <CopyCode
                        title="Your Discount code:"
                        code={user.discountCode}
                        isSlim
                        className="bg-black-200 py-6 rounded-none lg:rounded-lg lg:bg-black-900"
                    />
                </div>
                {!isSuperAdmin ? (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="p-6 lg:p-0 mt-7 lg:mx-auto lg:max-w-8/10 space-y-3 lg:space-y-5">
                            <span className="text-base lg:text-xl font-medium !mb-4 lg:mb-0">
                                Need more Discount? Let us know!
                            </span>
                            <Input
                                type="number"
                                placeholder="How much Discount you need?"
                                className="w-full"
                                min={0}
                                max={99}
                                isSlim
                                {...register('discountPercent', {
                                    required: true,
                                })}
                            />
                            <Button className="w-full" size="sm" type="submit">
                                {isLoading ? (
                                    <Spinner
                                        color="black"
                                        width={32}
                                        height={32}
                                    />
                                ) : (
                                    'Update'
                                )}
                            </Button>
                        </div>
                    </form>
                ) : (
                    <div className="mt-4">
                        <Table
                            className="rounded-lg"
                            headers={tableHeaders}
                            values={users}
                            isLoading={isUsersLoading}
                        />
                    </div>
                )}
            </div>
        </>
    );
}

DiscountPage.getLayout = function getLayout(page) {
    return (
        <DashboardLayout headerTitle="Your Disccount">{page}</DashboardLayout>
    );
};

export async function getServerSideProps() {
    return {
        props: {},
    };
}

export default DiscountPage;
