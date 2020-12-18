const content = document.querySelector('.container');



function showTasks() {
    //
    const lists = document.querySelectorAll('#myLists li')
    for (let i = 0; i < lists.length; i++)
    {
        lists[i].addEventListener('click', function (e)
        {
            const list = this;

            // if click on no active list => remove style other active listname + remove class for these tasks
            // and add style active for clicked listname + add class active for these tasks

            // for listname
           if (!list.classList.contains('active')) {
               if (content.querySelector('#myLists .active') != null)
               {
                   content.querySelector('#myLists .active').classList.remove('active');
               }
               list.classList.add('active');

               //for taskes
               const activeList = content.querySelector('.listContent.active')

               if (activeList != null)
               {
                   activeList.classList.remove('active');
               }
               //on ajoute la class active à la liste des tâche en fonction de l'id de la liste
               content.querySelector('#tasks'+this.id.split(' ').join('')).classList.add('active');
           }
        })
    }
}

function addList () {
    // 1 - create new list
    const lists =  document.querySelector ('#myLists');
    const nameListInput = document.querySelector('#newListName');


    const liList =  document.createElement('li');
    const nameList = document.createTextNode(nameListInput.value);

    //add text in li
    liList.appendChild(nameList);
    //add id=nameList
    liList.id = nameListInput.value;
    //add onclick=showTasks()
    liList.setAttribute("onclick","showTasks()");

    //add the new list of task in #myLists
    lists.appendChild(liList);




    // 2- create new list of task for his list
    const listsofTasks =  document.querySelector ('#listoftasks')
    const newListOfTask =  document.createElement('div');

    // add id = tasks+nameList
    newListOfTask.id = 'tasks'+nameListInput.value.split(' ').join('');
    // add class = listContent
    newListOfTask.classList.add('listContent');
    // add the new list of tasks empty in #listoftasks
    listsofTasks.appendChild(newListOfTask);

    //empty the input
    nameListInput.value = "";



}

function addTask ()
{
    //search active list
    const activeList = content.querySelector('.listContent.active')
    //get his id


    // new taskname in input
    const newTaskInput = document.querySelector('#newtask');
    const nameTask = document.createTextNode(newTaskInput.value);

    const liTask =  document.createElement('li');

    //add text in li
    liTask.appendChild(nameTask);

    //add the new task in active list
    activeList.appendChild(liTask);

    //empty the input
    newTaskInput.value = "";

}

