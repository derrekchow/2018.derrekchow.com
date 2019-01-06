import React from "react"

class Category extends React.Component {
  render() {
    return (
      <div style={{padding: '2em 0'}}>
        <h2>{this.props.title}</h2>
      	{this.props.children}
      </div>
    )
  }
}

export default Category