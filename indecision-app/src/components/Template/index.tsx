import React from 'react'

class Template extends React.Component {
  render(): React.ReactNode {
    const template = (
      <div>
        <h1>Lincoln Duarte</h1>
        <p>Age: 24</p>
        <p>Location: Maceio</p>
      </div>
    )

    return <div>{template}</div>
  }
}

export default Template
