"use client";

import { useEffect, useState } from "react";
import { MagicMotion } from "react-magic-motion";
import useWindowSize from "../hooks/useWindowSize";
import useIsExpanded from "../hooks/useIsExpanded";
import Link from "next/link";

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
          width: isCollapsed ? "4rem" : "20rem",
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
          {!isCollapsed && <h4 style={{ margin: 0 }} className="hidden md:block">Keep notes</h4>}

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
            justifyContent: "center",
            // alignItems: "center",
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
            {/* Plus SVG Icon */}

            <Link href="/pages/new-note" className="flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="-0.855 -0.855 24 24"
                id="Story-Post--Streamline-Flex"
                height="24"
                width="24"
                style={{
                  minWidth: "24px",
                  minHeight: "24px",
                  fontWeight: "bold",
                }}
              >
                <desc>
                  Story Post Streamline Icon: https://streamlinehq.com
                </desc>
                <g id="story-post">
                  <path
                    id="Vector 620"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m11.145 6.989507142857142 0 8.310985714285714"
                    stroke-width="1.71"
                  ></path>
                  <path
                    id="Vector 621"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.300492857142856 11.145 6.989507142857142 11.145"
                    stroke-width="1.71"
                  ></path>
                  <path
                    id="Vector"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.318275 1.811858571428571c4.712742857142857 0.7435307142857143 7.322265 4.023345 7.322265 9.333141428571428 0 6.077209285714286 -3.418330714285714 9.49554 -9.49554 9.49554 -3.6014271428571427 0 -6.269858571428571 -1.2004757142857143 -7.844487857142856 -3.443805"
                    stroke-width="1.71"
                  ></path>
                  <path
                    id="Vector_2"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M1.64946 11.145a13.055571428571428 13.055571428571428 0 0 0 0.34231071428571425 3.0760199999999998"
                    stroke-width="1.71"
                  ></path>
                  <path
                    id="Vector_3"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.5186357142857143 4.800310714285715a8.425619999999999 8.425619999999999 0 0 0 -1.4647714285714286 3.0218871428571425"
                    stroke-width="1.71"
                  ></path>
                  <path
                    id="Vector_4"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.513053571428571 1.73862a10.336191428571428 10.336191428571428 0 0 0 -3.16518 0.8438357142857142"
                    stroke-width="1.71"
                  ></path>
                </g>
              </svg>
              <span>{!isCollapsed && "New Note"}</span>
            </Link>
          </li>

          <li
            style={{
              display: "flex",
              gap: "0.8rem",
              alignItems: "center",
              width: "fit-content",
            }}
          >
            {/* All Notes SVG */}

            <Link href="/" className="flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 21h-15a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 4.5 3h10.379a1.5 1.5 0 0 1 1.06.44l4.121 4.122a1.5 1.5 0 0 1 .44 1.06V19.5a1.5 1.5 0 0 1-1.5 1.5z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 3v4.5a1.5 1.5 0 0 0 1.5 1.5H21M15 11.25h-6m6 3.75h-6m-1.5-7.5H9"
                />
              </svg>

              <span>{!isCollapsed && "All Notes"}</span>
            </Link>
          </li>

          <li
            style={{
              display: "flex",
              gap: "0.8rem",
              alignItems: "center",
              width: "fit-content",
            }}
          >
            {/* Trash SVG Icon */}
            <Link href="/pages/trash" className="flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 6.75L18.479 19.5a1.5 1.5 0 0 1-1.497 1.386H7.018A1.5 1.5 0 0 1 5.52 19.5L4.5 6.75M9.75 10.5v6m4.5-6v6M3 6.75h18m-12-3h6m-6 0A1.5 1.5 0 0 0 7.5 5.25v0A1.5 1.5 0 0 0 9 6.75h6a1.5 1.5 0 0 0 1.5-1.5v0A1.5 1.5 0 0 0 15 3.75h-6z"
                />
              </svg>

              <span>{!isCollapsed && "Trash"}</span>
            </Link>
          </li>
        </ul>
      </aside>
    </MagicMotion>
  );
};

export default Sidebar;
