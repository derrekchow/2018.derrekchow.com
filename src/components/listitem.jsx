import React from "react"
import '../styles/index.css'


class ListItem extends React.Component {
  render() {
    return (
      <div>
        <span style={{
          fontWeight: 500
        }}>
        	<a href={this.props.link} target="_blank">{this.props.title}</a>
          {this.props.desc ? <span>&nbsp;&nbsp;{this.props.desc}</span> : null}
          &nbsp;&nbsp;{this.props.trophy ? '🏆' : null}{this.props.star ? '❤️' : null}
          <br/>
        </span>
        {this.props.date ? <span>{this.props.date}<br/></span> : null}
        <div className="skills" style={{letterSpacing: 1.1}}>{this.props.children}</div><br/>
      </div>
    )
  }
}

export default ListItem