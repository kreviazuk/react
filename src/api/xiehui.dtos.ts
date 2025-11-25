/* Options:
Date: 2023-12-19 12:21:00
Version: 8.0
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://localhost:5000/api/educrm

//GlobalNamespace: 
MakePropertiesOptional: True
AddServiceStackTypes: False
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
IncludeTypes: AddXiehuiActivityUserReq,GetXiehuiActivityUserReq,XiehuiActivityUserDTO
ExcludeTypes: BaseResponse
DefaultImports: BaseResponse:./base.dtos,IReturn:./base.dtos,OssInfoDTO:./base.dtos,EventAttachDTO:./event.dtos
*/

import { BaseResponse } from "./base.dtos";
import { IReturn } from "./base.dtos";
import { OssInfoDTO } from "./base.dtos";
import { EventAttachDTO } from "./event.dtos";

export class XiehuiActivityUserDTO
{
    public id?: string;
    public xiehuiActitityId?: string;
    public name?: string;
    public phoneNumber?: string;
    public bizName?: string;
    public address?: string;
    public attachment?: EventAttachDTO;
    public wechatAppId?: string;
    public wechatOpenId?: string;
    public createOn?: string;
    public lastModifyOn?: string;

    public constructor(init?: Partial<XiehuiActivityUserDTO>) { (Object as any).assign(this, init); }
}

export class GetXiehuiActivityUserRes extends BaseResponse
{
    public data?: XiehuiActivityUserDTO;
    public ossInfo?: { [index: string]: OssInfoDTO; };

    public constructor(init?: Partial<GetXiehuiActivityUserRes>) { super(init); (Object as any).assign(this, init); }
}

// @Route("/xiehuiactivityuser/add", "POST")
export class AddXiehuiActivityUserReq implements IReturn<BaseResponse>
{
    // @Validate(Validator="NotEmpty", Message="XiehuiActitityId 不可为空")
    public xiehuiActitityId?: string;

    // @Validate(Validator="NotEmpty", Message="Name 不可为空")
    public name?: string;

    // @Validate(Validator="NotEmpty", Message="PhoneNumber 不可为空")
    public phoneNumber?: string;

    // @Validate(Validator="NotEmpty", Message="MToken 不可为空")
    public mToken?: string;

    // @Validate(Validator="NotEmpty", Message="BizName 不可为空")
    public bizName?: string;

    // @Validate(Validator="NotEmpty", Message="Address 不可为空")
    public address?: string;

    public attachment?: EventAttachDTO;
    // @Validate(Validator="NotEmpty", Message="WechatAppId 不可为空")
    public wechatAppId?: string;

    // @Validate(Validator="NotEmpty", Message="WechatOpenId 不可为空")
    public wechatOpenId?: string;

    public constructor(init?: Partial<AddXiehuiActivityUserReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddXiehuiActivityUserReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

export class GetXiehuiActivityUserReq implements IReturn<GetXiehuiActivityUserRes>
{
    // @Validate(Validator="NotEmpty", Message="XiehuiActitityId 不可为空")
    public xiehuiActitityId?: string;

    // @Validate(Validator="NotEmpty", Message="WechatAppId 不可为空")
    public wechatAppId?: string;

    // @Validate(Validator="NotEmpty", Message="WechatOpenId 不可为空")
    public wechatOpenId?: string;

    public constructor(init?: Partial<GetXiehuiActivityUserReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetXiehuiActivityUserReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetXiehuiActivityUserRes(); }
}

