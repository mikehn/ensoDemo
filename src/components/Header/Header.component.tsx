import React from 'react'
import logo from 'assets/logo.svg'
import house from 'assets/icons/house.svg'
import bots from 'assets/icons/bots.svg'
import cog from 'assets/icons/cog.svg'
import discover from 'assets/icons/discover.svg'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
const Header = () => {
  const location = useLocation()
  if (location) console.log(location)
  //if(location.pathname)
  return (
    <div className="flex justify-between border-b-2  border-gray-200 bg-main">
      <div className="p-2 pl-8 transition ease-in-out hover:scale-110">
        <img src={logo} alt="logo"></img>
      </div>
      <div>
        <MainNavigation />
      </div>
      <div className="flex items-center justify-center">
        <button className="btn btn-circle btn-ghost btn-sm mr-2">
          <img src={cog} alt="My Bots" />
        </button>

        <div className="avatar mr-2">
          <div className="w-6 rounded-full">
            <img src="/bp.png" />
          </div>
        </div>
      </div>
    </div>
  )
}

const MainNavigation = () => {
  const location = useLocation()
  if (location) console.log(location)
  const defaultClassName =
    'btn btn-sm m-2 bg-main outline-none border-none shadow-none'
  const selectedBtnClassName =
    'bg-white btn btn-sm m-2 border-2 border-gray-200'
  const isBotPage = location.pathname.startsWith('/my-bots')

  const isDiscoverPage = location.pathname.startsWith('/discover')
  const isHomePage = location.pathname.startsWith('/home')

  return (
    <div>
      <Link to="/home">
        <button
          className={classNames({
            [selectedBtnClassName]: isHomePage,
            [defaultClassName]: !isHomePage
          })}
        >
          <img src={house} alt="home" />
          Home
        </button>
      </Link>
      <Link to="/my-bots/0">
        <button
          className={classNames({
            [selectedBtnClassName]: isBotPage,
            [defaultClassName]: !isBotPage
          })}
        >
          <img src={bots} alt="My Bots" />
          My Bots
        </button>
      </Link>
      <Link to="/discover">
        <button
          className={classNames({
            [selectedBtnClassName]: isDiscoverPage,
            [defaultClassName]: !isDiscoverPage
          })}
        >
          <img src={discover} alt="Discover" />
          Discover
        </button>
      </Link>
    </div>
  )
}

export default Header
