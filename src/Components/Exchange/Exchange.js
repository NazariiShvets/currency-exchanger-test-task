import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getExchanges, setInitialStateToExchanges} from '../../Redux/exchangeReducer'
import Loader from '../Loader/Loader'
import ExchangeCard from './ExchangeCard'


const mapStateToProps = state => ({
    isExchangesFetching: state.exchange.isExchangesFetching,
    exchanges: state.exchange.exchanges,
    favoriteExchanges: state.exchange.favoriteExchanges,
})

const Exchange = ({isExchangesFetching, exchanges, favoriteExchanges, getExchanges, setInitialStateToExchanges}) => {
    useEffect(() => {
        getExchanges()
    }, [getExchanges])
    useEffect(() => () => {
    }, [setInitialStateToExchanges])
    if (isExchangesFetching) {
        return <Loader/>
    }
    const exchangesWithFavoritesOnTopArr = exchanges.reduce((ratesArr, exchange) => !(
        ratesArr.some(rate => rate.r030 === exchange.r030))
        ? [...ratesArr, exchange]
        : ratesArr, favoriteExchanges)

    return exchangesWithFavoritesOnTopArr.map(exchange => <ExchangeCard
        key={exchange.r030}
        exchange={exchange}
        isInFavorites={favoriteExchanges.some(rate => rate.r030 === exchange.r030)}
    />)
}


export default connect(mapStateToProps, {getExchanges, setInitialStateToExchanges})(Exchange)