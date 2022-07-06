export default function InputWithSuffix({
  label,
  onChange,
  errMsg,
  error,
  value,
  type,
  option,
  suffix,
  name,
  disabled,
  placeholder,
}) {
  return (
    <div className="form-control w-full ">
      <label className="space-x-1">
        <span className={`label-text ${disabled && 'text-gray-400'}`}>
          {label}
        </span>
        <span
          className={`label-text ${disabled && 'text-gray-400'}text-gray-500`}
        >
          {option}
        </span>
      </label>
      <div className="input centerAll gap-4">
        <p className="right-3 bottom-3 label-text text-gray-400 inline-flex">
          {suffix}
        </p>
        <input
          name={name}
          // defaultValue={value}
          value={value}
          type={type}
          className=" w-full bg-gray-100/0 text-gray-500  outline-none focus:outline-1 focus:outline-offset-0 disabled:text-gray-400 disabled:bg-gray-100 disabled:border-0 "
          onChange={onChange}
          placeholder={
            placeholder
              ? placeholder
              : `Please Enter Your ${name ? name : 'Input'}`
          }
        />
      </div>
      <label className="label">
        {error && <span className="label-text-alt text-red-400">{errMsg}</span>}
      </label>
    </div>
  );
}
