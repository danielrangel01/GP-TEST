export const setLocalStorage = (key: string, value: string | number) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};
