import router from "./router/router";

import { RouterProvider } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        transition={Zoom}
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default App;
