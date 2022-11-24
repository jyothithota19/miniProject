import React from 'react';
import "./form.css";
import info from "./asset/info.svg";
import {BsChevronDown} from "react-icons/bs";
import {BsChevronUp} from "react-icons/bs";
function Form() {


    function myFunction() {
        const x = document.getElementById("togle");
        const y = document.getElementById("article");
        if (x.className == "BsChevronDown") {
            x.className = "BsChevronUp";
            y.style.display = "block";
            y.style.visibility = "visible";
    
        } else {
            x.className = "BsChevronDown";
            y.style.display = "none";
        }
    }


    return (
        <main>
            {/* <!-- ----------------PARAGRAPH_INTRO starts---------- --> */}

            <section className="brief">
                <h4 className="head">Lorem Ipsum <span id="togle" onClick={myFunction}> < BsChevronDown /> </span></h4>
                <hr className="mt-0 ruler"></hr>
                <section id="article">
                    <p className="offer"><strong>SPECIAL OFFER FOR YOU <i id="arrow" onclick="offerFunc(this)"
                        className="bi bi-caret-down-fill togle"></i></strong></p>
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
            </section>
            {/* <!-- ----------------PARAGRAPH_INTRO ends---------- -->
              <!-- FORM STARTS --> */}
            <section className="formFill">
                <form id="forms">
                    <h2 className="heading">Apply in minutes. Get a decision in seconds.</h2>
                    <section className="blocks">
                        <label>EMAIL ADDRESS*<img src={info} /></label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com"
                            value="test@example.com" required></input>
                        <i className="bi bi-check-circle "></i>
                        <i className="bi bi-exclamation-triangle-fill "></i>
                        <small>Error Message</small>
                    </section>
                    {/* <!------------------ BUSINESS INFO STARTS----- --> */}
                    <h5 className="sub-head">ENTER YOUR BUSINESS INFORMATION</h5>
                    <section className="row">
                        <section className="col-lg blocks">
                            <label className="text-uppercase">Legal Business Name*
                            </label>

                            <input type="text" className="form-control" id="buName" placeholder='test' value="test"
                                required="true"></input>
                            <i className="bi bi-check-circle "></i>
                            <i className="bi bi-exclamation-triangle-fill "></i>
                            <small>Error Message</small>

                        </section>
                        <section className="col-lg blocks">
                            <label className="text-uppercase">Business Name On Card*<img src={info}/></label>
                            <input type="text" className="form-control" id="nameOnCard" placeholder="TEST" value="TEST"
                                required="true"></input>
                            <i className="bi bi-check-circle "></i>
                            <i className="bi bi-exclamation-triangle-fill "></i>
                            <small>Error Message</small>

                        </section>
                        <section className="blocks">
                            <label className="text-uppercase">Business Address Line 1*</label>
                            <input type="text" className="form-control" id="address1"></input>
                            <i className="bi bi-check-circle "></i>
                            <i className="bi bi-exclamation-triangle-fill "></i>
                            <small>Error Message</small>
                        </section>
                        <section className="row ">
                            <section className="col-lg blocks">
                                <label className="text-uppercase">Business Address Line 2
                                </label>
                                <input type="text" className="form-control" id="address2"></input>
                                
                            </section>
                            <section className="col-lg blocks">
                                <label className="text-uppercase">Zip Code*</label>
                                <input type="number" className="form-control" id="zipCode"></input>
                                <i className="bi bi-check-circle "></i>
                                <i className="bi bi-exclamation-triangle-fill "></i>
                                <small>Error Message</small>
                            </section>
                        </section>
                        <section className="blocks">
                            <label className="text-uppercase">Business Phone Number*<img src={info}/></label>
                            <input type="tel" className="form-control" id="buMobile" pattern="(***)***-****"
                                placeholder="(234)567-890" value="(___)___-____" required="true"></input>
                            <i className="bi bi-check-circle "></i>
                            <i className="bi bi-exclamation-triangle-fill "></i>
                            <small>Error Message</small>
                        </section>
                        {/* <!------------------ BUSINESS INFO ENDS----- ------------------>
                          <!----------------- PERSONAL INFO STARTS----------------- --> */}
                        <hr className="mt-4 mb-0"></hr>
                        <h5 className="sub-head">ENTER YOUR PERSONAL INFORMATION</h5>
                        <section className="row ">
                            <section className="col-lg blocks">
                                <label className="text-uppercase">First Name*
                                </label>
                                <input type="text" className="form-control" id="firstName"></input>
                                <i className="bi bi-check-circle "></i>
                                <i className="bi bi-exclamation-triangle-fill "></i>
                                <small>Error Message</small>
                            </section>
                            <section className="col-lg blocks">
                                <label>M.I.</label>
                                <input type="text" className="form-control" id="mi"></input>
                               
                            </section>
                            <section className="col-lg blocks">
                                <label className="text-uppercase">Last Name*
                                </label>
                                <input type="text" className="form-control" id="lastName"></input>
                                <i className="bi bi-check-circle "></i>
                                <i className="bi bi-exclamation-triangle-fill "></i>
                                <small>Error Message</small>
                            </section>
                        </section>
                        <section className="blocks">
                            <label className="text-uppercase">Name On Card*<img src={info} /></label>
                            <input type="text" className="form-control" id="nameCard"></input>
                            <i className="bi bi-check-circle "></i>
                            <i className="bi bi-exclamation-triangle-fill "></i>
                            <small>Error Message</small>
                        </section>
                        <section className="my-2">
                            <input type="checkbox"></input>
                            <label className="mx-1">My home address is the same as my business address</label>
                        </section>
                        <section className="blocks">
                            <label className="text-uppercase">Home Address Line 1*</label>
                            <input type="text" className="form-control" id="haddress1"></input>
                            <i className="bi bi-check-circle "></i>
                            <i className="bi bi-exclamation-triangle-fill "></i>
                            <small>Error Message</small>
                        </section>
                        <section className="row">
                            <section className="col-lg blocks">
                                <label className="text-uppercase">Home Address Line 2
                                </label>
                                <input type="text" className="form-control" id="haddress2"></input>
                                <i className="bi bi-check-circle "></i>
                                <i className="bi bi-exclamation-triangle-fill "></i>
                                <small>Error Message</small>
                            </section>
                            <section className="col-lg blocks">
                                <label className="text-uppercase">Zip Code*</label>
                                <input type="number" className="form-control" id="hzipCode"></input>
                                <i className="bi bi-check-circle "></i>
                                <i className="bi bi-exclamation-triangle-fill "></i>
                                <small>Error Message</small>
                            </section>
                        </section>
                        {/* <!----------------- PERSONAL INFO ENDS----------------- --> */}

                        <h5 className="sub-head">TELL US WHERE TO SEND YOUR BILL</h5>
                        <section>
                            <input type="radio" name="bill" id="bill" value="Business"></input>
                            <label className="my-2 mx-2">Business</label>
                            <br></br>
                            <input type="radio" name="bill" id="bill" value="Home"></input>
                            <label className="my-2 mx-2">Home</label>
                        </section>
                        <p className="mt-2 text-secondary">* Required Information</p>
                        {/* <!----------------- TERMS & COND  STARTS----------------- --> */}

                        <h5 className="text-center pt-5">Terms and Conditions</h5>
                        <hr className="mt-0"></hr>
                        <p className="text-uppercase text-center info">Please scroll down to read important information about
                            Rates, Fees, and Other Cost information before submitting your application.</p>
                        <p className="box">By submitting this application, I certify that I have read, met, and agreed to
                            all of the terms, conditions, and disclosures as outlined below, which contain
                            fee and other important cost information. I certify that I am an Authorizing Officer
                            of the Company, and have provided current, complete and accurate information. I understand that
                            additional information may be required to complete my application.
                        </p>
                        <p className="print text-primary">Print Terms,Conditions, and Disclosures</p>
                        {/* <!----------------- TERMS & COND ENDS----------------- --> */}

                        <section className="text-center">
                            <button type="submit" className="submit"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28"
                                fill="white" viewBox="0 0 60 63">
                                <path
                                    d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.355469 20 6 21.355469 6 23 L 6 47 C 6 48.644531 7.355469 50 9 50 L 41 50 C 42.644531 50 44 48.644531 44 47 L 44 23 C 44 21.355469 42.644531 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 9 22 L 41 22 C 41.554688 22 42 22.445313 42 23 L 42 47 C 42 47.554688 41.554688 48 41 48 L 9 48 C 8.445313 48 8 47.554688 8 47 L 8 23 C 8 22.445313 8.445313 22 9 22 Z M 25 30 C 23.300781 30 22 31.300781 22 33 C 22 33.898438 22.398438 34.6875 23 35.1875 L 23 38 C 23 39.101563 23.898438 40 25 40 C 26.101563 40 27 39.101563 27 38 L 27 35.1875 C 27.601563 34.6875 28 33.898438 28 33 C 28 31.300781 26.699219 30 25 30 Z">
                                </path>
                            </svg> Submit Application</button>
                        </section>
                        <section className="text-center mt-3 mb-5">
                            <button type="button" className="save">Save & Apply Later</button>
                        </section>
                    </section>
                </form>
            </section>
            {/* <!-- ------------FORM Ends---------- --> */}
        </main>
    );


}
export default Form;