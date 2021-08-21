window.addEventListener("load", () => {
	const navLinks = document.querySelectorAll(".navlinks li");
	const productSelect = document.querySelector(".header-product");
	const companySelect = document.querySelector(".header-company");
	const connectSelect = document.querySelector(".header-connect");
	const hamburger = document.querySelector(".hamburger");
	const burgerMenu = document.querySelector(".burger-menu");
	const burgerNavLinks = document.querySelectorAll(".burger-navlinks li");

	let toggle = false;
	hamburger.addEventListener("click", () => {
		if (!toggle) {
			hamburger.innerHTML =
				'<svg class="close" width="26" height="26" xmlns="http://www.w3.org/2000/svg"><path d="M23.607.98l1.414 1.413L14.414 13l10.607 10.607-1.414 1.414L13 14.414 2.393 25.021.98 23.607 11.586 13 .98 2.393 2.393.98 13 11.586 23.607.98z" fill="#FFF" fill-rule="evenodd"/></svg>';
			burgerMenu.classList.toggle("show-burger-menu");
			toggle = true;
		} else {
			hamburger.innerHTML =
				'<svg width="32" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z"/></g></svg>';
			burgerMenu.classList.remove("show-burger-menu");

			toggle = false;
		}
	});

	for (let i = 0; i < navLinks.length; i++) {
		navLinks[i].addEventListener("click", () => {
			let element = navLinks[i];

			if (element.id === "product-link") {
				productSelect.classList.toggle("header-product-show");
				companySelect.classList.remove("header-company-show");
				connectSelect.classList.remove("header-connect-show");
				console.log(navLinks[1], navLinks[2]);
				navLinks[1].childNodes[2].classList.remove("up-arrow");
				navLinks[2].childNodes[2].classList.remove("up-arrow");
				element.childNodes[2].classList.toggle("up-arrow");
			} else if (element.id === "company-link") {
				companySelect.classList.toggle("header-company-show");
				productSelect.classList.remove("header-product-show");
				connectSelect.classList.remove("header-connect-show");
				navLinks[0].childNodes[2].classList.remove("up-arrow");
				navLinks[2].childNodes[2].classList.remove("up-arrow");

				element.childNodes[2].classList.toggle("up-arrow");
			} else if (element.id === "connect-link") {
				connectSelect.classList.toggle("header-connect-show");
				productSelect.classList.remove("header-product-show");
				companySelect.classList.remove("header-company-show");
				navLinks[0].childNodes[2].classList.remove("up-arrow");
				navLinks[1].childNodes[2].classList.remove("up-arrow");
				element.childNodes[2].classList.toggle("up-arrow");
			}
		});
	}

	for (let i = 0; i < burgerNavLinks.length; i++) {
		let link = burgerNavLinks[i];
		link.addEventListener("click", () => {
			if (link.id === "burger-product-link") {
				link.childNodes[3].classList.toggle("burger-show-links");
			} else if (link.id === "burger-company-link") {
				link.childNodes[3].classList.toggle("burger-show-links");
			} else if (link.id === "burger-connect-link") {
				link.childNodes[3].classList.toggle("burger-show-links");
			}
			let burgerSvg = link.childNodes[1].childNodes[2];
			burgerSvg.classList.toggle("burger-up-arrow");
		});
	}
});
