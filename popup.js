// Initialize butotn with users's prefered color


// When the button is clicked, inject setPageBackgroundColor into current page


// The body of this function will be execuetd as a content script inside the
// current page

function test(dangerousness_rate){
  var color = document.getElementById("rate_color")
  switch (dangerousness_rate){
    case dangerousness_rate< 20:
      console.log('blanc');
      break;
      case 20<=dangerousness_rate <= 40:
        console.log('vert');
        break;
        case 40<dangerousness_rate <=70:
          console.log('orange')
        case 70< dangerousness_rate:
          break;
  }
}