import React from 'react';
import { connect } from 'react-redux';
import {Table, View, Dropdown, Card, Text} from 'core-ui';
import data from '../../../utils/MOCK_DATA';
import utils from 'core-utilz';



function mapStateToProps(state) {
  const { items, isFetching, _modified } = state.baselines;
  return {
    items: _modified ? _modified : items,
    isFetching,
    original: items
  };
}
class BaselineContainer extends React.Component {
  constructor(...args) {
    super(...args);
    const columns = ['ID', 'First Name', 'Last Name', 'Email', 'Country', 'IP Address', 'Balance', 'Available']; 
    this.state = {
      columns: columns,
      hiddenColumns: new Set(),
      options: columns.map((item, index) => {
        return {label: item, value: true}
      })
    };
  }
  componentDidMount() {
    const {dispatch } = this.props;
    const {receiveBaselines} = utils.Actions.Baseline;
    dispatch(receiveBaselines({items: data}));
  }
  handleFilter = (val) => {
    const { dispatch } = this.props;
    dispatch('FILTER_TABLEDATA_HOME', val);
  };
  handleSearch = (userInput) => {
    const { dispatch } = this.props;
    const {searchBaselines} = utils.Actions.Baseline;
    const {search} = utils.tableHelpers;

    dispatch(searchBaselines({_modified: search(userInput, this.props.original) }));
  };
  handleGroup = (s) => {
    const { dispatch } = this.props;
    dispatch('GROUP_TABLEDATA_HOME', userInput);
  };
  handleSort = (selection) => {
    const { dispatch } = this.props;
    const {sortBaselines} = utils.Actions.Baseline;
    const {sort} = utils.tableHelpers;
    const direction = selection.state.asc ? 'desc': 'asc';
    dispatch(sortBaselines({_modified: sort(this.props.items, selection.data.replace(/ /g, '_').toLowerCase(), direction) }));
  };
  handleDrag = (selection) => {
    const { dispatch } = this.props;
    const {sortBaselines} = utils.Actions.Baseline;
    const {sort} = utils.tableHelpers;
    dispatch(sortBaselines({_modified: sort(this.props.items, Array.from(selection).map((item) => {return item.replace(/ /g, '_').toLowerCase()})) }));
  };
  handleReset =() => {
     const {dispatch } = this.props;
    const {receiveBaselines} = utils.Actions.Baseline;
    dispatch(receiveBaselines({items: this.props.original, _modified: null}));
  }
  handleSettingsSelection = (selection) => {
    this.setState({hiddenColumns: selection});
  };
  handleChange = ({name, value, index}) => {
    console.log('tst', name, value, index);
    const columns = this.state.hiddenColumns;
    const options = this.state.options;
    if (columns.has(index) ) {
      columns.delete(index);
    } else {
      columns.add(index);
    }
    options[index].value = !options[index].value;
    this.setState({hiddenColumns: columns, options});

  };
  render() {

    return (
  
      <View className="m-baseline">
      <Card className="m-baseline__filter">
      <Text format="h4">Filter Example </Text>
        <Dropdown onChange={this.handleChange} name="filter_table" multi value={this.state.value} options={this.state.options} />
        <Dropdown onChange={this.handleChange} name="filter_table" value={this.state.value} options={this.state.options} />
      </Card>
 <Card className="m-baseline__card">
        {this.props.items ? <Table
          
          title='Fake Data Table'
          dataSource={this.props.items}
          fixedHeader
          columns={this.state.columns}
          handleReset={this.handleReset}
          hiddenColumns={Array.from(this.state.hiddenColumns)}
          handleFilter={this.handleFilter}
          handleColumnClick={this.handleSort}
          handleDrag={this.handleDrag}
          handleSearch={this.handleSearch}
          handleGroup={this.handleGroup}
          handleSort={this.handleSort} /> : null }
      
        </Card>
         </View>
    );
  }
}
export default connect(mapStateToProps)(BaselineContainer);