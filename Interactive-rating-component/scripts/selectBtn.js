export const selectBtns = document.querySelectorAll(".select-button");
export const selectButtonActive = document.querySelector(
  ".select-button__active"
);

const showRatingText = document.querySelector(".show-rating");

export const selectHoverBtn = () => {
  selectBtns.forEach((element) => {
    element.onmouseover = function () {
      this.classList.add("select-button__hover");
    };

    element.onmouseout = function () {
      this.classList.remove("select-button__hover");
    };
  });
};

export const selectActiveBtn = () => {
  selectBtns.forEach((element) => {
    element.addEventListener("click", () => {
      selectBtns.forEach((element) => {
        element.classList.remove("select-button__active");
      });
      element.classList.add("select-button__active");
      showRatingText.innerHTML = `You selected ${element.value} out of 5`; // show rating in the second block
    });
  });
};
