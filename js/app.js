const home = document.querySelector(".home");
const apps = document.querySelector(".apps");
const downloads = document.querySelector(".downloads");
const buy = document.querySelector(".buy");
const support = document.querySelector(".support");
const customers = document.querySelector(".customers");
const contactUs = document.querySelector(".contact-us");
const aboutUs = document.querySelector(".about-us");

const btnHome = document.querySelector("#btn-home");
const btnApps = document.querySelector("#btn-apps");
const btnDownloads = document.querySelector("#btn-downloads");
const btnBuy = document.querySelector("#btn-buy");
const btnSupport = document.querySelector("#btn-support");
const btnCustomers = document.querySelector("#btn-customers");
const btnContact = document.querySelector("#btn-contact");
const btnAbout = document.querySelector("#btn-about");

const sections = document.querySelectorAll("section");

const showHide = function (section) {
	sections.forEach((sec) => sec.classList.add("hidden"));
	section.classList.remove("hidden");
};
btnHome.addEventListener("click", function () {
	showHide(home);
});
btnApps.addEventListener("click", function () {
	showHide(apps);
});
btnDownloads.addEventListener("click", function () {
	showHide(downloads);
});
btnBuy.addEventListener("click", function () {
	showHide(buy);
});
btnSupport.addEventListener("click", function () {
	showHide(support);
});
btnCustomers.addEventListener("click", function () {
	showHide(customers);
});
btnContact.addEventListener("click", function () {
	showHide(contactUs);
});
btnAbout.addEventListener("click", function () {
	showHide(aboutUs);
});

// ------------------------------------------------------------------------------
const btnCity = document.querySelectorAll(".btn-city");

btnCity.forEach((city) => {
	city.addEventListener("click", function () {
		this.parentNode.classList.toggle("grid-up");
		console.log(city);
	});
});
