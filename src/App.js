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

  updateValue = (event) => {
    event.preventDefault()
    this.setState({
      items: [...this.state.items, this.state.itemValue],
      itemValue: ''
    })
  }

  deleteItem = (index) => {
    this.state.items.splice(index, 1)
    this.forceUpdate();
  }

  editItem = (str, ind) => {
    this.setState({
      itemValue : str,
      currentItemIndex : ind,
      update: true
    });
  }

  updateListItem = (e) => {
    e.preventDefault();
    let newList = [...this.state.items.slice(0, this.state.currentItemIndex), this.state.itemValue, ...this.state.items.slice(this.state.currentItemIndex +1)];
    this.setState({
      items: newList,
      update: false,
      itemValue: ''
    })
  }

  render() {
    return (
      <div>
        <h2>todo</h2>
      <form>
        <input
          onChange={this.handleInputChange}
          value={this.state.itemValue}/>
          {
            this.state.update ?
            <button onClick={this.updateListItem}>Update</button>
            : <button onClick={event => this.updateValue(event)}>Add</button>
          }
      </form>
      <ul>
        {this.state.items.map((item, index) => {
          return (
            <li key={index}>
            {item}
            <button
              onClick={() => this.deleteItem(index)}
              >X
            </button>
            <button
              onClick={() => this.editItem(item, index)}
              >Edit
            </button>
          </li>)
        })}
      </ul>

      </div>
    );
  }

}

export default App ;
