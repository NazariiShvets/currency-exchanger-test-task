import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {addToFavoriteButtonHandler, getExchanges, setInitialStateToExchanges} from '../../Redux/exchangeReducer'
import Loader from '../Loader/Loader'
import ExchangeCard from './ExchangeCard'


const mapStateToProps = state => ({
    isExchangesFetching: state.exchange.isExchangesFetching,
    exchanges: state.exchange.exchanges,
    favoriteExchanges: state.exchange.favoriteExchanges,
})

const Exchange = ({isExchangesFetching, exchanges, favoriteExchanges, ...props}) => {
    useEffect(() => {
        props.getExchanges()
    }, [])
    useEffect(() => () => {
        props.setInitialStateToExchanges()
    }, [])
    if (isExchangesFetching) {
        return <Loader/>
    }
    const checkIsRateInFavorite = exchange => favoriteExchanges.some(rate => rate.id === exchange.id)

    return exchanges.map(exchange => <ExchangeCard
        key={exchange.r030}
        exchange={exchange}
        buttonHandler={props.addToFavoriteButtonHandler}
        isFavorite={checkIsRateInFavorite(exchange)}
    />)
}


export default connect(mapStateToProps, {
    getExchanges, setInitialStateToExchanges, addToFavoriteButtonHandler
})(Exchange)