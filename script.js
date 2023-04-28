const KEYBOARD = [
{key: 'Escape', keyCode: 27},
{key: 'ё', keyCode: 1105},
{key: '1', keyCode: 49},
{key: '2', keyCode: 50},
{key: '3', keyCode: 51},
{key: '4', keyCode: 52},
{key: '5', keyCode: 53},
{key: '6', keyCode: 54},
{key: '7', keyCode: 55},
{key: '8', keyCode: 56},
{key: '9', keyCode: 57},
{key: '0', keyCode: 48},
{key: '-', keyCode: 189},
{key: '=', keyCode: 187},
{key: 'Backspace', keyCode: 8},
{key: 'Tab', keyCode: 9},
{key: 'й', keyCode: 81},
{key: 'ц', keyCode: 87},
{key: 'у', keyCode: 69},
{key: 'к', keyCode: 82},
{key: 'е', keyCode: 84},
{key: 'н', keyCode: 89},
{key: 'г', keyCode: 85},
{key: 'ш', keyCode: 73},
{key: 'щ', keyCode: 79},
{key: 'з', keyCode: 80},
{key: 'х', keyCode: 219},
{key: 'ъ', keyCode: 221},
{key: 'Delete', keyCode: 46},
{key: 'CapsLock', keyCode: 20},
{key: 'ф', keyCode: 65},
{key: 'ы', keyCode: 83},
{key: 'в', keyCode: 68},
{key: 'а', keyCode: 70},
{key: 'п', keyCode: 71},
{key: 'р', keyCode: 72},
{key: 'о', keyCode: 74},
{key: 'л', keyCode: 75},
{key: 'д', keyCode: 76},
{key: 'ж', keyCode: 186},
{key: 'э', keyCode: 222},
{key: 'Enter', keyCode: 13},
{key: 'Shift', keyCode: 16},
{key: 'я', keyCode: 90},
{key: 'ч', keyCode: 88},
{key: 'с', keyCode: 67},
{key: 'м', keyCode: 86},
{key: 'и', keyCode: 66},
{key: 'т', keyCode: 78},
{key: 'ь', keyCode: 77},
{key: 'б', keyCode: 188},
{key: 'ю', keyCode: 190},
{key: '.', keyCode: 191},
{key: '&#8593;', keyCode: 38},
{key: 'Shift', keyCode: 16},
{key: 'Control', keyCode: 17},
{key: 'Meta', keyCode: 91},
{key: 'Alt', keyCode: 18},
{key: ' ', keyCode: 32},
{key: 'Alt', keyCode: 18},
{key: 'PrtSc', keyCode: 44},
{key: 'Control', keyCode: 17},
{key: '&#8592;', keyCode: 37},
{key: '&#8595;', keyCode: 40},
{key: '&#8594;', keyCode: 39},
];

// document.onkeydown = function(e) {
//   let key = {
//     key: e.key,
//     keyCode: e.keyCode,
//   };
//   keyboard.push(key);
//   console.log(keyboard);
//   return keyboard;
// };

function createKeyboard() {
    let result = "";
    for(let i = 0; i < KEYBOARD.length; i++){
      if(i === 15 || i === 29 || i === 42 || i === 55){
        result += `<div class="clearfix"></div>`
      }
      if (i === 58){
        result += `<div class="key-item key-item_space" data-code=${KEYBOARD[i].key}> ${String(KEYBOARD[i].key)} </div>`;
      } else if (i === 54 || i === 42 || i === 41){
        result += `<div class="key-item key-item_wide" data-code=${KEYBOARD[i].key}> ${String(KEYBOARD[i].key)} </div>`;
      }
      if (i !== 58 && i !== 54 & i !== 42 & i !== 41){
        result += `<div class="key-item" data-code=${KEYBOARD[i].key}> ${String(KEYBOARD[i].key)} </div>`
      }
      
    };
    document.querySelector("body").innerHTML = `<div class="keyboard__wrapper" id="keyboard">${result}</div>`;
  
    const keyboardKeys = document.querySelectorAll('.keyboard__wrapper .key-item');
    keyboardKeys.forEach(function(key) {
      key.onclick = function(e){
        keyboardKeys.forEach(function(elem) {
          elem.classList.remove('active');
        });
        let code = key.getAttribute('data-code');
        key.classList.add('active');
        console.log(code);
      }
    });
  
    document.onkeydown = function(e){
      console.log(e.code);
      console.log(e.key);
      const activeKey = document.querySelector(`.keyboard__wrapper .key-item[data-code="${e.key}"]`);
      if (activeKey) {
        activeKey.classList.add('active');
      }
    };
    
    document.onkeyup = function(e) {
      console.log(e.code);
      console.log(e.key);
      const activeKey = document.querySelector(`.keyboard__wrapper .key-item[data-code="${e.key}"]`);
      if (activeKey) {
        activeKey.classList.remove('active');
      }
    };
  }
  
  createKeyboard();