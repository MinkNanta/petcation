export default function Counter({ setNumber, number, limit }) {
  const handleChange = (e) => {
    if (e.target.value === 'plus' && number < limit) {
      setNumber((number) => number + 1);
    } else if (e.target.value === 'minus' && number > 1) {
      setNumber((number) => number - 1);
    } else if (e.target.id === 'freetype' && e.target.value <= limit) {
      if (+e.target.value > 0) {
        setNumber(e.target.value);
      } else {
        setNumber(1);
      }
    }
    // return el;
  };

  return (
    <div className="w-1/3 flex items-center">
      <button
        className="border border-gray-500 w-8 h-8 rounded-full"
        value="minus"
        onClick={(e) => {
          handleChange(e);
        }}
      >
        -
      </button>
      <input
        type="text"
        className="text-center w-1/3"
        name="qty"
        value={number}
        id="freetype"
        onChange={(e) => {
          handleChange(e);
        }}
        min="1"
      />
      <button
        className="border border-gray-500 w-8 h-8 rounded-full"
        value="plus"
        onClick={(e) => {
          handleChange(e);
        }}
      >
        +
      </button>
    </div>
  );
}
