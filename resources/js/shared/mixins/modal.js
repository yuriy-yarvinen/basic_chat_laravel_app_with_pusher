export default {
    methods: {
        stopBodyScroll(eventName) {
            if (eventName === 'mouseover') {
                document.body.style.overflow = 'hidden';
                document.body.style.paddingRight = '15px';
            }
            if (eventName === 'mouseout') {
                document.body.style.overflow = '';
                document.body.style.paddingRight = '';
            }
        },
        bindModal(modalId, buttonId) {

            const modal = document.querySelector(modalId);
            const button = document.querySelector(buttonId);
            const that = this;

            button.addEventListener('click', function (e) {
                that.toggleModals(modalId);
                that.toggleArrow(modal);
            });
        },
        toggleModals(id = null) {
            const modals = document.querySelectorAll('.every-modal');
            if (id) {
                id = id.replace(/#/g, '');
            }
            if (modals.length != 0) {
                [...modals].forEach(modal => {
                    if (!id || modal.id != id) {
                        if (modal.classList.contains('show')) {
                            modal.classList.remove('show');
                            modal.classList.add('hide');
                        }
                    }
                    else {
                        if (modal.id == id) {
                            if (modal.classList.contains('hide')) {
                                modal.classList.remove('hide');
                                modal.classList.add('show');
                            }
                            else if (modal.classList.contains('show')) {
                                modal.classList.remove('show');
                                modal.classList.add('hide');
                            }
                        }
                        else {
                            if (modal.classList.contains('show')) {
                                modal.classList.remove('show');
                                modal.classList.add('hide');
                            }
                        }
                    }
                });
            }
        },
        toggleArrow(modal) {
            const arrow = document.querySelector('.every-arrow');
            if (arrow) {
                if (modal.classList.contains('hide')) {
                    arrow.classList.remove('up');
                    arrow.classList.add('down');
                }
                else if (modal.classList.contains('show')) {
                    arrow.classList.remove('down');
                    arrow.classList.add('up');
                }
            }

        }
    }
};