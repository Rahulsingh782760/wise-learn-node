import { validate, validateOrReject, Contains, IsInt, Length, IsEmail, IsPhoneNumber, IsFQDN, IsDate, Min, Max, IsString, IsNotEmpty, IsDefined, IsMongoId } from 'class-validator';

export class createUserValidator{
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    firstName!: string;


    @IsString()
    @IsNotEmpty()
    @IsDefined()
    lastName!: string;


    @IsString()
    @IsNotEmpty()
    @IsDefined()
    @IsEmail()
    email!: string;


    @IsString()
    @IsNotEmpty()
    @IsDefined()
    @IsPhoneNumber()
    Phone!: string;


    @IsString()
    @IsNotEmpty()
    @IsDefined()
    password!: string;


    @IsString()
    @IsNotEmpty()
    @IsDefined()
    userStatus!: string;


}

export class updateUserValidator{

    
    @IsMongoId()
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    userId!: string;


    @IsString()
    @IsNotEmpty()
    @IsDefined()
    firstName!: string;


    @IsString()
    @IsNotEmpty()
    @IsDefined()
    lastName!: string;


    @IsString()
    @IsNotEmpty()
    @IsDefined()
    @IsEmail()
    email!: string;


    @IsString()
    @IsNotEmpty()
    @IsDefined()
    @IsPhoneNumber()
    Phone!: string;


    @IsString()
    @IsNotEmpty()
    @IsDefined()
    password!: string;


    @IsString()
    @IsNotEmpty()
    @IsDefined()
    userStatus!: string; 
}

export class delteUserValidtor{
    
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    userId!: string;
}