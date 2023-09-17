// Modal Box
const itemDetailModal1 = document.querySelector("#item-detail-modal-1");
const itemDetailButton1 = document.querySelector(".item-detail-button-1");

const itemDetailModal2 = document.querySelector("#item-detail-modal-2");
const itemDetailButton2 = document.querySelector(".item-detail-button-2");

const itemDetailModal3 = document.querySelector("#item-detail-modal-3");
const itemDetailButton3 = document.querySelector(".item-detail-button-3");

const itemDetailModal4 = document.querySelector("#item-detail-modal-4");
const itemDetailButton4 = document.querySelector(".item-detail-button-4");

itemDetailButton1.onclick = (e) => {
  itemDetailModal1.style.display = "flex";
  e.preventDefault();
};

itemDetailButton2.onclick = (e) => {
  itemDetailModal2.style.display = "flex";
  e.preventDefault();
};

itemDetailButton3.onclick = (e) => {
  itemDetailModal3.style.display = "flex";
  e.preventDefault();
};

itemDetailButton4.onclick = (e) => {
  itemDetailModal4.style.display = "flex";
  e.preventDefault();
};

// Close modal box
document.querySelector(".my_modal_1 .close-icon").onclick = (e) => {
  itemDetailModal1.style.display = "none";
  e.preventDefault();
};

document.querySelector(".my_modal_2 .close-icon").onclick = (e) => {
  itemDetailModal2.style.display = "none";
  e.preventDefault();
};

document.querySelector(".my_modal_3 .close-icon").onclick = (e) => {
  itemDetailModal3.style.display = "none";
  e.preventDefault();
};

document.querySelector(".my_modal_4 .close-icon").onclick = (e) => {
  itemDetailModal4.style.display = "none";
  e.preventDefault();
};

// Klik di luar Modal
const my_modal_1 = document.querySelector("#item-detail-modal-1");
const my_modal_2 = document.querySelector("#item-detail-modal-2");
const my_modal_3 = document.querySelector("#item-detail-modal-3");
const my_modal_4 = document.querySelector("#item-detail-modal-4");
window.onclick = (e) => {
  if (
    e.target === itemDetailModal1 ||
    e.target === itemDetailModal2 ||
    e.target === itemDetailModal3 ||
    e.target === itemDetailModal4
  ) {
    my_modal_1.style.display = "none";
    my_modal_2.style.display = "none";
    my_modal_3.style.display = "none";
    my_modal_4.style.display = "none";
  }
};
