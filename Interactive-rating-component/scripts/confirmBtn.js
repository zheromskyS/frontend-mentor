import { selectBtns } from "./selectBtn.js";

const confirmBtn = document.querySelector(".confirm-button");
const ratingState = document.querySelector(".rating-state");
const ratingStateEnd = document.querySelector(".rating-state-end");

export const confirmActiveBtn = () => {
  confirmBtn.onmouseover = function () {
    this.classList.add("confirm-button__active");
  };

  confirmBtn.onmouseout = function () {
    this.classList.remove("confirm-button__active");
  };
};

export const deleteRatingState = () => {
  if (
    Array.from(selectBtns).some((element) =>
      element.classList.contains("select-button__active")
    )
  ) {
    ratingState.classList.add("rating-state__delete");
    ratingStateEnd.classList.remove("rating-state-end__delete");
  }
};

export const ratingCheck = () => {
  confirmBtn.addEventListener("click", deleteRatingState);
};
