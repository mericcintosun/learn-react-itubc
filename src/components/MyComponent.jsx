import { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.valgue);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };
  const handlePayment = (e) => {
    setPayment(e.target.value);
  };
  const handleShipping = (e) => {
    setShipping(e.target.value);
  };

  return (
    <>
      <div className="grid gap-3 max-w-[500px] m-auto mt-12 text-xl">
        <input value={name} onChange={handleNameChange} className="border" />
        <p>Name: {name} </p>

        <input
          className="border"
          value={quantity}
          onChange={handleQuantity}
          type="number"
        />
        <p>Quantity: {quantity}</p>

        <textarea
          className="border"
          value={comment}
          onChange={handleComment}
          placeholder="your comment..."
        ></textarea>
        <p>Comment: {comment}</p>

        <select className="border" value={payment} onChange={handlePayment}>
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="Mastercard">Mastercard</option>
          <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment: {payment}</p>

        <div className="flex justify-between px-12">
        <label>
          <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShipping} />
          &nbsp; Pick Up
        </label>
        <label>
          <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShipping} />
          &nbsp; Delivery
        </label>
        </div>
        <p>Shipping: {shipping}</p>
      </div>
    </>
  );
};

export default MyComponent;
