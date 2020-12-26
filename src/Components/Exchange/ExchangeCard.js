import React from 'react'


const ExchangeCard = ({exchange, buttonHandler, isFavorite}) => (
    <div className="col s12 m7 container">
        <h2 className="header">{exchange.txt}</h2>
        <div className="card horizontal">
            <div className="card-stacked">
                <div className="card-content">
                    <p>1 {exchange.cc} = {exchange.rate} UAH</p>
                </div>
                <div className="card-action">
                    {!isFavorite
                        ? <button onClick={buttonHandler} className="waves-effect waves-light btn">
                            Add to favorites
                        </button>
                        : <button onClick={buttonHandler} className="waves-effect waves-light btn">
                            Remove from favorites
                        </button>

                    }
                </div>
            </div>
        </div>
    </div>
)


export default ExchangeCard