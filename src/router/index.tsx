import { createBrowserRouter } from "react-router-dom";
import BaseLayout from '@/components/BaseLayout'
import ManageLayout from '@/components/ManageLayout'
import QuestionnaireList from "@/views/QuestionnaireList"
import QuestionnaireStarList from '@/views/Star'
import QuestionnaireTrashList from '@/views/Trash'
import Home from '@/views/Home'
import NotFound from '@/views/NotFound'
import Login from '@/views/Login'
import Register from '@/views/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'manage',
        element: <ManageLayout />,
        children: [
          {
            index: true,
            element: <QuestionnaireList/>
          },
          {
            path: 'list',
            element: <QuestionnaireList/>
          },
          {
            path: 'star',
            element: <QuestionnaireStarList/>
          },
          {
            path: 'trash',
            element: <QuestionnaireTrashList/>
          }
        ]
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/*',
        element: <NotFound/>
      }
    ]
  }
])

export default router
