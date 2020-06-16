
export const render = (message) => {
    const appElement = document.getElementById('app');
    appElement.innerHTML = `<div><h1>${message}</h1></div>`;
}
