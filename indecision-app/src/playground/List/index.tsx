import React from 'react'

interface Props {
  options: Array<string>
  value: number
}

class List extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {this.props.options.map((option, index) => (
          <span
            key={option + index}
            style={{
              padding: '0.5rem',
              backgroundColor:
                this.props.value === index ? '#b3b3b3' : '#d6d6d6',
              borderRadius: '0.5rem',
              maxWidth: 400,
              color: this.props.value === index && 'blue'
            }}
          >
            Option {index}: {option}
          </span>
        ))}
      </div>
    )
  }
}

export default List
