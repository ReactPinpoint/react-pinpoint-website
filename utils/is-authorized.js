const apiUrl = process.env.NODE_ENV !== 'development' ? process.env.API_URL_PROD : process.env.API_URL_DEV;

export default async function isAuthorized() {
  try {
    let res = await fetch(`${apiUrl}/api/project`, {
      method: 'GET',
      credentials: 'include',
    });
    res = await res.json();
    console.log('res is ->', res);
    return res.success;
  } catch (err) {
    console.log('Error in authorized ->', err);
  }
}
