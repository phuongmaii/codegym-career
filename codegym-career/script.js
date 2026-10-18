
$(document).ready(function () {
    // Đóng menu trên điện thoại sau khi nhấn vào một mục.
    $(".navbar-nav .nav-link, .navbar-nav .btn-register").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Xử lý biểu mẫu đăng ký minh họa.
    $("#registrationForm").on("submit", function (event) {
        event.preventDefault();

        const fullName = $("#fullName").val().trim();
        const message = $("#formMessage");

        if (!fullName) {
            message
                .text("Vui lòng nhập họ và tên.")
                .css("color", "#dc3545");
            return;
        }

        message
            .text("Cảm ơn " + fullName + "! Biểu mẫu minh họa đã được gửi thành công.")
            .css("color", "#198754");

        this.reset();
    });
});
