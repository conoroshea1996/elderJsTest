export const clickOutside = (node, action) => {
  function handleOutsideClick(e) {
    const targetElement = e.target;
    if (node && !node.contains(targetElement)) {
      action();
    }
  }

  // wait a second to mount the dom node
  setTimeout(() => {
    window.addEventListener('click', handleOutsideClick);
  }, 300);

  return {
    destroy() {
      window.removeEventListener('click', handleOutsideClick);
    },
  };
};
