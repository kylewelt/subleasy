import React from 'react'
import { Menu, Header, Input } from 'semantic-ui-react'

class SubletFilters extends React.Component {
  render () {
    return (
      <Menu vertical fluid>
        <Menu.Item>
          <Header as='h4'>Filter Listings</Header>
        </Menu.Item>
        <Menu.Item>
          <Header as='h5'>Location</Header>
          <Input fluid placeholder='location' />
        </Menu.Item>
        <Menu.Item>
          <Header as='h5'>Min Price</Header>
          <Input fluid placeholder='min price' />
        </Menu.Item>
        <Menu.Item>
          <Header as='h5'>Max Price</Header>
          <Input fluid placeholder='max price' />
        </Menu.Item>
        <Menu.Item>
          <Header as='h5'>Start Date</Header>
          <Input fluid placeholder='start date' />
        </Menu.Item>
        <Menu.Item>
          <Header as='h5'>End Date</Header>
          <Input fluid placeholder='end date' />
        </Menu.Item>
      </Menu>
    )
  }
}

export default SubletFilters
