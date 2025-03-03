import { useEffect } from "react";
import authService from "../appwrite/auth/auth";
import { useNavigate } from "react-router-dom";


export default function useCheckAuth() {
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const user = await authService.getCurrentUser();
                if (!user) {
                    navigate("/"); // Redirect if not authenticated
                }
            } catch (error) {
                console.error("An unexpected error occurred:", error);
            } finally {
                console.log();
            }
        };

        checkAuthentication();
        return () => {
            console.clear();
        };
    }, [navigate]);
}