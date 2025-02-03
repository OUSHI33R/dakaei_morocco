"use server";

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email");

  // Simulate saving to a database
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // In a real application, you'd want to add error handling and actually save the email
  console.log(`Subscribed email: ${email}`);

  return { success: true };
}
