function validate() {
  $(function () {
    $("form[id='dataForm']").validate({
      rules: {
        name: "required",
        email: {
          required: true,
          email: true,
        },
        address: {
          required: true,
        },
        tel: {
          required: true,
          minlength: 10,
          maxlength: 12,
        },
      },
      messages: {
        name: "Please enter your name",
        email: "Please enter a valid email address",
        tel: {
          required: "Please enter your telephone number",
          minlength: "Your telephone number must be at least 10 characters",
          maxlength: "Your telephone number must not exceed 12 characters",
        },
      },
      submitHandler: function (form) {
        form.submit();
      },
    });
  });
}

function more() {
  validate();
  $(".js-more2").click((event) => {
    event.preventDefault();
    if ($("form[id='dataForm']").valid()) {
      const a2 = $("#name").val();
      const b2 = $("#email").val();
      const c2 = $("#address").val();
      const d2 = $("#tel").val();

      let data = JSON.parse(localStorage.getItem("data")) || [];
      data.push({ a2, b2, c2, d2 });
      localStorage.setItem("data", JSON.stringify(data));
      $("#dataForm")[0].reset();
      loadData();
    } else {
      $(".more-del").css("height", "455px");
      $(".form-end").css("margin-top", "15px");
    }
  });
}

function loadData() {
  const data = JSON.parse(localStorage.getItem("data")) || [];
  const tbody = $("#dataTable tbody");
  tbody.empty();

  data.forEach((item, i) => {
    const row = $("<tr></tr>");
    row.append(`<td><input type="checkbox"></td>`);
    row.append(`<td>${item.a2}</td>`);
    row.append(`<td>${item.b2}</td>`);
    row.append(`<td>${item.c2}</td>`);
    row.append(`<td>${item.d2}</td>`);
    row.append(`
      <td>
        <button onclick="editRow(${i})"><img src="img/update.svg" alt="Edit"></button>
        <button onclick="deleteRow(${i})"><img src="img/delete.svg" alt="Delete"></button>
      </td>
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

function frmHTML(editMode = false, i = null) {
  const formHTML = `
  <section class="body">
  <section class="more-del">
      <div class="grid">
          <div class="head">
              <button class="close"><img src="img/close.svg" alt=""></button>
              <p>Quản lý Nhân viên</p>
          </div>
          <div>
              <form action="#" id="dataForm" name="dataForm">
                  <div class="form-start">
                      <label for="name">
                          Họ và tên
                      </label>
                      <input type="text" name="name" id="name" placeholder="Nguyen Van A" required>
                  </div>
                  <div class="form-start">
                      <label for="email">
                          Thư điện tử
                      </label>
                      <input type="email" name="email" id="email" placeholder="nguyenvana@gmail.com" required>
                  </div>
                  <div class="form-start">
                      <label for="address">
                          Địa chỉ
                      </label>
                      <input type="text" name="address" id="address" placeholder="Hà Nội, Việt Nam">
                  </div>
                  <div class="form-start">
                      <label for="tel">
                          Số điện thoại
                      </label>
                      <input type="tel" name="tel" id="tel" placeholder="012-345-6789">
                  </div>

                  <div class="form-end">
                      <button class="bg-error flex js-delete2">
                          <img src="img/min.svg" alt="">
                          <span>Xóa</span>
                      </button>
                      <button class="bg-success flex js-more2">
                          <img src="img/max.svg" alt="">
                          <span>${editMode ? "Lưu" : "Thêm nhân viên"}</span>
                      </button>
                  </div>
              </form>
          </div>
      </div>
  </section>
</section>
`;
  $(".add").html(formHTML);

  if (editMode && i !== null) {
    const data = JSON.parse(localStorage.getItem("data")) || [];

    $("#name").val(data[i].a2);
    $("#email").val(data[i].b2);
    $("#address").val(data[i].c2);
    $("#tel").val(data[i].d2);
    $(".js-more2").click((event) => {
      event.preventDefault();
      data[i].a2 = $("#name").val();
      data[i].b2 = $("#email").val();
      data[i].c2 = $("#address").val();
      data[i].d2 = $("#tel").val();
      localStorage.setItem("data", JSON.stringify(data));
      loadData();
      $(".add").html("");
    });
  } else {
    more();
  }

  $(".close").click(() => {
    $(".add").html("");
  });
}

function editRow(i) {
  frmHTML(true, i);
}

$(".js-more").click(frmHTML);

window.onload = loadData;
