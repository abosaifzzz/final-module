import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css'
import Layout from './Components/Layout/Layout'
// import Account3 from '../Pages/Account3/Account3.jsx';
import Account5 from './Components/Account5/Account5.jsx';
import DefaultPage from './Pages/DefaultPage/DefaultPage.jsx';
import MosadraPage from './Pages/MosadraPage/MosadraPage.jsx';
// import DefaultPage from './Components/DefaultPage/DefaultPage.jsx';
// import Home from './Components/Home/Home'

function App() {
  let routers = createBrowserRouter([


    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <DefaultPage /> },

        { path: "exporters", element: <MosadraPage /> },


        // { path: "hello", element: <Account3 /> },
        // { path: "hello2", element: <Account5 /> }


      ],
    },

  ]);

  return (
    <>
      {/* <div className='flex'>
        <h2> {t("slogan")}</h2>
        <div className="py-1" role="none">
          <button
            onClick={() => i18n.changeLanguage("ar")}
            className="block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full "
            role="menuitem"
          >
            العربية
          </button>
          <button
            onClick={() => i18n.changeLanguage("en")}
            className="block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full "
            role="menuitem"
          >
            English
          </button>

        </div>
      </div> */}

      <RouterProvider router={routers} />
    </>
  );
}

export default App;
