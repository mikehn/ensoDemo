import Header from 'components/Header/Header.component'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full flex-col bg-main">
      <div className="h-16">
        <Header />
      </div>
      <div className="h-full">{children}</div>
    </div>
  )
}

export default Layout
