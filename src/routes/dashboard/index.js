import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Card } from 'antd'
import styles from './index.less'
import { color } from 'utils'

import SalesChart from '../../components/Charts/salesChart'

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}

function Dashboard({ dashboard }) {
  var data = [
    { value: 1, name: "是" },
    { value: 2, name: "否" }
  ]
  return (
    <div>
      <SalesChart />
    </div>
  )
}

Dashboard.propTypes = {
  dashboard: PropTypes.object,
}

export default connect(({ dashboard }) => ({ dashboard }))(Dashboard)
