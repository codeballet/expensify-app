import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = ({ startLogin }) => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Espensify App</h1>
        <p>Get your expenses under control</p>
        <button onClick={startLogin}>Login</button>
      </div>
    </div>
  )
}

const mapDispathToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispathToProps)(LoginPage)