import { useState } from "react";

export default function Filter() {
  const [data, setData] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Mango" },
    { id: 3, name: "Tomato" },
  ]);

  const onHandleChange = (e) => {
    const listData = data.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value?.toLowerCase());
    });
    setData(listData);
  };

  return (
    <div>
      <input type="text" onChange={onHandleChange} />
      {data.map((item) => (
        <li>{item.name}</li>
      ))}
    </div>
  );
}
