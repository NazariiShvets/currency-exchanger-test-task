import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {getExchanges, setBasicRate, setInitialStateToExchanges} from '../../Redux/exchangeReducer'
import Loader from '../Loader/Loader'


const mapStateToProps = state => ({
    isExchangesFetching: state.exchange.isExchangesFetching,
    exchanges: state.exchange.exchanges,
    basicRate: state.exchange.basicRate,
})

const Converter = ({
                       isExchangesFetching,
                       exchanges,
                       setInitialStateToExchanges,
                       getExchanges,
                       basicRate,
                       setBasicRate,
                       ...props
                   }) => {
    const [amount, setAmount] = useState(0)
    const firstSelectRef = React.createRef()
    const secondSelectRef = React.createRef()
    const firstInputRef = React.createRef()
    useEffect(() => {
        getExchanges()
    }, [getExchanges, basicRate])
    useEffect(() => () => {
        setInitialStateToExchanges()
    }, [setInitialStateToExchanges])
    if (isExchangesFetching) {
        return <Loader/>
    }
    const inputHandler = () => {
        setAmount(Math.trunc(+firstInputRef.current.value * +firstSelectRef.current.value / +secondSelectRef.current.value * 100) / 100)
    }
    const basicRateHandler = event => {
        setBasicRate(JSON.parse(event.target.value))
    }
    const firstSelectRatesWithBasicRate = exchanges.reduce((arr, rate) => arr.some(exchange => exchange.r030 === rate.r030)
        ? arr : [...arr, rate], [basicRate]).map(exchange => <option key={exchange.r030}
                                                                     value={exchange.rate}>{exchange.txt}</option>)
    const secondSelectRatesWithBasicRate = exchanges.reduce((arr, rate) => arr.some(exchange => exchange.r030 === rate.r030)
        ? arr : [...arr, rate], [basicRate]).map(exchange => <option key={exchange.r030}
                                                                     value={exchange.rate}>{exchange.txt}</option>)
    return (
        <div className='container mt1'>
            <div className='row mb2'>
                <div className='col-sm'>Базова валюта : {basicRate.txt}</div>
            </div>
            <div className='row'>
                <div className='col-sm mb2'>
                    Поміняти базову валюту
                    <select onChange={basicRateHandler} className="form-select mt1">
                        {exchanges.map(exchange => <option
                            key={exchange.r030}
                            value={JSON.stringify(exchange)}
                        >
                            {exchange.txt}
                        </option>)}
                    </select>
                </div>
                <hr/>
            </div>
            <div className="row">
                <div className="col-sm">
                    <select ref={firstSelectRef}
                            onChange={inputHandler}
                            className="form-select"
                            aria-label="Default select example">
                        {firstSelectRatesWithBasicRate}
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
                        {secondSelectRatesWithBasicRate}
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
export default connect(mapStateToProps, {getExchanges, setInitialStateToExchanges, setBasicRate})(Converter)