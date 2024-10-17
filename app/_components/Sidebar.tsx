"use client";

import { FiFile, FiTrash } from "react-icons/fi";
import { useEffect, useState } from "react";
import { MagicMotion } from "react-magic-motion";
import useWindowSize from "../hooks/useWindowSize";
import useIsExpanded from "../hooks/useIsExpanded";
import { FaPlus } from "react-icons/fa";

const menuItems = [
  {
    name: "New Note",
    icon: "FaPlus",
    route: "/add-new",
  },
  {
    name: "All Notes",
    icon: "FiFile",
    route: "/",
  },
  {
    name: "Trash",
    icon: "FiTrash",
    route: "/trash",
  },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { setIsExpanded } = useIsExpanded();

  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width != 0 && windowSize.width <= 768) {
      setIsCollapsed(true);
      setIsExpanded(false);
    } else {
      setIsCollapsed(false);
      setIsExpanded(true);
    }
  }, [windowSize.width, setIsExpanded]);

  return (
    <MagicMotion>
      <aside
        style={{
          // backgroundColor: "rgba(238, 238, 238)",
          padding: "1rem",
          // margin: "1rem 0",
          // borderRadius: "0.65rem",
          width: isCollapsed ? "3.5rem" : "20rem",
          fontWeight: "bold",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          overflow: "hidden",
        }}
        className="bg-white dark:bg-gray-900 dark:text-white min-h-screen"
      >
        <div
          style={{
            display: "flex",
            gap: "0.rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {!isCollapsed && <h4 style={{ margin: 0 }}>Keep taking notes</h4>}

          <button
            style={{ cursor: "pointer", padding: 0, border: 0 }}
            onClick={() => setIsCollapsed(!isCollapsed)}
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {isCollapsed ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 12.9999V10.9999H15.4853L12.2427 7.75724L13.6569 6.34303L19.3137 11.9999L13.6569 17.6567L12.2427 16.2425L15.4853 12.9999H1Z"
                  fill="currentColor"
                />
                <path
                  d="M20.2877 6V18H22.2877V6H20.2877Z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg
                style={{ minWidth: "24px", minHeight: "24px" }}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.2877 11.0001V13.0001H7.80237L11.045 16.2428L9.63079 17.657L3.97394 12.0001L9.63079 6.34326L11.045 7.75748L7.80236 11.0001H22.2877Z"
                  fill="currentColor"
                />
                <path d="M3 18V6H1V18H3Z" fill="currentColor" />
              </svg>
            )}
          </button>
        </div>

        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            margin: 0,
            padding: 0,
          }}
        >
          <li
            style={{
              display: "flex",
              gap: "0.8rem",
              alignItems: "center",
              width: "fit-content",
            }}
          >
            
            <a href="/add-new">New Note</a>
          </li>
          <li
            style={{
              display: "flex",
              gap: "0.8rem",
              alignItems: "center",
              width: "fit-content",
            }}
          >
            
            <a href="/">All Notes</a>
          </li>
          <li
            style={{
              display: "flex",
              gap: "0.8rem",
              alignItems: "center",
              width: "fit-content",
            }}
          >
           
            <a href="/trash">Trash</a>
          </li>
        </ul>
      </aside>
    </MagicMotion>
  );
};

export default Sidebar;
