import * as React from 'react'
import "./Footer.scss";
export default class Footer extends React.Component {
  render(){
      return (
      <footer className="footer">
        <div className="container">
          <span className="text-muted">@copyright</span>
        </div>
      </footer>
      )
  }
}