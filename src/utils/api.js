const baseURL = "http://localhost:3001";

function getItems() {
  return fetch(`${baseURL}/items`).then((res) =>
    res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
  );
}

function postItem(item) {
  return fetch(`${baseURL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  }).then((res) =>
    res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
  );
}

function deleteItem(itemId) {
  return fetch(`${baseURL}/items/${itemId}`, {
    method: "DELETE",
  }).then((res) =>
    res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
  );
}

export { getItems, postItem, deleteItem };
