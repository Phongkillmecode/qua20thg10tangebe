// Chạy: node gen-music-list.js
// Quét thư mục ./music và ghi danh sách bài vào music/list.json để trang tự hiện trong thanh chọn nhạc.
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'music');
const ext = /\.(mp3|m4a|wav|ogg|aac|flac|opus)$/i;

fs.mkdirSync(dir, { recursive: true });
const files = fs.readdirSync(dir)
  .filter(f => ext.test(f))
  .sort((a, b) => a.localeCompare(b, 'vi', { numeric: true }));
fs.writeFileSync(path.join(dir, 'list.json'), JSON.stringify(files, null, 2));
console.log('music/list.json: ' + files.length + ' bài');
