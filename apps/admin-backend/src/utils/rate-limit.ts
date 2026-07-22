export async function rateLimit(ms: number = 3000): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}