const extractJson = async (text) => {
    if (!text || typeof text !== "string") {
        throw new Error("AI response is empty or invalid");
    }

    const cleaned = text
        .replace(/```json/gi, "")
        .replace(/```/g, "")
        .trim();

    const firstBrace = cleaned.indexOf("{");
    const closeBrace = cleaned.lastIndexOf("}");

    if (firstBrace === -1 || closeBrace === -1) {
        throw new Error("AI response does not contain a complete JSON object");
    }

    const jsonString = cleaned.slice(firstBrace, closeBrace + 1);

    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("JSON parsing failed:", error.message);
        console.error("AI response length:", cleaned.length);
        console.error("AI response ending:", cleaned.slice(-300));

        throw new Error(
            "AI returned incomplete or invalid JSON. Please try a shorter prompt."
        );
    }
};

export default extractJson;