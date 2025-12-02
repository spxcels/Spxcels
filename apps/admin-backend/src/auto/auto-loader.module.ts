import { DynamicModule, Module } from "@nestjs/common";
import * as fs from "fs";
import * as path from "path";

// IMPORT THE METADATA CONTROLLER HERE
import { MetadataController } from "./metadata.controller";

@Module({})
export class AutoLoaderModule {
  static register(): DynamicModule {
    const modules: any[] = [];

    try {
      const srcAuto = path.join(process.cwd(), "src", "auto");

      if (fs.existsSync(srcAuto)) {
        const dirs = fs
          .readdirSync(srcAuto, { withFileTypes: true })
          .filter((d) => d.isDirectory())
          .map((d) => d.name);

        for (const dirName of dirs) {
          const moduleBasePath = path.join(
            srcAuto,
            dirName,
            `${dirName}.module`
          );

          const tsFile = moduleBasePath + ".ts";
          const jsFile = moduleBasePath + ".js";

          let loadedModule: any = null;

          // Try dist first (production)
          const distCompiled = path.join(
            process.cwd(),
            "dist",
            "src",
            "auto",
            dirName,
            `${dirName}.module.js`
          );

          if (fs.existsSync(distCompiled)) {
            loadedModule = require(distCompiled);
          }
          else if (fs.existsSync(jsFile)) {
            loadedModule = require(jsFile);
          }
          else if (fs.existsSync(tsFile)) {
            // Dev mode
            loadedModule = require(tsFile);
          }

          if (loadedModule) {
            const moduleClass = Object.values(loadedModule).find(
              (v) =>
                typeof v === "function" &&
                v.name &&
                v.name.endsWith("Module")
            );

            if (moduleClass) modules.push(moduleClass);
          }
        }
      }
    } catch (error) {
      console.error("AutoLoader Error:", error);
    }

    return {
      module: AutoLoaderModule,
      imports: modules,
      controllers: [
        MetadataController, // ⬅ VERY IMPORTANT
      ],
      providers: [],
      exports: [],
    };
  }
}
