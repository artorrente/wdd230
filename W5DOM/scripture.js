const input = document.querySelector('#favchamp');
const button = document.querySelector('button');
const list = document.querySelector('  ');

button.addEventListener('click', function() { if (input.value != '')
    {

    } 
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function ( ){
        list.removeChild(li);
        input.focus();
    });
    input.focus();
    input.value = '';
});