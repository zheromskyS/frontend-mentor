const buttonBase = document.querySelectorAll(".button-base");

export const buttonSwitch = () => {
  buttonBase.forEach((element) => {
    element.onmouseover = function () {
      this.classList.add("button-base__active");
    };

    element.onmouseout = function () {
      this.classList.remove("button-base__active");
    };
  });
};
