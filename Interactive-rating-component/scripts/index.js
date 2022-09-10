import {selectActiveBtn, selectHoverBtn} from "./selectBtn.js";
import {confirmActiveBtn, deleteRatingState} from "./confirmBtn.js";

window.onload =() => {
    selectActiveBtn();
    selectHoverBtn();
    confirmActiveBtn();
    deleteRatingState()
}