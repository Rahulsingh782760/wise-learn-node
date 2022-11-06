import { validate, validateOrReject, Contains, IsInt, Length, IsEmail, IsPhoneNumber, IsFQDN, IsDate, Min, Max, IsString, IsNotEmpty, IsDefined, IsMongoId, IsBtcAddress } from 'class-validator';

export class createOrganizationValidator{
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    orgName!: string;
    


    @IsString()
    @IsNotEmpty()
    @IsDefined()
    orgAddress!: string;


    @IsString()
    @IsNotEmpty()
    @IsDefined()
    orgAstablish!: string;


}

export class updateOrganizationValidator{

    
    @IsString()
    @IsMongoId()
    // @IsNotEmpty()
    @IsDefined()
    orgId!: string;


    @IsString()
    @IsNotEmpty()
    @IsDefined()
    orgName!: string;


    @IsString()
    @IsNotEmpty()
    @IsDefined()
    // @IsBtcAddress()
    orgAddress!: string;


    @IsString()
    @IsNotEmpty()
    @IsDefined()
    orgAstablish!: string;

}

export class deleteOrganizationValidtor{
    
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    orgId!: string;

}