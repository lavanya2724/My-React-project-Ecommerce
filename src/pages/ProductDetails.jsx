
import { products } from "../date/product.js";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext.jsx";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const styles = {
    container: {
      maxWidth: "800px",
      margin: "50px auto",
      padding: "30px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      borderRadius: "12px",
      backgroundColor: "#fff",
      fontFamily: "'Segoe UI', sans-serif",
      textAlign: "center",
    },
    image: {
      width: "100%",
      height: "300px",
      maxWidth: "600px", // Optional: limits the maximum width
      borderRadius: "10px",
      marginBottom: "20px",
      objectFit: "contain", // Ensures the image maintains its aspect ratio
    },
    name: {
      fontSize: "2rem",
      marginBottom: "10px",
      color: "#333",
    },
    description: {
      fontSize: "1.1rem",
      marginBottom: "15px",
      color: "#555",
    },
    price: {
      fontSize: "1.3rem",
      fontWeight: "bold",
      color: "green",
      marginBottom: "20px",
    },
    button: {
      padding: "12px 25px",
      fontSize: "1rem",
      backgroundColor: "#4CAF50",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.name}>{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        style={styles.image}
      />
      <p style={styles.description}>{product.description}</p>
      <p style={styles.price}>₹{product.price}</p>
      <button
        style={styles.button}
        onClick={() => {
          addToCart(product);
          navigate("/cart");
        }}
      >
        🛒 Add to Cart
      </button>
    </div>
  );
}
