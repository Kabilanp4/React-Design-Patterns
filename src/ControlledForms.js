import { useEffect, useState } from "react";

export const ControlledForms = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [hairColor, sethairColor] = useState("");
  const [errormsg, seterrormsg] = useState("");
  useEffect(() => {
    if (name.length < 2) {
      seterrormsg("Name should be atleast 2 characters");
    } else {
      seterrormsg("");
    }
  }, [name]);
  return (
    <>
      {errormsg && <p>{errormsg}</p>}
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <input
        name="age"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
      />
      <input
        name="hairColor"
        type="text"
        value={hairColor}
        onChange={(e) => sethairColor(e.target.value)}
        placeholder="hairColor"
      />
      <button>submit</button>
    </>
  );
};
