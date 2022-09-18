import './MagnificientEqualButton.css';


const EqualButton = (props) => {
    return(
          <button onClick={() => {props.calc()}}class="button l">=</button>
    )
  }

export default EqualButton;
