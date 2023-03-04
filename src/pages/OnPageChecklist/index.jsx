import React from "react";
import Checklist from "../../components/Checklist";
import Nav from "../../components/Nav";
import { onPageChecklist } from "../../data/onpageSEO";

const OnPageChecklist = () => {
  return (
    <div>
      <Nav />
      <Checklist title="On page checklist" checklistData={onPageChecklist} />
    </div>
  );
};

export default OnPageChecklist;
