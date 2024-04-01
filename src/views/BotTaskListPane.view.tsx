import React from 'react'

type Props = { className?: string }

const BotTaskListPane = ({ className }: Props) => {
  return (
    <div className={'card h-full w-96 bg-base-100 shadow-xl ' + className}>
      <div className="card-body">
        <h2 className="card-title">Place Holder for Task List</h2>
        <p>lorem epsom</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  )
}

export default BotTaskListPane
