let total=0
function insertTable(){
    const rollno=document.getElementById('inputRollno').value
    const name=document.getElementById('inputName').value
    const marks=document.getElementById('inputMarks').value
    const mobileno=document.getElementById('inputMob').value
    const email=document.getElementById('inputEmail').value
    const totalmarks=document.getElementById('totalMarks')
    const tbody=document.getElementById('tbody')
    total += parseInt(marks)
    totalmarks.innerText = total
    const row = `<tr>
    <td>${rollno}</td>
    <td>${name}</td>
    <td>${marks}</td>
    <td>${mobileno}</td>
    <td>${email}</td>
    </tr>
    `
    tbody.innerHTML += row

}