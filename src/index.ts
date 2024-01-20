// Import thư viện express vào ứng dụng
import express from 'express';

// Tạo một ứng dụng Express
const app = express();

// Đặt cổng cho ứng dụng, ở đây là cổng 3000
const port = 3000;

// Xử lý yêu cầu bằng hàm get() đến đường dẫn chính ('/') của ứng dụng
app.get('/', (req, res) => {
    // Gửi phản hồi 'hello world' về cho người dùng khi truy cập đường dẫn chính
    res.send('hello world');
});

// Dùng hàm Listen() trên cổng được đặt trước đó và thực hiện một hàm callback khi server bắt đầu lắng nghe
app.listen(port, () => {
    // Hiển thị thông báo trên console khi server bắt đầu listen
    console.log(`Example app listening on port ${port}`);
});

