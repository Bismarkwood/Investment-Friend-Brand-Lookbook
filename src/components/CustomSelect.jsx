import React, { useState, useRef, useEffect } from 'react';
import './CustomSelect.css';

export default function CustomSelect({
  id,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  className = ""
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    const val = typeof option === 'object' ? option.value : option;
    onChange(val);
    setIsOpen(false);
  };

  const getDisplayValue = () => {
    if (!value) return placeholder;
    const selected = options.find(opt => {
      const optVal = typeof opt === 'object' ? opt.value : opt;
      return optVal === value;
    });
    
    if (selected) {
      return typeof selected === 'object' ? selected.label : selected;
    }
    return value;
  };

  return (
    <div 
      className={`custom-select-container ${isOpen ? 'is-open' : ''} ${disabled ? 'is-disabled' : ''} ${className}`} 
      ref={containerRef}
      id={id}
    >
      <button
        type="button"
        className="custom-select-trigger"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={!value ? 'custom-select-placeholder' : 'custom-select-value'}>
          {getDisplayValue()}
        </span>
        <svg 
          className="custom-select-icon" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <ul className="custom-select-dropdown" role="listbox">
          {options.map((option, idx) => {
            const val = typeof option === 'object' ? option.value : option;
            const label = typeof option === 'object' ? option.label : option;
            const isSelected = val === value;

            return (
              <li
                key={idx}
                className={`custom-select-option ${isSelected ? 'is-selected' : ''}`}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(option)}
              >
                {label}
                {isSelected && (
                  <svg className="custom-select-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
