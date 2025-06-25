function CustomButton(props: Readonly<React.ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      {...props}
      className="cursor-pointer border-1 bg-indigo-800 text-white p-2 rounded-2xl uppercase"
    >
      {props.children}
    </button>
  );
}

export default CustomButton;
