const confirmBtn = document.querySelector('.confirm-button');

export const confirmActiveBtn = () => {
    confirmBtn.onmouseover = function () {
        this.classList.add("confirm-button__active");
    };

    confirmBtn.onmouseout = function () {
        this.classList.remove("confirm-button__active");
    };
};

