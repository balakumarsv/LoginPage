import { useState } from "react";
import "./App.css";
import Header from "./Header";
import CustomersTable from "./CustomersTable";
import Analytics from "./Analytics";


function Client() {
  return (
    <>
      <div className="d-flex">
      <div className="d-flex" style={{width : "1000px", justifyContent : "center"}}>
        <div style={{ width: "100%" }}>

        <div className="header-component">
          <Header />
          <Analytics />
          <CustomersTable />
        </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Client;
