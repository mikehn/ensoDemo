import React from 'react'
import './BotInfoCard.style.css'
import wrench from 'assets/icons/wrench.svg'

type Props = { className?: string; avatar: string }

const BotInfoCard = ({ className, avatar }: Props) => {
  return (
    <div className={className || ''}>
      <div className="card card-compact h-full w-80 bg-base-100 shadow-xl">
        <figure className="h-32 min-h-32">
          <img height={148} src="/ensoDemo/bg1.jpeg" alt="bla" />
        </figure>

        <div className="avatar -mt-12 ml-4">
          <div className="rounded-full p-[3Px] shadow-lg">
            <div
              className={
                'w-16 rounded-full bg-gray-200 outline outline-[3px] outline-white/25'
              }
            >
              <img className="rounded-full" src={avatar} />
            </div>
          </div>
        </div>

        <button className="btn btn-square btn-sm absolute right-3 top-28 bg-white shadow-sm">
          <img src={wrench} alt="options" />
        </button>
        <div>
          <div className="card-body border-b-2">
            <h2 className="card-title">Become a thought leader</h2>
            <p className="text-xs font-medium">
              Linkedin content to establish your brand as an expert.
            </p>
            {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
          </div>
          <div className="card-body border-b-2">
            <h3 className="sub-title">General Guidelines</h3>
            <p className="text-xs">
              My goal is to help you establish your brand in the Jewellery
              industry by posting content on your LinkedIn page based on best
              practices and industry knowledge.
            </p>
          </div>
          <div className="card-body">
            <div className="flex w-full flex-col ">
              <div className="mb-3 flex content-between justify-between">
                <span className="list-titles">Name</span>
                <span>Gilad Bechor</span>
              </div>
              <div className="mb-3 flex content-between justify-between">
                <span className="list-titles">Industry</span>
                <span>Gilad Bechor</span>
              </div>
              <div className="mb-3 flex content-between justify-between">
                <span className="list-titles">Website</span>
                <span>Gilad Bechor</span>
              </div>
              <div className="mb-3 flex content-between justify-between">
                <span>Linkedin</span>
                <span>Gilad Bechor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BotInfoCard
