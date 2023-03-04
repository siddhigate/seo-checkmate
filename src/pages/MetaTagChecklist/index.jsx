import React from "react";
import Checklist from "../../components/Checklist";
import Nav from "../../components/Nav";
import {metaTagsChecklist} from '../../data/metatagSEO'

const MetaTagChecklist = () => {
  return (
    <div>
      <Nav/>
      <Checklist title ="Meta Tag Checklist" checklistData = {metaTagsChecklist} />
    </div>
  );
};

export default MetaTagChecklist;
