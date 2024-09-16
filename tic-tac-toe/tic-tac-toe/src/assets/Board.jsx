import React from "react";
import square from "./square";


const Board = () => {


    return(
        <div className="board">
            <div className="board-row">
                <square/>
                <square/>
                <square/>
            </div>
            <div className="board-row">
            <square/>
            <square/>
            <square/>
            </div>
            <div className="board-row">
                <square/>
            </div>
        </div>
    )
}
