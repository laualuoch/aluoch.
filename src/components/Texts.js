
export const SectionTitle = ({text}) => {
    return (
        <h6>{ text }</h6>

    );
}


export const ErrorText = ({text}) => {
    return (
        <h1 className="text-red font-md">{text}</h1>
    );
}