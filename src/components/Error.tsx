interface ErrorPage {
  error: string;
}

export function Error({ error }: ErrorPage) {
  return <p className="text-center text-red-600">{error}</p>;
}
