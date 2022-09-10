import {selectActiveBtn, selectHoverBtn} from "./selectBtn.js";
import {confirmActiveBtn} from "./confirmBtn.js";

window.onload =() => {
    selectActiveBtn();
    selectHoverBtn();
    confirmActiveBtn();
}