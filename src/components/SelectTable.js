import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import {connect} from 'react-redux';
import {getTables, getSelectedTable} from '../reducers'
import {selectTable} from '../actionCreators';

class SelectTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tables : props.tables
    };
  }

  filter(value) {
    this.setState(
      {
        tables : this.props.tables.filter((item) => item.label.includes(value)),
        value : value
      });
  }

  render() {
    const {tables, value} = this.state;
    const {onSelect} = this.props;
    return (
      <Autocomplete
        getItemValue={(item) => item.id}
        items={tables}
        renderItem={(item, isHighlighted) =>
          <div key={item.id} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
            {item.label}
          </div>
        }
        inputProps={{placeholder: 'Search table'}}
        value={value}
        onChange={(e) => {
          this.filter(e.target.value);
        }}
        onSelect={(val) => {
          onSelect(val);
        }}
        />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  selectedTable : getSelectedTable(state),
  tables : getTables(state),
  onSelect : ownProps.onSelect
});

export default connect(mapStateToProps)(SelectTable);
