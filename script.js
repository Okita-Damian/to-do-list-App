const todoInput = document.getElementById("todoInput");

const taskList = document.getElementById("taskList")


function addTask(){
  if (todoInput.value === ''){
  alert('you need to write something')
  } else {
    const li = document.createElement('li')
    li.innerHTML = todoInput.value;

    const span = document.createElement('span')
    span.innerHTML = '❌'
    span.onclick =  () => {
      li.remove();
      savelist()
    }
    li.appendChild(span)

    taskList.appendChild(li)
    savelist()
  }
  todoInput.value = '';
}

function savelist() {
  localStorage.setItem('save',taskList.innerHTML )
}

function loadList(){
  const savedTask = localStorage.getItem('save');
  if(savedTask){
    taskList.innerHTML = savedTask;

    const span = taskList.querySelectorAll('span');
span.forEach(span => {
  span.onclick = () =>{
    span.parentElement.remove()
    savelist()
      }
    })
   }
  }

taskList.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }

  if (e.target.tagName === 'span'){
    e.target.parentElement.remove()
    savelist()
  }
});

loadList()




