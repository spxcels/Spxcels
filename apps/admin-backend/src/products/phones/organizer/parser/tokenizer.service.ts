import { Injectable } from "@nestjs/common";

@Injectable()
export class TokenizerService {
  tokenize(raw: string): string[] {
    return raw
      .replace(/\r\n/g, "\n")
      .replace(/\r/g, "\n")
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
  }
}