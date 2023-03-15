const closeModal = () => {
const popupModal = document.getElementById("popup-modal");
popupModal.hidden = true;
};

const denial = () => {
sendChannel.send(JSON.stringify({ confirmed: false }));
downloadInProgress = false;
closeModal();
};

const accepting = () => {
sendChannel.send(JSON.stringify({ confirmed: true }));
closeModal();
};

window.onclick = event => {
const modal = document.getElementById("popup-modal");
if (event.target === modal) {
closeModal();
}
};
