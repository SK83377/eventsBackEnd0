import { Controller, Post, Request, Response, Body, NotFoundException } from '@nestjs/common';
import { AddCompanyService } from '../../services/add-company/add-company.service';
import { CompanyDto } from './company.dto';


@Controller('addCompany')
export class AddCompanyController {
    constructor(private readonly addCompanyService: AddCompanyService) { }
    @Post('create')
    async create(@Body() company: CompanyDto, @Response() res) {
        console.log('in create')
        const created = await this.addCompanyService.addCompany(company);
        console.log('after created',created,typeof created)
        if (created) {
            res.send('Success');
        } else {
            res.send('Server error');
        }
    }
}