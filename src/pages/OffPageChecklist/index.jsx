import React from "react";
import Checklist from "../../components/Checklist";
import Nav from "../../components/Nav";
import {offPageChecklist} from '../../data/offpageSEO'

const OffPageChecklist = () => {
  return <div>
    <Nav/>
    <Checklist title = "Off-page Checklist" checklistData = {offPageChecklist}/>
  </div>;
};

export default OffPageChecklist;
