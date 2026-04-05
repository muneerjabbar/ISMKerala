// 🕌 QHLS Centers Data as JSON
const velichamConvenorData = [
  {
    "units": [
      { "name": "Kasargode", "convenor": "Mohammed Ashraf Nambdi", "phone": "7994957017" },
      { "name": "Kannur", "convenor": "Mubashir K", "phone": "9947777610" },
      { "name": "Wayanad", "convenor": "Sheneef MT", "phone": "9961696653" },
      { "name": "Calicut North", "convenor": "Nadeem Muhammadali", "phone": "9495801452" },
      { "name": "Calicut South", "convenor": "Shajeer Khan", "phone": "7012396979" },
      { "name": "Malappuram East", "convenor": "YASHIK M", "phone": "9895675681" },
      { "name": "Malappuram West", "convenor": "Farook Panichikkal", "phone": "9846902026" },
      { "name": "Palakkad", "convenor": "Mahroof K ", "phone": "7356613415" },
      { "name": "Thrissur", "convenor": "Navas AM", "phone": "9947700179" },
      { "name": "Ernakulam", "convenor": "NAZIM A NAZAR", "phone": "9495971801" },
      { "name": "Alappuzha", "convenor": "CA. SHIHABUDEEN", "phone": "8547767473" },
      { "name": "Idukki", "convenor": "NISHAD ALIYAR", "phone": "9544736369" },
      { "name": "Kottayam", "convenor":  "Mubashir K", "phone": "9947777610" },
      { "name": "Pathanamthitta", "convenor":  "Mubashir K", "phone": "9947777610" },
      { "name": "Kollam", "convenor": "Sudheer Pallimukku", "phone": "9526946929" },
      { "name": "Trivandrum", "convenor":  "Mubashir K", "phone": "9947777610" }
    ]
  }
];


// 🧱 Render Accordion Dynamically
const accordionContainer = document.getElementById("accordionContainer");

velichamConvenorData.forEach((zone, index) => {
  const item = document.createElement("div");
  item.className = "accordion-item";

  item.innerHTML = `
    <div class="accordion-header">
        <span>District Convenors</span>
        <span class="arrow">▶</span>
    </div>
    <div class="accordion-content ${index === 0 ? "active" : ""}">
        ${zone.units.map(unit => `
            <div class="unit">
                <strong>${unit.name}:</strong> ${unit.convenor}
                <a href="tel:${unit.phone}" class="call-icon">📞</a> 
            </div>
        `).join('')}
    </div>
  `;

  accordionContainer.appendChild(item);
});

// 🔄 Accordion Functionality
const headers = document.querySelectorAll(".accordion-header");
headers.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const arrow = header.querySelector(".arrow");

    // Collapse all
    document.querySelectorAll(".accordion-content").forEach(c => c.classList.remove("active"));
    document.querySelectorAll(".arrow").forEach(a => a.classList.remove("rotate"));

    // Expand selected
    content.classList.add("active");
    arrow.classList.add("rotate");
  });
});

// Keep first arrow rotated initially
document.querySelector(".accordion-item .arrow").classList.add("rotate");