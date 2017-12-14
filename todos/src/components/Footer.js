import React from 'react'
import Filter_Link from '../containers/Filter_Link'

class Footer extends React.Component  {
  // MARK: React.Component override
  render(){
      return (
        <div>
          Show:
          {" "}
          <Filter_Link filter="SHOW_ALL" title="All"/>
          <Filter_Link filter="SHOW_ACTIVE" title="Active"/>
          <Filter_Link filter="SHOW_COMPLETED" title="Completed"/>
        </div>
      );
  }
}

export default Footer
