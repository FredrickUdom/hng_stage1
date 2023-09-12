"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalService = void 0;
const common_1 = require("@nestjs/common");
let PersonalService = class PersonalService {
    constructor() {
        this.cats = [
            {
                slack_name: 'Fredrick',
                current_day: 'Monday',
                utc_time: Date(),
                track: 'Backend',
                github_file_url: 'https://github.com/FredrickUdom/hng_stage1/blob/main/src/app.service.ts',
                github_repo_url: 'https://github.com/FredrickUdom/hng_stage1.git',
                status_code: 200
            }
        ];
    }
    findAll() {
        return this.cats;
    }
};
exports.PersonalService = PersonalService;
exports.PersonalService = PersonalService = __decorate([
    (0, common_1.Injectable)()
], PersonalService);
//# sourceMappingURL=app.service.js.map