import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { Injectable, NestMiddleware, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AddCompanyService } from '../services/add-company/add-company.service';

@Injectable()
export class CheckCompanyMiddleware implements NestMiddleware {
    constructor(private readonly addCompanyService: AddCompanyService) { }
    async use(req: Request, res: Response, next: NextFunction) {
        console.log('in CheckCompanyMiddleware');
        console.log('req.body.company: ', req.body.company);
        if (!req.body.company || !req.body.company || !req.body.password) throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        const company: object = {company: req.body.company, password: req.body.password};
        const isPassMatch = await this.addCompanyService.checkCompany(company);
        console.log('in CheckCompanyMiddleware after check actions');
        next();
    }
}