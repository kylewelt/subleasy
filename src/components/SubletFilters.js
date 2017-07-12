import React from 'react'
import { Header, Input, Label, Menu } from 'semantic-ui-react'

var dateFormat = require('dateformat')
var now = new Date();
var today = dateFormat(now, 'yyyy-mm-dd')

class SubletFilters extends React.Component {
  state = {
    startDateFilter: today,
    endDateFilter: '',
    minPriceFilter:'',
    maxPriceFilter: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
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
          <Input type='date' fluid name='' value={this.state.endDateFilter} min={this.state.startDateFilter} onChange={this.handleChange} />
        </Menu.Item>
        <Menu.Item>
          <Header as='h5'>Min Monthly Rent</Header>
          <Input fluid label='$' type='number' name='minPriceFilter' placeholder='min rent' value={this.state.minPriceFilter} min='0' onChange={this.handleChange} />
        </Menu.Item>
        <Menu.Item>
          <Header as='h5'>Max Monthly Rent</Header>
          <Input fluid label='$' type='number' name='maxPriceFilter' placeholder='max rent' value={this.state.maxPriceFilter} min='0' onChange={this.handleChange} />
        </Menu.Item>
      </Menu>
    )
  }
}

export default SubletFilters
