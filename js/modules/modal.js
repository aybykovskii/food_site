module.exports = function modal() {
  // Modal Window
  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal");

  function openModal() {
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
    clearInterval(modatTimerId);
  }
  modalTrigger.forEach((item) => {
    item.addEventListener("click", openModal);
  });
  const modatTimerId = setInterval(openModal, 15000);

  function closeModal() {
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") == "") {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  function openModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener("scroll", openModalByScroll);
    }
  }
  window.addEventListener("scroll", openModalByScroll);
};