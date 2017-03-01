import React, { PropTypes } from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = React.createClass({
  getInitialState(){
    return {
      name: 'Joey'
    }
  },

  render () {
    return (
      <div>
        {this.state.name}
        <Header />
        <Footer />
      </div>
    )
  }
})

export default Layout
