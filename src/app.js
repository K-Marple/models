async function loadData() {
  const response = await fetch("/api/data");
  const data = await response.json();

  const info = document.getElementById("ul");
  info.innerHTML = "";

  data.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.name;
    info.appendChild(li);
  });
}
