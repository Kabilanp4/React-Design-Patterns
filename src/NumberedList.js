export const NumberedList = ({
  items,
  sourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, i) => (
        <div key={i}>
          <h3>Index :{i + 1}</h3>
          <ItemComponent {...{ [sourceName]: item }} />
        </div>
      ))}
    </>
  );
};
