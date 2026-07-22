import { Module } from "@nestjs/common";

import { ModelsModule } from "../products/phones/models/models.module";

import { SearchController } from "./search.controller";
import { SearchService } from "./search.service";

@Module({
  imports: [
    ModelsModule,
  ],

  controllers: [
    SearchController,
  ],

  providers: [
    SearchService,
  ],
})
export class SearchModule {}