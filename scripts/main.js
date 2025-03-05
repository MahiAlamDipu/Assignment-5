const now = new Date();
const colorPicker = getElementById('colorPicker');
const body = getElementById('body');

const taskAssigned = getElementById('task-assigned')
const allTask = document.getElementsByClassName('task')
taskAssigned.innerText=String(allTask.length).padStart(2, '0')

const taskCompleted = getElementById('task-completed')

const dayName = getElementById('day-name')

const day = now.getDay()
const dayNames = ['Sun' , 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
dayName.innerText = dayNames[day]

const date = getElementById('date')
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

date.innerText = months[now.getMonth()]+' ' + now.getDate() +' ' + now.getFullYear()
console.log(now.getDate())





colorPicker.addEventListener('click', function () {
    const randomColor = randomColorPicker();
    body.style.backgroundColor = randomColor;
});

const clear_history = getElementById('clear-history')
const activity_history = getElementById('activity-history')

clear_history.addEventListener('click', function () {

    activity_history.innerHTML = ''
})


const completed = getElementById('completed')
completed.addEventListener('click', function (event) {
    event.preventDefault();

    // add the event in the history
    const task = getElementById('task').innerText;

    console.log(task)
    
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const complete_time = hours + ':' + minutes + ':' + seconds + ' ' + ampm
    console.log(complete_time)
    
    
    const new_history = document.createElement('div');
    new_history.className = "bg-[#F4F7FF] p-2 rounded-2xl";
    new_history.innerHTML = `<p>You have completed the task <span class="font-medium">${task}</span> at <span>${complete_time}</span></p>`;

    // Append it to the activity_history element
    activity_history.appendChild(new_history);


    // disable the button
    completed.style.backgroundColor = 'lightgrey'
    taskAssigned.innerText=String(--(allTask.length)).padStart(2, '0')
    taskCompleted.innerText=String(++(taskCompleted.innerText)).padStart(2, '0')
    completed.disabled = true;


})








