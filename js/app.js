// let i = 0;
// let txt = "Lorem ipsum dummy text blabla.";
// let speed = 500;

function typeWriter() {
	if (i < txt.length) {
		document.getElementById("demo").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}

const bannerContent = document.querySelector("#banner-content");

const txt = ["بایگانی", "دبیرخانه", "اتوماسیون اداری", "پرسنلی", "کارگزینی", "حقوق دستمزد", "خرید و فروش", "انبارداری", "دفتر تلفن"];

let txtCounter = 8;
let charCounter = 0;
const typing = function () {
	if (charCounter === 0) {
		bannerContent.innerHTML = "";
		txtCounter = txtCounter === txt.length - 1 ? 0 : ++txtCounter;
	}
	console.log(txt[txtCounter]);
	bannerContent.innerHTML += txt[txtCounter].charAt(charCounter);
	charCounter = charCounter === txt[txtCounter].length - 1 ? 0 : ++charCounter;
	console.log(charCounter);
	setTimeout(typing, 400);
};

typing();
