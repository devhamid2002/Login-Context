import React, { useContext } from "react";
import Header from "../../components/header/Header";
import { AppContext } from "../../App";
import FormLogin from "../../components/formLogin/formLogin";

function Home() {
  const { isLogin } = useContext(AppContext);
  return (
    <>
      <Header />
      {isLogin ? (
        <p className="mt-[25%]">You have entered your account</p>
      ) : (
        <FormLogin />
      )}
    </>
  );
}

export default Home;
