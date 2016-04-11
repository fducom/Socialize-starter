import React from 'react'

export default class Footer extends React.Component{
  thisYear(){
    return new Date().getFullYear()
  }

  render(){
    return (<footer className='page-footer'>
      <div className="footer-copyright">
          <div className="container">
          © {this.thisYear()} All rights reserved, all texts belong to their respective authors.
          </div>
        </div>
    </footer>)
  }
}
