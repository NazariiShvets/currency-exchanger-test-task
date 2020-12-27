import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getExchanges, setInitialStateToExchanges} from '../../Redux/exchangeReducer'
import Loader from '../Loader/Loader'
import {Select} from 'react-materialize'


const mapStateToProps = state => ({
    isExchangesFetching: state.exchange.isExchangesFetching,
    exchanges: state.exchange.exchanges,
})

const Converter = ({
                       isExchangesFetching, exchanges,
                       setInitialStateToExchanges, getExchanges, ...props
                   }) => {
    useEffect(() => {
        getExchanges()
    }, [getExchanges])
    useEffect(() => () => {
        setInitialStateToExchanges()
    }, [setInitialStateToExchanges])
    if (isExchangesFetching) {
        return <Loader/>
    }
    return (<div className='container'>
    </div>)
}
export default connect(mapStateToProps, {getExchanges, setInitialStateToExchanges})(Converter)