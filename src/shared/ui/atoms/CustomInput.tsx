function CustomInput(props: Readonly<React.InputHTMLAttributes<HTMLInputElement>>) {
  return <input {...props} className="border border-gray-300 rounded p-2" />;
}

export default CustomInput;
