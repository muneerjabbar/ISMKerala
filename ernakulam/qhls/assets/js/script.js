// 🕌 QHLS Centers Data as JSON
const qhlsData = [
  {
    zone: "Kakkanad",
    convenor: { name: "Riyas", phone: "8891110025" },
    units: [
      { name: "Kakkanad", convenor: "Riyas", phone: "8891110025" },
      { name: "Athani", convenor: "Muneer", phone: "9400095648" },
      { name: "Kalamassery", convenor: "Dr Ajees", phone: "9061859697" }
    ]
  },
  {
    zone: "Kochi",
    convenor: { name: "Haris Muhammed", phone: "9812345678" },
    units: [
      { name: "Kochi", convenor: "Junaid K", phone: "9945012345" },
      { name: "Kochiunit", convenor: "Shafeeq A", phone: "9098012345" },
      { name: "Kochi west", convenor: "Noufal K", phone: "9812341498" }
    ]
  },
  {
    zone: "Vyttila",
    convenor: { name: "Rashid Ahamed", phone: "9745612345" },
    units: [
      { name: "Chakkaraparambu", convenor: "Muhsin P", phone: "9876512340" },
      { name: "Vyttila", convenor: "Hameed K", phone: "9090909090" },
      { name: "unit3", convenor: "Jaleel R", phone: "9847012345" }
    ]
  }
];

// 🧱 Render Accordion Dynamically
const accordionContainer = document.getElementById("accordionContainer");

qhlsData.forEach((zone, index) => {
  const item = document.createElement("div");
  item.className = "accordion-item";

  item.innerHTML = `
    <div class="accordion-header">
        <span>${zone.zone} Zone</span>
        <span class="arrow">▶</span>
    </div>
    <div class="accordion-content ${index === 0 ? "active" : ""}">
        <div class="zone-convenor">
            Zone Convenor: <strong>${zone.convenor.name}</strong> 
            <a href="tel:${zone.convenor.phone}" class="call-icon">📞</a> 
            <br><u>QHLS Centers:</u></br>
        </div>
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