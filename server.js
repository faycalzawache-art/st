// تثبيت المكتبات أولا:
// npm init -y
// npm install express cors

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

// API يعيد بيانات بسيطة
app.get("/api/info", (req, res) => {
  res.json({
    message: "أهلا بك في الخادم 🚀",
    date: new Date().toLocaleString("ar-EG"),
    user: {
      name: "زائر",
      role: "مستخدم تجريبي",
    },
    stats: {
      visitors: 125,
      uptime: process.uptime().toFixed(0) + " ثانية"
    }
  });
});

app.listen(PORT, () => {
  console.log(`الخادم يعمل على http://localhost:${PORT}`);
});
