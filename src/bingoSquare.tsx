import React, { Fragment } from 'react';
import './App.css';
import {Typography} from "@material-ui/core";

interface squareProps {
    text: string;
    image: string;
    size: string;
  }

const BingoSquare : React.FunctionComponent<squareProps> = ({text, image, size}) => {
  return (
    <Fragment>
        <Typography variant="h6">{text}</Typography>
        {(image !== "") && <img src={image} style={{width: size !== "" ? (size + "px") : "75px"}} alt={text}></img>}
    </Fragment>
  );
}

export default BingoSquare;
