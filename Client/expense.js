function handleFormSubmit(event)
{
    event.preventDefault();
    let expense={
        amount:event.target.amount.value,
        description:event.target.description.value,
        category:event.target.category.value,
    }

    console.log(expense);
    axios.post("http://localhost:3000/expense",expense).then((res)=>{
        console.log(res);
        getExpenses();
        if(res.status===201){
            alert(res.data.message);
        }
    })

}
window.addEventListener("DOMContentLoaded", getExpenses)

function getExpenses(){
axios.get("http://localhost:3000/expense").then((res)=>{
    const ul=document.querySelector("ul");
    ul.innerHTML="";
     res.data.forEach((element) => {
        console.log(element)
        showExpenses(element)
     });
    })
}


function showExpenses(expenses){
    const li=`<li id=exp${expenses.id}>${expenses.amount}--${expenses.description}--${expenses.category}--<button  onclick="delExpense('${expenses.id}')">Delete</button>----<button  onclick="editExpense('${expenses.id}','${expenses.amount}','${expenses.description}','${expenses.category}')">Edit</button></li>`;
    const ul=document.getElementById("ulList");
    ul.innerHTML+=li;
}

function editExpense(id,amount,description,category){

inputAmount=document.querySelector("#exp_amt");
inputDescription=document.querySelector("#exp_des");
inputCategory=document.querySelector("#exp_cat");

inputAmount.value=amount;
inputCategory.value=category;
inputDescription.value=description;

const ul=document.getElementById("ulList");
console.log(ul);
const liToDel=document.getElementById(`exp${id}`);
//  const liToDel=event.target.parentElement;

console.log(liToDel);
ul.removeChild(liToDel);

axios.delete(`http://localhost:3000/expense/${id}`)
}

function delExpense(id) {
  
const ul=document.getElementById("ulList");
const liToDel=document.getElementById(`exp${id}`);
ul.removeChild(liToDel);
axios.delete(`http://localhost:3000/expense/${id}`)
}