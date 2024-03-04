// Category.styles.js

const categoryStyles = {
  category: {
    background: "linear-gradient(rgba(170, 173, 255, 0.7), rgba(68, 71, 255, 0.7)), url('../../Assets/089.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "95vh",
    marginTop: "-15rem",
    padding: "20rem 3rem 0 3rem",
  },
  categoryCardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
  },
  categoryCard: {
    border: "1px solid #000000",
    padding: "10px",
    textAlign: "center",
  },
  categoryCardImage: {
    maxWidth: "100%",
    height: "auto",
  },
  accordion: {
    borderRadius: "5px",
    marginBottom: "10px",
  },
  summary: {
    cursor: "pointer",
    padding: "10px",
    backgroundColor: "#1d1d1da9",
    borderBottom: "1px solid #040038",
    borderRadius: "5px 5px 0 0",
    color: "#e4e4e4",
  },
  openDetailsSummary: {
    borderRadius: "5px 5px 0 0",
  },
  openDetails: {
    border: "1px solid #ccc",
    borderRadius: "5px 5px 5px 5px",
  },
};

export default categoryStyles;
