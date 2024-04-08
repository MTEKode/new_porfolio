import './Nav.sass'
import MenuButton from "./MenuButton.jsx";

const Nav = () => {

    return (
        <>
            <header className={'header-content'}>
                <a className={'home-icon'}>Marcos Toribio</a>
                <MenuButton />
           </header>
        </>
    )
}

export default Nav