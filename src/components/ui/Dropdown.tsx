import { useState, useRef, useEffect } from "react";
import { GoChevronDown } from "react-icons/go";
import classNames from "classnames";

type DropdownItem = {
  id: string;
  name: string;
};

type Position = "bottom-left" | "bottom-right" | "top-left" | "top-right";

type DropdownProps = {
  id: string;
  title?: string;
  data: DropdownItem[];
  selectedId?: string;
  onSelect?: (id: string) => void;
  position?: Position;
};

const Dropdown: React.FC<DropdownProps> = ({
  id,
  title = "Select",
  data,
  selectedId,
  onSelect,
  position = "bottom-left",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | undefined>(
    () => data.find((item) => item.id === selectedId)
  );

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (item: DropdownItem) => {
    setSelectedItem(item);
    onSelect?.(item.id);
    setIsOpen(false);
  };

  useEffect(() => {
    if (selectedId) {
      const item = data.find((item) => item.id === selectedId);
      setSelectedItem(item);
    }
  }, [selectedId, data]);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownPosition = classNames(
    "absolute z-10 mt-2 rounded shadow bg-white w-full",
    {
      "top-full left-0": position === "bottom-left",
      "top-full right-0": position === "bottom-right",
      "bottom-full left-0 mb-2": position === "top-left",
      "bottom-full right-0 mb-2": position === "top-right",
    }
  );

  return (
    <div ref={dropdownRef} className="relative inline-block w-64">
      <button
        id={id}
        type="button"
        aria-haspopup="true"
        data-testid="dropdown-button"
        aria-expanded={isOpen}
        onClick={toggleDropdown}
        className="w-full flex justify-between items-center bg-blue-600 text-white px-4 py-2 rounded"
      >
        <span data-testid="dropdown-selected">{selectedItem?.name || title}</span>
        <GoChevronDown
          className={classNames("transition-transform", {
            "rotate-180": isOpen,
          })}
        />
      </button>

      {isOpen && (
        <div className={dropdownPosition}>
          <ul className="max-h-52 overflow-y-auto scrollbar rounded-md border border-gray-200 py-2 w-full">
            {data.map((item) => (
              <li
                key={item.id}
                onClick={() => handleSelect(item)}
                className={classNames(
                  "flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100",
                  { "bg-gray-100": selectedItem?.id === item.id }
                )}
              >
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
