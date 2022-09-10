const confirmBtn = document.querySelector('.confirm-button');
const ratingState = document.querySelector('.rating-state');

export const confirmActiveBtn = () => {
    confirmBtn.onmouseover = function () {
        this.classList.add("confirm-button__active");
    };

    confirmBtn.onmouseout = function () {
        this.classList.remove("confirm-button__active");
    };
};

export const deleteRatingState = () => {
    confirmBtn.addEventListener('click', () => {
        ratingState.classList.add("rating-state__delete");
    });
};
