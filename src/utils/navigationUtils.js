const disableBackButton = () => {
  window.history.pushState(null, null, window.location.pathname);
};

const enableBackButton = () => {
  window.removeEventListener('popstate', disableBackButton);
};

export { disableBackButton, enableBackButton };
