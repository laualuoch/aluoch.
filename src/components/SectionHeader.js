

export const SectionHeader = ({title, description}) => {
    return (
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-lato font-extrabold text-beige">{ title }</h2>
                    <p class="font-light font-lato text-white sm:text-xl dark:text-gray-400">{ description }</p>
            </div> 
    )
}