export default function TextField(props) {
  return (
    <>
      <label type="text">{props.inputLabel}</label>
      <input name="props.inputName" type="text" />
    </>
  );
}
