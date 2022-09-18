
import './GreatOperationButton.css';
import Equal from '../MagnificientEqualButton/MagnificientEqualButton' ;
const ButtonOperation = (props) => {
  const Ope = ["-","+","*","/"];
    return(
      <>
        <div className="calc-button-row">
 {Ope.map(element => 
    
      <div onClick={() => {props.numb(element)}} class="button l">{element}</div>
    
)}

</div>
     </>
    )
  }

export default ButtonOperation;
