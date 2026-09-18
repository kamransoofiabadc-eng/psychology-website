// =========================================
// Zahra Clinic - Main JavaScript
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    // سال فعلی برای فوتر
    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // اسکرول نرم برای لینک‌های داخلی
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });

    });


    // نمایش پیام موقت برای فرم‌ها
    const forms = document.querySelectorAll("form");

    forms.forEach(function (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            alert("درخواست شما ثبت شد. برای تکمیل رزرو، با کلینیک تماس بگیرید.");

            form.reset();

        });

    });


    // انیمیشن ورود بخش‌ها هنگام اسکرول
    const animatedElements = document.querySelectorAll(
        ".service-card, .approach-card, .contact-card, .faq-item"
    );

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });


    animatedElements.forEach(function (element) {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(element);

    });

});