import React from 'react'
import ContactsBtn from "./components/contactsBtn"
import MainMenu from "./components/mainMenu"
import s from './css/Header.module.scss'


function Header() {
    return (
        <header className={s.header}>
            <div className={s['header__left-side']}>
                <h1 className={s['header__header']}>Андрей Козинский</h1>
                <p className={s['header__subtext']}>32 года, Оренбург</p>
                <div className={s['header__menu-side']}>
                    <ContactsBtn />
                    <MainMenu />
                </div>
            </div>
            <div className={s['header__right-side']}>
                <ContactsBtn />
            </div>
        </header>
    )
}

export default Header