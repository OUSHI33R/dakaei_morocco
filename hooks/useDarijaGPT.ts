import { useState, useCallback } from "react";
import type { Message } from "ai";

export function useCustomChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isTrialEnded, setIsTrialEnded] = useState(false);

  const handleSubmit = useCallback(
    async (value: string) => {
      if (messages.length >= 3) {
        setIsTrialEnded(true);
        return;
      }

      setLoading(true);
      setError(null);

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("X-Api-Key", "80647655-8d0d-45fc-b519-5828cc239cd9");

      const raw = JSON.stringify({ message: value });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      try {
        const res = await fetch(
          "https://api.dakaei.com/darijagpt/",
          requestOptions
        );

        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }

        const result = await res.json();

        setMessages((prevMessages) => [
          ...prevMessages,
          { id: String(Date.now()), role: "user", content: value },
          {
            id: String(Date.now() + 1),
            role: "assistant",
            content: result.response,
          },
        ]);

        if (messages.length + 1 >= 3) {
          setIsTrialEnded(true);
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [messages]
  );

  return {
    messages,
    loading,
    error,
    isTrialEnded,
    handleSubmit,
  };
}
