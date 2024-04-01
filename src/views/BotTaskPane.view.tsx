import React from 'react'

type Props = { className?: string }

const BotTaskPane = ({ className }: Props) => {
  return (
    <div className={'card h-full w-96 bg-base-100 shadow-xl ' + className}>
      <div className="card-body">
        <h2 className="card-title">Place holder for tasks overview</h2>
        <p>Some text</p>
        <div className="card-actions justify-end">
          {/* <button className="btn btn-primary">Buy Now</button> */}
        </div>
      </div>
    </div>
  )
}

export default BotTaskPane
