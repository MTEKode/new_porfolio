import './App.sass'
import './components/Nav.jsx'
import mePng from './assets/me.png'
import Nav from "./components/Nav.jsx";
import {t} from "i18next";

function App() {

  return (
    <>
        <Nav />
        <section className={'main-content'}>
            <div className={'main-div'}>
                <h1>FullStack<br/>Developer.</h1>
                <p>{t('main_sub_desc')}</p>
            </div>
            <div className={'img-div'}>
                <img src={mePng} alt="me"/>
            </div>
        </section>
        <section></section>
        <section></section>
    </>
  )
}

export default App
