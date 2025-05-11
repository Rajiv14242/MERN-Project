import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SharedPage from "../pages/shared";
import Create from "../pages/create";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Homedash from "../pages/Homedash";
import Update from "../pages/update";
import Logout from "../pages/Logout";
import Delete from "../pages/delete";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedPage />}>
          <Route index element={<Create />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Homedash />}></Route>
          <Route path="update" element={<Update />}></Route>
          <Route path="logout" element={<Logout />}></Route>
          <Route path="delete" element={<Delete />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
