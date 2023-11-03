import React from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface Props {
  maxDate?: Date
}

class DatePicker extends React.Component<Props> {
  state = {
    startDate: null,
    endDate: null
  }

  handleChange = (dates) => {
    const [startDate, endDate] = dates
    this.setState({ startDate, endDate })
  }

  render() {
    return (
      <ReactDatePicker
        selected={this.state.startDate}
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onChange={this.handleChange}
        maxDate={this.props?.maxDate}
        selectsRange
        name="date"
      />
    )
  }
}

export default DatePicker
