const addBtn = document.querySelector('#addbtn');       // taking add button reference

    let dataArray = [];                                 // initialise empty array outside

 // function for adding new note box after clicking add note button 
const addNote = () =>  {           

//    const savenote= ()=>{
//         const noteText= document.querySelector('.note textarea');
//         // noteText.forEach((noteT) => {
//             data.push(noteText.value);
//         // });  
//  }

    const note = document.createElement('div');         // creating a new div element  
        
    note.classList.add('note');                         //adding class to above div element

        // below is innerHtml of div 
    const htmlData = `<div class="tool">
        <i class="save fa-solid fa-pen-to-square" id="saveid"></i>
        <i class="delete fa-solid fa-trash-can"></i>
    </div>
    <textarea></textarea>   ` ;

    note.insertAdjacentHTML('afterbegin', htmlData);    // inserting new note box in note div

    const mainDiv = document.querySelector('.main');    // main div reference
    
    mainDiv.appendChild(note);                          // inserting note div in body(mainDiv) at last

                 // Deleting Note
    const del = note.querySelector('.delete');     // getting delete button reference fron particular selected note
    del.addEventListener('click' , () =>note.remove() );    

    
    // save.addEventListener('click', savenote);


    // Saving note in localstorage
const savebtn = note.querySelector('.save');            // save Button reference from selected note 

savebtn.addEventListener('click' , saveNoteFun );       // getting reference of particular note's textarea

function saveNoteFun() { 

    let txt = note.querySelector('.note textarea');      
    dataArray.push(txt.value);                          // pushing value of textarea input in data Array
    // console.log(dataArray);

    localStorage.setItem("notesdata" , JSON.stringify(dataArray));  // key=notesdata  

  

};
let saveAll = document.getElementById('saveAll');
let allNotes = document.querySelectorAll('.note textarea');
saveAll.addEventListener('click', function (){
    localStorage.clear();
    allNotes.forEach((noteElement)=>{
         
        dataArray.push(noteElement.value);
      });
        // console.log(dataArray);
        localStorage.setItem('notesdata', JSON.stringify(dataArray));
        console.log(dataArray);

});   

}
   addBtn.addEventListener('click', addNote );
   addNote();
        
