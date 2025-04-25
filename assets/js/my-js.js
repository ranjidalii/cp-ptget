// Modal Box
const itemDetailModal1 = document.querySelector("#item-detail-modal-1");
const itemDetailButton1 = document.querySelector(".item-detail-button-1");

const itemDetailModal2 = document.querySelector("#item-detail-modal-2");
const itemDetailButton2 = document.querySelector(".item-detail-button-2");

const itemDetailModal3 = document.querySelector("#item-detail-modal-3");
const itemDetailButton3 = document.querySelector(".item-detail-button-3");

const itemDetailModal4 = document.querySelector("#item-detail-modal-4");
const itemDetailButton4 = document.querySelector(".item-detail-button-4");

const itemDetailModal5 = document.querySelector("#item-detail-modal-5");
const itemDetailButton5 = document.querySelector(".item-detail-button-5");

const itemDetailModal6 = document.querySelector("#item-detail-modal-6");
const itemDetailButton6 = document.querySelector(".item-detail-button-6");

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

itemDetailButton5.onclick = (e) => {
  itemDetailModal5.style.display = "flex";
  e.preventDefault();
};

itemDetailButton6.onclick = (e) => {
  itemDetailModal6.style.display = "flex";
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

document.querySelector(".my_modal_5 .close-icon").onclick = (e) => {
  itemDetailModal5.style.display = "none";
  e.preventDefault();
};

document.querySelector(".my_modal_6 .close-icon").onclick = (e) => {
  itemDetailModal6.style.display = "none";
  e.preventDefault();
};

// Klik di luar Modal
const my_modal_1 = document.querySelector("#item-detail-modal-1");
const my_modal_2 = document.querySelector("#item-detail-modal-2");
const my_modal_3 = document.querySelector("#item-detail-modal-3");
const my_modal_4 = document.querySelector("#item-detail-modal-4");
const my_modal_5 = document.querySelector("#item-detail-modal-5");
const my_modal_6 = document.querySelector("#item-detail-modal-6");
window.onclick = (e) => {
  if (
    e.target === itemDetailModal1 ||
    e.target === itemDetailModal2 ||
    e.target === itemDetailModal3 ||
    e.target === itemDetailModal4 ||
    e.target === itemDetailModal5 ||
    e.target === itemDetailModal6
  ) {
    my_modal_1.style.display = "none";
    my_modal_2.style.display = "none";
    my_modal_3.style.display = "none";
    my_modal_4.style.display = "none";
    my_modal_5.style.display = "none";
    my_modal_6.style.display = "none";
  }
};
