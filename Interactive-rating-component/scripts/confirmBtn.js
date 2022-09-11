import { selectBtns, selectButtonActive } from "./selectBtn.js";

const confirmBtn = document.querySelector(".confirm-button");
const ratingState = document.querySelector(".rating-state");
const ratingStateEnd = document.querySelector(".rating-state-end__delete");

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
      element.contains(selectButtonActive)
    )
  ) {
    ratingState.classList.add("rating-state__delete");
  }
};

export const ratingCheck = () => {
  confirmBtn.addEventListener("click", deleteRatingState);
};

// export const deleteRatingState = () => {
//   confirmBtn.addEventListener("click", () => {
//     ratingState.classList.add("rating-state__delete");
//     ratingStateEnd.classList.remove("rating-state-end__delete");
//   });
// };
