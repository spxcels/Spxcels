import { Injectable } from "@nestjs/common";

export interface ParsedSectionBoundary {
  title: string;

  start: number;

  end: number;
}

@Injectable()
export class SectionParser {
  private readonly sections = [
    "Versions",
    "Network",
    "Launch",
    "Body",
    "Display",
    "Platform",
    "Memory",
    "Main Camera",
    "Selfie camera",
    "Sound",
    "Comms",
    "Features",
    "Battery",
    "Misc",
    "Our Tests",
    "Performance",
    "EU LABEL",
  ];

  parse(
    lines: string[],
  ): ParsedSectionBoundary[] {
    const result: ParsedSectionBoundary[] =
      [];

    for (
      let i = 0;
      i < lines.length;
      i++
    ) {
      const line = lines[i].trim();

      if (
        !this.sections.includes(line)
      ) {
        continue;
      }

      result.push({
        title: line,
        start: i,
        end: lines.length - 1,
      });
    }

    /**
     * calculate end index
     */

    for (
      let i = 0;
      i < result.length - 1;
      i++
    ) {
      result[i].end =
        result[i + 1].start - 1;
    }

    return result;
  }
}