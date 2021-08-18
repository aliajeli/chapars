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
const btnContact2 = document.querySelector("#btn-contact-2");
const btnAbout = document.querySelector("#btn-about");

const sections = document.querySelectorAll("section");

const showHide = function (section, btn) {
	sections.forEach((sec) => sec.classList.add("hidden"));
	section.classList.remove("hidden");
	[btnApps, btnDownloads, btnBuy, btnSupport, btnCustomers, btnContact, btnAbout].forEach((btn) => btn.classList.remove("app__nav-link--active"));
	if (btn === "no") return;
	btn.classList.add("app__nav-link--active");
};
btnHome.addEventListener("click", function () {
	showHide(home, "no");
});

btnApps.addEventListener("click", function () {
	showHide(apps, btnApps);
});
btnDownloads.addEventListener("click", function () {
	showHide(downloads, btnDownloads);
});
btnBuy.addEventListener("click", function () {
	showHide(buy, btnBuy);
});
btnSupport.addEventListener("click", function () {
	showHide(support, btnSupport);
});
btnCustomers.addEventListener("click", function () {
	showHide(customers, btnCustomers);
});
btnContact.addEventListener("click", function () {
	showHide(contactUs, btnContact);
});
btnContact2.addEventListener("click", function () {
	showHide(contactUs, btnContact);
});
btnAbout.addEventListener("click", function () {
	showHide(aboutUs, btnAbout);
});

// ------------------------------------------------------------------------------
const btnCity = document.querySelectorAll(".btn-city");

btnCity.forEach((city) => {
	city.addEventListener("click", function () {
		this.parentNode.classList.toggle("grid-up");
	});
});

//-----------------------------------------------------------------------------
const btnEdu = document.querySelector("#btn-edu");
const btnEduExit = document.querySelector("#btn-edu-exit");
const eductions = document.querySelector(".downloads__eductions");

btnEdu.addEventListener("click", function () {
	eductions.classList.add("show");
});

btnEduExit.addEventListener("click", function () {
	eductions.classList.remove("show");
});
