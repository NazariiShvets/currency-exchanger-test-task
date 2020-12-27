import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {getExchanges, setInitialStateToExchanges} from '../../Redux/exchangeReducer'
import Loader from '../Loader/Loader'


const mapStateToProps = state => ({
    isExchangesFetching: state.exchange.isExchangesFetching,
    exchanges: state.exchange.exchanges,
})

const Converter = ({isExchangesFetching, exchanges, setInitialStateToExchanges, getExchanges, ...props}) => {
    const [amount, setAmount] = useState(0)
    const firstSelectRef = React.createRef()
    const secondSelectRef = React.createRef()
    const firstInputRef = React.createRef()
    useEffect(() => {
        getExchanges()
    }, [getExchanges])
    useEffect(() => () => {
        setInitialStateToExchanges()
    }, [setInitialStateToExchanges])
    if (isExchangesFetching) {
        return <Loader/>
    }
    const inputHandler = (event) => {
        setAmount(+firstInputRef.current.value * +firstSelectRef.current.value / +secondSelectRef.current.value)
    }
    return (<div className='container mt1'>
            <div className="row">
                <div className="col-sm">
                    <select ref={firstSelectRef}
                            onChange={inputHandler}
                            className="form-select"
                            aria-label="Default select example">
                        {exchanges.map(exchange => <option
                                key={exchange.r030}
                                value={exchange.rate}
                            >
                                {exchange.txt}
                            </option>
                        )}
                    </select>
                </div>
                <div className="col-sm">
                    <input type="number"
                           step="0.01"
                           min="0"
                           ref={firstInputRef}
                           onChange={inputHandler}
                           required
                           className="form-control"
                           placeholder="Введите значение"
                    />
                </div>
                <div className="col-sm">
                    <select ref={secondSelectRef}
                            onChange={inputHandler}
                            className="form-select"
                            aria-label="Default select example"
                    >
                        {exchanges.map(exchange => <option
                            key={exchange.r030}
                            value={exchange.rate}
                        >
                            {exchange.txt}
                        </option>)}
                    </select>
                </div>
                <div className="col-sm">
                    <input type="number"
                           value={amount}
                           disabled
                           className="form-control"
                           placeholder="Result"
                    />
                </div>
            </div>
        </div>
    )
}
export default connect(mapStateToProps, {getExchanges, setInitialStateToExchanges})(Converter)