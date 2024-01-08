function Button({ children, className = "" }) {
  return (
    <button
      type="button"
      className={` rounded bg-violet-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600  focus:bg-violet-600  focus:outline-none focus:ring-0 active:bg-violet-700 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
