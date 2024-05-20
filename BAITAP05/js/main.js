function more() {
    const a1 = document.querySelector(".js-more2");
    a1.addEventListener("click", (event) => {
      event.preventDefault();
      const a2 = document.getElementById("name").value;
      const b2 = document.getElementById("email").value;
      const c2 = document.getElementById("address").value;
      const d2 = document.getElementById("tel").value;
  
      let data = JSON.parse(localStorage.getItem("data")) || [];
      data.push({ a2, b2, c2, d2 });
      localStorage.setItem("data", JSON.stringify(data));
  
      document.getElementById("dataForm").reset();
      loadData();
    });
  }
  
  function loadData() {
    const a3 = JSON.parse(localStorage.getItem("data")) || [];
    const b3 = document.getElementById("dataTable").querySelector("tbody");
    b3.innerHTML = "";
  
    a3.forEach((item, i) => {
      const row = b3.insertRow();
      const c = row.insertCell(0);
      const d = row.insertCell(1);
      const e = row.insertCell(2);
      const f = row.insertCell(3);
      const g = row.insertCell(4);
      const h = row.insertCell(5);
  
      c.innerHTML = `<input type="checkbox">`;
      d.textContent = item.a2;
      e.textContent = item.b2;
      f.textContent = item.c2;
      g.textContent = item.d2;
      h.innerHTML = `
          <button onclick="editRow(${i})"><img src="img/update.svg" alt=""></button>
          <button onclick="deleteRow(${i})"><img src="img/delete.svg" alt=""></button>`;
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
    const formHTML = `
      <section class="body">
          <section class="more-del">
              <div class="grid">
                  <div class="head">
                      <button class="close"><img src="img/close.svg" alt=""></button>
                      <p>Quản lý Nhân viên</p>
                  </div>
                  <div>
                      <form action="#" id="editForm">
                          <div class="form-start">
                              <label for="edit-name">Họ và tên</label>
                              <input type="text" name="name" id="edit-name" value="${data[i].a2}">
                          </div>
                          <div class="form-start">
                              <label for="edit-email">Thư điện tử</label>
                              <input type="email" name="email" id="edit-email" value="${data[i].b2}">
                          </div>
                          <div class="form-start">
                              <label for="edit-address">Địa chỉ</label>
                              <input type="text" name="address" id="edit-address" value="${data[i].c2}">
                          </div>
                          <div class="form-start">
                              <label for="edit-tel">Số điện thoại</label>
                              <input type="tel" name="tel" id="edit-tel" value="${data[i].d2}">
                          </div>
                          <div class="form-end">
                              <button class="bg-error flex js-delete2">
                                  <img src="img/min.svg" alt="">
                                  <span>Xóa</span>
                              </button>
                              <button class="bg-success flex js-save">
                                  <img src="img/max.svg" alt="">
                                  <span>Lưu</span>
                              </button>
                          </div>
                      </form>
                  </div>
              </div>
          </section>
      </section>`;
    document.querySelector(".add").innerHTML = formHTML;
  
    document.querySelector(".close").addEventListener("click", () => {
      document.querySelector(".add").innerHTML = "";
    });
  
    document.querySelector(".js-save").addEventListener("click", (event) => {
      event.preventDefault();
      const a2 = document.getElementById("edit-name").value;
      const b2 = document.getElementById("edit-email").value;
      const c2 = document.getElementById("edit-address").value;
      const d2 = document.getElementById("edit-tel").value;
  
      data[i] = { a2, b2, c2, d2 };
      localStorage.setItem("data", JSON.stringify(data));
      loadData();
      document.querySelector(".add").innerHTML = "";
    });
  }
  
  const a = document.querySelector(".js-more");
  a.addEventListener("click", () => {
    const formHTML = `
    <section class="body">
      <section class="more-del">
          <div class="grid">
              <div class="head">
                  <button class="close"><img src="img/close.svg" alt=""></button>
                  <p>Quản lý Nhân viên</p>
              </div>
              <div>
                  <form action="#" id="dataForm">
                      <div class="form-start">
                          <label for="name">
                              Họ và tên
                          </label>
                          <input type="text" name="name" id="name" placeholder="Nguyen Van A">
                      </div>
                      <div class="form-start">
                          <label for="email">
                              Thư điện tử
                          </label>
                          <input type="email" name="email" id="email" placeholder="nguyenvana@gmail.com">
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
                              <span>Thêm nhân viên</span>
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </section>
  </section>`;
    b = formHTML;
    const c4 = document.querySelector(".add");
    c4.innerHTML = b;
    more();
    const d4 = document.querySelector(".close");
    d4.addEventListener("click", () => {
      document.querySelector(".add").innerHTML = "";
    });
  });
  
  window.onload = loadData;
  