//getting input search value
const inputFieldValue = document.querySelector(".header__input");
//getting whole list of items [li]
const list = document.querySelectorAll("li");

//inicializing search funcion:
const searchList = (event) => {
  //connected on item where function addEventListener is triggered:
  const inputText = event.target.value.toLocaleLowerCase();
  //Best array search function forEach:
  list.forEach((element) => {
    //checking text content for every list item:
    const helper = element.textContent;
    //checking if element in list have got vale of indexOd on -1 - element is not present in the list
    if (helper.toLocaleLowerCase().indexOf(inputText) !== -1) {
      //indexOf in showing -1 always when letter is not in string so if its diferent means wanted position
      element.style.display = "block";
      //else hide position:
    } else {
      element.style.display = "none";
    }
  });
};

//AddEventListner on Input field
inputFieldValue.addEventListener("keyup", searchList);
