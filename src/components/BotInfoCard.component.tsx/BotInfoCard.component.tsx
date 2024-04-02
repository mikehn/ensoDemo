import React from 'react'
import './BotInfoCard.style.css'
import wrench from 'assets/icons/wrench.svg'
import link from 'assets/icons/link.svg'
import classNames from 'classnames'
import { randNames, botCard } from 'utils/MockData'
import avatars from 'assets/avatars'
type Props = { className?: string; avatar: string; bid: number }

const BotInfoCard = ({ className, avatar, bid }: Props) => {
  const isConnected = Math.random() * 100 > 50

  return (
    <div className={className || ''}>
      <div className="card card-compact h-full w-[420px] overflow-auto bg-base-100 shadow-xl">
        <figure className="h-40 min-h-40">
          <img height={148} src="/bg1.jpeg" alt="bla" />
        </figure>

        <div className="avatar -mt-20 ml-4">
          <div className="rounded-full p-[3Px] shadow-lg">
            <div
              className={
                'w-28 rounded-full bg-gray-200 outline outline-[3px] outline-white/25'
              }
            >
              <img className="rounded-full" src={avatar} />
            </div>
          </div>
        </div>

        <button className="btn btn-square btn-sm absolute right-8 top-36 size-10 bg-white p-0 shadow-sm">
          <img src={wrench} alt="options" />
        </button>
        <div>
          <div className="card-body min-h-32 border-b-2">
            <h2 className="card-title text-[26px]">{botCard[bid].goal}</h2>
            <p className="text-[14px] text-slate-600">
              {botCard[bid].description}
            </p>
            {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
          </div>
          <div className="card-body min-h-32 border-b-2">
            <h3 className="sub-title">General Guidance</h3>
            <p className="text-[14px] text-slate-600 ">
              {botCard[bid]['General Guidelines']}
            </p>
          </div>
          <div className="card-body">
            <div className="flex w-full flex-col ">
              <div className="mb-3 flex content-between justify-between">
                <span className="list-titles">Name</span>
                <span className="font-semibold">
                  {randNames[bid].first_name + ' ' + randNames[bid].last_name}
                </span>
              </div>
              <div className="mb-3 flex content-between justify-between">
                <span className="list-titles">Industry</span>
                <span className="font-semibold">Design</span>
              </div>
              <div className="mb-3 flex content-between justify-between">
                <span className="list-titles">Website</span>
                <a href="https://mikes.com/">
                  <div className="badge badge-md h-6 shadow-sm">
                    <img src={link} alt="link" className="mr-2" />
                    mikes.com
                  </div>
                </a>
              </div>
              <div className="mb-3 flex content-between justify-between">
                <span className="list-titles">Linkedin</span>
                <div
                  className={classNames('badge badge-md h-6 shadow-sm', {
                    'bg-green-300': isConnected,
                    'bg-red-300': !isConnected
                  })}
                >
                  <div className="mr-2">
                    {isConnected ? (
                      <svg
                        width="6"
                        height="6"
                        viewBox="0 0 6 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="3" cy="3" r="3" fill="#268909" />
                      </svg>
                    ) : (
                      <svg
                        width="6"
                        height="6"
                        viewBox="0 0 6 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="3" cy="3" r="3" fill="red" />
                      </svg>
                    )}
                  </div>
                  {isConnected ? 'Connected' : 'Disconnected'}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body grow justify-end">
          <div className="w-full rounded-lg bg-[#FAFAFA] p-4">
            <div className="mb-2 text-[17px] font-semibold">
              Discover more bots
            </div>
            <p>
              Explore a curated selection of innovative bots designed to enhance
              productivity, creativity, and daily interactions. Find your next
              digital assistant today!
            </p>
            <div className="mt-6 flex justify-between pr-8">
              <button className="btn h-9 min-h-9 rounded-full border border-purple-950 bg-a-purple-strong px-6 py-0 text-[15px] font-normal text-white shadow-md hover:bg-violet-900">
                Discover
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4583 9.77139H3.95831"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.4168 4.75107L16.4585 9.77107L11.4168 14.7919"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="avatar-group  -space-x-6 rtl:space-x-reverse">
                <div className="avatar border-slate-200 bg-white ">
                  <div className="size-8">
                    <img src={avatars[1]} />
                  </div>
                </div>
                <div className="avatar border-slate-200 bg-white">
                  <div className="size-8">
                    <img src={avatars[2]} />
                  </div>
                </div>
                <div className="avatar border-slate-200 bg-white">
                  <div className="size-8">
                    <img src={avatars[4]} />
                  </div>
                </div>
                <div className="avatar placeholder ">
                  <div className="size-8 bg-[#7d7eeb] text-white">
                    <span>+99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BotInfoCard
/* Frame 61 */
