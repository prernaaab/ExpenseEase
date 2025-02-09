import { Client, Account, ID } from "appwrite";

// Initialize Appwrite client and account
const client = new Client();
const account = new Account(client);

client
    .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

// Function to create an account
const createAccount = async ({ name, email, password }) => {
    try {
        const userAccount = await account.create(ID.unique(), email, password, name);
        if (userAccount) {
            return login({ email, password });
        }
    } catch (error) {
        throw error;
    }
};

// Function to log in a user
const login = async ({ email, password }) => {
    try {
        return await account.createEmailPasswordSession(email, password);
    } catch (error) {
        throw error;
    }
};

// Function to get the current user
const getCurrentUser = async () => {
    // console.log(await account.get());
    try {
        return await account.get();
    } catch (error) {
        // console.log("Appwrite service :: getCurrentUser :: error", error);
    }
    return null;
};

// Function to log out a user
const logout = async () => {
    try {
        await account.deleteSessions();
    } catch (error) {
        console.log("Appwrite service :: logout :: error", error);
    }
};

const authService = {
    createAccount,
    login,
    getCurrentUser,
    logout,
};

export default authService;
