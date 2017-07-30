import React from 'react'
import { Header, Input, Menu } from 'semantic-ui-react'

var dateFormat = require('dateformat')
var now = new Date();
var today = dateFormat(now, 'yyyy-mm-dd')

class SubletFilters extends React.Component {
  state = {
    startDateFilter: '',
    endDateFilter: '',
    minPriceFilter:'',
    maxPriceFilter: '',
    searchFilter: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, this.sendState)
  }

  sendState = () => {
    this.props.onFilter(this.state)
  }

  render () {
    return (
      <Menu vertical fluid>
        <Menu.Item>
          <Header as='h4'>Filter Listings</Header>
        </Menu.Item>
        <Menu.Item>
          <Header as='h5'>Available On</Header>
          <Input type='date' fluid name='startDateFilter' value={this.state.startDateFilter} min={today} onChange={this.handleChange} />
        </Menu.Item>
        <Menu.Item>
          <Header as='h5'>Available Until</Header>
          <Input type='date' fluid name='endDateFilter' value={this.state.endDateFilter} min={this.state.startDateFilter} onChange={this.handleChange} />
        </Menu.Item>
        <Menu.Item>
          <Header as='h5'>Min Monthly Rent</Header>
          <Input fluid label='$' type='number' name='minPriceFilter' placeholder='min rent' value={this.state.minPriceFilter} min='0' onChange={this.handleChange} />
        </Menu.Item>
        <Menu.Item>
          <Header as='h5'>Max Monthly Rent</Header>
          <Input fluid label='$' type='number' name='maxPriceFilter' placeholder='max rent' value={this.state.maxPriceFilter} min={this.state.minPriceFilter * 1} onChange={this.handleChange} />
        </Menu.Item>
        <Menu.Item>
          <Header as='h5'>Keyword Search</Header>
          <Input fluid icon='search' type='text' name='searchFilter' placeholder='keywords' value={this.state.searchFilter} onChange={this.handleChange} />
          <br />
          <p>Separate keywords with a comma.</p>
        </Menu.Item>
      </Menu>
    )
  }
}

export default SubletFilters
