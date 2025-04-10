// api/searchUsers.js
const API_URL = 'https://rocketapi-for-developers.p.rapidapi.com/instagram/user/search';
const API_KEY = 'ba3b2a31d6msh094e26bf4ff14e3p11530fjsnefda12dbfccc';

export const searchUsers = async (searchString) => {
    console.log("🔍 API call initiated with searchString:", searchString);

    try {
        const options = {
            method: 'POST',
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'rocketapi-for-developers.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: searchString })
        };

        const response = await fetch(API_URL, options);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        //console.log("📦 Full raw response:", JSON.stringify(data, null, 2));

        // Update the path to extract users correctly
        const rawUsers = data?.response?.body?.users || [];
        console.log("rawUsers:", rawUsers);  // Check if users array is populated


        // Map the users to return only the essential fields
        const cleanedUsers = rawUsers.map((user) => ({
            username: user.username || '',
            fullname: user.full_name || '',
            profile_pic_url: user.profile_pic_url || '',
            is_private: user.is_private || false,
            is_verified: user.is_verified || false,
        }));
        console.log("✅ Cleaned users for UI:", cleanedUsers);

        return cleanedUsers;

    } catch (error) {
        console.error('❌ Error searching users:', error);
        return []; // Return empty array to prevent app crash
    }
};
