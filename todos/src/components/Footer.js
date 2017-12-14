import React from 'react'
import Link_Filter from '../containers/Link_Filter'

class Footer extends React.Component  {
  // MARK: React.Component override
  render(){
      return (
        <div>
          Show:
          {" "}
          <Link_Filter filter="SHOW_ALL" title="All"/>
          <Link_Filter filter="SHOW_ACTIVE" title="Active"/>
          <Link_Filter filter="SHOW_COMPLETED" title="Completed"/>
        </div>
      );
  }
}

export default Footer
