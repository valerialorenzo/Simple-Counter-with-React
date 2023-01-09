import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SecondsCounter = (props) => {
	return (
		<div className="text-center container-fluid"> 
		<div className="d-flex justify-content-around bg-black" style={{height:"150px"}}>
<div className="bg-dark text-white col-1" style={{fontSize: "90px"}}><i className="far fa-clock">
</i>
</div>
<div className="bg-dark text-white m-1" style={{fontSize: "90px", width: "10%"}}>{props.hora2}</div>
<div className="bg-dark text-white m-1" style={{fontSize: "90px", width: "8%"}}>{props.hora1}</div>
<div className="bg-dark text-white m-1" style={{fontSize: "90px", width: "8%"}}>{props.minuto2}</div>
<div className="bg-dark text-white m-1" style={{fontSize: "90px", width: "8%"}}>{props.minuto1}</div>
<div className="bg-dark text-white m-1" style={{fontSize: "90px", width: "8%"}}>{props.segundo2}</div>
<div className="bg-dark text-white m-1" style={{fontSize: "90px", width: "8%"}}>{props.segundo1}</div>


	</div>
		</div>

		
	);
};

export default SecondsCounter;
