import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'

class SearchBox extends Component {
  render () {
    return (
      <Input.Search
        placeholder='Search for companies and press enter...'
        enterButton='Search'
        size='large'
        onSearch={async search => {
          this.props.updateSearch(search)
          this.props.updateCurrentPage()
          await this.props.fetchCompanies()
        }}
        style={{ marginBottom: '24px' }}
      />
    )
  }
}

SearchBox.propTypes = {
  fetchCompanies: PropTypes.func.isRequired,
  updateSearch: PropTypes.func.isRequired,
  updateCurrentPage: PropTypes.func.isRequired
}

export default SearchBox
