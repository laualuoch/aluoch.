const MenuItem = ({section}) => {
    return (
        <li>{section}</li>
    )
};

const Menu = () => {
    return (
        <ul className="inline listNone">
            <MenuItem section= "HOME"/>
            <MenuItem section= "ABOUT"/>
            <MenuItem section= "RESUME"/>
            <MenuItem section= "PORTFOLIO"/>
            <MenuItem section= "HIRE ME"/>
        </ul>
    )
}

export default Menu;