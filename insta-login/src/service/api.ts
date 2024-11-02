import { LoginForm } from "../Types";


export const checkInfo = async (data: LoginForm) => {
    try {
      const response = await fetch(' http://127.0.0.1:5000/api/v1/auth/check-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Error while verifying.');
      }
  
      return await response.json(); // Retourne les données de réponse
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  