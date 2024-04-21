import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import BaseLayout from '../components/BaseLayout'
import ManageLayout from '../components/ManageLayout'
import QuestionnaireList from "../views/QuestionnaireList"
import QuestionnaireStarList from '../views/Star'
import QuestionnaireTrashList from '../views/Trash'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
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
