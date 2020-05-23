import { useState, useEffect } from "react";

class CountStore {
  count = 0;
  setupComplete = false;
}

const store = new CountStore();

export default () => {
  const [count, setCount] = useState(store.count);

  useEffect(() => {
    if (store.setupComplete) return;

    const interval = setInterval(() => {
      store.count++;
      setCount(store.count);
    }, 1000);
    store.setupComplete = true;

    return () => {
      store.setupComplete = false;
      clearInterval(interval);
    };
  }, []);

  return <div>Count from store: {count}</div>;
};
