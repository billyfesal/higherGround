let selectedRow = null

function onFormSubmit() {
    if (validate()) {
        let formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    let formData = {};
    formData["position"] = document.getElementById("position").value;
    formData["yearsPro"] = document.getElementById("yearsPro").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["firstName"] = document.getElementById("firstName").value;
    formData["monthlySalary"] = document.getElementById("monthlySalary").value;
    formData["billedHeight"] = document.getElementById("billedHeight").value;
    formData["billedWeight"] = document.getElementById("billedWeight").value;
    formData["jerseyNo"] = document.getElementById("jerseyNo").value;
    return formData;
}

function insertNewRecord(data) {
    let table = document.getElementById("playersList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.position;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.yearsPro;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.lastName;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.firstName;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.monthlySalary;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.billedHeight;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.billedWeight;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.jerseyNo;
    cell8 = newRow.insertCell(8);
    cell8.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("position").value = "";
    document.getElementById("yearsPro").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("monthlySalary").value = "";
    document.getElementById("billedHeight").value = "";
    document.getElementById("billedWeight").value = "";
    document.getElementById("jerseyNo").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("position").value = selectedRow.cells[0].innerHTML;
    document.getElementById("yearsPro").value = selectedRow.cells[1].innerHTML;
    document.getElementById("lastName").value = selectedRow.cells[2].innerHTML;
    document.getElementById("firstName").value = selectedRow.cells[3].innerHTML;
    document.getElementById("monthlySalary").value = selectedRow.cells[4].innerHTML;
    document.getElementById("billedHeight").value = selectedRow.cells[5].innerHTML;
    document.getElementById("billedWeight").value = selectedRow.cells[6].innerHTML;
    document.getElementById("jerseyNo").value = selectedRow.cells[7].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.position;
    selectedRow.cells[1].innerHTML = formData.yearsPro;
    selectedRow.cells[2].innerHTML = formData.lastName;
    selectedRow.cells[3].innerHTML = formData.firstName;
    selectedRow.cells[4].innerHTML = formData.monthlySalary;
    selectedRow.cells[5].innerHTML = formData.billedHeight;
    selectedRow.cells[6].innerHTML = formData.billedWeight;
    selectedRow.cells[7].innerHTML = formData.jerseyNo;
}

function onDelete(td) {
    if (confirm('Are you sure you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("playersList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("lastName").value == "") {
        isValid = false;
        document.getElementById("lastNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("lastNameValidationError").classList.contains("hide"))
            document.getElementById("lastNameValidationError").classList.add("hide");
    }
    return isValid;
}



function addToLocalStorage() {
    // conver the array to string then store it.
    localStorage.setItem('playersList', JSON.stringify(playersList));
    // render them to screen
    // renderPlayersList(playersList);
}

// function helps to get everything from local storage
function getFromLocalStorage(playersList) {
    return JSON.parse(localStorage.getItem(playersList));

    //     playersList = JSON.parse(reference);
    //     renderPlayersList(playersList);
    // }
}