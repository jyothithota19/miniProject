import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "../style.css";
import info from "../info.svg";

function FormExample() {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    }
    // -----  Autofill Addrress checkbox Function ----Start------//
    function address() {
        if (document.getElementById(
            "same").checked) {
            document.getElementById("validationHomeAd").value = document.getElementById("validationBuAd").value;
            document.getElementById('validationHomeAd').setAttribute('readonly', true);
            document.getElementById("HomeAddress2").value = document.getElementById("BuAddress2").value;
            document.getElementById('HomeAddress2').setAttribute('readonly', true);
            document.getElementById("validationZipHome").value = document.getElementById("validationZipBu").value;
            document.getElementById('validationZipHome').setAttribute('readonly', true);
        }
        else {
            document.getElementById("validationHomeAd").value = "";
            document.getElementById('validationHomeAd').removeAttribute('readonly', true);
            document.getElementById("HomeAddress2").value = "";
            document.getElementById('HomeAddress2').removeAttribute('readonly', true);
            document.getElementById("validationZipHome").value = "";
            document.getElementById('validationZipHome').removeAttribute('readonly', true);
        }
    }
    // -----  Autofill Addrress checkbox Function ----Ends------//
    //--------------------Mobile NUmber auto pattern  starts------------//
    useEffect(() => {
        let telEl = document.querySelector('#validationMobile')
        telEl.addEventListener('keyup', (e) => {
            let val = e.target.value;
            e.target.value = val.replace(/\D/g, '').replace(/(\d{1,3})(\d{1,3})?(\d{1,4})?/g, function (txt, f, s, t) {
                if (t) {
                    return `(${f})${s}-${t}`
                } else if (s) {
                    return `(${f})${s}`
                } else if (f) {
                    return `(${f})`
                }
            });
        })
    })
    // --------------------Mobile NUmber auto pattern  ends------------//

    return (
        <main>
            {/* {<!----------------------- FORM STARTS---------------------- --> */}
            <section className="formFill">
                <Form id="forms" noValidate validated={validated} onSubmit={handleSubmit}>
                    <h2 className="heading">Apply in minutes. Get a decision in seconds.</h2>
                    <Form.Group className="blocks" controlId="validationEmail">
                        <Form.Label>EMAIL ADDRESS*<img src={info} alt="info" /></Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="name@example.com"
                            defaultValue="test@example.com"
                            pattern="[a-zA-Z0-9_.-]+@[a-zA-Z0-9.]+$"
                        />
                        <Form.Control.Feedback type="invalid">Email Address only accepts alphanumeric, @.-_</Form.Control.Feedback>
                    </Form.Group>
                    {/* <!------------------ BUSINESS INFO STARTS----- --> */}
                    <h5 className="sub-head">ENTER YOUR BUSINESS INFORMATION</h5>
                    <Row>
                        <Form.Group as={Col} lg="6" controlId="validationLegalBuName" className="blocks" >
                            <Form.Label className="text-uppercase">Legal Business Name*</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder='test'
                                defaultValue="test"
                            />
                            <Form.Control.Feedback type="invalid">Please Enter Legal Business Name</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} lg="6" controlId="validationBuName" className="blocks">
                            <Form.Label className="text-uppercase">Business Name On Card*<img src={info} alt="infosymbol" /></Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="TEST"
                                defaultValue="TEST"
                            />
                            <Form.Control.Feedback type="invalid">Please Enter Business Name on Card</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group controlId="validationBuAd" className="blocks" >
                        <Form.Label className="text-uppercase">Business Address Line 1*</Form.Label>
                        <Form.Control
                            required
                            type="text"
                        />
                        <Form.Control.Feedback type="invalid">Please Enter Business Address</Form.Control.Feedback>
                    </Form.Group>

                    <Row>
                        <Form.Group as={Col} lg="6" controlId="BuAddress2" className="blocks" >
                            <Form.Label className="text-uppercase">Business Address Line 2</Form.Label>
                            <Form.Control
                                type="text"
                                required
                            />
                            <Form.Control.Feedback type="invalid">Please Enter Address line 2</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} lg="6" controlId="validationZipBu" className="blocks">
                            <Form.Label className="text-uppercase">Zip Code*</Form.Label>
                            <Form.Control
                                required
                                // type='number'
                                // min="1"
                                pattern="[0-9]{4,}"
                            />
                            <Form.Control.Feedback type="invalid">Please Enter a valid Zip Code</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group controlId="validationMobile" className="blocks">
                        <Form.Label className="text-uppercase">Business Phone Number*<img src={info} alt="infoicon" /></Form.Label>
                        <Form.Control
                            required
                            type="tel"
                            pattern="^\(\d{3}\)\d{3}-\d{4}"
                            placeholder="(234)567-8901"
                            maxLength={13}
                        // defaultValue="(___)___-____"
                        />
                        <Form.Control.Feedback type="invalid">Enter a valid business Phone Number</Form.Control.Feedback>
                    </Form.Group>
                    {/* <!------------------ BUSINESS INFO ENDS----- ------------------>
                          <!----------------- PERSONAL INFO STARTS----------------- --> */}
                    <hr className="mt-4 mb-0"></hr>
                    <h5 className="sub-head">ENTER YOUR PERSONAL INFORMATION</h5>
                    <Row className="mb-3">
                        <Form.Group as={Col} lg="4" controlId="validationName01">
                            <Form.Label className="text-uppercase">First name*</Form.Label>
                            <Form.Control
                                required
                                type="text"
                            />
                            <Form.Control.Feedback type="invalid">Please Enter First Name</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} lg="4" controlId="validationName02">
                            <Form.Label className="text-uppercase">M.I.</Form.Label>
                            <Form.Control
                                type="text"
                                required
                            />
                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} lg="4" controlId="validationName03">
                            <Form.Label className="text-uppercase">Last Name*</Form.Label>
                            <Form.Control
                                required
                                type="text"
                            />
                            <Form.Control.Feedback type="invalid">Please Enter Last Name</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group className="blocks" controlId="validationName04">
                        <Form.Label className="text-uppercase">Name On Card*<img src={info} alt="info-icon" /></Form.Label>
                        <Form.Control
                            required
                            type="text"
                        />
                        <Form.Control.Feedback type="invalid">Please Enter Name On Card</Form.Control.Feedback>
                    </Form.Group>
                    {/*---------- Checkbox  Start--------- */}
                    <Form.Check
                        className="my-2"
                        id="same"
                        name="same"
                        label="My home address is the same as my business address"
                        onChange={address}
                    />
                    {/*---------- Checkbox  End--------- */}
                    {/* -----------Home Address Details Start--------- */}
                    <Form.Group controlId="validationHomeAd" className="blocks" >
                        <Form.Label className="text-uppercase">Home Address Line 1*</Form.Label>
                        <Form.Control
                            required
                            type="text"

                        />
                        <Form.Control.Feedback type="invalid">Please Enter Home Address</Form.Control.Feedback>
                    </Form.Group>

                    <Row>
                        <Form.Group as={Col} lg="6" controlId="HomeAddress2" className="blocks" >
                            <Form.Label className="text-uppercase">Home Address Line 2</Form.Label>
                            <Form.Control
                                required
                                type="text"
                            />
                            <Form.Control.Feedback type="invalid">Please Enter Home Address line 2</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} lg="6" controlId="validationZipHome" className="blocks">
                            <Form.Label className="text-uppercase">Zip Code*</Form.Label>
                            <Form.Control
                                required
                                // type="number"
                                pattern="[0-9]{4,}"
                            />
                            <Form.Control.Feedback type="invalid">Please Enter Zip Code</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    {/* -----------Home Address Details Ends--------- */}
                    <h5 className="sub-head">TELL US WHERE TO SEND YOUR BILL</h5>
                    <Form.Check type="radio" aria-label="radio 1"
                        className="my-3 mx-2"
                        label="Business"
                        name="bill"
                        required />
                    <Form.Check type="radio" aria-label="radio 2"
                        className="my-3 mx-2"
                        label="Home"
                        name="bill" />
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
                        <Button type="submit" className="submit"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28"
                            fill="white" viewBox="0 0 60 63">
                            <path
                                d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.355469 20 6 21.355469 6 23 L 6 47 C 6 48.644531 7.355469 50 9 50 L 41 50 C 42.644531 50 44 48.644531 44 47 L 44 23 C 44 21.355469 42.644531 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 9 22 L 41 22 C 41.554688 22 42 22.445313 42 23 L 42 47 C 42 47.554688 41.554688 48 41 48 L 9 48 C 8.445313 48 8 47.554688 8 47 L 8 23 C 8 22.445313 8.445313 22 9 22 Z M 25 30 C 23.300781 30 22 31.300781 22 33 C 22 33.898438 22.398438 34.6875 23 35.1875 L 23 38 C 23 39.101563 23.898438 40 25 40 C 26.101563 40 27 39.101563 27 38 L 27 35.1875 C 27.601563 34.6875 28 33.898438 28 33 C 28 31.300781 26.699219 30 25 30 Z">
                            </path>
                        </svg> Submit Application</Button>
                    </section>
                    <section className="text-center mt-3 mb-5">
                        <Button type="button" className="save">Save & Apply Later</Button>
                    </section>
                </Form>
            </section>
            {/* ----------------------Form Ends------------------ */}
        </main>
    );
}

export default FormExample;