import InfoCard from "./InfoCard";

const Card = ({title, description, tools}) => {
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{ title }</div>
                <p class="text-gray-700 text-base">
                    { description }
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                {tools?.map((text)=> {
                    <InfoCard text={text}/>
                })}
            </div>
        </div>

    );
}

export default Card;