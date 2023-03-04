import React from "react";
import Checklist from "../../components/Checklist";
import Nav from "../../components/Nav";
import {ogTagsChecklist} from '../../data/ogtagsSEO'

const OgTagChecklist = () => {
  return <div>
    <Nav/>
    <Checklist title = "OG tag Checklist" checklistData={ogTagsChecklist} />
  </div>;
};

export default OgTagChecklist;
