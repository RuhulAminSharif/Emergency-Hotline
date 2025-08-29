services = [
  {
    name: "National Emergency Number",
    type: "National Emergency",
    number: "999",
    category: "All",
    img: "./assets/images/emergency.png",
  },
  {
    name: "Police Helpline Number",
    type: "Police",
    number: "999",
    category: "Police",
    img: "./assets/images/police.png",
  },
  {
    name: "Fire Service Number",
    type: "Fire Service",
    number: "999",
    category: "Fire",
    img: "./assets/images/ambulance.png",
  },
  {
    name: "Ambulance Service",
    type: "Ambulance",
    number: "1994",
    category: "Health",
    img: "./assets/images/fire-service.png",
  },
  {
    name: "Women & Child Helpline",
    type: "Women & Child Helpline",
    number: "109",
    category: "Help",
    img: "./assets/images/emergency.png",
  },
  {
    name: "Anti-Corruption Helpline",
    type: "Anti-Corruption",
    number: "106",
    category: "Govt.",
    img: "./assets/images/emergency.png",
  },
  {
    name: "Electricity Helpline",
    type: "Electricity Outage",
    number: "16216",
    category: "Electricity",
    img: "./assets/images/emergency.png",
  },
  {
    name: "Brac Helpline",
    type: "Brac",
    number: "16445",
    category: "NGO",
    img: "./assets/images/brac.png",
  },
  {
    name: "Bangladesh Railway Helpline",
    type: "Bangladesh Railway",
    number: "163",
    category: "Travel",
    img: "./assets/images/emergency.png",
  },
];

const serviceSection = document.getElementById("service-section");
function renderServices() {
  for (let i = 0; i < services.length; i++) {
    const service = services[i];
    const { name, type, number, category, img } = service;
    const serviceCard = document.createElement("div");
    serviceCard.innerHTML = `
        <div
          class="p-8 rounded-xl shadow-[0_2px_3px_0_rgba(0,0,0,0.15)] bg-white"
        >
          <div class="flex justify-between items-center">
            <div class="rounded-2xl bg-[#ffe3e2] p-3">
              <img src="${img}" alt="" class="w-8 h-8" />
            </div>
            <div>
              <i
                class="fa-regular fa-heart text-[#5c5c5c]"
                id="heartIcon-${i}"
              ></i>
            </div>
          </div>
          <div class="mt-4">
            <h2
              id="serviceName-${i}"
              class="font-hind font-bold text-2xl text-[#111] mb-1 overflow-hidden text-ellipsis whitespace-nowrap w-full block"
            >
              ${name}
            </h2>
            <p class="font-roboto font-normal text-lg text-[#5c5c5c]">
              ${type}
            </p>
            <h1
              id="serviceNumber-${i}"
              class="font-roboto text-3xl font-bold text-[#111] mt-6"
            >
              ${number}
            </h1>
            <div
              class="w-24 text-center rounded-[9999px] py-[6px] px-2 bg-[#f2f2f2] mb-6"
            >
              <h5 class="font-hind font-normal text-lg text-[#5c5c5c]">All</h5>
            </div>
            <div class="w-full grid grid-cols-2 gap-2">
              <div
                id="copyBtn-${i}"
                class="flex justify-center items-center rounded-lg border-[1px] border-[#d4d6d5] py-[10px] px-[25px]"
              >
                <a
                  href="#"
                  class="font-roboto font-normal text-base text-[#5c5c5c]"
                  ><i class="fa-regular fa-copy text-[#5c5c5c] rotate-90"></i
                  >Copy</a
                >
              </div>
              <div
                id="callButton-${i}"
                class="flex justify-center items-center rounded-lg border-[1px] bg-[#00a63e] border-[#00a63e] py-[10px] px-[30px]"
              >
                <a href="#" class="font-roboto font-normal text-base text-white"
                  ><i class="fa-solid fa-phone text-white"></i>Call</a
                >
              </div>
            </div>
          </div>
        </div>
    `;
    serviceSection.appendChild(serviceCard);
  }
  serviceSection.classList.add(
    "grid",
    "grid-cols-1",
    "md:grid-cols-3",
    "lg:grid-cols-4",
    "gap-6",
    "mt-12",
    "mb-20",
    "mx-auto"
  );
}

renderServices();
