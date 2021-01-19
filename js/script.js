/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
function dataPagination() {
   let header = document.querySelector('.header');
   let studentSearch = document.querySelector('.student-search');
   let element = `<label for="search" class="student-search">
   <input id="search" placeholder="Search by name...">
   <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>
   `;
   header.insertAdjacentHTML('beforeend', element);

   let input = document.querySelector('#search');
   input.innerHTML = '';
   input.addEventListener('keyup', (e) => {
      if(e.target.value) {
         let filter = e.target.value;

         position = data.map(function(e) { return e.name.first; }).indexOf(filter);

         console.log(position);

         let finded = [];
       
         finded.push(data[position]);
         
         console.log(finded);

         showPage(finded, 1)
      }
   });

   input.addEventListener('keydown', (e) => {
      if(e.target.value) {
         showPage(data, 1)
      }
   });
}



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/








/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage (list, page) {

   let startIndex = (page * 9) - 9;
   let endIndex = page * 9;

   let studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
  
      for(let i = 0; i <= list.length -1; i++) {
         if(i >= startIndex && i < endIndex) {
                 let element = `  <li class="student-item cf">
                  <div class="student-details">
                  <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                  <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
                  </div>
                  <div class="joined-details">
                  <span class="date">${list[i].registered.date}</span>
                  </div>
               </li>
               `
          //  console.log(element);

            studentList.insertAdjacentHTML('beforeend', element)   
            
         }
        
        
      }
  
   
}




/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {

   let numberOfPangination = list.length / 9;
   numberOfPangination = Math.ceil(numberOfPangination);

   let linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';

  
   

   for(let i = 1; i <= numberOfPangination; i++) {
      
      let element = ` <li>
      <button type="button" ${ i === 1 ? 'class="active"' : ''}>${i}</button>
      </li> `;
      linkList.insertAdjacentHTML('beforeend', element); 
      

    
     
   }

   
   let listItems = linkList.getElementsByTagName('li');


   for(let i = 0; i <= listItems.length -1; i++) {

      let buttonLink = listItems[i].firstElementChild;

      buttonLink.addEventListener('click', (e) => {

         let button = e.target;
         
         for (let i = 0; i <= listItems.length - 1; i++) {
            listItems[i].firstElementChild.className = '';
         }
   
         
          
          button.className = 'active';
        
        showPage(data, button.textContent)
          
       
         
       });
   
   }
   

  
}



// Call functions

showPage(data, 1)
addPagination(data);
dataPagination();