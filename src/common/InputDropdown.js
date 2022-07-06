export default function InputDropdown({
  label,
  onChange,
  errMsg,
  error,
  option,
  children,
  value,
  name,
  disabled,
}) {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className={`label-text ${disabled && 'text-gray-400'}`}>
          {label}
        </span>
      </label>
      <select
        disabled={disabled}
        name={name}
        value={value}
        className="select select-bordered w-full bg-gray-100 text-gray-500 rounded-2xl border-0 focus:border-0 text-xs font-normal disabled:text-gray-400 disabled:bg-gray-100 focus:outline-offset-0  focus:outline-1"
        onChange={onChange}
      >
        {children}
      </select>
      <label className="label">
        {error && <span className="label-text-alt text-red-400">{errMsg}</span>}
      </label>
    </div>
  );
}
