const mainEl = document.getElementById("main");

function profileView(profileName) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let responseData = JSON.parse(this.response);
      console.log(responseData);

      const sectionEl = document.createElement("section");
      sectionEl.setAttribute("class", "bg-blue-100");
      sectionEl.classList.add("rounded", "mx-auto");

      sectionEl.innerHTML = `<div>
        <div><img src=${responseData.avatar_url} class="w-48 rounded-lg"></div>

      <div class="font-serif">${responseData.name}</div>

      <div class="font-serif">Followers : ${responseData.followers}</div>

      <div class="font-serif">Following : ${responseData.following}</div>

      
      </div>`;
      mainEl.append(sectionEl);
    }
  };
  xhr.open("GET", `https://api.github.com/users/${profileName}`);
  xhr.send();
}

const internList = [
  "esakki2104prsnl",
  "vk2401",
  "suriyamassmsd",
  "riyaz1000",
  "hema-venkat3",
  "yrd369",
  "mushkir",
  "bearcin46",
  "dineshdevelope",
  "jeya-rosini",
  "swethadsalvatore",
  "mshajid",
  "muthuakalya",
  "vedhatech002",
  "danielace1",
  "sharif-22",
  "gayathrihg",
  "kishorekumar-kp",
  "muthukumarimoorthi",
];

internList.forEach((profileName) => {
  profileView(profileName);
});
