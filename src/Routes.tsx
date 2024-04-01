import { createBrowserRouter } from 'react-router-dom'
import BotDash from 'views/BotDash.view'
import Discover from 'views/Discover.view'
import Home from 'views/Home.view'
import Layout from 'views/Layout.view'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>PlaceHolder</div>
  },
  {
    path: '/ensoDemo/my-Bots',
    element: <div>Bot main dashboard place holder</div>
  },
  {
    path: '/ensoDemo/my-Bots/:id',
    element: (
      <Layout>
        <BotDash />
      </Layout>
    )
  },
  {
    path: '/ensoDemo/discover',
    element: (
      <Layout>
        <Discover />
      </Layout>
    )
  },
  {
    path: '/ensoDemo/Home',
    element: (
      <Layout>
        <Home />
      </Layout>
    )
  },
  {
    path: '/ensoDemo',
    element: (
      <Layout>
        <Home />
      </Layout>
    )
  }
])

export default router
