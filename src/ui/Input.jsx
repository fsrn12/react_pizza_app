const Input = function ({ id, type = 'text', className, text }) {
  return (
    <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
      <label htmlFor={id} className="sm:basis-40">
        {text}
      </label>
      <div className="grow">
        <input type={type} name={id} required className={className} />
      </div>
    </div>
  );
};

export default Input;
