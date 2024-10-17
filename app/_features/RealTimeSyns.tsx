"use client";

import { useConvex } from "convex/react";

const RealTimeSync = () => {
  const isSyncing = useConvex();

  return (
    <div>
      <p>{isSyncing ? "Syncing..." : "Up to date!"}</p>
    </div>
  );
};

export default RealTimeSync;