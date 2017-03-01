import React, { PropTypes } from 'react'

import Title from './Header/Title'

const Header = React.createClass({
  render () {
    return (
    <div>
      <Title />
      <header>header</header>
    </div>
    )
  }
})

export default Header
