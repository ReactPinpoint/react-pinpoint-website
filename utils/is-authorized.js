const apiUrl = process.env.NODE_ENV !== 'development' ? process.env.API_URL_PROD : process.env.API_URL_DEV;

export default async function isAuthorized() {
  try {
    let res = await fetch(`${apiUrl}/api/auth`, {
      method: 'GET',
      credentials: 'include',
    });
    res = await res.json();
    return res;
  } catch (err) {
    return err;
  }
}
