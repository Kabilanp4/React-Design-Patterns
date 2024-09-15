import React from "react";
export const UncontrolledForms = () => {
  const nameInput = React.createRef();
  const ageInput = React.createRef();
  const hairColorInput = React.createRef();

  const HandleSubmit = (e) => {
    console.log(nameInput.current.value);
    console.log(ageInput.current.value);
    console.log(hairColorInput.current.value);
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={HandleSubmit}>
        <input name="name" type="text" placeholder="Name" ref={nameInput} />
        <input name="age" type="text" placeholder="Age" ref={ageInput} />
        <input
          name="hairColor"
          type="text"
          placeholder="HairColor"
          ref={hairColorInput}
        />
        <input type="submit" value="submit" />
      </form>
    </>
  );
};
