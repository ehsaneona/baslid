import React, { useRef } from 'react';
import Head from 'next/head';
import Layout from '@/components/layout';
import ProductCard from '@/components/productCard';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import CommentCard from '@/components/commentCard';
import 'swiper/css';
import 'swiper/css/navigation';

function IndexPage() {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <>
            <Head>
                <title>Home | Baslid</title>
            </Head>
            <div>
                <div className="text-center">
                    <h2 className="text-2xl">Gainer</h2>
                    <h1 className="text-[88px]">Fitness Collection</h1>
                    <h3 className="text-3xl font-medium">
                        Shape your Ideal Body with our products
                    </h3>
                    <a
                        href="#products"
                        className="max-w-fit mx-auto rounded-full border border-black-900 px-12 h-14 flex items-center justify-center font-medium text-xl mt-9 hover:bg-black-900 hover:text-white transition-colors">
                        Buy now
                    </a>
                </div>
                <div className="w-full max-h-[576px] my-44">
                    <img
                        className="w-full h-full object-cover"
                        src="/banner.png"
                        alt="banner"
                    />
                </div>
                <div className="text-center">
                    <h4 className="text-2xl">Shop</h4>
                    <h4 className="text-[88px]">Our Product</h4>
                    <h4 className="text-3xl font-medium">
                        See and buy our new Product
                    </h4>
                </div>
                <div className="mt-44" id="products">
                    <div className="text-end text-lg">5 Products</div>
                    <div className="grid grid-cols-3 gap-14 mt-10">
                        {[1, 2, 3, 4, 5].map((product, index) => (
                            <ProductCard
                                key={index}
                                product={{
                                    id: index + 1,
                                    image: `/products/${index + 1}.png`,
                                    price: 100,
                                    name: 'Muscletech Vitamin',
                                }}
                            />
                        ))}
                    </div>
                </div>
                <div className="mt-44 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="mb-2 uppercase">Our Works</span>
                        <span className="font-medium text-4xl leading-snug uppercase">
                            See how others are feeling <br /> about us
                        </span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <button
                            className="w-8 h-8 rounded-full flex items-center justify-center bg-black-900 text-white"
                            ref={navigationPrevRef}>
                            <ChevronLeftIcon />
                        </button>
                        <button
                            className="w-8 h-8 rounded-full flex items-center justify-center bg-black-900 text-white"
                            ref={navigationNextRef}>
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>
                <div className="mt-44">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}>
                        {[6, 7, 8, 9, 10].map((item, index) => (
                            <SwiperSlide>
                                <CommentCard key={index} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}

IndexPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default IndexPage;
