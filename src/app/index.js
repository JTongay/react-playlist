import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'

import Layout from './components/Layout'

const App = React.createClass({
  render () {
    return (
      <div>
        <h1>Booyah</h1>
        <h2>Yo</h2>
      </div>
    )
  }
})

ReactDOM.render(
    <Layout/>, document.getElementById('wrapper'))

export default App
