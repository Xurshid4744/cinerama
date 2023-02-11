import Layout from "components/Layout/Layout";
import Login from "pages/Auth/Login";
import SignIn from "pages/Auth/SignIn";
import SignUp from "pages/Auth/SignUp";
import Collections from "pages/Collections";
import Content from "pages/Content/Content";
import Home from "pages/Home/Home";
import OnlineTv from "pages/OnlineTv";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useGetMeQuery } from "store/endpoints/get-me";

const Router = () => {
  const { data } = useGetMeQuery();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content/movies/:id" element={<Content />} />
        <Route path="/content/online-tv/:id" element={<OnlineTv />} />
        <Route path="/content/collections/:id" element={<Collections />} />
        {data?.code !== 200 && (
          <>
            <Route path="/auth/sign-in" element={<SignIn />} />
            <Route path="/auth/sign-up" element={<SignUp />} />
            <Route path="/auth/login" element={<Login />} />
          </>
        )}
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </Layout>
  );
};

export default Router;
