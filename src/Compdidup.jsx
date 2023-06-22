import React, { useState, useEffect } from 'react';

function AddItemForm({ defaultName }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [addedItem, setAddedItem] = useState(null);

  useEffect(() => {
    setName(defaultName);
    setDescription('');
  }, [defaultName]);

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newItem = {
      name,
      description,
    };
    setAddedItem(newItem);
    // Reset form fields
    setName('');
    setDescription('');
  };

  return (
    <div>
      <h1>Add New Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <button type="submit">Add Item</button>
      </form>
      {addedItem && (
        <div>
          <h2>Added Item</h2>
          <p>Name: {addedItem.name}</p>
          <p>Description: {addedItem.description}</p>
        </div>
      )}
    </div>
  );
}

export default AddItemForm;
