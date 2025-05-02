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
  const token = localStorage.getItem("jwt");

  return request(`${baseURL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(item),
  });
}

function deleteItem(itemId) {
  const token = localStorage.getItem("jwt");

  return request(`${baseURL}/items/${itemId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

function addCardLike(itemId, token) {
  return request(`${baseURL}/items/${itemId}/likes`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

function removeCardLike(itemId, token) {
  return request(`${baseURL}/items/${itemId}/likes`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

function updateUserInfo({ name, avatar }) {
  const token = localStorage.getItem("jwt");

  return request(`${baseURL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  });
}

export {
  getItems,
  postItem,
  deleteItem,
  updateUserInfo,
  addCardLike,
  removeCardLike,
};
