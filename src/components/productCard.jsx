import { useProvider } from '@/context/Store';
import { cx } from 'class-variance-authority';
import { toast } from 'react-toastify';

const ProductCard = ({ product }) => {
    const { basket, setBasket } = useProvider();
    const isInBasket = basket.find(({ id }) => id === product.id);

    return (
        <div className="">
            <div className="p-15 border border-gray-750 relative">
                <img
                    className="w-full h-60 object-contain"
                    src={product.image}
                    alt="product"
                />
                <button
                    className={cx(
                        'rounded-full h-15 w-15 transition-colors flex items-center justify-center absolute bottom-5 left-5',
                        isInBasket
                            ? 'bg-white text-black-900 border border-black-900'
                            : 'bg-black-900 text-white'
                    )}
                    onClick={() => {
                        if (isInBasket)
                            return toast.info(
                                'This product added to basket before.'
                            );

                        setBasket(prevProducts => [...prevProducts, product]);
                    }}>
                    <svg
                        width="27"
                        height="27"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_130_3354)">
                            <path
                                d="M21.1501 9.375L20.0501 26.25L5.40011 24.7375C4.72511 24.6625 4.26261 24.0375 4.41261 23.375L7.48761 9.375H21.1501V9.375Z"
                                stroke="currentColor"
                                strokeWidth="1.875"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M25.1251 22.8125L20.0376 26.25L21.1376 9.375L24.5376 10.4625L25.6126 21.775C25.6501 22.1875 25.4626 22.575 25.1251 22.8125Z"
                                stroke="currentColor"
                                strokeWidth="1.875"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10.1377 10.8876L10.6002 7.0751C10.8502 5.0126 12.8002 3.53759 14.9627 3.77509C17.1252 4.01259 18.6752 5.87509 18.4252 7.93759L18.0377 11.1751"
                                stroke="currentColor"
                                strokeWidth="1.875"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_130_3354">
                                <rect
                                    width="30"
                                    height="30"
                                    fill="currentColor"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
            <div className="mt-5">
                <div className="flex items-center justify-between">
                    <div className="text-gray-650 font-medium">Products</div>
                    <div className="text-black-900 font-semibold text-xl">
                        ${product.price}
                        <span className="text-gray-650 text-base ml-1">
                            Price
                        </span>
                    </div>
                </div>
                <div className="font-semibold text-xl">{product.name}</div>
            </div>
        </div>
    );
};
export default ProductCard;
