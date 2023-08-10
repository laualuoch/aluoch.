
const HomeRoleItem = ({ userRole, onClickButton, buttonText }) => {
    return (
        <div class="border-double border-4 border-green hover:border-pink p-20 h-auto max-w-full rounded-lg" >
            <div class="bg-[url(https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg)] h-[400px] w-[400px] relative">
                <div class="absolute bottom-0 px-4 py-3 bg-cream w-full">
                    <h1 class="text-white font-regular font-chilanka font-semibold text-4xl">{userRole}</h1>
                    <button 
                    class="bg-green hover:bg-pink text-white font-regular font-chilanka py-2 px-4 border border-blue-700 rounded"
                    onClick={onClickButton}>
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HomeRoleItem;