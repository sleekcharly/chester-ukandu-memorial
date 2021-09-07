import React from "react";
import Header from "./header";

function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Header></Header>

      {/* content */}
      <div className="w-full sm:w-[95%] md:w-[80%] sm:mr-auto sm:ml-auto">
        {children}
      </div>
    </div>
  );
}

export default Layout;
