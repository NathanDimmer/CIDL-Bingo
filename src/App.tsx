import React from "react";
import "./App.css";
import {
  Grid,
  Typography,
  Container,
  makeStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Slide,
} from "@material-ui/core";
import BingoSquare from "./bingoSquare";

const useStyles = makeStyles({
  trBorder: {
    border: "1px solid black",
    borderCollapse: "collapse",
  },
  tdBorder: {
    border: "1px solid black",
    borderCollapse: "collapse",
    width: "18vw",
    backgroundColor: "#FFFFFF",
    transition: "0.2s",
  },
  tdBorderSelected: {
    border: "1px solid black",
    borderCollapse: "collapse",
    width: "18vw",
    backgroundColor: "#FECC6B",
    transition: "0.2s",
  },
});

function App() {
  const classes = useStyles();

  const [squares, setSquares] = React.useState([
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, true, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ]);
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = React.useState([false, false, false, false, false]);
  const [columns, setColumns] = React.useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [diag1, setDiag1] = React.useState(false);
  const [diag2, setDiag2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (x: number, y: number) => {
    var newSquares = squares.map(function (arr) {
      return arr.slice();
    });
    newSquares[x][y] = !newSquares[x][y];
    setSquares(newSquares);

    console.log("Checking");
    for (var h = 0; h < newSquares.length; h++) {
      console.log(h);
      if (
        newSquares[h][0] &&
        newSquares[h][1] &&
        newSquares[h][2] &&
        newSquares[h][3] &&
        newSquares[h][4]
      ) {
        if (!rows[h]) {
          setOpen(true);
          var newRows = rows.slice();
          newRows[h] = true;
          setRows(newRows);
        }
      }
    }
    console.log("Done 1");
    for (var v = 0; v < newSquares[0].length; v++) {
      if (
        newSquares[0][v] &&
        newSquares[1][v] &&
        newSquares[2][v] &&
        newSquares[3][v] &&
        newSquares[4][v]
      ) {
        if (!columns[v]) {
          setOpen(true);
          var newColumns = columns.slice();
          newColumns[v] = true;
          setColumns(newColumns);
        }
      }
    }
    console.log("Done 2");
    if (
      newSquares[0][0] &&
      newSquares[1][1] &&
      newSquares[2][2] &&
      newSquares[3][3] &&
      newSquares[4][4]
    ) {
      if (!diag1) {
        setOpen(true);
        setDiag1(true);
      }
    }
    console.log("Done 3");
    if (
      newSquares[0][4] &&
      newSquares[1][3] &&
      newSquares[2][2] &&
      newSquares[3][1] &&
      newSquares[4][0]
    ) {
      if (!diag2) {
        setOpen(true);
        setDiag2(true);
      }
    }
    console.log("Done");
  };

  return (
    <div className="App">
      <Container>
        <Grid container justify="center">
          <Grid item>
            <Typography variant="h3">
              <img
                src="../../Assets/logo.jpg"
                style={{ height: "8rem", marginRight: "2rem" }}
              ></img>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3">
              Adult <br /> Bingo
            </Typography>
          </Grid>
        </Grid>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tr className={classes.trBorder}>
            <td
              className={
                squares[0][0] ? classes.tdBorderSelected : classes.tdBorder
              }
              onClick={() => {
                handleClick(0, 0);
              }}
            >
              <BingoSquare
                size=""
                text="Read for 2 Hours"
                image="../../Assets/1.jpg"
              ></BingoSquare>
            </td>
            <td
              className={
                squares[0][1] ? classes.tdBorderSelected : classes.tdBorder
              }
              onClick={() => {
                handleClick(0, 1);
              }}
            >
              <BingoSquare
                size="60"
                text="Like Us on Instagram @cidlib"
                image="../../Assets/2.jpg"
              ></BingoSquare>
            </td>
            <td
              className={
                squares[0][2] ? classes.tdBorderSelected : classes.tdBorder
              }
              onClick={() => {
                handleClick(0, 2);
              }}
            >
              <BingoSquare
                size="150"
                text="Explore Crative Bug"
                image="../../Assets/3.jpg"
              ></BingoSquare>
            </td>
            <td
              className={
                squares[0][3] ? classes.tdBorderSelected : classes.tdBorder
              }
              onClick={() => {
                handleClick(0, 3);
              }}
            >
              <BingoSquare
                size="100"
                text="Attend our 'Anywhere Reads' virtual book group"
                image="../../Assets/4.jpg"
              ></BingoSquare>
            </td>
            <td
              className={
                squares[0][4] ? classes.tdBorderSelected : classes.tdBorder
              }
              onClick={() => {
                handleClick(0, 4);
              }}
            >
              <BingoSquare
                size="200"
                text="Research an Ancestor on Ancestry Library Edition"
                image="../../Assets/5.jpg"
              ></BingoSquare>
            </td>
          </tr>
          <tr className={classes.trBorder}>
            <td
              className={
                squares[1][0] ? classes.tdBorderSelected : classes.tdBorder
              }
              onClick={() => {
                handleClick(1, 0);
              }}
            >
              <BingoSquare
                size=""
                text="Follow us on Facebook @CIDLibrary"
                image="../../Assets/6.jpg"
              ></BingoSquare>
            </td>
            <td
              className={
                squares[1][1] ? classes.tdBorderSelected : classes.tdBorder
              }
              onClick={() => {
                handleClick(1, 1);
              }}
            >
              <BingoSquare
                size="125"
                text="Learn a Language with Mango"
                image="../../Assets/7.jpg"
              ></BingoSquare>
            </td>
            <td
              className={
                squares[1][2] ? classes.tdBorderSelected : classes.tdBorder
              }
              onClick={() => {
                handleClick(1, 2);
              }}
            >
              <BingoSquare
                size=""
                text="Download a Book Using Overdrive"
                image="../../Assets/8.jpg"
              ></BingoSquare>
            </td>
            <td
              className={
                squares[1][3] ? classes.tdBorderSelected : classes.tdBorder
              }
              onClick={() => {
                handleClick(1, 3);
              }}
            >
              <BingoSquare
                size=""
                text="Read a Romance Novel"
                image="../../Assets/9.jpg"
              ></BingoSquare>
            </td>
            <td
              className={
                squares[1][4] ? classes.tdBorderSelected : classes.tdBorder
              }
              onClick={() => {
                handleClick(1, 4);
              }}
            >
              <BingoSquare
                size=""
                text="Read for 2 Hours"
                image="../../Assets/1.jpg"
              ></BingoSquare>
            </td>
          </tr>
          <tr className={classes.trBorder}>
            <td
              className={
                squares[2][0] ? classes.tdBorderSelected : classes.tdBorder
              }
              onClick={() => {
                handleClick(2, 0);
              }}
            >
              <BingoSquare
                size=""
                text="Download Music Using Hoopla"
                image="../../Assets/11.jpg"
              ></BingoSquare>
            </td>
            <td
              className={
                squares[2][1] ? classes.tdBorderSelected : classes.tdBorder
              }
              onClick={() => {
                handleClick(2, 1);
              }}
            >
              <BingoSquare
                size=""
                text="Subscribe to Our YouTube Channel"
                image="../../Assets/12.jpg"
              ></BingoSquare>
            </td>
            <td
              className={
                squares[2][2] ? classes.tdBorderSelected : classes.tdBorder
              }
              onClick={() => {
                handleClick(2, 2);
              }}
            >
              <BingoSquare
                size="165"
                text="Free Space!"
                image="../../Assets/13.jpg"
              ></BingoSquare>
            </td>
            <td
              className={
                squares[2][3] ? classes.tdBorderSelected : classes.tdBorder
              }
              onClick={() => {
                handleClick(2, 3);
              }}
            >
              <BingoSquare
                size=""
                text="Read for 2 Hours"
                image="../../Assets/1.jpg"
              ></BingoSquare>
            </td>
            <td
              className={
                squares[2][4] ? classes.tdBorderSelected : classes.tdBorder
              }
              onClick={() => {
                handleClick(2, 4);
              }}
            >
              <BingoSquare
                size=""
                text="Learn About One of Our Resources by Watching an Explore in Four Video"
                image=""
              ></BingoSquare>
            </td>
          </tr>
          <tr className={classes.trBorder}>
            <td
              className={
                squares[3][0] ? classes.tdBorderSelected : classes.tdBorder
              }
              onClick={() => {
                handleClick(3, 0);
              }}
            >
              <BingoSquare
                size=""
                text="Download a Movie Using Kanopy"
                image="../../Assets/16.jpg"
              ></BingoSquare>
            </td>
            <td
              className={
                squares[3][1] ? classes.tdBorderSelected : classes.tdBorder
              }
              onClick={() => {
                handleClick(3, 1);
              }}
            >
              <BingoSquare
                size=""
                text="Read for 2 Hours"
                image="../../Assets/1.jpg"
              ></BingoSquare>
            </td>
            <td
              className={
                squares[3][2] ? classes.tdBorderSelected : classes.tdBorder
              }
              onClick={() => {
                handleClick(3, 2);
              }}
            >
              <BingoSquare
                size=""
                text="Download a Magazine using RBDigital"
                image="../../Assets/18.jpg"
              ></BingoSquare>
            </td>
            <td
              className={
                squares[3][3] ? classes.tdBorderSelected : classes.tdBorder
              }
              onClick={() => {
                handleClick(3, 3);
              }}
            >
              <BingoSquare
                size=""
                text="Read a Post on Beth's Blog"
                image="../../Assets/19.jpg"
              ></BingoSquare>
            </td>
            <td
              className={
                squares[3][4] ? classes.tdBorderSelected : classes.tdBorder
              }
              onClick={() => {
                handleClick(3, 4);
              }}
            >
              <BingoSquare
                size=""
                text="Download a Book Using Overdrive"
                image="../../Assets/8.jpg"
              ></BingoSquare>
            </td>
          </tr>
          <tr className={classes.trBorder}>
            <td
              className={
                squares[4][0] ? classes.tdBorderSelected : classes.tdBorder
              }
              onClick={() => {
                handleClick(4, 0);
              }}
            >
              <BingoSquare
                size=""
                text="Take a Class with Gale Courses"
                image="../../Assets/21.jpg"
              ></BingoSquare>
            </td>
            <td
              className={
                squares[4][1] ? classes.tdBorderSelected : classes.tdBorder
              }
              onClick={() => {
                handleClick(4, 1);
              }}
            >
              <BingoSquare
                size=""
                text="Read a Chilren's Book"
                image="../../Assets/22.jpg"
              ></BingoSquare>
            </td>
            <td
              className={
                squares[4][2] ? classes.tdBorderSelected : classes.tdBorder
              }
              onClick={() => {
                handleClick(4, 2);
              }}
            >
              <BingoSquare
                size=""
                text="Download a Comic With Hoopla"
                image="../../Assets/11.jpg"
              ></BingoSquare>
            </td>
            <td
              className={
                squares[4][3] ? classes.tdBorderSelected : classes.tdBorder
              }
              onClick={() => {
                handleClick(4, 3);
              }}
            >
              <BingoSquare
                size=""
                text="Read for 2 Hours"
                image="../../Assets/1.jpg"
              ></BingoSquare>
            </td>
            <td
              className={
                squares[4][4] ? classes.tdBorderSelected : classes.tdBorder
              }
              onClick={() => {
                handleClick(4, 4);
              }}
            >
              <BingoSquare
                size=""
                text="Attend a Virtual Library Event"
                image="../../Assets/25.jpg"
              ></BingoSquare>
            </td>
          </tr>
        </table>
      </Container>

      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {
            "You got a bingo! Fill out the form below to be entered to win a prize!"
          }
        </DialogTitle>
        <DialogContent>Form here</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
