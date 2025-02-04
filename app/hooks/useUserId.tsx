"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";

const useUserId = () => {
  const { user } = useUser();
  const [loadedUserId, setLoadedUserId] = useState("");

  useEffect(() => {
    if (user?.id) {
      setLoadedUserId(user.id);
    }
  }, [user, setLoadedUserId]);

  return loadedUserId;
};

export default useUserId;