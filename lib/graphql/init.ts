const wordpressUrl = process.env.WORDPRESS_URL as string;

export const fetchGraphql = async (query: string, variable?: any) => {
  const response = await fetch(wordpressUrl, {
    method: "POST",
    body: JSON.stringify({ query, variables: variable }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
