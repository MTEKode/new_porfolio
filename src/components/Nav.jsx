import './Nav.sass'
import MenuButton from "./MenuButton.jsx";

const Nav = ({currentPageIndex}) => {

    return (
        <>
            <header className={'header-content'}>
                <a className={`home-icon ${currentPageIndex === 2 ? 'home-icon-primary-color' : ''}`}>Marcos Toribio</a>
                <MenuButton />
           </header>
        </>
    )
}

export default Nav