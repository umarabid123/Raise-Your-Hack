import CustomButton from "@/components/shared/common/custom-button";
import CustomLink from "@/components/shared/common/custom-link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] gap-5">
      Page Not Found
      <CustomLink to="/">
        <CustomButton btnText="Go Home"/>
      </CustomLink>
    </div>
  );
};

export default NotFound;
