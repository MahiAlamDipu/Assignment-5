const now = new Date();
const colorPicker = getElementById('colorPicker');
const body = getElementById('body');

const taskAssigned = getElementById('task-assigned')
let allTask = document.getElementsByClassName('task')
taskAssigned.innerText = String(allTask.length).padStart(2, '0')

const taskCompleted = getElementById('task-completed')

const dayName = getElementById('day-name')

const day = now.getDay()
const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
dayName.innerText = dayNames[day]

const date = getElementById('date')
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

date.innerText = months[now.getMonth()] + ' ' + now.getDate() + ' ' + now.getFullYear()
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
document.addEventListener('click', function (event) {

    event.preventDefault();

    if (event.target.id == 'completed') {

        alert("Board Updated Successfully")

        // add the event in the history
        const task = event.target.parentNode.parentNode.children[1].innerText


        let hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        const complete_time = hours + ':' + minutes + ':' + seconds + ' ' + ampm

        const new_history = document.createElement('div');
        new_history.className = "bg-[#F4F7FF] p-3 rounded-2xl";
        new_history.innerHTML = `<p>You have completed the task <span class="font-medium">${task}</span> at <span>${complete_time}</span></p>`;


        activity_history.appendChild(new_history);


        // disable the button
        event.target.style.backgroundColor = 'lightgrey'
        if (taskAssigned.innerText == '01')
            alert("Congrates!! You have completed all the current task")

        taskAssigned.innerText = String(--(taskAssigned.innerText)).padStart(2, '0')
        taskCompleted.innerText = String(++(taskCompleted.innerText)).padStart(2, '0')
        event.target.disabled = true;
    }
    if(event.target.id=='discover')
        window.location.href ='discover.html'

})









