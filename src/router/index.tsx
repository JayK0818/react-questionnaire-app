import { createBrowserRouter } from "react-router-dom";
import BaseLayout from '@/components/BaseLayout'
import ManageLayout from '@/components/ManageLayout'
import QuestionnaireList from "@/views/QuestionnaireList"
import QuestionnaireStarList from '@/views/Star'
import QuestionnaireTrashList from '@/views/Trash'
import QuestionnaireEdit from '@/views/QuestionnaireEdit'
import Home from '@/views/Home'
import NotFound from '@/views/NotFound'
import Login from '@/views/Login'
import Register from '@/views/Register'
import { PathEnum } from '@/interface/enum'

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
        path: PathEnum.login,
        element: <Login/>
      },
      {
        path: PathEnum.register,
        element: <Register/>
      },
      {
        path: '/*',
        element: <NotFound/>
      }
    ]
  },
  {
    path: '/edit',
    element: <QuestionnaireEdit/>
  }
])

export default router
