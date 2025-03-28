import { useState } from "react";

function UpdateCountTogether() {

    const[count,setCount]=useState(0);

        function handleClick(){
            setCount(count+1);
        }

        function MyButton({count,onClick}){
               return(
                <button onClick={onClick}>clicked {count} times</button>
               );
        }
    
        return(
            <div>
            <h1>Counters that update together</h1>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
            </div>
        );
}

export default UpdateCountTogether;