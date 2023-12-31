let total =0;
function addItemsExpense(text,number){
return`<tr>
<td>${text} </td>
<td>${number}</td>
<td><button class="deleteBtn">Delete</button></td>
</tr>`

}

function totalAmount(){
    $("#totalAmount").text(total);
}

function deleteExpense(){
    const row = $(this).closest("tr");
    const amount = parseFloat(row.find("td:nth-child(2)").text());
    total -= amount;
    totalAmount();
    row.remove();
}

function addExpense(event){
    event.preventDefault();

    const nameInput = $("#expenseName");
    const amountInput = $("#expenseAmount");
    const expenseList = $("#expenseList tbody");

    if(!nameInput.val() || !amountInput.val()){
        return;
    }

    const amount = parseFloat(amountInput.val())
    const addItems = addItemsExpense((nameInput.val()), amountInput.val());


    expenseList.append(addItems);

   total += amount;
   totalAmount();
  

    nameInput.val("")
    amountInput.val("")
}

$(document).ready(function (){
    const addBtn = $("#addBtn");
    addBtn.click(addExpense);
    $("#expenseList").on("click",".deleteBtn", deleteExpense)
    });