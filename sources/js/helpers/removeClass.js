import { classListSupport, hasClass } from './hasClass.js';

const removeClass = classListSupport
  ? function(el, str) {
      if (hasClass(el, str)) {
        el.classList.remove(str);
      }
    }
  : function(el, str) {
      if (hasClass(el, str)) {
        el.className = el.className.replace(str, '');
      }
    };

export { removeClass };
