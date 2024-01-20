const Modbus = require('node-modbus');
const client = Modbus.client.tcp.complete({
 'host': 'IP_của_PLC', 
 'port': 502
});

client.connect();

client.on('connect', function () {
 // Đọc hoặc ghi dữ liệu từ/đến PLC tại đây
});

client.on('error', function (e) {
 console.log('Lỗi kết nối: ', e);
});
