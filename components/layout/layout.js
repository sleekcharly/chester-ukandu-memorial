import React from "react";
import Header from "./header";

function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Header></Header>

      {/* content */}
      <div className="w-full  md:w-[97%] lg:w-[90%] xl:w-[70%] md:mr-auto md:ml-auto sm:mt-2 md:mt-3 lg:mt-8">
        {children}
      </div>
    </div>
  );
}

export default Layout;
