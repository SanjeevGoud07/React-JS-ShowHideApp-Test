// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {isShowF: false, isShowL: false}

  onFirst = () => {
    this.setState(prevState => {
      const {isShowF} = this.state
      if (isShowF === true) {
        return {isShowF: false}
      }
      return {isShowF: true}
    })
  }

  onLast = () => {
    this.setState(prevState => {
      const {isShowL} = this.state
      if (isShowL === true) {
        return {isShowL: false}
      }
      return {isShowL: true}
    })
  }

  render() {
    const {isShowF, isShowL} = this.state
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="Box">
          <div className="Boxs">
            <button type="button" onClick={this.onFirst}>
              {' '}
              Show/Hide Firstname
            </button>
            {isShowF ? (
              <div className="Name">
                <p>Joe</p>
              </div>
            ) : null}
          </div>
          <div className="Boxs">
            <button type="button" onClick={this.onLast}>
              {' '}
              Show/Hide Lastname
            </button>
            {isShowL ? (
              <div className="Name">
                <p>Jonas</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
