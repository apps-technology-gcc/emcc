import { useEffect, useRef, useState } from "react";
import DropDownOptions from "./DropDownOptions";

type DropdownProps = {
  children: React.ReactNode;
  options: string[];
  type?: "checkbox" | "normal";
};

const Dropdown: React.FC<DropdownProps> = ({
  children,
  options,
  type = "normal",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]); // For managing checkbox selections
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    console.log("toggleDropdown");
    if (isOpen === false) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (option: string) => {
    console.log("selectedOption", option);
    setSelectedOption(option);
    if (type === "normal") {
      setIsOpen(false); // Close dropdown for normal type
    }
  };

  const handleCheckboxChange = (option: string) => {
    console.log("selectedOption", option);
    // Handle checkbox selection and unselection
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div onClick={toggleDropdown} className="relative" ref={dropdownRef}>
      {children}
      {isOpen && (
        <DropDownOptions
          options={options}
          type={type}
          onSelect={handleSelect}
          selectedOptions={selectedOptions}
          onCheckboxChange={handleCheckboxChange}
        />
      )}
    </div>
  );
};

export default Dropdown;
