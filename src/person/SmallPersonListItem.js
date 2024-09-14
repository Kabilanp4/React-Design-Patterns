export const SmallPersonListItem = ({ person }) => {
  const { name, age } = person;
  return (
    <>
      <h1>
        Name :{name}, Age :{age}
      </h1>
    </>
  );
};
