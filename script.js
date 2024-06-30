const expenseForm = document.getElementById('expenseform');
const expenseList = document.getElementById('expenseList');

expenseForm.addEventListener('submit', function(event){
  event.preventDefault();

  const description = document.getElementById('description').value;
  const category = document.getElementById('category').value;
  const amount = document.getElementById('amount').value;

  if(document && category && !isNaN(amount)){
    const newRow = document.createElement('tr');

    newRow.innerHTML = `<td>${description}</td><td>${category}</td><td>${amount}</td>`;
    expenseList.appendChild(newRow);

    document.getElementById('description').value = '';
    document.getElementById('category').value = 'reset';
    document.getElementById('amount').value = '';
  } else{
    alert('Please fill in all fields correctly');
  }
  
  
})