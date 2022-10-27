import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Show from '../../components/functional/companies/show'
import { fetchCompany, resetCompany } from '../../actions/company'

const mapStateToProps = state => ({
  company: state.company.company,
  companyUI: state.company.ui
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchCompany, resetCompany }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Show)
