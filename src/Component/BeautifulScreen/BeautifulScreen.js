
import './BeautifulScreen.css';

const Screen = (props) => {
    return(
        <div className="calc-screen">
          <div className="calc-operation">{props.value}</div>
          <div className="calc-typed">{props.value2}</div>
        </div>
    ) }

  
export default Screen;