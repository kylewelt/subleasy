import React from 'react'
import { Grid, Card, Image, Icon, Form } from 'semantic-ui-react'

class NewSubletForm extends React.Component {
  state = {
    name: '',
    price: '',
    start_date: '',
    end_date: '',
    images: []
  }

  handleChange = (event) => {
    let newState = {...this.state}
    if (event.target.name === 'images') {
      newState.images[event.target.dataset.idx][event.target.dataset.key] = event.target.value
    } else {
      newState[event.target.name] = event.target.value
    }
    this.setState(newState)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.newSublet(this.state)
  }


  addInput = (event) => {
    event.preventDefault()
    this.setState({
      images: [...this.state.images, {
        url: '',
        caption: ''
      }]
    })
  }

  removeInput = (event) => {
    const images = [...this.state.images]
    images.splice(event.target.dataset.idx, 1)
    this.setState({
      images: images
    })
  }

  renderImages = () => {
    return (
      <Grid>
        {this.state.images.map((img, i) => {
          return (
            <Grid.Column width={8}>
              <Card key={i} raised centered>
                <Image src={img.url} />
                <Card.Content>
                  <Form.Field>
                    <label>Image URL</label>
                    <input required type="text" name="images" data-key="url" data-idx={i} value={img.url} placeholder="paste link here" onChange={this.handleChange} />
                    <label>Caption</label>
                    <input type="text" name="images" data-key="caption" data-idx={i} value={img.caption} placeholder="caption" onChange={this.handleChange} />
                  </Form.Field>
                </Card.Content>

                <Card.Content extra>
                  <Icon name="remove" onClick={this.removeInput} data-idx={i}/>
                </Card.Content>
              </Card>
            </Grid.Column>
          )
        })}
        <Grid.Row>
          <Card onClick={this.addInput} raised centered>
            <Card.Content>
              <Card.Header>
                Add New Image
              </Card.Header>
            </Card.Content>
          </Card>
        </Grid.Row>
      </Grid>
    )
  }



  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Description</label>
          <input required placeholder='description' name='name' value={this.state.name} onChange={this.handleChange} />
          <label>Price</label>
          <input required placeholder='price per month' type='number' name='price' value={this.state.price} onChange={this.handleChange} />
          <label>Start date</label>
          <input required placeholder='' type='date' name='start_date' value={this.state.start_date} onChange={this.handleChange} />
          <label>End date</label>
          <input required placeholder='' type='date' name='end_date' value={this.state.end_date} onChange={this.handleChange} />
        </Form.Field>
          {this.renderImages()}
        <Form.Button content='Submit' />
      </Form>
    )
  }
}

export default NewSubletForm
