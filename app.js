$(document).ready(onReady);

const employeeList = [];
let monthly = 12;
let wallet = 20000;

function onReady() {
  $('#js-form-addEmployee').on('submit', addEmployee);
  $('#js-table-body').on('click', '.js-btn-delete', deleteRow);
  $('#js-table-body').on('click', '.js-btn-delete', deleteSlaray);

  render();
}

function addEmployee(event) {
  event.preventDefault();

  const employee = {
    first: $('#js-input-firstName').val(),
    last: $('#js-input-lastName').val(),
    ID: $('#js-input-IDnum').val(),
    title: $('#js-input-employeeTitle').val(),
    salary: $('#js-input-salary').val(),
  };

  employee.salary = parseFloat(employee.salary);

  $('#js-input-firstName').val(''),
    $('#js-input-lastName').val(''),
    $('#js-input-IDnum').val(''),
    $('#js-input-employeeTitle').val(''),
    $('#js-input-salary').val(''),
    employeeList.push(employee);
  console.table(employeeList);
  render();
}

function deleteRow() {
  $(this).parent().parent().remove();
}

function deleteSlaray() {
  $(this).remove;
}

function render() {
  $('#js-table-body').empty();

  let total = 0;

  for (let employee of employeeList) {
    total += employee.salary;

    $('#js-table-body').append(`
    <tr>
            <td>${employee.first}</td>
            <td>${employee.last}</td>
            <td>${employee.ID}</td>
            <td>${employee.title}</td>
            <td>${employee.salary}</td>
            <td><button class="js-btn-delete">X</button></td>
          </tr>`);
  }

  if (total > wallet) {
    $('#js-total').addClass('redText');
  } else {
    $('#js-total').removeClass('redText');
  }

  $('#js-total').text(`Total Monthly: $${total.toFixed(2)}`);
}
