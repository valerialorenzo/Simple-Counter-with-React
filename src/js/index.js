//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

let segundo1 = 0
let segundo2 = 0
let minuto1 = 0
let minuto2 = 0
let hora1 = 0
let hora2 = 0

setInterval(() => {
            segundo1++;
            if (segundo1 > 9) {
                segundo1 = 0;
                segundo2++

            }
            if (segundo2 > 9) {
                segundo2 = 0;
                minuto1++
            }

            if (minuto1 > 9) {
                minuto1 = 0;
                minuto2++
            }

            if (minuto2 > 9) {
                minuto2 = 0;
                hora1++
            }
            if (hora1 > 9) {
                hora1 = 0;
                hora2++
            }


            ReactDOM.render( < SecondsCounter segundo1 = {
                    segundo1
                }
                segundo2 = {
                    segundo2
                }
                minuto1 = {
                    minuto1
                }
                minuto2 = {
                    minuto2
                }
                hora1 = {
                    hora1
                }
                hora2 = {
                    hora2
                }

                / > , document.querySelector("#app"));


            }, 1000)

        //render your react application