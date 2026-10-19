# Chuyển CSS sang SCSS

SCSS nguồn được chia theo vai trò trong `scss/abstracts`, `scss/base`, `scss/layout` và `scss/components`. `scss/main.scss` là entry point; các partial được nạp bằng `@use` để tránh `@import` đã lỗi thời.

Biên dịch từ thư mục gốc:

```sh
sass scss/main.scss css/main.css
```

Theo dõi khi chỉnh sửa:

```sh
sass --watch scss/main.scss:css/main.css
```

Mở `sass-practice.html` để xem mẫu SASS CLI trước đó; bản CSS của bài chuyển đổi được tạo riêng tại `css/main.css`.
