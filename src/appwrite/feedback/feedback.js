import { Client, Databases, ID } from 'appwrite';

const client = new Client();
export const database = new Databases(client);

client
    .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const saveUserFeedback = async (Name, Email, Address, Description) => {
    try {
        // Build the document payload, omitting email if it's empty
        const feedbackData = {
            Name,
            Address,
            Description,
        };

        if (Email) {
            feedbackData.email = Email;  // Add email only if it's not empty
        }

        const result = await database.createDocument(
            import.meta.env.VITE_APPWRITE_DATABASE_ID, import.meta.env.VITE_APPWRITE_COLLECTION_ID_USERFEEDBACK, ID.unique(),
            feedbackData
        );
        console.log('Feedback saved successfully:', result);
    } catch (error) {
        console.error('Failed to save feedback:', error);
    }
};
