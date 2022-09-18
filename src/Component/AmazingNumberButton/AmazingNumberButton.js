
import './AmazingNumberButton.css';

function tbody(){

}
const ButtonNumber = (props) => { 
const touch = [1,2,3,4,5,6,7,8,9,0]
  return(
    <>
  <div class="calc-button-row">
   {touch.map(element =>
   <>
    
    <button onClick={() => {props.numb(element)}} className="button">{element}</button>
    
  </>
    ) }
      <div class = "buttono"></div>
    </div>
  </>
  ) 
  
}
  

export default ButtonNumber;
