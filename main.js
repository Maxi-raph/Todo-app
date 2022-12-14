const button = document.querySelector('.btn')
const todoList = document.querySelector('.todo_list')


// Adding an event to the button to add the inputvalue to the array// 
button.addEventListener('click',() => {
    const inputValue = document.getElementById('input').value 
    const arrOfObj = []
    if (inputValue === '') {
      alert('type something!')  
    }
    else{  
       arrOfObj.push(inputValue)

       //Creating the checbox container //
       const checkBoxContainer = document.createElement('div')
       checkBoxContainer.style.display = 'flex'
       checkBoxContainer.style.justifyContent = 'start'
       // Creating the checkboxes //
       const firstCheckBox = document.createElement('input')
       firstCheckBox.setAttribute('type','checkbox')
       const secondCheckBox = document.createElement('input')
       secondCheckBox.setAttribute('type','checkbox')
        // Appending checkboxes to checkbox container //
       checkBoxContainer.appendChild(firstCheckBox)
       checkBoxContainer.appendChild(secondCheckBox)
       // Looping through the array, creating listItem for each array and putting it in the todo_list //
        arrOfObj.forEach(arr => {
            const listItem = document.createElement('p')
            const text = document.createTextNode(arr)
            listItem.classList.add('list')
            listItem.appendChild(text)
            const listItemContainer = document.createElement('div')
            listItemContainer.classList.add('list_container')
            listItemContainer.appendChild(listItem)
                    listItemContainer.appendChild(checkBoxContainer)
            todoList.appendChild(listItemContainer)
        // Adding an event to the first checkbox to put a line through on the listItem //  
            firstCheckBox.addEventListener('click',() => {
               listItemContainer.classList.toggle('checked')
              
                firstCheckBox.style.display = 'none'
                checkBoxContainer.style.justifyContent = 'flex-end'
               })
        // Adding an event to the second checkbox to delete the listItem container // 
               secondCheckBox.addEventListener('click',() => {
              if(firstCheckBox.style.display !== 'none'){
                  return
             }
              else if(firstCheckBox.style.display === 'none'){
                listItemContainer.style.transform = 'scale(0)'
                if (listItemContainer.style.transform == 'scale(0)') {
                     new Promise((resolve) =>{
                        setTimeout( () =>{
                            resolve(todoList.removeChild(listItemContainer))
                        },200)
                     })
               }
            }
            })

        })

    
       
    }
    
})
   
        
 

