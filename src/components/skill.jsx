import React from "react"

class Skill extends React.Component {
  render() {
    return (
      <div className="skills" style={{
      	padding: '2px 10px',
      	marginRight: '10px',
      	marginTop: '10px',
      }}
      className={this.props.name}>
      	{this.props.name}
      </div>
    )
  }
}

export default Skill