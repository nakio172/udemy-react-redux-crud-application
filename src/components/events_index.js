import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import { readEvents } from '../actions'

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr>
        <td>{event.id}</td>
        <td>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    console.log("render")
    const props = this.props

    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>

        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })
//const mapDispatchToProps = ({ increment, decrement })
const mapDispatchToProps = ({ readEvents })
//const mapDispatchToProps = dispatch => ({
//  increment: () => dispatch(increment()),
//  decrement: () => dispatch(decrement())
//})

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
