function CustomInput(props: Readonly<React.InputHTMLAttributes<HTMLInputElement>>) {
  return (
    <label htmlFor={props.id} className="flex flex-col gap-2">
      {props.name}
      <input {...props} className="border border-gray-300 rounded p-2" />
    </label>
  );
}

export default CustomInput;
