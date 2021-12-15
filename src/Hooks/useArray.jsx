import { useState } from 'react';
const useArray = defaultValue => {
  const [array, setArray] = useState(defaultValue);

  function filter(callback) {
    setArray(a => a.filter(callback));
  }

  function clear() {
    setArray([]);
  }

  return { array, setArray, filter, clear };
};

export default useArray;
