import { Component } from "react";
import { html } from './html.js'

class Second extends Component {

  render() {
    return <div dangerouslySetInnerHTML={{__html: html}}></div>
  }
}

export default Second;