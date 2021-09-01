const icons = {
    success: 'fas fa-check-circle',
    info: 'fas fa-info-circle',
    warning: 'fas fa-exclamation-circle',
    error: 'fas fa-exclamation-circle'
};
// Toast function
function toast({title, msg, type, duration}) {
    const main = document.getElementById('toast');
    if(main) {
        const toast = document.createElement('div');

        // Auto remove toast
        const autoRm = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000);

        // Remove toast when click
        toast.onclick = function(e) {
            if(e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRm);
            }
        }

        const delay = (duration / 1000).toFixed(2);

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideLtR ease 0.5s, fadeOut linear 1s ${delay}s forwards`;
        const icon = icons[type];

        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${msg}</p>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>
        `;
        main.appendChild(toast);
    }
}

function showSuccessToast() {
    toast({
        title: 'Thành công!',
        msg: 'Bạn đã đăng ký thành công tài khoản tại F8.',
        type: 'success',
        duration: 3000
    });
}

function showErrorToast() {
    toast({
        title: 'Lỗi!',
        msg: 'Có lỗi xảy ra, vui lòng kiểm tra lại.',
        type: 'error',
        duration: 3000
    });
}
