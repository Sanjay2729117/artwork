import React, { useEffect, useState } from "react";
import "../components/css/Cart.css";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, resetCart } from "../redux/cartReducer";
import axios from "axios";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      const fetchedDetails = {};
      await Promise.all(
        products.map(async (item) => {
          try {
            const res = await axios.get(`http://localhost:1337/api/products/${item.id}?populate=*`, {
              headers: {
                Authorization: `Bearer 5cb74af97b22a71fbdaf240fe98763769a0e9f1dde3d97abc811eb9636eb272c50d9f9a21d18ed4a7f57ff18b302208f9c748461adcb8bcb4e5317da91d23c70dedd10f662adbcaed503c96aa56ad2b7fdca36e47f52190243429c1dfaecbf5355bbe86a4f5abdea3183d0dd5865006352a7129442e50056bbfd84cdaab9d32b`,
         
 
              },
            });
            fetchedDetails[item.id] = res.data.data.attributes;
          } catch (error) {
            console.error("Error fetching product data:", error);
          }
        })
      );
      setProductDetails(fetchedDetails);
    };

    fetchProductDetails();
  }, [products]);

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products.map((item) => {
        const details = productDetails[item.id];
        if (!details) return <div key={item.id}>Loading...</div>;

        const { title, desc, img, price } = details;
        const imageUrl = `http://localhost:1337${img.data.attributes.url}`;

        return (
          <div className="item" key={item.id}>
            <img src={imageUrl} alt={title} />
            <div className="details">
              <h1>{title}</h1>
              <p>{desc?.substring(0, 100)}</p>
              <div className="price">
                {item.quantity} x ${price}
              </div>
            </div>
            <DeleteOutlinedIcon
              className="delete"
              onClick={() => dispatch(removeItem(item.id))}
            />
          </div>
        );
      })}
      <div className="total">
        <div>SUBTOTAL</div>
        <div>${totalPrice()}</div>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <div className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </div>
    </div>
  );
};

export default Cart;
