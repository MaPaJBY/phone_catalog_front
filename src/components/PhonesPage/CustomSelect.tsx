import { useState, useRef, useEffect } from 'react';
import { SortType } from '../../types';
import styles from './CustomSelect.module.scss';

interface Option {
  value: SortType | number;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  value: number | SortType;
  onChange: (value: number | SortType) => void;
  className: string;
}

export const CustomSelect = ({
  options,
  value,
  onChange,
  className,
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue: SortType | number) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`${styles.customSelect} ${className}`} ref={dropdownRef}>
      <div className={styles.selectedOption} onClick={toggleDropdown}>
        {options.find(option => option.value === value)?.label || 'All'}
      </div>
      {isOpen && (
        <div className={styles.optionsContainer}>
          {options.map(option => (
            <div
              key={option.value}
              className={`${styles.option} ${value === option.value ? styles.selected : ''}`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
