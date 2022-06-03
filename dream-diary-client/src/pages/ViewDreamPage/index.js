import React from 'react'
import { useParams } from 'react-router-dom'

class ViewDreamPage extends React.Component {
  render() {
    return (
      <div className="page view-dream-page">
        DREAM PAGE id={this.props.params.id}
      </div>
    )
  }
}

// Wrap the class component within a function component to use hooks
const ViewDreamPageWrapper = (props) => {
  const params = useParams()

  return <ViewDreamPage params={params} {...props} />
}

export default ViewDreamPageWrapper
