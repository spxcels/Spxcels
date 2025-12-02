export function validateDbUrl(url: string): boolean {
  try {
    const parsed = new URL(url);

    const allowedProtocols = ["postgresql:", "mysql:", "mongodb+srv:"];

    return allowedProtocols.includes(parsed.protocol);
  } catch {
    return false;
  }
}
