document.querySelectorAll("form").forEach((form) => {
  form.onsubmit = function (submitBtn) {
    submitBtn.preventDefault();
  };
});
document
  .querySelectorAll("form input[type=submit]")
  .forEach(function (submitBtn) {
    submitBtn.onclick = function () {
      location.pathname = "/movies.html";
    };
  });
// change background on the movies page
if (window.location.pathname === "/movies.html") {
  setInterval(function () {
    let indexes = [
      "images/random-background-3.jpeg",
      "images/random-background-2.jpg",
      "images/random-background-1.jpg",
    ];
    document
      .querySelectorAll(".movies .change-background .dots span")
      .forEach(function (ele) {
        ele.classList.remove("active");
      });
    if (
      document
        .querySelector(".movies .change-background img")
        .getAttribute("src") === indexes[0]
    ) {
      document
        .querySelector(".movies .change-background img")
        .setAttribute("src", indexes[1]);
      document
        .querySelector(".movies .change-background .dots span:nth-child(2)")
        .classList.add("active");
    } else if (
      document
        .querySelector(".movies .change-background img")
        .getAttribute("src") === indexes[1]
    ) {
      document
        .querySelector(".movies .change-background img")
        .setAttribute("src", indexes[2]);
      document
        .querySelector(".movies .change-background .dots span:nth-child(3)")
        .classList.add("active");
    } else {
      document
        .querySelector(".movies .change-background img")
        .setAttribute("src", indexes[0]);
      document
        .querySelector(".movies .change-background .dots span:nth-child(1)")
        .classList.add("active");
    }
  }, 3000);
}

// scroll left and right between films on the movies page
document.querySelectorAll(".type .left").forEach(function (scrolRight) {
  scrolRight.onclick = function () {
    scrolRight.nextElementSibling.nextElementSibling.scrollBy({
      left: 200,
      top: 0,
      behavior: "smooth",
    });
  };
});
document.querySelectorAll(".type .right").forEach(function (scrolLeft) {
  scrolLeft.onclick = function () {
    scrolLeft.previousElementSibling.scrollBy({
      left: -200,
      top: 0,
      behavior: "smooth",
    });
  };
});
// Show and hide movie information on the reservation page
document
  .querySelectorAll(".films .type .imgs .box img")
  .forEach(function (ele) {
    ele.onclick = function () {
      ele.nextElementSibling.style.display = "block";
    };
  });

document.querySelectorAll(".info span.left-arrow").forEach(function (ele) {
  ele.onclick = function () {
    ele.parentElement.parentElement.style.display = "none";
  };
});

// change background color when selected date on the reservation page
document
  .querySelectorAll(".type .imgs .box .info .middel .dates")
  .forEach(function (dates) {
    [...dates.children].forEach(function (date) {
      date.onclick = function () {
        [...dates.children].forEach(function (ele) {
          [ele].forEach(function (item) {
            item.firstElementChild.style.backgroundImage =
              "linear-gradient(122.8deg, #2E1371 8.18%, #21232F 116.47%)";
            item.lastElementChild.style.backgroundImage =
              "linear-gradient(122.8deg, #2E1371 8.18%, #21232F 116.47%)";
          });
        });
        date.firstElementChild.style.backgroundImage =
          "linear-gradient(104.39deg, #F2138D 31.63%, #5024BC 102.59%)";
        date.lastElementChild.style.backgroundImage =
          "linear-gradient(104.39deg, #F2138D 31.63%, #5024BC 102.59%)";
        date.parentElement.parentElement.nextElementSibling.style.display =
          "block";
      };
    });
  });

// Seats
document.querySelectorAll(".content span").forEach(function (Span) {
  Span.onclick = function () {
    if (Span.firstChild.getAttribute("src") === "images/available.PNG") {
      Span.firstChild.setAttribute("src", "images/selected.PNG");
      document.querySelector(".seats .seats-foot").style.display = "flex";
      document.querySelector(".seats .seats-foot").style.justifyContent =
        "space-between";
      document.querySelector("span.buy span.shadow").style.display = "block";
      window.scrollTo({
        left: 0,
        top: 232,
        behavior: "smooth",
      });
    }
  };
});
