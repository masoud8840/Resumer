function BurnDate() {
  let elem = document.getElementById("age");
  let burnDate = new Date(2001, 03, 05).getTime();
  let currentDate = new Date().getTime();
  let difference = currentDate - burnDate;
  let age = difference / 86400000 / 365.25;

  elem.innerText = age.toFixed(0);
}
function IntroduceMyself(timeout) {
  let intervalCount = 0;
  let word = "Web Developer";
  let wordArr = word.split("");
  let arrLength = wordArr.length;
  let txtSpan = document.querySelector(".title-intro span");

  let interval = setInterval(function () {
    txtSpan.innerHTML += wordArr[intervalCount];
    intervalCount++;

    if (intervalCount >= wordArr.length) {
      clearInterval(interval);
    }
  }, Math.floor(Math.random() * 100) + 220);
}

function CheckFormInputs() {
  let inputTags = document.querySelectorAll(".form-info input");
  let inputTagLabels = document.querySelectorAll(".form-info h4");
  let txtArea = document.querySelector("textarea");

  for (let index = 0; index < inputTags.length; index++) {
    inputTags[index].addEventListener("focusin", function () {
      inputTagLabels[index].style.display = "none";
      inputTags[index].style.backgroundColor = "#fafafa";
    });

    inputTags[index].addEventListener("focusout", function () {
      inputTagLabels[index].style.display = "block";

      if (inputTags[index].value != "") {
        inputTags[index].style.backgroundColor = "#fafafa";
        inputTagLabels[index].style.display = "none";
      } else {
        inputTags[index].style.backgroundColor = "#363636";
      }
    });
  }
  txtArea.addEventListener("focusin", function () {
    txtArea.style.backgroundColor = "#fafafa";
  });
  txtArea.addEventListener("focusout", function () {
    if (txtArea.value != "") {
      txtArea.style.backgroundColor = "#fafafa";
    } else {
      txtArea.style.backgroundColor = "#363636";
    }
  });
}

function SetTimeToElem(Elem) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const now = new Date();
  Elem.innerHTML = `${now.getFullYear()} ${monthNames[now.getMonth()]}`;
}

function MenuOptionsAppear() {
  let menuOptions = document.querySelector(".menu-options");
  let menu = document.querySelector(".menu-mobile");
  let closeBtn = document.querySelectorAll(".closeBtn");
  let linksToPages = document.querySelectorAll(".menu-menu a");
  let screenCrop = document.querySelector(".screen-crop");
  let contactsPage = document.querySelector(".contacts");
  let samplesPage = document.querySelector(".samples");
  let aboutsPage = document.querySelector(".abouts");
  let menuMobileLinks = document.querySelectorAll(".menu-options a");

  let pagesArr = [aboutsPage, contactsPage, samplesPage];

  for (let index = 0; index < closeBtn.length; index++) {
    closeBtn[index].addEventListener("click", function () {
      FadeinScreenCrop();
    });
  }

  function FadeinScreenCrop(event) {
    screenCrop.style.animation = "FadeinScreen 2.5s ease-in-out";
    setTimeout(function () {
      for (let index = 0; index < pagesArr.length; index++) {
        pagesArr[index].style.display = "none";
      }
      if (event.target.innerHTML === "Abouts") {
        aboutsPage.style.display = "block";
      } else if (event.target.innerHTML === "Contacts") {
        contactsPage.style.display = "block";
      } else if (event.target.innerHTML === "Portfolio") {
        samplesPage.style.display = "block";
      }
    }, 1500);
    screenCrop.addEventListener("animationend", function () {
      screenCrop.style.animation = "none";
      menuOptions.style.right = "-100%";
      menuIsOpen = false;
    });
  }
  for (let index = 0; index < menuMobileLinks.length; index++) {
    menuMobileLinks[index].addEventListener("click", FadeinScreenCrop);
    linksToPages[index].addEventListener("click", FadeinScreenCrop);
  }

  let menuIsOpen = false;

  menu.addEventListener("click", function () {
    if (!menuIsOpen) {
      menuOptions.style.right = "0";
      menuIsOpen = true;
    } else {
      menuOptions.style.right = "-100%";
      menuIsOpen = false;
    }
  });

  document.addEventListener("keyup", function (event) {
    if ((menuIsOpen = true)) {
      if (event.key === "Escape") {
        menuOptions.style.right = "-100%";
        menuIsOpen = false;
      }
    }
  });
}

function SkillsBobble() {
  let bobble = document.querySelectorAll(".boble");
  let bobbleTxt = document.querySelectorAll(".boble h4");
  let bobbleInputs = document.querySelectorAll(".skill input");

  function SetValues() {
    for (let index = 0; index < bobbleInputs.length; index++) {
      bobble[index].style.left = bobbleInputs[index].value + "%";
      bobbleTxt[index].innerHTML =
        bobbleInputs[index].value + "<sub>/100%</sub>";
    }
  }
  SetValues();
}

document.addEventListener("DOMContentLoaded", function () {
  // for showing date to history work element in about page
  let stillWorkingElem = document.querySelector(".now");
  SetTimeToElem(stillWorkingElem);
  BurnDate();
  IntroduceMyself();
  CheckFormInputs();
  new Splide(".splide").mount();
  MenuOptionsAppear();
  SkillsBobble();
});
