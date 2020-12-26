import React from 'react'
import {connect} from 'react-redux'
import {toggleIsLogged} from '../../Redux/headerReducer'
import {NavLink} from 'react-router-dom'


const mapStateToProps = state => ({
    isLogged: state.header.isLogged,
})

const Header = ({isLogged, ...props}) => {
    const loginHandler = () => {
        props.toggleIsLogged(true)
    }
    const logoutHandler = () => {
        props.toggleIsLogged(false)
    }
    return (
        <nav className='red darken-4'>
            <div className="nav-wrapper container ">
                {isLogged
                    ? <div onClick={logoutHandler} className="brand-logo right">Logout</div>
                    : <div onClick={loginHandler} className="brand-logo right">Login</div>
                }
                <ul className="left hide-on-med-and-down">
                    <li><NavLink to='/converter'>Converter</NavLink></li>
                    <li><NavLink to='/exchange'>Exchange</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default connect(mapStateToProps,
    {
        toggleIsLogged
    }
)(Header)
