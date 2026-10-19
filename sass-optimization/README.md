# SASS variables và mixins

SCSS được chia thành `abstracts`, `base` và `components`. Các biến giao diện nằm trong `scss/abstracts/_variables.scss`; mixins tái sử dụng nằm trong `scss/abstracts/_mixins.scss`.

Từ thư mục gốc của repository, biên dịch bằng:

```sh
sass sass-optimization/scss/main.scss sass-optimization/css/main.css
```

Mở `sass-optimization/index.html` để xem kết quả. Khi cần đổi màu, cỡ chữ, padding hoặc shadow, chỉnh các biến trong `_variables.scss`.
