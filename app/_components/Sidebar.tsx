import { FiFile, FiTrash } from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="w-64 p-4 bg-gray-200 dark:bg-gray-900">
      <button className="text-lg">+ New Note</button>
      <ul className="mt-4 space-y-2">
        <li className="flex items-center space-x-2">
          <FiFile />
          <span>All Notes</span>
        </li>
        <li className="flex items-center space-x-2">
          <FiTrash />
          <span>Trash</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
