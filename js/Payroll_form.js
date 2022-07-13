//Salary Range

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () {
output.textContent = salary.value; });



//UC-2 New Payroll Form - Add EventListeners

window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if(name.value.length == 0) {
            textError.textContent = " ";
            return;
        }
        try {
            ( new EmployeePayrollData()).name = name.value;;
            textError.textContent = "";
        }
        catch (e) {
            textError.textContent = e;
        }
    });

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function(){
        output.textContent = salary.value;
    });
});


//UC3 - Create Employee payroll Object On Save.

const save = () => {
    try {
        let employeePayrollData = createEmployeePayroll();
    } 
    catch (e) {
        return;
    }
}

function createAndUpdateStorage(employeePayrollData) {                                               // 

    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));              //
                           
    if(employeePayrollList !=undefined) {                                                          
        employeePayrollList.push(employeePayrollData);                                             ///UC-4  Save Employee payroll Object to local Storage
    }
    else {                                                                                           
        employeePayrollList = [employeePayrollData]
    }                                                                                              //
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify("employeePayrollList"))             //
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try{
        employeePayrollData.name = getInputValueById('#name');
    }
    catch(e) {
        setTextValue('.text-error',e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]').pop();
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+ getInputValueById('#year');               
    employeePayrollData.startDate = Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getInputValueById = (id) =>{
    let value = document.querySelector(id).value;
    return value;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItem = [];
    allItems.forEach(item => {
        if(item.checked){
            selItem.push(item.value);
        }
    });
    return selItem;
}

/*
* 1: querySelector is the newer feature.
* 2: The querySelector method can be used when selecting by element name,
*    nesting, or class name.
* 3: querySelector lets you find elements with rules that can't be
*    expressed with getElemetById
*/

const getElemetById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

/*
* 1: getElementId is better supported than querySelector in older versions
* of the browsers.
* 2: The thing with getElementId is that it only allows to select an
* element by its id.
*/

const getSelectedValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}


//UC-4  Save Employee payroll Object to local Storage

footer








                                    













