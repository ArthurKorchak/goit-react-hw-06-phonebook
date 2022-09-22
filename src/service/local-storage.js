export function addToLS(item) {
  let currentLS = JSON.parse(localStorage.getItem('contactsList'));
  currentLS = currentLS ? currentLS : [];
  currentLS.push(item);
  localStorage.setItem('contactsList', JSON.stringify(currentLS));
}

export function deleteFromLS(elemId) {
  const currentLS = JSON.parse(localStorage.getItem('contactsList')).filter(({ id }) => id !== elemId);
  localStorage.setItem('contactsList', JSON.stringify(currentLS));
}