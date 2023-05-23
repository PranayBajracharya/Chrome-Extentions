const changeURL = () => {
  const url = window.location.href;
  const newUrl = url.replace("shorts/", "watch?v=");
  window.location.href = newUrl;
};

changeURL();
