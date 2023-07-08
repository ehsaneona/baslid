const ProductCard = ({ product }) => {
    return (
        <div className="">
            <div className="p-15 border border-gray-750">
                <img
                    className="w-full h-full h-60 object-contain"
                    src={product.image}
                    alt="product"
                />
            </div>
            <div className="mt-5">
                <div className="flex items-center justify-between">
                    <div className="text-gray-650 font-medium">Products</div>
                    <div className="text-black-900 font-semibold text-xl">
                        $100
                        <span className="text-gray-650 text-base ml-1">
                            Price
                        </span>
                    </div>
                </div>
                <div className="font-semibold text-xl">Muscletech Vitamin</div>
                <button className="rounded-full px-12 h-14 font-medium text-xl hover:bg-transparent hover:text-black-900 hover:border hover:border-black-900 transition-colors bg-black-900 text-white flex items-center justify-center border mt-4 mx-auto">
                    Buy
                </button>
            </div>
        </div>
    );
};
export default ProductCard;
