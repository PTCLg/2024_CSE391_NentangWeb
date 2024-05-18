let b = ``;
const a = document.querySelector(".js-more");
a.addEventListener("click", () => {
  const a = `
  <section class="body">
    <section class="more-del">
        <div class="grid">
            <div class="head">
                <button class="close"><img src="img/close.svg" alt=""></button>
                <p>Quản lý Nhân viên</p>
            </div>
            <div>
                <form action="#">
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
                        <button class="bg-error flex js-delete">
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
  b = a;
  const c = document.querySelector(".add");
  c.innerHTML = b;
  const d = document.querySelector(".close");
  d.addEventListener("click", () => {
    const close = ``;
    const a = document.querySelector(".add");
    a.innerHTML = close;
  });
});
