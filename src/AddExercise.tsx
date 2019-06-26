import React from 'react';

const AddExercise: React.FC = () => {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("http://");

  const handleSubmit = () => {

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nimi:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        Url:
        <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
      </label>
      <input type="submit" value="Tallenna" />
    </form>
  );
}

export default AddExercise;
