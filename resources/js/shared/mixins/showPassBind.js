export default {
  methods: {
    bindPassInpuntsAndAddBlock() {
      let passwordsBlock = document.querySelectorAll('[type="password"]');

      if (passwordsBlock.length != 0) {
        passwordsBlock.forEach(block => {
          let i = document.createElement('i');
          i.classList.add('fa', 'fa-fw', 'fa-eye', 'every-pass');
          block.parentNode.append(i);
          i.addEventListener('click', function (e) {
            let input = i.parentNode.querySelector('input');
            let attr = input.getAttribute('type');
            if (attr == 'password') {
              input.setAttribute('type', 'text');
              i.classList.remove('fa-eye');
              i.classList.add('fa-eye-slash');

            }
            if (attr == 'text') {
              input.setAttribute('type', 'password');
              i.classList.remove('fa-eye-slash');
              i.classList.add('fa-eye');
            }
          });
        });
      }
    }
  }
};