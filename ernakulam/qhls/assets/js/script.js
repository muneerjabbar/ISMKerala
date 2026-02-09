// 🕌 QHLS Centers Data as JSON
const qhlsData = [
  {
    "zone": "ALUVA",
    "convenor": { "name": "ASHKAR K A", "phone": "9037553423" },
    "units": [
      { "name": "Aluva", "convenor": "Ameen Shageer", "phone": "7736124227" },
      { "name": "ELOOKARA", "convenor": "Shanavas ka", "phone": "9995380794" },
      { "name": "Kunnatheri", "convenor": "MUFEEDUL AVAM P.M", "phone": "9074330471" },
      { "name": "Kuzhivelippadi", "convenor": "Anees v m", "phone": "9037222421" },
      { "name": "NALAMMILE", "convenor": "Muhammed Shahid k", "phone": "8943118023" },
      { "name": "Nochima", "convenor": "Niyas K A", "phone": "9947635343" },
      { "name": "Sreemoolanagaram", "convenor": "Muhammed Adhil T A", "phone": "8547809278" },
      { "name": "THAIKKATTUKARA", "convenor": "Mohammed Al-haamid", "phone": "9995309493" },
      { "name": "THOUHEED NAGAR", "convenor": "Ahlas ibnu subair", "phone": "7510352615" },
      { "name": "Uliyannur", "convenor": "Muhammed Asif m.y", "phone": "8590277804" }
    ]
  },
  {
    "zone": "ERNAKULAM",
    "convenor": { "name": "ANSARI ISLAHI", "phone": "8848225907" },
    "units": [
      { "name": "Kaloor", "convenor": "FIAZ MUHAMMED", "phone": "9072464543" }
    ]
  },
  {
    "zone": "KAKKANAD",
    "convenor": { "name": "Riyas p m", "phone": "8891110025" },
    "units": [
      { "name": "Athani", "convenor": "Muhammed Ibnu M.N", "phone": "7356691437" },
      { "name": "Cheranallur", "convenor": "Syed Mohammed bin yahya", "phone": "9947888003" },
      { "name": "Edappalli", "convenor": "Mahin abdul salam", "phone": "9947914955" },
      { "name": "Infopark", "convenor": "Yasar A P", "phone": "9884088118" },
      { "name": "Kakkanad", "convenor": "Riyas p m", "phone": "8891110025" },
      { "name": "Kalamassery", "convenor": "Dr. Ajees A P", "phone": "9061859697" },
      { "name": "Kangarappadi", "convenor": "Salahudheen V M", "phone": "8089371379" },
      { "name": "Mattakkad", "convenor": "Akbar p a", "phone": "9895522461" },
      { "name": "Padamugal", "convenor": "MOHAMMED BABU M. H", "phone": "8089100778" }
    ]
  },
  {
    "zone": "KOCHI",
    "convenor": { "name": "Haris v. M", "phone": "8089657667" },
    "units": [
      { "name": "CALVATHY", "convenor": "Looth MS", "phone": "8593928200" },
      { "name": "Cheralayi Kadavu", "convenor": "Mujahid minhaj", "phone": "8129019244" },
      { "name": "CP THODU", "convenor": "Shaheer thailanil Ebrahim", "phone": "9895877967" },
      { "name": "Kochi", "convenor": "ABDUL FAIZ M.H.", "phone": "8714938880" },
      { "name": "Kunnumpuram", "convenor": "Aneesh M A", "phone": "9895116564" },
      { "name": "Mattanchery", "convenor": "Abdul shaheer", "phone": "8086018813" },
      { "name": "PATTALLAM", "convenor": "Shaik mujeeb rahman", "phone": "8089557919" },
      { "name": "THURUTHY", "convenor": "Mohamed afreed", "phone": "9447140582" }
    ]
  },
  {
    "zone": "KOTHAMANGALAM",
    "convenor": { "name": "Abdul Kareem", "phone": "7594846607" },
    "units": [
      { "name": "ADIVAD", "convenor": "Ansar Ali", "phone": "9946651310" },
      { "name": "Kothamangalam", "convenor": "Sahal Ali", "phone": "9745556962" },
      { "name": "Manikkinar", "convenor": "Firoz Abdullah", "phone": "9947605439" },
      { "name": "NELLIKUZHY", "convenor": "Thanzeer K M", "phone": "9092121678" },
      { "name": "PAIMATTOM", "convenor": "Abdul Kareem", "phone": "7594846607" }
    ]
  },
  {
    "zone": "MUVATTUPUZHA",
    "convenor": { "name": "Noufal VA", "phone": "9400916174" },
    "units": [
      { "name": "KIZHAKKEKKARA", "convenor": "HARIS S", "phone": "9446395132" },
      { "name": "MULAVOOR", "convenor": "Naisal k.k", "phone": "9961845161" },
      { "name": "Muvattupuzha Town", "convenor": "Mujeeb Moosa", "phone": "9605507249" },
      { "name": "Payipra", "convenor": "Afsal fouzi", "phone": "9847896353" },
      { "name": "Perumattom", "convenor": "faris kabeer", "phone": "9446726587" }
    ]
  },
  {
    "zone": "PALLURUTHI",
    "convenor": { "name": "Ummermukthar km", "phone": "7736563613" },
    "units": [
      { "name": "East Shakha", "convenor": "Siraj.p.s.", "phone": "9061979978" },
      { "name": "Edakochi", "convenor": "Shameer AJ", "phone": "7994043271" },
      { "name": "KACHERIPADY", "convenor": "ALTHAF", "phone": "8137963317" },
      { "name": "Nambyapuram", "convenor": "MUNEER KM", "phone": "9946025999" }
    ]
  },
  {
    "zone": "PARAVOOR",
    "convenor": { "name": "Muhammed jabir", "phone": "9961613714" },
    "units": []
  },
  {
    "zone": "PERUMBAVOOR",
    "convenor": { "name": "ANSAL M V", "phone": "9946104727" },
    "units": [
      { "name": "MINIKKAVALA", "convenor": "ASHKAR A S", "phone": "7025162366" },
      { "name": "Pallikkara Paracode", "convenor": "Arafath M.V", "phone": "9446470755" },
      { "name": "Pallikkavala", "convenor": "MUHAMMED ABDUL KAYYUM", "phone": "9188213332" }
    ]
  },
  {
    "zone": "VYPPIN",
    "convenor": { "name": "Nizamudheen", "phone": "7736472276" },
    "units": []
  },
  {
    "zone": "VYTTILA",
    "convenor": { "name": "AJMAL ALTHAF MH", "phone": "8714251522" },
    "units": [
      { "name": "Chakkaraparambu", "convenor": "Fahad P J", "phone": "9633747200" },
      { "name": "Kanjiramattom", "convenor": "Aamirul Ameen K M", "phone": "8848962147" },
      { "name": "KULASEKARAMANGALAM", "convenor": "Anshad.k.a", "phone": "9746117113" },
      { "name": "KULASEKARAMANGALAM", "convenor": "NISHAD. K.U", "phone": "7907259233" },
      { "name": "Kumbalam", "convenor": "Sakkeer cm", "phone": "9895308677" },
      { "name": "NETOOR", "convenor": "Badusha Salim", "phone": "9746122002" },
      { "name": "Thalayolapparambu", "convenor": "Sinan Muhammed", "phone": "8606643365" },
      { "name": "VETTIKKATTUMUKKU", "convenor": "Irfan T Y", "phone": "9633192983" },
      { "name": "Vyttila", "convenor": "Fazal Mujeeb", "phone": "8714071610" }
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