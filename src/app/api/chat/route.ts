import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required and should be a string." });
    }

    // Call the Gemini API
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDVH5YnraC-qrbFEN4ua-c2b_rFSw1M8IU", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: message,  // The user's message is sent as the prompt
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Gemini API error: ${errorData.error}`);
    }

    const data = await response.json();

    // Make sure the response contains the expected format
    if (data?.candidates && data.candidates.length > 0) {
      const generatedContent = data.candidates[0].content.parts[0].text;
      return res.status(200).json({ response: generatedContent });
    } else {
      return res.status(500).json({ error: "Unexpected response format from Gemini API" });
    }
  } catch (error) {
    // Catch and handle unexpected errors
    console.error("Error communicating with Gemini API:", error instanceof Error ? error.message : error);
    return res.status(500).json({ error: error instanceof Error ? error.message : "An unknown error occurred." });
  }
}
