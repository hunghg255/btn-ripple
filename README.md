# R.Touch
Thư viện hỗ trợ tạo hiệu ứng sóng nước cho các phần tử được click trong HTML. 


## Live Demo
Bạn có thể thử nghiệm hiệu ứng sóng nước 

## Installation
Bạn cần dẫn đủ **02** file thư viện của chúng tôi vào file HTML của bạn.

File thứ 1: `btnRipple.css` hoặc `btnRipple.min.css`

File thứ 2: `btnRipple.js` hoặc `btnRipple.min.js`

### Sử dụng CDN
Nếu bạn không thích Download thư viện, bạn có thể sử dụng CDN để thay thế.

**CSS CDN**

`<link rel="stylesheet" href="https://cdn.rawgit.com/lmint3010/R.Touch/d4a0c981/rTouch.css">`

**JS CDN**

`<script src="https://cdn.rawgit.com/lmint3010/R.Touch/e64fcf28/rTouch.js"></script>`

hoặc

`<script src="https://cdn.rawgit.com/lmint3010/R.Touch/e64fcf28/rTouch.min.js"></script>`

## Hướng dẫn sử dụng
Các phần tử có thể được áp dụng sự kiện `click` đều có thể áp dụng hiệu ứng sóng nước.

Chỉ cần thêm **class** `.ripple` vào phần tử muốn sử dụng hiệu ứng sóng nước.

Ví dụ: `<button class="ripple">Click Me</button>`

Các phần tử có thể được áp dụng sự kiện `mousemove` đều có thể áp dụng hiệu ứng sóng nước.

Chỉ cần thêm **class** `.ripple` vào phần tử muốn sử dụng hiệu ứng sóng nước.

Ví dụ: `<button class="ripple-mousemove">Mouse move</button>`

### Thay đổi màu sắc của sóng nước

Bạn có thể chủ động thay đổi màu sắc của sóng nước bằng cách thêm thuộc tính `ripple-color` kèm theo giá trị màu.

Ví dụ: `<button class="ripple" ripple-color="#fff">Click Me</button>`

**Đây là sản phẩm mang tính chất học tập được viết bởi thành viên của cộng đồng [Coders.tokyo](https://coders.tokyo)**
