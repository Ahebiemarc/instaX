import { LoginForm } from "../Types";

const BASE_URL = 'https://instax-backend.onrender.com'

export const checkInfo = async (data: LoginForm) => {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/auth/check-account`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Erreur lors de l\'enregistrement');
      }
  
      return await response.json(); // Retourne les données de réponse
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  