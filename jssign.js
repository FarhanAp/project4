const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const btn = document.querySelector("#btn");

sign_up_btn.addEventListener('click', () => {
     container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});

	function validasi() {
		var Username = document.getElementById("Username").value;
		var Telephone = document.getElementById("Telephone").value;
		var Password = document.getElementById("Password").value;
		if (Username != "" && Telephone!="" && Password !="") {
			return true;
		}else{
			alert('Anda harus mengisi data dengan lengkap!');
		}
	}

    function validasi2() {
		var Username2 = document.getElementById("Username2").value;
		var Email = document.getElementById("Email").value;
		var Password2 = document.getElementById("Password2").value;
		if (Username2 != "" && Email!="" && Password2 !="") {
			return true;
		}else{
			alert('Anda harus mengisi data dengan lengkap!');
		}
	}
