const baseURL = "http://localhost:3001";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

function getItems() {
  return request(`${baseURL}/items`);
}

function postItem(item) {
  return request(`${baseURL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
}

function deleteItem(itemId) {
  return request(`${baseURL}/items/${itemId}`, {
    method: "DELETE",
  });
}

export { getItems, postItem, deleteItem };
