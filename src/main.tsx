import { useState } from "react";

export function Main() {
  const [count, setCount] = useState(0);

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
