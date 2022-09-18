import '../ItSOverNineThousand/ItSOverNineThousand.css';


const Overbutton = (props) => {
  if(props.IsOver()){
    return(
          <h1 >It’s Over 9000 !!! </h1>
    )
  } else {
    return null;
  }
  }
  

export default Overbutton;
