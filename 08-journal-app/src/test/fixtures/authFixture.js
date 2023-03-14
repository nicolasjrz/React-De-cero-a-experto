export const initialState = {
  status: "checking", /// 'not-authenticated' , 'authenticated'
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authenticatedState = {
  status: "authenticated", /// 'not-authenticated' , 'authenticated'
  uid: "1234abc",
  email: "test@gmail.com",
  displayName: "test user",
  photoURL: "htttps://foto.jpg",
  errorMessage: null,
};

export const notAuthenticatedState = {
  status: "not-authenticated", /// 'not-authenticated' , 'authenticated'
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const demoUser = {
  uid: "1234abc",
  email: "test@gmail.com",
  displayName: "test user",
  photoURL: "htttps://foto.jpg",
};
