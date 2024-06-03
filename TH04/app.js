document.addEventListener("DOMContentLoaded", () => {
  loadData();
  $(".js-more").click((event) => {
    event.preventDefault();
    more();
  });

  Validate();
});

function Validate() {
  $("form[id='dataForm']").validate({
    rules: {
      name: {
        required: true,
        maxlength: 30,
      },
      msv: {
        required: true,
        maxlength: 10,
      },
      ngaySinh: {
        required: true,
        maxlength: 10,
      },
      lop: {
        required: true,
        maxlength: 7,
      },
    },
    messages: {
      name: {
        required: "Vui lòng nhập họ và tên",
        maxlength: "Họ và tên không vượt quá 30 ký tự",
      },
      msv: {
        required: "Vui lòng nhập mã sinh viên",
        maxlength: "Mã sinh viên không vượt quá 10 ký tự",
      },
      ngaySinh: {
        required: "Vui lòng chọn ngày sinh",
        maxlength: "Ngày sinh không vượt quá 31/12/2006",
      },
      lop: {
        required: "Vui lòng nhập lớp",
        maxlength: "Lớp không vượt quá 7 ký tự",
      },
    },
    submitHandler: function (form) {
      form.submit();
    },
  });
}

function more() {
  if ($("#dataForm").valid()) {
    const a = $("#name").val();
    const b = $("#msv").val();
    const c = $("#ngaySinh").val();
    const d = $("#lop").val();

    let data = JSON.parse(localStorage.getItem("data")) || [];
    data.push({ a, b, c, d });
    localStorage.setItem("data", JSON.stringify(data));
    $("#dataForm")[0].reset();
    loadData();
  }
}

function loadData() {
  const data = JSON.parse(localStorage.getItem("data")) || [];
  const tbody = $("#dataTable tbody");
  tbody.empty();

  data.forEach((item, i) => {
    const row = $("<tr></tr>");
    row.append(`<td>${item.a}</td>`);
    row.append(`<td>${item.b}</td>`);
    row.append(`<td>${item.c}</td>`);
    row.append(`<td>${item.d}</td>`);
    row.append(`
      <td><button onclick="editRow(${i})"><img src="img/update.svg" alt=""></button></td>
      <td><button onclick="deleteRow(${i})"><img src="img/delete.svg" alt=""></button></td>
    `);
    tbody.append(row);
  });
}

function deleteRow(i) {
  let data = JSON.parse(localStorage.getItem("data")) || [];
  data.splice(i, 1);
  localStorage.setItem("data", JSON.stringify(data));
  loadData();
}

function editRow(i) {
  let data = JSON.parse(localStorage.getItem("data")) || [];
  const item = data[i];
  $("#name").val(item.a);
  $("#msv").val(item.b);
  $("#ngaySinh").val(item.c);
  $("#lop").val(item.d);

  data.splice(i, 1);
  localStorage.setItem("data", JSON.stringify(data));
  loadData();
}
