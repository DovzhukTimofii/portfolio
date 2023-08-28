import { 
  createBrowserRouter,
  RouterProvider,
  Link,
} from 'react-router-dom'
import {LenguagePageOfEN} from './pages/languageEN/LenguagePageOfEN';
import {LenguagePageOfUA} from './pages/languageUA/LenguagePageOfUA'

const router = createBrowserRouter([
  {
    path: "/portfolio/",
    element: <LenguagePageOfEN/>,
    errorElement: (<Link to={'/portfolio/'}>Home Page</Link>),
  },
  {
    path: "/portfolio/ua",
    element: <LenguagePageOfUA/>,
    errorElement: (<Link to={'/portfolio/'}>Home Page</Link>),
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
