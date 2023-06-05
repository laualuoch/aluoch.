import '../index.css'

const MenuItem = ({section}) => {
    return (
        <a href='#'
        className='px-8'>
      {section}
    </a>
    )
};

const Menu = () => {
    return (
        <nav className='flex px-4 space-x-8'>
            <MenuItem section= "HOME"/>
            <MenuItem section= "ABOUT"/>
            <MenuItem section= "RESUME"/>
            <MenuItem section= "PORTFOLIO"/>
            <MenuItem section= "HIRE ME"/>
        </nav>
    )
}

export default Menu;