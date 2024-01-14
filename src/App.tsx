import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Start from './Components/Start'
import Layout from './Components/Layout'
import { Mycontext } from './Components/Context'
import Game from './Components/Game'
import Winner from './Components/Winner'

function App() {
  const [game, setGame] = useState<boolean>(true)
  const [choice, setChoice] = useState<number>(0)
  const [rules, setRules]  = useState<boolean>(false)
  const [score, setScore] = useState<number>(0)

  type move =  [string,string]
  
  type Moves = {
    [key:number]:move
  }

  const moves:Moves = {
    1:["/images/icon-scissors.svg","#EB9F0E"],
    2:["/images/icon-paper.svg","#4664F4"],
    3:["/images/icon-rock.svg","#DB2E4D"],
    4:["/images/icon-lizard.svg","#834EE3"],
    5:["/images/icon-spock.svg","#3FB7CD"]
  }

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
        },
        {
          path:"winner",
          element:<Winner/>
        }
      ]
    }
  ])

  return (
    <>
    <Mycontext.Provider value={{
      game,
      setGame,
      choice,
      setChoice,
      moves,
      rules,
      setRules,
      score,
      setScore

    }} >
      <RouterProvider  router={router} />
    </Mycontext.Provider>
    </>
  )
}

export default App
