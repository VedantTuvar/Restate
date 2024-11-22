// Tabs functionality
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    // Add active class to clicked tab
    tab.classList.add("active");
  });
});

// Search functionality
document.getElementById("search-btn").addEventListener("click", () => {
  const location = document.getElementById("location").value;
  const startDate = document.getElementById("start-date").value;
  const endDate = document.getElementById("end-date").value;

  alert(
    `Searching properties in "${location}" from ${startDate} to ${endDate}`
  );
});
