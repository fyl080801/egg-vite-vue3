import axios from '@/utils/axios';

export const validUsername = async (value: string) => {
  axios.get('/api/account/user', { params: { username: value } });
};

export const validUser = (username: string, password: string) => {
  // return await axios.post('/api/account/login', { username, password });
  const form = document.createElement('form');
  form.action = '/api/account/login';
  const user = document.createElement('input');
  user.value = username;
  user.type = 'hidden';
  form.appendChild(user);

  const pass = document.createElement('input');
  pass.value = password;
  pass.type = 'hidden';
  form.appendChild(pass);

  document.body.appendChild(form);

  form.submit();
};
