import './MagnificientAcButton.css';


const Ac = (props) => {
    return(
          <button onClick={() => {props.reset()}}class="button l">AC</button>
    )
  }

export default Ac;
