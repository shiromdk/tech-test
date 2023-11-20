import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Tabs from "./components/Tabs/Tabs";
import "./App.css";

import { AcceptedPage } from "./components/AcceptedPage";
import { InvitedPage } from "./components/InvitedPage";

const App = () => {
  const tabs = [
    { label: "Invited", path: "/" },
    { label: "Accepted", path: "/accepted" },
  ];

  return (
    <div className="App">
      <div className="container mx-auto bg-neutral-200">
        <Tabs tabs={tabs} />
        <Routes>
          <Route path="/" element={<InvitedPage />} />
          <Route path="/accepted" element={<AcceptedPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
