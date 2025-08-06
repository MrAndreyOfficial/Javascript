export function saveData(key, data) {
    localStorage.setItem(key, data);
}

export function loadData(key) {
    return localStorage.getItem(key);
}
