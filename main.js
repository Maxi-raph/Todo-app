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
       checkBoxContainer.style.width = '15%'
       checkBoxContainer.style.justifyContent = 'space-between'
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
            const listItem = document.createElement('li')
            const text = document.createTextNode(arr)
            listItem.classList.add('list')
            listItem.appendChild(text)
            listItem.appendChild(checkBoxContainer)
            todoList.appendChild(listItem)
        // Adding an event to the first checkbox to put a line through on the listItem //  
            firstCheckBox.addEventListener('click',() => {
                listItem.classList.toggle('checked')
                checkBox.style.display = 'none'
                checkBoxContainer.style.justifyContent = 'flex-end'
               })
        // Adding an event to the second checkbox to delete the listItem // 
               secondCheckBox.addEventListener('click',() => {
                listItem.style.transform = 'scale(0)'
                if (listItem.style.transform == 'scale(0)') {
                     new Promise((resolve) =>{
                        setTimeout( () =>{
                            resolve(todoList.removeChild(listItem))
                        },200)
                     })
               }
            })
        })

    
       
    }
    
})
   
        
 

