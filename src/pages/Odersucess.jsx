import { useCart } from "../context/cartContext";
import { useEffect } from "react";

export default function OrderSuccess() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      textAlign: "center",
      backgroundColor: "#f0f4f8", // Light blue-gray background
      padding: "20px",
      fontFamily: "'Segoe UI', sans-serif",
      color: "#333", // Dark text for readability
    },
    title: {
      fontSize: "2.5rem",
      marginBottom: "20px",
      color: "#007BFF", // Primary blue color
    },
    message: {
      fontSize: "1.2rem",
      marginBottom: "30px",
      color: "#555", // Slightly lighter gray for the message
    },
    button: {
      padding: "12px 25px",
      fontSize: "1rem",
      backgroundColor: "#007BFF", // Matching blue for the button
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "background 0.3s ease, transform 0.2s ease",
      textDecoration: "none",
      boxShadow: "0 0 10px rgba(0, 123, 255, 0.8)",
    },
    buttonHover: {
      backgroundColor: "#0056b3", // Darker blue for hover effect
      transform: "scale(1.05)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎉 Order Placed Successfully!</h1>
      <p style={styles.message}>Thank you for shopping with us.</p>
      <a href="/" style={styles.button}>
        Go to Home
      </a>
    </div>
  );
}
