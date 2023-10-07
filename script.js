//---- global variables ----//

var saveButtonEl = $('.saveBtn');
var timeNow = dayjs();
var mainContainer = $('.container-lg');
var scheduler = mainContainer.children('div');
   

//---- save items to local storage ----//

function saveItem (event){
  
  var btnClicked = $(event.target);
  console.log(event.target);

  var content = btnClicked.siblings('.description'); 
  var contentValue = content.val();
  var btnClickedParent = btnClicked.parent().attr('id');

  if (contentValue !== " ") {

  localStorage.setItem(btnClickedParent, contentValue); 
  } else {
    console.log("there is nothing to save!");
    return;
  }
}
//---- get items from local storage ----//

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

//---- event to call the save item function ----//

saveButtonEl.on('click', saveButtonEl, saveItem); 

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

//---- event to display time ----//

function displayTime() {
  
  // timeNow.text('#currentDay');
  $('#currentDay').text(timeNow.format('dddd, MMMM DD'));
}

setInterval(displayTime, 1000);
displayTime();