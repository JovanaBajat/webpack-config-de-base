import React, { Component } from 'react';

class  App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemValue : '',
      items : []

    }
  }


  handleInputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      itemValue : e.target.value
    })
  }

  updateValue = (e) => {
    e.preventDefault()
    this.setState({
      itemValue: '',
      items: [...this.state.items, this.state.itemValue]
    })
  }

  render() {
    return (
      <div>
        <h2>todo</h2>
      <form>
        <input
          onChange={this.handleInputChange}
          value={this.state.inputValue}/>
        <button onClick={e => this.updateValue(e)}>Add</button>
      </form>
      <ul>
        {this.state.items.map((item, i) => {
          return (
            <li key={i}>
            {item}
          </li>)
        })}
      </ul>

      </div>
    );
  }

}

export default App ;
