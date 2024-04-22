import { createBrowserRouter } from "react-router-dom";
import BaseLayout from '@/components/BaseLayout'
import ManageLayout from '@/components/ManageLayout'
import QuestionnaireList from "@/views/QuestionnaireList"
import QuestionnaireStarList from '@/views/Star'
import QuestionnaireTrashList from '@/views/Trash'
import Home from '@/views/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'manage',
        element: <ManageLayout />,
        children: [
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
      }
    ]
  }
])

export default router
