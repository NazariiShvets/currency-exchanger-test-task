import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addToFavorite, removeFromFavorite} from '../../Redux/exchangeReducer'


const ExchangeCard = ({exchange, isInFavorites, ...props}) => {
    const [isFavorite, toggleIsFavorite] = useState(isInFavorites)
    const addButtonHandler = () => {
        toggleIsFavorite(prev => !prev)
        props.addToFavorite(exchange)
    }
    const removeButtonHandler = () => {
        toggleIsFavorite(prev => !prev)
        props.removeFromFavorite(exchange)
    }
    return (
        <div className="col s12 m7 container hoverable left-align">
            <h2 className="header pl1">{exchange.txt}</h2>
            <div className="card horizontal">
                <div className="card-stacked">
                    <div className="card-content pl1">
                        <p>1 {exchange.cc} = {exchange.rate} UAH</p>
                    </div>
                    <div className="card-action">
                        <button onClick={addButtonHandler}
                                className="waves-effect waves-light btn mr1"
                                disabled={isFavorite}
                        >
                            Add to favorites
                        </button>
                        <button onClick={removeButtonHandler}
                                className="waves-effect waves-light btn"
                                disabled={!isFavorite}
                        >
                            Remove from favorites
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default connect(null, {addToFavorite, removeFromFavorite})(ExchangeCard)