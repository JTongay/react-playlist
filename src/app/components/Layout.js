import React, { PropTypes } from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = React.createClass({
  render () {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
})

export default Layout
