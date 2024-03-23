const getItemsLS = () => {
  const storedItems = localStorage.getItem("job-application");

  if (storedItems) {
    return JSON.parse(storedItems);
  }
  return [];
};

const setItemLS = (id) => {
  const application = getItemsLS();

  const isExist = application.find((appId) => appId === id);

  if (!isExist) {
    application.push(id);
    localStorage.setItem("job-application", JSON.stringify(application));
  }
};

export { getItemsLS, setItemLS };
