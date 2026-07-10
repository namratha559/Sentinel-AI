function Loading() {
  return (
    <div
      style={{
        padding: "30px",
        textAlign: "center",
      }}
    >
      <h2>🌍 Fetching Live Weather...</h2>

      <div
        style={{
          width: "55px",
          height: "55px",
          border: "6px solid #ddd",
          borderTop: "6px solid #2563eb",
          borderRadius: "50%",
          margin: "25px auto",
          animation: "spin 1s linear infinite",
        }}
      ></div>

      <p>Please wait while Sentinel AI analyzes this location.</p>
    </div>
  );
}

export default Loading;