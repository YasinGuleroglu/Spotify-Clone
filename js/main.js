
import { API } from "./api.js";

import { UI } from "./ui.js";


const api = new API();


const ui = new UI();

// ! Sayfa yüklendiği an api isteği at
document.addEventListener("DOMContentLoaded", async () => {
  
  ui.renderLoader();
  
  const songs = await api.getPopular();
  
  ui.renderCards(songs);
});

// ! Form gönderildiğine inputtaki değere eriş ve api'dan inputtaki kelimeye ait şarkıları al
ui.form.addEventListener("submit", async (e) => {
 
  e.preventDefault();
  
  const query = e.target[0].value;

  
  if (!query.trim()) {
    alert("Lütfen geçerli bir arama işlemi gerçekleştiriniz!!");

    
    return;
  }

  

  ui.renderLoader();

  
  ui.title.innerText = `${query} için sonuçlar `;

  

  const songs = await api.getSearchMusics(query);

  

  ui.renderCards(songs);
});

// ! Play ikonuna tıklanınca şarkı oynatma özelliği sağlayan fonksiyon

ui.list.addEventListener("click", (e) => {
  
  if (e.target.className == "play") {
    
    const card = e.target.parentElement.parentElement;

   
    const songData = card.dataset;

    
    ui.renderPlayer(songData);
  }
});
