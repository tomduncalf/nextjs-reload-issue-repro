import { useState, useEffect } from "react";

class CountStore {
  count = 0;
}

const store = new CountStore();

export default () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      store.count++;
      setCount(store.count);
    }, 1000);
  }, []);

  return <div>Count from store: {count}</div>;
};
