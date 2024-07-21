const endpoint = process.env.BACKEND_URL as string;

export const fetchGraphql = async (query: string, variables?: any) => {
    const data = await fetch(endpoint, {
        headers: {
            "Content-Type": "application/json",

        },
        method: "POST",
        body: JSON.stringify({
            query: query,
            variables: variables
        }),
    });
    if (!data.ok) {

        throw new Error("Failed to fetch API");
    }

    const response = await data.json();

    return response?.data;
};