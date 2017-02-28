import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'

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
    <App/>, document.getElementById('wrapper'))

export default App
