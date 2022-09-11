import {selectActiveBtn, selectHoverBtn} from "./selectBtn.js";
import {confirmActiveBtn, ratingCheck} from "./confirmBtn.js";

window.onload =() => {
    selectActiveBtn();
    selectHoverBtn();
    confirmActiveBtn();
    ratingCheck();
    // deleteRatingState();
}