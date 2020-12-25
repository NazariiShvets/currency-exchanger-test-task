import React from 'react'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import s from './index.module.scss'
import {connect} from 'react-redux'


const mapStateToProps = state => ({
    isDarkTheme: state.global.isDarkTheme
})

const App = ({isDarkTheme}) => (
    <div className={isDarkTheme ? s.appDark : s.app}>
        <Header/>
        <main className={s.main}>

        </main>
        <Footer/>
    </div>
)

export default connect(mapStateToProps, {})(App)
