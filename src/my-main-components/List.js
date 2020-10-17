import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggle } from '../myevent';

class List extends Component {
  handleToogle = (mainIndex, index) => {
    this.props.dispatch(toggle(mainIndex, index));
  };
  render() {
    const { lists } = this.props;

    if (lists.length === 0) {
      return <h1>No item to show</h1>;
    }
    console.log('list-item', lists);

    return (
      <div className="list">
        {lists.map((list, mainIndex) => {
          return (
            <div className="list-item-left" key={mainIndex}>
              <header>{list.listName}</header>
              <ul className="list-item-content">
                {list.values.map((value, index) => {
                  return (
                    <li className="list-item-value" key={index}>
                      <input
                        type="checkbox"
                        onChange={() => {
                          this.handleToogle(mainIndex, index);
                        }}
                        checked={value.checked}
                      />
                      <label>{value.name}</label>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}
function mapToState(state) {
  return {
    lists: state.lists,
  };
}
export default connect(mapToState)(List);