import React from "react"

class Column extends React.Component {
  render() {
    return (
      <div style={{
      	maxWidth: '30%',
      }}>
      	{this.props.children}
      </div>
    )
  }
}

export default Column