import React from 'react'
import {connect} from 'react-redux'
import s from './Header.module.scss'
import {toggleIsLogged} from '../../Redux/headerReducer'
import {toggleIsDarkTheme} from '../../Redux/globalContextReducer'


const mapStateToProps = state => ({
    isLogged: state.header.isLogged,
    isDarkTheme: state.global.isDarkTheme
})

const Header = ({isLogged, isDarkTheme, ...props}) => {
    const loginHandler = () => {
        props.toggleIsLogged(true)
    }
    const logoutHandler = () => {
        props.toggleIsLogged(false)
    }
    return (
        <header className={isDarkTheme ? s.headerDark : s.header}>
            <div className={s.title}>Обменник валют</div>
            <div className={s.flex}>
                <div className={s.btn} onClick={() => props.toggleIsDarkTheme(!isDarkTheme)}>Сменить тему</div>
                {isLogged
                    ? <div onClick={logoutHandler} className={s.btn}>Выйти</div>
                    : <div onClick={loginHandler} className={s.btn}>Ввойти</div>
                }
            </div>
        </header>
    )
}

export default connect(mapStateToProps, {toggleIsLogged, toggleIsDarkTheme})(Header)
