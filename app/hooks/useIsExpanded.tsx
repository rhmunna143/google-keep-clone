"use client";

import * as React from "react";

const useIsExpanded = () => {
  const [isExpanded, setIsExpanded] = React.useState(true);

  return { isExpanded, setIsExpanded };
};

export default useIsExpanded;
