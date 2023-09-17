import CompleteApps from "@/components/CompleteApps";
import SmallProjects from "@/components/SmallProjects";
import React from "react";

type Props = {};

const Work = (props: Props) => {
  return (
    <>
      <CompleteApps />
      <SmallProjects />
    </>
  );
};

export default Work;
