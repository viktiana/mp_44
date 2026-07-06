function openModal(number) {
    document.getElementById("backdrop" + number).classList.add("is-open");
    document.body.style.overflow = "hidden";
}

function closeModal(number) {
    document.getElementById("backdrop" + number).classList.remove("is-open");
    document.body.style.overflow = "";
}

function closeModalOutside(event, number) {
    const backdrop = document.getElementById("backdrop" + number);

    if (event.target === backdrop) {
        closeModal(number);
    }
}