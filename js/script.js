/*
FSJS Project 2 - Data Pagination and Filtering
 *Search function
 *
 * Function without any parameter. No return anything. For search betwen students.
 *
 *
 *     
*/

function searchFunc() {
   let header = document.querySelector('.header'); 
   let studentSearch = document.querySelector('.student-search');
   let element = `<label for="search" class="student-search">
   <input id="search" placeholder="Search by name...">
   <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>
   `;
   header.insertAdjacentHTML('beforeend', element); // insert to header with element variable before the end

   let input = document.querySelector('#search');
   input.innerHTML = ''; //get search class by id and set it to empty string
   
   input.addEventListener('keyup', (e) => {

         let filter = e.target.value.toLowerCase(); //set te input value to lower case and save it to the @filter {string} variable
         let finded = []; // empty array for matched students

         
         for(let i = 0; data.length > i; i++) {
            if(data[i].name.first.toLowerCase().includes(filter) || data[i].name.last.toLowerCase().includes(filter)) {
               finded.push(data[i]); // push matched students to the @finded array
            } 
         
      
         showPage(finded, 1) // call function with "finded" array - finded - all matched students who finded, second parameter the page number
         addPagination(finded); // call function with all matched students - for pagination buttons
       
      }
   });

   input.addEventListener('keydown', (e) => {
     if(e.target.value == '') {
         showPage(data, 1) 
         addPagination(data); // call those function when input field is empty
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
 * @param {object} list - list parameter for loop over students
  * @param {number} page - page parmater to deternite the pages
 * 
 *
*/
function showPage (list, page) {

   let startIndex = (page * 9) - 9;
   let endIndex = page * 9; // count the start and end pages by students

   let studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';  //get student-list class by id and set it to empty string
  
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

            studentList.insertAdjacentHTML('beforeend', element)   // insert the concatanted element to the stunedt list
            
         }
        
      }

}




/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
* @param {object} list - list parameter for loop over students
*/

function addPagination(list) {

   let numberOfPangination = list.length / 9;
   numberOfPangination = Math.ceil(numberOfPangination);

   let linkList = document.querySelector('.link-list');
   linkList.innerHTML = ''; //get link-list class by id and set it to empty string

   for(let i = 1; i <= numberOfPangination; i++) {
      
      let element = ` <li>
      <button type="button" ${ i === 1 ? 'class="active"' : ''}>${i}</button>
      </li> `;
      linkList.insertAdjacentHTML('beforeend', element); 
      
   }

   let listItems = linkList.getElementsByTagName('li'); // select li element and save it to variable

   for(let i = 0; i <= listItems.length -1; i++) {

      let buttonLink = listItems[i].firstElementChild; //select the created pagination buttons

      buttonLink.addEventListener('click', (e) => {

         let button = e.target; //save clicked button to the variable
         
         for (let i = 0; i <= listItems.length - 1; i++) {
            listItems[i].firstElementChild.className = ''; // set class name to empty string
         }
   
         button.className = 'active'; //set button class to active
        
         showPage(data, button.textContent); //call function to show students with pagination buttons
          
       
         
       });
   
   }
   
}



// Call functions

showPage(data, 1); //call function with @data {object} and set the page to 1
addPagination(data); //call function and sum 9 students by page
searchFunc(); //call search function