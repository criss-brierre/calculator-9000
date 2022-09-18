import './MagnificientSaveButton.css';


const SAVE = (props) => {
    return(
          <button onClick={() => {props.saveBeggin()}}class="button l">SAVE</button>
    )
  }

export default SAVE;
