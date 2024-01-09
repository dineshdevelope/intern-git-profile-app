const profiles = [];
var xhr = new XMLHttpRequest();

function profileView(profileName) {
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let responseData = JSON.parse(this.response);
      console.log(responseData);
      let photo = responseData.avatar_url;
      let name = responseData.name;
      let html_url = responseData.html_url;

      return responseData;
    }
  };
  xhr.open(
    "GET",
    `https://cors-anywhere.herokuapp.com/https://api.github.com/users/${profileName}`
  );
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
