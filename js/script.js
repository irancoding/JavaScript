

var buttons=document.querySelectorAll('button');
let screen = document.getElementById('screen');
let screenValue = '';

for (const item of buttons) {
    item.addEventListener('click',(e)=>{

        buttonText=e.target.innerText;

        switch (buttonText) {
            case 'X':
                {
                    buttonText = '*';
                    screenValue += buttonText;
                    screen.value = screenValue;
                }
                break;
            case 'C':
                {
                    screenValue = "";
                    screen.value = screenValue;                    
                }
                break;
            case '=':
                {
                    screen.value = eval(screenValue);                    
                }
                break;              
            default:
                {
                    screenValue += buttonText;
                    screen.value = screenValue;
                }
                break;
        }

    })
}


document.addEventListener("keydown", function(event) {
     
    if(event.shiftKey==57){
        event.key = '(';
    }
    else if(event.shiftKey==48){
        event.key = ')';
    }
    else if(event.shiftKey==53){
        event.key = '%';
    }
    if(event.keyCode==88){
        screenValue += '*';
        screen.value = screenValue;
    }
    if(event.key<=9 || event.key=='+' || event.key=='-' || event.key=='*' || event.key=='.' || event.key=='/' || event.key=='%' || event.key=='(' || event.key==')'){
        screenValue += event.key;
        screen.value = screenValue;
    }
    if(event.keyCode == 13 || event.keyCode == 187)
    {
        screen.value = eval(screenValue);
    }
    else if(event.keyCode == 46){
        screenValue = "";
        screen.value = screenValue;
        console.clear();
    }
    else if(event.keyCode == 8){
        screenValue = screenValue.slice(0, -1);
        screen.value = screenValue;
    }
    else if(event.keyCode == 67){
        screenValue = "";
        screen.value = screenValue;
        console.clear();
    }
    else if(event.keyCode == 82){
        location.reload();
    }
  })

  window.onerror = function(){
      alert("PLEASE INPUT VALID EXPRESSION");
      screenValue = "";
      screen.value = screenValue;
      console.clear();
  }
