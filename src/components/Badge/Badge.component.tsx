import classNames from 'classnames'
import React from 'react'

type Props = {
  className?: string
  iconColor?: string
  title: string
  icon?: 'dot' //TODO: add more icons
}

const Badge = ({ className, iconColor, title }: Props) => {
  return (
    <div className={classNames('badge badge-md h-6 shadow-sm', className)}>
      <div className="mr-2">
        <svg
          width="6"
          height="6"
          viewBox="0 0 6 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="3" cy="3" r="3" fill={iconColor} />
        </svg>
      </div>
      {title}
    </div>
  )
}

export default Badge
