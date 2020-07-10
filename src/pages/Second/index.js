import { Component } from "react";
import { html } from './html.js'
import styles from './style.css';

class Second extends Component {
  render() {
    return <div dangerouslySetInnerHTML={{__html: html}}></div>
  }
}

export default Second;