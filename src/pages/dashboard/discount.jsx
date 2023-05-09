import React, { useState } from 'react';
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

function DiscountPage() {
    const { user } = useProvider();
    const { register, handleSubmit } = useForm();
    const [isLoading, setIsLoading] = useState(false);

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

    return (
        <>
            <Head>
                <title>Discount | Baslid</title>
            </Head>
            <div className="p-6">
                <div className="bg-black-800 p-4 rounded-lg">
                    <CopyCode
                        title="Your Code:"
                        code={user.discountCode}
                        isSlim
                    />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-7 mx-auto max-w-8/10 space-y-5">
                        <span className="text-xl font-medium">
                            Need more Discount? Let us know!
                        </span>
                        <Input
                            type="number"
                            placeholder="How much Discount you need?"
                            className="w-full"
                            min={1}
                            max={99}
                            isSlim
                            {...register('discountPercent', {
                                required: true,
                            })}
                        />
                        <Button className="w-full" size="sm" type="submit">
                            {isLoading ? (
                                <Spinner color="black" width={32} height={32} />
                            ) : (
                                'Update'
                            )}
                        </Button>
                    </div>
                </form>
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
