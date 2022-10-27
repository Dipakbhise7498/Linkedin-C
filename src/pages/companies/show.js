import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Show from '../../containers/companies/show'

class ShowCompanyPage extends Component {
  render () {
    return <Show history={this.props.history} id={this.props.match.params.id} />
  }
}

ShowCompanyPage.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
}

export default ShowCompanyPage
