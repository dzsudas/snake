import React from "react";
import {fill} from 'lodash';
import {connect} from 'react-redux';
import Tile from "Tile";

const Field: React.FC = ({rows, columns}: any) =>
    <div>
        {fill(Array(rows), '_').map((_, i) => (
            <div key={i}>
                {fill(Array(columns), '').map((_, j) => (
                    <Tile key={`${i}_${j}`} x={i} y={j}/>
                ))}
                <br />
            </div>
        ))}
    </div>;

export default connect<any, any, any>(({fields}: any) => ({rows: fields[0], columns: fields[1]}))(Field);