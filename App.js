import React, { useState } from 'react';

const initialList = [
  { id: 1, name: 'task 1' },
  { id: 2, name: 'task 2' },
  { id: 3, name: 'task 3' },
];

const Mytodo = () => {
  const [list, setList] = useState(initialList);
  const [name, setName] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    const newItem = { id: Date.now(), name };
    setList([...list, newItem]);
    setName('');
  }

  function handleDelete(id) {
    const updatedList = list.filter(item => item.id !== id);
    setList(updatedList);
  }

  return (
    <div>
      <div>
        <input type="text" value={name} onChange={handleChange} />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>

      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleDelete(item.id)}> Delete </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mytodo+