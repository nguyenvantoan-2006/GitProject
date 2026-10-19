(function () {
  var form = document.getElementById("careerForm");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();
    form.classList.add("was-validated");

    if (!form.checkValidity()) return;

    var message = document.getElementById("formMessage");
    message.classList.remove("d-none");
    message.scrollIntoView({ behavior: "smooth", block: "nearest" });
    form.reset();
    form.classList.remove("was-validated");
    if (window.jQuery && jQuery.fn.materialSelect) jQuery(".mdb-select").materialSelect();
  });

  document.querySelectorAll("#careerNav .nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.jQuery) jQuery("#careerNav").collapse("hide");
    });
  });
})();
