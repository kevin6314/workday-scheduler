// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//--------------------
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

var saveButtonEl = $('.saveBtn');
var timeNow = dayjs();
   
function saveItem (event){
  
  var btnClicked = $(event.target);
  console.log(event.target);

  var content = btnClicked.siblings('.description'); 
  var contentValue = content.val();
  var btnClickedParent = btnClicked.parent().attr('id');

  if (contentValue !== " ") {
  //  contentSave.parent() 
  localStorage.setItem(btnClickedParent, contentValue); 
  } else {
    console.log("there is nothing to save!");
    return;
  }
}

var mainContainer = $('.container-lg');
var scheduler = mainContainer.children('div');

function retrieveItems () {

  $.each(scheduler, function(){

    var savedKeys = $(this).attr('id');
    console.log(savedKeys);
    
    var savedContent = localStorage.getItem(savedKeys);
    console.log(savedContent);

    if (savedContent !== null) {
      $(this).children('textarea').text(savedContent);
    }
  })
  
}

retrieveItems();

//------ get stored to-dos from localStorage
// function init(){
//   
//   var storedTodos = 
// }

//   // TODO: Retrieve the last email and password and render it to the page
//   var email = localStorage.getItem("email"); //note these are local variables
//   var password = localStorage.getItem("password"); //note these are local variables
  
//   if(!email || !password){
//     return;
//   }

//   userEmailSpan.textContent = email;
//   userPasswordSpan.textContent = password;
// }

saveButtonEl.on('click', saveButtonEl, saveItem); //calls the saveItem function

function compareTime() {
  var currentHour = dayjs().hour();

  $.each(scheduler, function(){

    var calendarHour = parseInt(this.id.replace('hour-','',10))

    if (calendarHour < currentHour){ 
      $(this).addClass('past');
    } else if (calendarHour === currentHour){
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  })

}

compareTime();

$(function () {
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //  event.preventDefault();

  // var timeBlock = $('#hour-9').children().val();
  // var scheduledHourEl = $('row time-block');
  // var scheduledHour = scheduledHourEl.children().eq(1).val();
  // console.log(scheduledHour);

  // $.each(currentHour, function(i, )) {
    //variable.addClass('past');
  // }

    // // Select all checked options
    // var checkedEl = $('input:checked');
    // var selected = [];
    // // Loop through checked options to store in array
    // $.each(checkedEl, function () {
    //   selected.push($(this).val());
    // });
    // console.log('Toppings: ', selected.join(', '));

  //get the time from the div
  //figure out if before or after now
  //send updated class "row time-block..."
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  

});



// var item = $('input[name="shopping-input"]').val();
// console.log(item);

// if(!item){
//     console.log("please fill in the form!");
//     return;
// }

//------------DISPLAY TIME----------------------//


function displayTime() {
  
  // timeNow.text('#currentDay');
  $('#currentDay').text(timeNow.format('dddd, MMMM DD'));
}

setInterval(displayTime, 1000);
displayTime();