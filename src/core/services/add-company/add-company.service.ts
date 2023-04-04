import { Injectable, Inject } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AddCompanyDto } from './addCompany.dto';
import { Sellers } from '../../database/sellers/models/sellers.entity';
import { SELLERS_REPOSITORY } from '../../constants';

@Injectable()
export class AddCompanyService {
    constructor(@Inject(SELLERS_REPOSITORY) private readonly sellersRepository: typeof Sellers) { }
    async addCompany(company) {
        console.log('in addCompany')
        const hashedPass = await this.hashPassword(company.password);
        console.log('after hashPassword call', hashedPass)
        return await this.sellersRepository.create<Sellers>({company: company.company,access_key: hashedPass});
    }
    private async hashPassword(password: string) {
        console.log('in hashPassword')
        const hashedPass = await bcrypt.hash(password, 14);
        console.log('after bcrypt')
        return hashedPass;
    }
}
