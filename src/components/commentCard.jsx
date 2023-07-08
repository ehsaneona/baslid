const CommentCard = () => {
    return (
        <div className="p-6 border border-gray-750 select-none">
            <div className="flex items-center space-x-5">
                <img
                    className="rounded-full w-12 h-12"
                    src="/avatar.png"
                    alt="avatar"
                />
                <div className="flex flex-col">
                    <span className="uppercase font-bold text-base">
                        Vlad Radchenko
                    </span>
                    <span className="uppercase text-sm">
                        Creative director at matterd.
                    </span>
                </div>
            </div>
            <p className="mt-6 mb-6 text-justify font-medium">
                “This single handedly eliminated all my costs related to returns
                & exchanges, giving me enough extra profits to hire an entire
                salaried employee to grow my business even more.”
            </p>
            <div className="border-t border-t-gray-750 pt-6 flex items-center justify-between text-gray-650">
                <div>APRIL 2023</div>
                <div>Founder of ACE</div>
            </div>
        </div>
    );
};
export default CommentCard;
