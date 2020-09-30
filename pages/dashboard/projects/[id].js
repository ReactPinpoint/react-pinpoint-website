import { useRouter } from 'next/router';

export default function Project() {
  const router = useRouter();
  const { id } = router.query;
  return <h1>This is project {id}</h1>;
}
