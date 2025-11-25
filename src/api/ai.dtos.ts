/* Options:
Date: 2023-05-26 18:46:37
Version: 6.80
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://apigwtest.yban.co/api/aiserver

//GlobalNamespace: 
MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
IncludeTypes: GetAiFacesReq,AiFaceItem,USERROLE,UploadAiFaceV2Req,UploadFileItem
ExcludeTypes: BaseResponse
DefaultImports: BaseResponse:./base.dtos,type IReturn:./base.dtos
*/

import { BaseResponse } from "./base.dtos";
import { type IReturn } from "./base.dtos";

export enum USERROLE
{
    ROLE_TEACHER = 'ROLE_TEACHER',
    ROLE_PARENT = 'ROLE_PARENT',
    ROLE_STUDENT = 'ROLE_STUDENT',
}

export class UploadFileItem
{
    public originname?: string;
    public filedata?: string;

    public constructor(init?: Partial<UploadFileItem>) { (Object as any).assign(this, init); }
}

export class AiFaceItem
{
    public configId?: string;
    public imageUrl?: string;
    public ownerRole?: USERROLE;
    public parentRole?: string;
    public createTime?: string;
    public name?: string;
    public userId?: number;
    public enableAttendance?: boolean;

    public constructor(init?: Partial<AiFaceItem>) { (Object as any).assign(this, init); }
}

export class GetAiFacesRes extends BaseResponse
{
    public data?: AiFaceItem[];

    public constructor(init?: Partial<GetAiFacesRes>) { super(init); (Object as any).assign(this, init); }
}

export class UploadAiFaceRes extends BaseResponse
{
    public imageUrl?: string;
    public guid?: string;
    public imageData?: string;

    public constructor(init?: Partial<UploadAiFaceRes>) { super(init); (Object as any).assign(this, init); }
}

// @Route("/ai/aifaces", "GET, OPTIONS")
export class GetAiFacesReq implements IReturn<GetAiFacesRes>
{
    public schoolId?: string;
    public studentId?: string;
    public isTeacher?: boolean;

    public constructor(init?: Partial<GetAiFacesReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetAiFacesReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetAiFacesRes(); }
}

// @Route("/ai/uploadaifacev2", "POST, OPTIONS")
export class UploadAiFaceV2Req implements IReturn<UploadAiFaceRes>
{
    public schoolId?: string;
    public studentId?: string;
    public ownerRole?: USERROLE;
    public originalfiles?: UploadFileItem[];

    public constructor(init?: Partial<UploadAiFaceV2Req>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UploadAiFaceV2Req'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new UploadAiFaceRes(); }
}

