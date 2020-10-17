import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeFalse } from '../myevent';

class ListItem extends Component {
  makeFalse = (mainIndex, index) => {
    this.props.dispatch(makeFalse(mainIndex, index));
  };
  render() {
    const { lists } = this.props;
    let listChecked = findCheckedItem(lists);
    return (
      <div className="list-right-side">
        {listChecked.map((list, mainIndex) => {
          return (
            <div className="list-item" key={mainIndex}>
              <header>{list.headerName}</header>
              <ul className="list-item-content">
                {list.values.map((value, index) => {
                  return (
                    <li className="list-item-value-right" key={index}>
                      <div className="content">{value.name}</div>
                      <div className="img-container">
                        <img
                          height="20"
                          width="20"
                          src="https://www.flaticon.com/svg/static/icons/svg/109/109602.svg"
                          alt="cross"
                          onClick={() => {
                            this.makeFalse(list.mainIndex, value.index);
                          }}
                        />
                      </div>
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
function findCheckedItem(lists) {
  let listChecked = [];
  lists.map((listItem, index) => {
    let headerName = listItem.listName;
    let tempArr = [];
    let mainIndex = index;
    listItem.values.map((value, index) => {
      if (value.checked) {
        tempArr.push({
          name: value.name,
          index: index,
        });
      }
      return {};
    });
    if (tempArr.length > 0) {
      listChecked.push({
        headerName,
        values: tempArr,
        mainIndex,
      });
    }
    return {};
  });
  return listChecked;
}
function mapToState(state) {
  return {
    lists: state.lists,
  };
}
export default connect(mapToState)(ListItem);