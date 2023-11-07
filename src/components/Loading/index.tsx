import { HtmlHTMLAttributes } from 'react'
import { GoSync } from 'react-icons/go'

const Loading = (props: HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props}>
      <GoSync className="loadingIcon" />
    </div>
  )
}

export default Loading
