// main.js - المتحكم في التنقل والألوان
function switchTab(tabId, element) {
    // 1. إخفاء جميع الأقسام (sections)
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.style.display = 'none';
        content.classList.remove('active');
    });

    // 2. إظهار القسم المطلوب
    const targetContent = document.getElementById('content-' + tabId);
    if (targetContent) {
        targetContent.style.display = 'block';
        setTimeout(() => targetContent.classList.add('active'), 10);
    }

    // 3. تحديث ألوان أيقونات الفوتر
    const footerItems = document.querySelectorAll('.footer-item');
    footerItems.forEach(item => item.classList.remove('active'));

    // لو الضغط تم من الفوتر مباشرة
    if (element) {
        element.classList.add('active');
    } else {
        // لو الضغط تم من زر خارجي (مثل أزرار الذهب/الفضة فوق)
        const activeFooterItem = document.querySelector(`.footer-item[onclick*="'${tabId}'"]`);
        if (activeFooterItem) activeFooterItem.classList.add('active');
    }
}