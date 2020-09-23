import Button from '../../components/button';

function handleSubmit(e) {
  e.preventDefault();
  fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data && data.error) {
        setSignupError(data.message);
      }

      if (data && data.token) {
        //set cookie
        cookie.set('token', data.token, { expires: 2 });
        Router.push('/');
      }
    });
}

export default function SignUp() {
  return (
    <div className="min-h-screen bg-warmgrey-100">
      <h1 className="text-center">Sign Up</h1>
    </div>
  );
}
