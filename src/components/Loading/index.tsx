import React from 'react'
import { GoSync } from 'react-icons/go'

const Loading = (props: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props}>
      <GoSync className="loadingIcon" />
    </div>
  )
}

export default Loading
