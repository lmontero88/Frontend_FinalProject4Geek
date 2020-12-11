import { API_URL, TOKEN_KEY } from "../utils/constants";
import jwtDecode from "jwt-decode";

export function login(loginData) {
  const url = `${API_URL}/auth/login`;

  const data = {
    ...loginData,
    email: loginData.email.toLowerCase()
  };

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    });
}

function isExpired(token) {
  const { exp } = jwtDecode(token);
  const expire = exp * 1000;
  const timeout = expire - Date.now();

  if (timeout < 0) {
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

export function getUser() {
  const token = localStorage.getItem(TOKEN_KEY);

  if (!token) {
    logout();
    return null;
  }
  if (isExpired(token)) {
    logout();
  }
  const decode_token = jwtDecode(token);
  return decode_token;
}

export function registerUser(registerData) {
  const url = `${API_URL}/users`;

  const data = {
    ...registerData,
    email: registerData.email.toLowerCase()
  };

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    });
}

export function getUserData() {
  const url = `${API_URL}/users`;

  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    });
}

export function editProfile(userData) {
  const url = `${API_URL}/edit`;

  const data = {
    ...userData,
  };

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    });
}