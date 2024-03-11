let add_btn = document.querySelector("#add");
let c = 0;

add_btn.addEventListener("click", () => {
  c += 1
  if(c % 2 == 1){
    let new_text = document.querySelector("#text").value; 
    document.querySelector("#text").value = ""; 

    let item_list = document.querySelector("#block"); 

    let new_item = document.createElement("div"); 
    new_item.setAttribute("class", "mes1");

    let item_text = document.createElement("p"); 
    item_text.setAttribute("class", "inside"); 

    let item_up = document.createElement("p"); 
    item_up.setAttribute("class", "inside"); 
    item_up.innerHTML = 'User1'


    item_text.innerHTML = new_text;  

    new_item.appendChild(item_up);
    new_item.appendChild(item_text); 
    item_list.appendChild(new_item);
    }

  else{
    let new_text = document.querySelector("#text").value; 
    document.querySelector("#text").value = ""; 

    let item_list = document.querySelector("#block"); 

    let new_item = document.createElement("div"); 
    new_item.setAttribute("class", "mes2"); 

    let item_text = document.createElement("p"); 
    item_text.setAttribute("class", "inside"); 

    let item_up = document.createElement("p"); 
    item_up.setAttribute("class", "inside");
    item_up.innerHTML = 'User2'


    item_text.innerHTML = new_text;

    new_item.appendChild(item_up);
    new_item.appendChild(item_text);
    item_list.appendChild(new_item);
    }
})