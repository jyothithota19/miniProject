import React from 'react';
import "../style.css";

function Toggle() {


    function myFunction() {
        const x = document.getElementById("ipsum");
        const y = document.getElementById("article");
        if (x.className === "") {
            x.className = "dropup";
            y.style.display = "block";

        } else {
            x.className = "";
            y.style.display = "none";
        }
    }

    function offerFunc() {
        const x = document.getElementById("article");
        const y = document.getElementById("introd")
        if (x.className === "") {
            x.className = "dropup";
            y.style.display = "block";

        } else {
            x.className = "";
            y.style.display = "none";

        }
    }


    return (

        <section className="mobile">
            <section id="ipsum">
                <h3 className="head dropdown-toggle" onClick={myFunction}> Lorem Ipsum </h3>
            </section>
            <section id="article">
                <h2>Apply in minutes. Get a decision in seconds.</h2>
                <p className="offer dropdown-toggle" onClick={offerFunc}><strong>SPECIAL OFFER FOR YOU </strong></p>
                <article id="introd">Lorem Ipsum is simply dummy text
                    of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.</article>
                <p className="fee">&dollar;295 Annual Fee</p>
            </section>
        </section >

    )
}

export default Toggle;