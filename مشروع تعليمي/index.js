document.addEventListener('DOMContentLoaded', () => {
    // اختيار عنصر رسالة الترحيب
    const welcomeMessage = document.querySelector('.welcome-message');

    // التأكد من وجود العنصر
    if (welcomeMessage) {
        // إضافة فئة (كلاس) لبدء الحركة بعد تحميل الصفحة
        // هذه الفئة سيتم تعريفها في CSS
        welcomeMessage.classList.add('animate-in');
    }

    // *** يمكن إضافة أي تفاعلات أخرى هنا لاحقاً ***
});