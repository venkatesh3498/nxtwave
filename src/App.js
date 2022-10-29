import React, { lazy, Suspense, useEffect, useState } from "react";
import NavBar from "./components/Navbar/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setData } from "./redux/ResourceSlice";
import { toast } from "react-toastify";
import FullScreenLoader from "./components/FullScreenLoader/Index";

const Home = lazy(() => import("./pages/Home/Index"));
const CreateForm = lazy(() => import("./pages/CreateForm/Index"));
function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState();
  async function getDataFromApi() {
    setLoading(true);
    try {
      const data = await axios.get(
        "https://media-content.ccbp.in/website/react-assignment/resources.json"
      );
      dispatch(setData(data.data));
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getDataFromApi();
  }, []);
  return (
    <>
      {loading ? (
        <FullScreenLoader />
      ) : (
        <Suspense fallback={<FullScreenLoader />}>
          <BrowserRouter basename="/nxtwave">
            <NavBar />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/create-resource" element={<CreateForm />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      )}
    </>
  );
}

export default App;
