"use client";

import React, { useState } from "react";
import { ProgressBarLink } from "@/components/progress-bar-link";
import { LuChevronDown } from "react-icons/lu";

interface FilterSelectBoxProps {
  blogTags: string[];
  selectedTag: string;
  path: string;
}

function FilterSelectBox({ blogTags, selectedTag, path }: FilterSelectBoxProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="filter-select-box">
      <button
        className="filter-select"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span>{selectedTag || "All"}</span>
        <LuChevronDown className={`icon ${isOpen ? "active" : ""}`} />
      </button>

      {isOpen && (
        <ul
          className="select-list"
          role="listbox"
          aria-activedescendant={selectedTag}
        >
          {blogTags.map((tag, index) => (
            <li
              key={index}
              role="option"
              aria-selected={selectedTag === tag}
              onClick={() => {
                toggleDropdown();
              }}
            >
              <ProgressBarLink
                href={`${path}?tag=${encodeURIComponent(tag)}`}
              >
                {tag}
              </ProgressBarLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FilterSelectBox;
