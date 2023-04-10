// Write your code here!
// document.getElementById('main').remove();
// const newHeader = document.createElement("h1");
// document.body.appendChild(newHeader);
         // alternavive: newHeader.setAttribute('id', 'victory');
// newHeader.id = "victory";
// let name = "Buket";
// newHeader.innerHTML =`${name} is the champion`;

//after here
const main = document.getElementById('main');
  const newHeader = document.createElement('h1')
  main.remove();
  newHeader.id ="victory";
  newHeader.textContent = "Baker is the champion"
  document.body.append(newHeader);