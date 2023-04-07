import { Injectable, Inject } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Sellers } from '../../database/sellers/models/sellers.entity';
import { SELLERS_REPOSITORY } from '../../constants';

@Injectable()
export class AddCompanyService {
    constructor(@Inject(SELLERS_REPOSITORY) private readonly sellersRepository: typeof Sellers) { }
    async addCompany(company) {
        console.log('in addCompany')
        const hashedPass = await this.hashPassword(company.password);
        console.log('after hashPassword call', hashedPass)
        return await this.createSeller({company: company.company,access_key: hashedPass});
    }
    private async hashPassword(password: string) {
        const hashedPass = await bcrypt.hash(password, 14);
        return hashedPass;
    }
    private async createSeller(newSeller): Promise<Sellers>{
        return await this.sellersRepository.create<Sellers>(newSeller);
    }
    async checkCompany(company) {
        console.log('in checkCompnay');
        const companyData = (await this.findCompany(company.company));
        if (!companyData) throw ('No such company');
        const isPassMatch = await this.checkIsMatch(company.password, companyData.access_key);
        if (!isPassMatch) throw (' Wrong password');
        return isPassMatch;
    }
    private async findCompany(company: string) {
        return await this.sellersRepository.findOne({
        	where: { company: company }
    	})
    }
    private async checkIsMatch(pass: string, hashedPass: string) {
        const isPassMatch = await bcrypt.compare(pass, hashedPass);
        return isPassMatch;
    }
}
