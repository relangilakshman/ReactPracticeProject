import MyButton from "./MyButton";
import './MyButton.css'
import ButtonOnClick from "./ButtonOnClick";
import SetCountButton from "./SetCountButton";
import UpdateCountTogether from "./UpdateCountTogether";

function FunctionApp()
{
   return(
    <div>
    <h1>welcome to my app</h1>
    <MyButton/>
    <ButtonOnClick/>
    <SetCountButton/>
    <UpdateCountTogether/>
    <UpdateCountTogether/>
    </div>
   )
}

export default FunctionApp;