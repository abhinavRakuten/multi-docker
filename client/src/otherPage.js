import React from "react";
import { Link } from "react-router-dom";

const fn = () => {
  return (
    <div>
      I'm in another
      <Link to="/"> Go back home</Link>
    </div>
  );
};

export default fn;
