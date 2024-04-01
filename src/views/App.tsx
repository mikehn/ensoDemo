import router from 'Routes'
import { RouterProvider } from 'react-router-dom'

const App = () => {
  return (
    <div className="flex h-screen bg-main">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
