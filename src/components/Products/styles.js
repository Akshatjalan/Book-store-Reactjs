import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  mainPage: { flexGrow: 1, overflowX: "hidden", overflowY: "hidden" },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(5),
    paddingTop: theme.spacing(2),
  },
  hero: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heroHeader: {
    textAlign: "left ",
    color: "#001524",
    fontSize: 32,
    fontFamily: "Raleway",
    fontWeight: "bolder",
  },
  contentHeader: {
    textAlign: "center",
    color: "#001524",
    fontSize: 32,
    fontFamily: "Raleway",
    fontWeight: "bolder",
    paddingTop: theme.spacing(5),
    backgroundColor: "#EEEEEE",
    margin: "0 !important",
  },
  contentFeatured: {
    gap: 15,
    // backgroundColor: "#2a344a",
    padding: theme.spacing(5),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(7),
    backgroundColor: "#EEEEEE",
  },
  root: {
    flexGrow: 1,
  },
  searchs: {
    justifyContent: "center",
    display: "flex",
  },
  searchb: {
    backgroundColor: "white",
    height: "80%",
    width: "60%",
    padding: "15px",
    borderRadius: "10px",
  },
  bookstHeader: {
    textAlign: "center",
    color: "#001524",
    fontSize: 32,
    fontFamily: "Raleway",
    fontWeight: "bolder",
    paddingTop: theme.spacing(5),
  },
  booksDesc: {
    textAlign: "center",
    color: "#001524",
    fontSize: 20,
    fontFamily: "Raleway",
  },
}));
