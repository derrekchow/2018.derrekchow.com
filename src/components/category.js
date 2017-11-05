import React from "react"

class Category extends React.Component {
  render() {
    return (
      <div>
      	<h1 style={{
      		fontSize: '.8em',
      		opacity: '.4',
      		fontFamily: 'Quicksand',
      		fontWeight: 400,
      		paddingBottom: '1em',
      	}}>{this.props.title}</h1>
      	{this.props.children}
      </div>
    )
  }
}

export default Category