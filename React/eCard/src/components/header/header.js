import React from 'react';
import "../style.css";
import Toggle from './toggle';

function Ipsum() {
    return (
            <section className="brief">
                <Toggle></Toggle>
                <h4 className="lorem">Lorem Ipsum</h4>
                <hr className="mt-0 ruler"></hr>
                <section id="article">
                    <p className="offer"><strong>SPECIAL OFFER FOR YOU </strong></p>
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
                    <hr className="ruler"></hr><br></br>
                    <p className="fee">&dollar;295 Annual Fee</p>
                </section>
            </section >

    )
}
export default Ipsum;
