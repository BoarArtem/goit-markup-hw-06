document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector('[data-modal]');
    const openModalBtn = document.querySelector('[data-modal-open]');
    const closeModalBtn = document.querySelector('[data-modal-close]');

    openModalBtn.addEventListener("click", () => {
        modal.classList.add("is-open");
    });

    closeModalBtn.addEventListener("click", () => {
        modal.classList.remove("is-open");
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("is-open");
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            modal.classList.remove("is-open");
        }
    });
});