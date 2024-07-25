import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    background: "linear-gradient(45deg, #D9D9D9 30%, #E6E6E6 90%)",
  },
  media: {
    height: 0,
    paddingTop: "105%",
    "&:hover": {
      backgroundColor: "#2a344a",
      boxShadow: "none",
    },
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    background: "#001524",
    color: "white",
    width: "100%",
    height: "40px",

    "&:hover": {
      backgroundColor: "#2a344a",
      boxShadow: "none",
    },
  },
  cardContentName: {
    fontSize: 20,
    textAlign: "center",
    margin: "4px !important",
    fontWeight: 500,
  },
  cardContentPrice: {
    fontSize: 20,
    color: "#F1361D",
    margin: "0 !important",
  },
  "@media (max-width: 700px)": {
    cardContentName: {
      fontSize: 14,
      textAlign: "center",
    },
    cardContentPrice: {
      fontSize: 16,
    },
  },
}));
