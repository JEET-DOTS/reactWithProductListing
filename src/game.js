import React,{ useState } from "react";
import Confetti from 'react-confetti'

const Game = () => {
    const tdStyle = {fontWeight : "bolder", textAlign : "center", fontSize : "20px", border: "1px solid",width : "100px", height: "100px"}
    const data = {0 : "",1 : "",2 : "",3 : "",4 : "",5 : "",6 : "",7 : "",8 : ""};
    const [ squerData, setSquerData ] = useState(data);
    const [ isTrue, setIsTrue ] = useState(true);
    const [ gameOver, setGameOver ] = useState(false);
    const [ lastWeener, setLastWeener ] = useState("");
    const [ reload, setReload ] = useState(false);

    const tabOnGame = (e,index) => {
        if(!gameOver){
            const viewText = (isTrue) ? "X" : "0";
            setLastWeener(viewText);
            squerData[index] = viewText;
            setSquerData(squerData);
            var lastValue = isTrue;
            setIsTrue(lastValue =! lastValue);
            whoIsWeen(e);
        }
        
    }

    const whoIsWeen = (e) => {
        if(squerData[0] == "X" && squerData[1] == "X" && squerData[2] == "X" || squerData[3] == "X" && squerData[4] == "X" && squerData[5] == "X" || squerData[6] == "X" && squerData[7] == "X" && squerData[8] == "X"){
            setGameOver(true);
        }else if(squerData[0] == "0" && squerData[1] == "0" && squerData[2] == "0" || squerData[3] == "0" && squerData[4] == "0" && squerData[5] == "0" || squerData[6] == "0" && squerData[7] == "0" && squerData[8] == "0"){
            setGameOver(true);
        }else if(squerData[0] == "X" && squerData[3] == "X" && squerData[6] == "X" || squerData[1] == "X" && squerData[4] == "X" && squerData[7] == "X" || squerData[2] == "X" && squerData[5] == "X" && squerData[8] == "X"){
            setGameOver(true);
        }else if(squerData[0] == "0" && squerData[3] == "0" && squerData[6] == "0" || squerData[1] == "0" && squerData[4] == "0" && squerData[7] == "0" || squerData[2] == "0" && squerData[5] == "0" && squerData[8] == "0"){
            setGameOver(true);
        }else if(squerData[2] == "X" && squerData[4] == "X" && squerData[6] == "X" || squerData[0] == "X" && squerData[4] == "X" && squerData[8] == "X"){
            setGameOver(true);
        }else if(squerData[2] == "0" && squerData[4] == "0" && squerData[6] == "0" || squerData[0] == "0" && squerData[4] == "0" && squerData[8] == "0"){
            setGameOver(true);
        }else{
            setGameOver(false);
            setReload(true)
        }
    }

    const restartGame = () => {
        setSquerData(data)
        setLastWeener("")
        setIsTrue(true)
        setGameOver(false)
    }
 return (
    <>
        <h1>Game</h1>
        <p>
            {
            (gameOver) ? 
            <>
                <Confetti/> 
                The winner is : {lastWeener}
                <br/>
                <button className="btn btn-success" onClick={() => restartGame()  }> Restart Game </button>
            </>  : (reload) ? <button className="btn btn-danger" onClick={() => restartGame()  }> ReLoad Game </button> : ''
            }
        </p>
        

        <table style={{border: "1px solid",width: "50%",height: "200px",margin: "0 auto"}}>
            <tbody>
                <tr key={"1"} style={{border: "1px solid"}}>
                    <td  key={"11"} onClick={(e) => (!squerData[0]) ? tabOnGame(e,0) : ''}   style={tdStyle}  >{squerData[0]}</td>
                    <td  key={"12"} onClick={(e) => (!squerData[1]) ? tabOnGame(e,1) : ''}   style={tdStyle}  >{squerData[1]}</td>
                    <td  key={"13"} onClick={(e) => (!squerData[2]) ? tabOnGame(e,2) : ''}   style={tdStyle}  >{squerData[2]}</td>
                </tr>
                <tr key={"2"} style={{border: "1px solid"}}>
                    <td  key={"14"} onClick={(e) => (!squerData[3]) ? tabOnGame(e,3) : ''}   style={tdStyle}  >{squerData[3]}</td>
                    <td  key={"15"} onClick={(e) => (!squerData[4]) ? tabOnGame(e,4) : ''}   style={tdStyle}  >{squerData[4]}</td>
                    <td  key={"16"} onClick={(e) => (!squerData[5]) ? tabOnGame(e,5) : ''}   style={tdStyle}  >{squerData[5]}</td>
                </tr>
                <tr key={"3"} style={{border: "1px solid"}}>
                    <td  key={"17"} onClick={(e) => (!squerData[6]) ? tabOnGame(e,6) : ''}   style={tdStyle}  >{squerData[6]}</td>
                    <td  key={"18"} onClick={(e) => (!squerData[7]) ? tabOnGame(e,7) : ''}   style={tdStyle}  >{squerData[7]}</td>
                    <td  key={"19"} onClick={(e) => (!squerData[8]) ? tabOnGame(e,8) : ''}   style={tdStyle}  >{squerData[8]}</td>
                </tr>
            </tbody>
        </table>
    </>
 )
}

export {Game};