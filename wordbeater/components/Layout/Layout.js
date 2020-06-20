import React from "react";
import Head from "next/head";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  console.log({ children });
  return (
    <div>
      <Head>
        <title>WordBeater</title>
        <meta name="description" content={"WordBeater"} />
        {/*<link rel="icon" href={getStaticAssetURL("/favicon.ico")} />*/}
      </Head>
      <Header />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
