import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import New from '../../components/functional/companies/new'
import { saveCompany, updateCompany, resetCompany } from '../../actions/company'

const mapStateToProps = state => ({
  company: state.company.company,
  companyUI: state.company.ui
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { saveCompany, updateCompany, resetCompany },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(New)
