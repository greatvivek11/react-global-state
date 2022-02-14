import { useEffect, useState } from 'react';

export const useGlobalState = () => {
  const [counter, setCounter] = useState(0);
  const [Loading, setLoading] = useState(false);

  // API Calls go here...
  useEffect(() => {
    if (Loading) {
      // fetch api call here
      console.log("Inside UseEffect hook at global level!")
    }
    setLoading(false);
  }, [Loading]);

  return { Loading, counter, setCounter, setLoading };
}
