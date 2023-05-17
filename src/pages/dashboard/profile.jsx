import React, { useState } from 'react';
import Head from 'next/head';
import DashboardLayout from '@/components/dashboardLayout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useProvider } from '@/context/Store';
import { getUserName, getUserNameId } from '@/utils/getUserName';
import { uploadAvatarApi } from '@/services/core/uploadAvatar';
import { toast } from 'react-toastify';
import { getAccountType } from '@/utils/getAccountType';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Countries, Languages } from '@/constants/appData';
import { Textarea } from '@/components/ui/textarea';
import { Controller, useForm } from 'react-hook-form';
import { Spinner } from '@/components/ui/spinner';
import { updateProfileApi } from '@/services/core/updateProfile';
import { changePasswordApi } from '@/services/core/changePassword';
import { globalLogout } from '@/utils/globalLogout';

function ProfilePage() {
    const { user, setUser } = useProvider();
    const [isProfileLoading, setIsProfileLoading] = useState(false);
    const [isPaypalLoading, setIsPaypalLoading] = useState(false);
    const [isChangePasswordLoading, setIsChangePasswordLoading] =
        useState(false);
    const { register, handleSubmit, control } = useForm();
    const { register: paypalRegister, handleSubmit: paypalHandleSubmit } =
        useForm();
    const {
        register: changePasswordRegister,
        handleSubmit: changePasswordHandleSubmit,
    } = useForm();

    const onProfileAvatarChange = async e => {
        try {
            const { data } = await uploadAvatarApi(e.target.files[0]);
            setUser(data);
            toast.success('Updated successfully');
        } catch (e) {
            toast.error(e?.response?.data?.message);
        }
    };
    const onProfileSubmit = async formData => {
        setIsProfileLoading(true);
        try {
            const { data } = await updateProfileApi(formData);
            setUser(data);
            toast.success('Updated successfully');
        } catch (e) {
            toast.error(e?.response?.data?.message);
        }
        setIsProfileLoading(false);
    };
    const onChangePasswordSubmit = async formData => {
        setIsChangePasswordLoading(true);
        try {
            await changePasswordApi(formData);
            try {
                await globalLogout();
            } catch (e) {
                toast.error(e?.response?.data?.message);
            }
        } catch (e) {
            toast.error(e?.response?.data?.message);
        }
        setIsChangePasswordLoading(false);
    };
    const onPaypalSubmit = async formData => {
        setIsPaypalLoading(true);
        try {
            const { data } = await updateProfileApi(formData);
            setUser(data);
            toast.success('Updated successfully');
        } catch (e) {
            toast.error(e?.response?.data?.message);
        }
        setIsPaypalLoading(false);
    };

    return (
        <>
            <Head>
                <title>Profile | Baslid</title>
            </Head>
            <div>
                <div className="bg-black-800 py-6 lg:py-10">
                    <div className="mx-auto max-w-[89%]">
                        <div className="flex flex-col lg:flex-row items-center">
                            <div className="flex flex-col items-center justify-center min-w-fit">
                                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                                <label
                                    htmlFor="profile-image-upload"
                                    className="cursor-pointer uploader-hover">
                                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                    <img
                                        src={user.avatar ?? '/profile.jpg'}
                                        width="110px"
                                        height="110px"
                                        alt="Profile Image"
                                        className="min-w-[110px] h-28 rounded-full object-cover"
                                    />
                                </label>
                                <input
                                    id="profile-image-upload"
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={onProfileAvatarChange}
                                />
                            </div>
                            <div className="lg:ml-8 flex flex-col w-full">
                                <div className="flex flex-col space-y-2 border-b border-gray-50 mt-4 lg:mt-0 pb-4 lg:pb-5">
                                    <span className="font-semibold text-xl flex items-center justify-center lg:justify-start">
                                        {getUserName(user)}
                                        <svg
                                            className="ml-1"
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
                                    <span className="font-medium text-base text-gray-600 text-center lg:text-left">
                                        @{getUserNameId(user)}
                                    </span>
                                </div>
                                <p className="pt-4 lg:pt-5 text-sm leading-8 text-gray-400">
                                    Upload your Photo. The first image will be
                                    used as the thumbnail in feeds. Drag and
                                    drop up to 3 images to create a mutli-shot.
                                    Drag and drop up to 3 images to create a
                                    mutli-shot.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-[89%] mb-10">
                    <form onSubmit={handleSubmit(onProfileSubmit)}>
                        <div className="mt-6">
                            <div className="text-gray-600 font-medium text-base mb-6">
                                Your Profile:
                            </div>
                            <div className="flex flex-col lg:flex-row w-full">
                                <Input
                                    type="text"
                                    placeholder="First name"
                                    className="w-full"
                                    isSlim
                                    defaultValue={user.firstName}
                                    {...register('firstName', {
                                        required: true,
                                    })}
                                />
                                <Input
                                    type="text"
                                    placeholder="Last name"
                                    className="w-full mt-2 lg:mt-0 lg:ml-4"
                                    isSlim
                                    defaultValue={user.lastName}
                                    {...register('lastName', {
                                        required: true,
                                    })}
                                />
                            </div>
                            <div className="flex flex-col lg:flex-row w-full mt-2 lg:mt-4">
                                <Input
                                    type="tel"
                                    placeholder="Phone"
                                    className="w-full"
                                    isSlim
                                    defaultValue={user.phone}
                                    {...register('phone', { required: true })}
                                />
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full mt-2 lg:mt-0 lg:ml-4"
                                    isSlim
                                    defaultValue={user.email}
                                    {...register('email', { required: true })}
                                />
                            </div>
                            <div className="flex flex-col lg:flex-row w-full mt-2 lg:mt-4">
                                <Input
                                    type="text"
                                    placeholder="Account Type"
                                    className="w-full"
                                    isSlim
                                    defaultValue={getAccountType(user.type)}
                                    disabled
                                />
                                <div className="relative w-full mt-2 lg:mt-0 lg:ml-4">
                                    <Controller
                                        render={({ field: { onChange } }) => (
                                            <Select
                                                onValueChange={e => onChange(e)}
                                                defaultValue={user.country}>
                                                <SelectTrigger
                                                    isMedium
                                                    className="w-full">
                                                    <SelectValue placeholder="Country" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        {Countries.map(
                                                            country => (
                                                                <SelectItem
                                                                    value={
                                                                        country.code
                                                                    }
                                                                    key={
                                                                        country.code
                                                                    }>
                                                                    {
                                                                        country.name
                                                                    }
                                                                </SelectItem>
                                                            )
                                                        )}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        )}
                                        control={control}
                                        name="country"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row w-full mt-2 lg:mt-4">
                                <Input
                                    type="text"
                                    placeholder="Address"
                                    className="w-full"
                                    isSlim
                                    defaultValue={user.address}
                                    {...register('address')}
                                />
                                <div className="relative w-full mt-2 lg:mt-0 lg:ml-4">
                                    <Controller
                                        render={({ field: { onChange } }) => (
                                            <Select
                                                onValueChange={e => onChange(e)}
                                                defaultValue={
                                                    user.language ?? 'EN'
                                                }>
                                                <SelectTrigger
                                                    isMedium
                                                    className="w-full">
                                                    <SelectValue placeholder="Language" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        {Languages.map(
                                                            language => (
                                                                <SelectItem
                                                                    value={
                                                                        language.code
                                                                    }
                                                                    key={
                                                                        language.code
                                                                    }>
                                                                    {
                                                                        language.name
                                                                    }
                                                                </SelectItem>
                                                            )
                                                        )}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        )}
                                        control={control}
                                        name="language"
                                    />
                                </div>
                            </div>
                            <div className="flex w-full mt-2 lg:mt-4">
                                <Textarea
                                    placeholder="Bio"
                                    defaultValue={user.biography}
                                    {...register('biography')}
                                />
                            </div>
                            <div className="mt-2 lg:mt-4">
                                <Button className="w-full" type="submit">
                                    {isProfileLoading ? (
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
                        </div>
                    </form>
                    <form
                        onSubmit={changePasswordHandleSubmit(
                            onChangePasswordSubmit
                        )}>
                        <div className="mt-6">
                            <div className="text-gray-600 font-medium text-base mb-6">
                                Change Password
                            </div>
                            <div className="flex flex-col lg:flex-row w-full mt-4">
                                <Input
                                    type="password"
                                    placeholder="Your Current Password"
                                    className="w-full"
                                    isSlim
                                    {...changePasswordRegister(
                                        'currentPassword',
                                        {
                                            required: true,
                                        }
                                    )}
                                />
                                <Input
                                    type="password"
                                    placeholder="Your new Password"
                                    className="w-full mt-2 lg:mt-0 lg:ml-4"
                                    isSlim
                                    {...changePasswordRegister('password', {
                                        required: true,
                                    })}
                                />
                            </div>
                            <div className="mt-2 lg:mt-4">
                                <Button className="w-full" type="submit">
                                    {isChangePasswordLoading ? (
                                        <Spinner
                                            color="black"
                                            width={32}
                                            height={32}
                                        />
                                    ) : (
                                        'Change Password'
                                    )}
                                </Button>
                            </div>
                        </div>
                    </form>
                    <form onSubmit={paypalHandleSubmit(onPaypalSubmit)}>
                        <div className="mt-6">
                            <div className="text-gray-600 font-medium text-base mb-6">
                                PayPal Payments
                            </div>
                            <div className="flex w-full mt-4">
                                <Input
                                    type="email"
                                    placeholder="Enter Paypal email address"
                                    className="w-full"
                                    isSlim
                                    defaultValue={user.paypalAddress}
                                    {...paypalRegister('paypalAddress', {
                                        required: true,
                                    })}
                                />
                            </div>
                            <div className="mt-2 lg:mt-4">
                                <Button className="w-full" type="submit">
                                    {isPaypalLoading ? (
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
                        </div>
                    </form>
                </div>
            </div>
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
