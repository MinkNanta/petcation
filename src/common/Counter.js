import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);

  // useEffect(() => {
  //   const updateQuantity = async () => {
  //     try {
  //       await axios.patch("/cartitems", { productId, quantity: count });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   if (count > 0) {
  //     updateQuantity();
  //   }
  // }, [count]);

  const handleChange = (e) => {
    if (e.target.value === "plus") {
      // el.quantity += 1;
      setCount(+count + 1);
    } else if (e.target.value === "minus" && count > 1) {
      // el.quantity -= 1;
      setCount(+count - 1);
    } else if (e.target.id === "freetype") {
      if (+e.target.value > 0) {
        //   el.quantity = e.target.value;
        setCount(e.target.value);
      } else {
        // el.quantity = 1;
        setCount(1);
      }
    }
    // return el;

    // setCartItems(newCartItems);
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
        value={count}
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
