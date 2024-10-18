"use client";

import { useUser } from "@clerk/nextjs";
import * as React from "react";

const useUserId: React.FunctionComponent = () => {
  const { user } = useUser();
  const [loadedUserId, setLoadedUserId] = React.useState("");

  React.useEffect(() => {
    if (user?.id) {
      setLoadedUserId(user.id);
    }
  }, [user, setLoadedUserId]);

  return loadedUserId;
};

export default useUserId;