// 🕌 QHLS Centers Data as JSON
const qhlsData = [
  {
    "units": [
      { "name": "Kasargode", "convenor": "NAVAZ KA", "phone": "8921281831" },
      { "name": "Kannur", "convenor": "Saad El Deen Thalakodan", "phone": "9778324039" },
      { "name": "Wayanad", "convenor": "Hani hakkam", "phone": "8129234366" },
      { "name": "Calicut North", "convenor": "SAHAD K", "phone": "9645017088" },
      { "name": "Calicut South", "convenor": "Fajaru Sadik P", "phone": "9946006256" },
      { "name": "Malappuram East", "convenor": "JAFAR M", "phone": "8129139883" },
      { "name": "Malappuram West", "convenor": "Shihabudheen", "phone": "9495046917" },
      { "name": "Palakkad", "convenor": "SHOUKATHALI VC ", "phone": "9447364722" },
      { "name": "Thrissur", "convenor": "Shameer PI", "phone": "9746060430" },
      { "name": "Ernakulam", "convenor": "ANAS .N.A", "phone": "8593927353" },
      { "name": "Alappuzha", "convenor": "Abdul Vahab PN", "phone": "9142049492" },
      { "name": "Idukki", "convenor": "Hashim MA", "phone": "9495254072" },
      { "name": "Kottayam", "convenor":  "Saad El Deen Thalakodan", "phone": "9778324039" },
      { "name": "Pathanamthitta", "convenor":  "Saad El Deen Thalakodan", "phone": "9778324039" },
      { "name": "Kollam", "convenor": "Anas Swalahi ", "phone": "9633693473" },
      { "name": "Trivandrum", "convenor":  "Saad El Deen Thalakodan", "phone": "9778324039" }
    ]
  }
]
;


// 🧱 Render Accordion Dynamically
const accordionContainer = document.getElementById("accordionContainer");

qhlsData.forEach((zone, index) => {
  const item = document.createElement("div");
  item.className = "accordion-item";

  item.innerHTML = `
    <div class="accordion-header">
        <span>QHLS District Convenors</span>
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