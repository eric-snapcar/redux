import React from 'react'
import Filter_Link from '../containers/Filter_Link'

const Footer = () => (
  <p>
    Show:
    {" "}
    <Filter_Link filter="SHOW_ALL">
      All
    </Filter_Link>
    <Filter_Link filter="SHOW_ACTIVE">
      Active
    </Filter_Link>
    <Filter_Link filter="SHOW_COMPLETED">
      Completed
    </Filter_Link>
  </p>
)

export default Footer
