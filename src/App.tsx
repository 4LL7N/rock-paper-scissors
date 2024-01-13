import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Start from './Components/Start'
import Layout from './Components/Layout'
import { Mycontext } from './Components/Context'
import Game from './Components/Game'

function App() {
  const [game, setGame] = useState<boolean>(true)

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"rock-paper-scissiors",
          element:<Start/>
        },
        {
          path:":game",
          element:<Game/>
        }
      ]
    }
  ])

  return (
    <>
    <Mycontext.Provider value={{
      game,
      setGame
    }} >
      <RouterProvider  router={router} />
    </Mycontext.Provider>
    </>
  )
}

export default App
