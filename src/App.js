import React from 'react'
import Header from './Components/Header/Header'
import s from './index.module.scss'
import {Switch, Route, Redirect} from 'react-router-dom'
import Converter from './Components/Converter/Converter'
import Exchange from './Components/Exchange/Exchange'


const App = () => (<>
    <Header/>
    <main className={s.main}>
        <Switch>
            <Route path='/converter' component={Converter}/>
            <Route path='/exchange' component={Exchange}/>
            <Route path='/' exact>
                <Redirect to='/converter'/>
            </Route>
        </Switch>
    </main>
</>)

export default App