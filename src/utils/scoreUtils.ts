export const calculateScore = (timeLeft: number): number => {
    const timeTaken = 10 - timeLeft; // Temps pris pour répondre (en secondes)
    return Math.max(50 - timeTaken * 5, 0); // Score max = 50, déduction en fonction du temps
};
