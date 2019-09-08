import React from "react";
import {connect} from "react-redux";


const Tile:React.FC = ({isActive}: any) =>
    <button className={`${isActive ? 'active' : ''}`}/>;

export default connect(({snake}:any, {x, y}: any) => ({
    isActive: snake.find(([snakeX, snakeY]:any) => snakeX === x && snakeY === y )
}))(Tile);