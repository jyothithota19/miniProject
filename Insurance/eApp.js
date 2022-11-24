


function myFunction() {
	const x = document.getElementById("myDIV");
	const y = document.getElementById("article");
	if (x.className == "bi bi-chevron-down") {
		x.className = "bi bi-chevron-up";
		y.style.display = "block";
		y.style.visibility = "visible";

	} else {
		x.className = "bi bi-chevron-down";
		y.style.display = "none";
	}
}



function offerFunc() {
	const x = document.getElementById("arrow");
	const y = document.getElementById("introd")
	if (x.className == "bi bi-caret-down-fill") {
		x.className = "bi bi-caret-up-fill";
		y.style.display = "block";
		y.style.visibility = "visible";

	} else {
		x.className = "bi bi-caret-down-fill";
		y.style.display = "none";

	}
}

//---------------- VALIDATION starts------------------//

const form = document.getElementById('forms');
const email = document.getElementById('email');
//BU DATA------starts------//
const buName = document.getElementById('buName');
const nameOnCard = document.getElementById('nameOnCard');
const address1 = document.getElementById('address1');
const address2 = document.getElementById('address2');
const zipCode = document.getElementById('zipCode');
const buMobile = document.getElementById('buMobile');
//BU DATA ends------//
//-------------PERSONAL DATA STARTS-------------//
const firstName = document.getElementById('firstName');
const mi = document.getElementById('mi');
const lastName = document.getElementById('lastName');
const nameCard = document.getElementById('nameCard');
const haddress1 = document.getElementById('haddress1');
const haddress2 = document.getElementById('haddress2');
const hzipCode = document.getElementById('hzipCode');
const bill = document.getElementById('bill');



//-----------PERSONAL DATA ENDS---------------//

form.addEventListener('submit', (e) => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	const emailValue = email.value.trim();
	//BU DATA Value------starts------//
	const buNameValue = buName.value.trim();
	const nameOnCardValue = nameOnCard.value.trim();
	const address1Value = address1.value.trim();
	// const address2Value = address2.value.trim();
	const zipCodeValue = zipCode.value.trim();
	const buMobileValue = buMobile.value.trim();
	//BU DATA ends------//
	//-------------PERSONAL DATA Value STARTS-------------//
	const firstNameValue = firstName.value.trim();
	// const miValue = mi.value.trim();
	const lastNameValue = lastName.value.trim();
	const nameCardValue = nameCard.value.trim();
	const haddress1Value = haddress1.value.trim();
	// const haddress2Value = haddress2.value.trim();
	const hzipCodeValue = hzipCode.value.trim();
	const billValue = bill.value.trim();



	//-----------PERSONAL DATA ENDS---------------//


	if (buNameValue === '') {
		setErrorFor(buName, 'Enter Your Legal Business Name');
	} else {
		setSuccessFor(buName);
	}

	if (emailValue === '') {
		setErrorFor(email, 'Enter Your Email');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'email is not Corret');
	} else {
		setSuccessFor(email);
	}


	if (nameOnCardValue === '') {
		setErrorFor(nameOnCard, 'Enter Your Business Name On Card');
	} else {
		setSuccessFor(nameOnCard);
	}

	if (address1Value === '') {
		setErrorFor(address1, 'Enter Your Business Address');
	} else {
		setSuccessFor(address1);
	}
	if (zipCodeValue === '') {
		setErrorFor(zipCode, 'Enter Your Zip Code');
	} else {
		setSuccessFor(zipCode);
	}
	if (buMobileValue === '') {
		setErrorFor(buMobile, 'Enter Your Business Phone Number');
	} else {
		setSuccessFor(buMobile);
	}
	if (firstNameValue === '') {
		setErrorFor(firstName, 'Enter Your First Name');
	} else {
		setSuccessFor(firstName);
	}
	if (lastNameValue === '') {
		setErrorFor(lastName, 'Enter Your Last Name');
	} else {
		setSuccessFor(lastName);
	}
	if (nameCardValue === '') {
		setErrorFor(nameCard, 'Enter Your Name On Card');
	} else {
		setSuccessFor(nameCard);
	}
	if (haddress1Value === '') {
		setErrorFor(haddress1, 'Enter Your Home Address');
	} else {
		setSuccessFor(haddress1);
	}
	if (hzipCodeValue === '') {
		setErrorFor(hzipCode, 'Enter Your Zip Code');
	} else {
		setSuccessFor(hzipCode);
	}
	if (billValue === '') {
		setErrorFor(bill, 'Please choose an option to send your bill');
	} else {
		setSuccessFor(bill);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	small.innerText = message;
	formControl.className = 'formcontrol error';
}
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'formcontrol success';
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//----------- VALIDATION ENDS------------ //