export const selectBtns = document.querySelectorAll(".select-button");

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
    });
  });
};
