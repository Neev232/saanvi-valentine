import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [opened, setOpened] = useState(false);
  const [daysTogether, setDaysTogether] = useState(0);

  const correctPassword = "monkey";

  useEffect(() => {
    const startDate = new Date("2024-10-13");
    const today = new Date();
    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    setDaysTogether(diffDays);
  }, []);

  const memories = [
    "Being in class together ❤️",
    "McDonald's dates 🍟",
    "California Burrito runs 🌯",
    "Gobi Manchurian cravings 😌",
    "Playing Roblox together 🎮",
    "Late night GMeet calls 💻"
  ];

  if (!authenticated) {
    return (
      <div style={styles.lockScreen}>
        <div style={styles.card}>
          <h2>Private for Saanvi 💌</h2>
          <input
            type="password"
            placeholder="Enter our secret word"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button
            style={styles.button}
            onClick={() => password.toLowerCase() === correctPassword && setAuthenticated(true)}
          >
            Enter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Background Music */}
      <iframe
        width="0"
        height="0"
        src="https://www.youtube.com/embed/tKV6rNC3j9Y?autoplay=1&loop=1&playlist=tKV6rNC3j9Y"
        title="Sunflower"
        allow="autoplay"
      />

      <h1 style={styles.title}>Happy Valentine's Day, Saanvi ❤️</h1>
      <p>To my Monkey, Lovey, Babby, Cutu</p>
      <p>Together since October 13th, 2024 — {daysTogether} days 💘</p>

      {!opened ? (
        <button style={styles.button} onClick={() => setOpened(true)}>
          Open Your Surprise
        </button>
      ) : (
        <div style={{ marginTop: 40 }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div style={styles.card}>
              <p>
                You are my favourite person in the entire world. Every class, every
                McD fry, every Roblox game, every GMeet call — I wouldn't trade it
                for anything.
              </p>
              <h2 style={{ color: "#e91e63" }}>I love you endlessly.</h2>
            </div>
          </motion.div>

          <h2 style={{ marginTop: 50 }}>Our Favourite Moments 💞</h2>
          <div style={styles.grid}>
            {memories.map((memory, index) => (
              <div key={index} style={styles.card}>
                {memory}
              </div>
            ))}
          </div>

          <h2 style={{ marginTop: 50 }}>Us 📸</h2>
          <div style={styles.grid}>
  {Array.from({ length: 14 }).map((_, index) => (
    <img
      key={index}
      src={`/images/${index + 1}.jpg`}
      alt={`Memory ${index + 1}`}
      style={styles.image}
    />
  ))}
</div>

          <h2 style={{ marginTop: 50 }}>
            Will you be my Valentine again? 💍
          </h2>
          <button style={styles.button}>
            Yes (You have no other option 😌)
          </button>

          <p style={{ marginTop: 60, opacity: 0.7 }}>
            Made with dangerous levels of love by Neev 💗
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: 20,
    textAlign: "center",
    background: "linear-gradient(to bottom right, #000000, #4a001f)",
    color: "white",
  },
  lockScreen: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
  },
  card: {
    backgroundColor: "white",
    color: "black",
    padding: 20,
    borderRadius: 15,
    margin: 10,
  },
  input: {
    padding: 10,
    margin: 10,
    borderRadius: 8,
    border: "1px solid #ccc",
    width: "80%",
  },
  button: {
    padding: "10px 20px",
    borderRadius: 10,
    border: "none",
    backgroundColor: "#e91e63",
    color: "white",
    cursor: "pointer",
    marginTop: 10,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 15,
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: 250,
    objectFit: "cover",
    borderRadius: 15,
  },
};

