let elCountryList = document.querySelector(".countries-list");
let elCountrySelect = document.querySelector(".countries_select");
let elSearch = document.querySelector(".search_input");

function renderCountries(arr, list) {
  list.innerHTML = "";
  arr.forEach((value) => {
    let elItem = document.createElement("li");
    let elImg = document.createElement("img");
    let elId = document.createElement("span");
    let elName = document.createElement("h2");
    let elCapital = document.createElement("p");
    let elPopulation = document.createElement("p");

    let elIconsWrapper = document.createElement("div");
    let elLikeBtn = document.createElement("button");
    let elSaveBtn = document.createElement("button");
    let elMoreBtn = document.createElement("button");
    let elLikeImg = document.createElement("img");
    let elSaveImg = document.createElement("img");
    let elMoreImg = document.createElement("img");

    elItem.className =
      "w-[350px] hover:scale-105 cursor-pointer duration-300 p-2 bg-white rounded-[10px]";
    elLikeBtn.className = "p-2 rounded-[50%] block";
    elIconsWrapper.className = "flex items-center pr-3 gap-7";

    elImg.src = value.flag;
    elImg.width = "100%";
    elImg.height = "200px";
    elImg.className = "w-[100%] h-[200px] rounded-[10px]";

    elLikeImg.src = "/images/heart.svg";
    elLikeImg.width = "25";
    elLikeImg.height = "25";

    elSaveImg.src = "/images/save.svg";
    elSaveImg.width = "35";
    elSaveImg.height = "30";
    elSaveImg.classList.add("save_img");

    elMoreImg.src = "/images/more.svg";
    elMoreImg.width = "25";
    elMoreImg.height = "25";

    elName.textContent = value.name;
    elName.className = "text-[19px]";
    elCapital.textContent = "Capital : " + value.capital;
    elPopulation.textContent = "Population : " + value.population;
    elId.textContent = value.id;

    elLikeBtn.append(elLikeImg);
    elSaveBtn.append(elSaveImg);
    elMoreBtn.append(elMoreImg);
    elIconsWrapper.append(elLikeBtn, elSaveBtn, elMoreBtn);
    elItem.append(elImg, elId, elName, elCapital, elPopulation, elIconsWrapper);
    list.append(elItem);
  });
}
renderCountries(countrys, elCountryList);

countrys.forEach((value) => {
  let elOption = document.createElement("option");
  elOption.innerHTML = `${value.name}`;
  elOption.setAttribute("value", value.name);
  elCountrySelect.append(elOption);
});

elCountrySelect.addEventListener("change", (evt) => {
  if (evt.target.value == "All") {
    renderCountries(countrys, elCountryList);
  } 
  else {
    const selectedList = countrys.filter(item => item.name == evt.target.value);
    renderCountries(selectedList, elCountryList);
  }
});


  elSearch.addEventListener("keyup", (evt) => {
    const searchValue = evt.target.value;
    if (Number(searchValue)) {
      const searchList = countrys.filter(item => String(item.id).includes(searchValue.trim()));
      renderCountries(searchList, elCountryList);
    }
    else {
      const searchList = countrys.filter(item => item.name.toLowerCase().includes(searchValue.trim().toLowerCase()));
      renderCountries(searchList, elCountryList);
    }
  })
