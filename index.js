/** @format */

var customerNames = [
  {
    name: "Tuấn",
  },
  {
    name: "Hoàng",
  },
  {
    name: "Minh",
  },
  {
    name: "Phước",
  },
  {
    name: "Trung",
  },
];
var customerNames2 = [
  {
    name: "Tuấn",
  },
  {
    name: "Hoàng",
  },
  {
    name: "Minh",
  },
  {
    name: "Phước",
  },
  {
    name: "Trung",
  },
];
localStorage.setItem("customers", JSON.stringify(customerNames));
const editedValue = customerNames.map((item, index) => {
  if (item.name == "Phước") {
    item.name = "Hà";
  } else {
    return null;
  }
});
localStorage.setItem("edited customer name", JSON.stringify(customerNames));
const deleteValue = (Array) => {
  const index = customerNames2.map((item) => item.name).indexOf("Phước");
  const spliceArray = customerNames2.splice(index, 1);
};
deleteValue(customerNames2);
localStorage.setItem("edited customer name 2", JSON.stringify(customerNames2));

localStorage.clear();
// delete all the keys, please remove this if you want to view all the keys i edited.
// ---------------------------------------------- //
const showLyric = () => {
  setTimeout(() => {
    document.querySelector("#first").classList.remove("default");
    document.querySelector("#first").classList.add("show");
  }, 2000);
  setTimeout(() => {
    document.querySelector("#second").classList.remove("default");
    document.querySelector("#second").classList.add("show");
  }, 3000);
  setTimeout(() => {
    document.querySelector("#third").classList.remove("default");
    document.querySelector("#third").classList.add("show");
  }, 4000);
  setTimeout(() => {
    document.querySelector("#fourth").classList.remove("default");
    document.querySelector("#fourth").classList.add("show");
  }, 5000);
  setTimeout(() => {
    document.querySelector("#fifth").classList.remove("default");
    document.querySelector("#fifth").classList.add("show");
  }, 6000);
  setTimeout(() => {
    document.querySelector("#sixth").classList.remove("default");
    document.querySelector("#sixth").classList.add("show");
  }, 7000);
  setTimeout(() => {
    document.querySelector("#seventh").classList.remove("default");
    document.querySelector("#seventh").classList.add("show");
  }, 8000);
};
const clearLyric = () => {
  setTimeout(() => {
    document.querySelector("#first").classList.remove('show');
    document.querySelector("#first").classList.add('default');

      document.querySelector("#second").classList.remove("show");
    document.querySelector("#second").classList.add("default");
    
      document.querySelector("#third").classList.remove("show");
    document.querySelector("#third").classList.add("default");
    
      document.querySelector("#fourth").classList.remove("show");
    document.querySelector("#fourth").classList.add("default");
    
      document.querySelector("#fifth").classList.remove("show");
    document.querySelector("#fifth").classList.add("default");
    
      document.querySelector("#sixth").classList.remove("show");
    document.querySelector("#sixth").classList.add("default");
    
      document.querySelector("#seventh").classList.remove("show");
    document.querySelector("#seventh").classList.add("default");
  }, 9000);
};
setInterval(() => {
  showLyric();
  clearLyric();
}, 10000);
