export const getGithubRepos = async () => {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch repositories');
        }
        const repos = await response.json(); // Perhatikan tanda kurung setelah json
        return repos;
    } catch (error) {
        console.error('Error fetching repos:', error);
        return []; // Return array kosong jika error
    }
};