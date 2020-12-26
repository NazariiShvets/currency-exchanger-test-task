import React from 'react'
import { connect } from 'react-redux'


const mapStateToProps = state => ({})


const Converter = ({ ...props }) => {
    return (
        <h1>Converter</h1>
    )
}
export default connect(mapStateToProps, {})(Converter)