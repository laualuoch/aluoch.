

export function InfoCard({text}) {
    return (
        <span class="bg-green text-white font-chilanka border border-white inline-block rounded-full px-3 py-1 text-sm font-regular  mr-2 mb-2">{text}</span>
    );
}


export function Card({title, description, tools}) {
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg border-spacing-1 p-5 m-3">
            <div class="px-6 py-4">
                <div class="font-bold text-beige font-chilanka text-xl mb-2">{ title }</div>
                <p class="text-gray-700  font-chilanka text-base">
                    { description }
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                {tools?.map((text) => (
                    <InfoCard text={text} />
                ))}
            </div>
        </div>

    );
}
