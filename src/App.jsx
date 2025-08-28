import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayOut from "./LayOut/PageLayOut";
import Homepage from "./page/Homepage";
import AboutPage from "./page/AboutPage";
import Contectpage from "./page/Contectpage";
import Shop from "./page/Shop";
import ShopSingle from "./page/ShopSingle";
import "./App.css";
import PaymentPage from "./page/PaymentPage";
import AddCard from "./page/AddCard";
import Brompton from "./Brand/Brompton";
import Moulton from "./Brand/Moulton";
import Montague from "./Brand/montague";
import Ebikes from "./Brand/ebikes";
import Tern from "./Brand/Tern";
import Uniquebikes from "./Brand/uniquebiles";
import Allbrand from "./Brand/Allbrand";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayOut />,
    children: [
      {
        index: true,
        // path: "homepage",
        element: <Homepage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contect",
        element: <Contectpage />,
      },
      {
        path: "shop",
        element: <Shop />,
        children: [
          {
            index: true, // ✅ This means the default child for /shop
            element: <Allbrand />,
          },
          {
            path: "Brompton",
            element: <Brompton />,
          },
          {
            path: "Moulton",
            element: <Moulton />,
          },
          {
            path: "Montague",
            element: <Montague />,
          },
          {
            path: "ebikes",
            element: <Ebikes />,
          },
          {
            path: "Tern",
            element: <Tern />,
          },
          {
            path: "Uniquebikes",
            element: <Uniquebikes />,
          },
        ],
      },

      {
        path: "addcard",
        element: <AddCard />,
      },
      {
        path: ":id",
        element: <ShopSingle />,
      },
      {
        path: "Payment",
        element: <PaymentPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
