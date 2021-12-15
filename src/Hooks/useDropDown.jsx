import { useState, useRef, useEffect } from 'react';

const useDropDown = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const handleOpen = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu

      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [open]);
  return { open, ref, handleOpen };
};

export default useDropDown;
