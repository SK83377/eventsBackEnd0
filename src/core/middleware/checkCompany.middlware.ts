import { Injectable, NestMiddleware, Body } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AddCompanyService } from '../services/add-company/add-company.service';

@Injectable()
export class CheckCompanyMiddleware implements NestMiddleware {
    constructor(private readonly addCompanyService: AddCompanyService) { }
    async use(req: Request, res: Response, next: NextFunction) {
        console.log('in CheckCompanyMiddleware');
        console.log('req.body.company: ', req.body.company);
        const isPassMatch = await this.addCompanyService.checkCompany(req.body.company);
        console.log('in CheckCompanyMiddleware after check actions');
        next();
    }
}