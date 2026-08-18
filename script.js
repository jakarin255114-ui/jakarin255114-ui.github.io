// เพิ่ม JavaScript สำหรับการโต้ตอบกับผู้ใช้ (Optional)
document.addEventlistener('DOMContentLoaded',function () {
    document.getElementById('year').innerHTML = new Date().getFullYear();
    console.log('Portfolio ของ Jakarin พร้มอแล้ว!');
});
