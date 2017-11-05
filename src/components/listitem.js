import React from "react"
import '../layouts/index.css'

class ListItem extends React.Component {
  render() {
    return (
      <div style={{ fontSize: '1em' }}>
      	<a href={this.props.link} target="_blank">{this.props.title}</a>
      	<p style={{fontSize: '.9em', margin: '.2rem 0',}}>
          {this.props.desc ? this.props.desc : null}
          {this.props.date ? <br/> : null}
        <i>
          {this.props.date ? this.props.date : null}
        </i>
      	</p>
        <br/>
      	{this.props.children}
      </div>
    )
  }
}

export default ListItem