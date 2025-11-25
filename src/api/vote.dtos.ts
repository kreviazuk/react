/* Options:
Date: 2024-01-05 13:20:35
Version: 8.0
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://localhost:5000/api/educrm

//GlobalNamespace: 
MakePropertiesOptional: True
AddServiceStackTypes: False
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
IncludeTypes: GetSystemVotesReq,AddSystemVoteReq,UpdateSystemVoteReq,SystemVoteDTO,SystemVoteTemplateDTO,SystemVoteItemDTO,SystemVoteItemType,SystemVoteOptionDTO
ExcludeTypes: BaseResponse
DefaultImports: BaseResponse:./base.dtos,IReturn:./base.dtos,OssInfoDTO:./base.dtos,EventAttachDTO:./event.dtos
*/

import { BaseResponse } from "./base.dtos";
import { IReturn } from "./base.dtos";
import { OssInfoDTO } from "./base.dtos";
import { EventAttachDTO } from "./event.dtos";

export enum SystemVoteItemType
{
    RADIO = 'RADIO',
    CHECKBOX = 'CHECKBOX',
}

export class SystemVoteOptionDTO
{
    public id?: string;
    public score?: number;
    public label?: string;
    public needAttachment?: boolean;
    public attachment?: EventAttachDTO;
    public isSelected?: boolean;
    public rules?: string;

    public constructor(init?: Partial<SystemVoteOptionDTO>) { (Object as any).assign(this, init); }
}

export class SystemVoteItemDTO
{
    public id?: string;
    public catalog?: string;
    public subCatalog?: string;
    public minorCatalog?: string;
    public title?: string;
    public summary?: string;
    public isCondition?: boolean;
    public rules?: string;
    public valueType?: SystemVoteItemType;
    public options?: SystemVoteOptionDTO[];

    public constructor(init?: Partial<SystemVoteItemDTO>) { (Object as any).assign(this, init); }
}

export class SystemVoteTemplateDTO
{
    public id?: string;
    public name?: string;
    public voteItems?: SystemVoteItemDTO[];
    public isDelete?: boolean;
    public createOn?: string;
    public lastModifyOn?: string;

    public constructor(init?: Partial<SystemVoteTemplateDTO>) { (Object as any).assign(this, init); }
}

export class SystemVoteDTO
{
    public id?: string;
    public voteTemplateId?: string;
    public name?: string;
    public phoneNumber?: string;
    public bizName?: string;
    public wechatAppId?: string;
    public wechatOpenId?: string;
    public voteItems?: SystemVoteItemDTO[];
    public createOn?: string;
    public lastModifyOn?: string;

    public constructor(init?: Partial<SystemVoteDTO>) { (Object as any).assign(this, init); }
}

export class GetSystemVotesRes extends BaseResponse
{
    public data?: SystemVoteDTO[];
    public systemVoteTemplate?: SystemVoteTemplateDTO;
    public ossInfo?: { [index: string]: OssInfoDTO; };

    public constructor(init?: Partial<GetSystemVotesRes>) { super(init); (Object as any).assign(this, init); }
}

export class AddSystemVoteRes extends BaseResponse
{
    public voteId?: string;

    public constructor(init?: Partial<AddSystemVoteRes>) { super(init); (Object as any).assign(this, init); }
}

/** @description 获取投票列表 */
// @Api(Description="获取投票列表")
export class GetSystemVotesReq implements IReturn<GetSystemVotesRes>
{
    public voteTemplateId?: string;
    public wechatAppId?: string;
    public wechatOpenId?: string;
    public voteIds?: string[];

    public constructor(init?: Partial<GetSystemVotesReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSystemVotesReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSystemVotesRes(); }
}

/** @description 提交投票 */
// @Api(Description="提交投票")
export class AddSystemVoteReq implements IReturn<AddSystemVoteRes>
{
    // @Validate(Validator="NotEmpty", Message="PhoneNumber 不可为空")
    public phoneNumber?: string;

    // @Validate(Validator="NotEmpty", Message="MToken 不可为空")
    public mToken?: string;

    // @Validate(Validator="NotEmpty", Message="BizName 不可为空")
    public bizName?: string;

    // @Validate(Validator="NotEmpty", Message="Name 不可为空")
    public name?: string;

    // @Validate(Validator="NotEmpty", Message="VoteTemplateId 不可为空")
    public voteTemplateId?: string;

    // @Validate(Validator="NotEmpty", Message="WechatAppId 不可为空")
    public wechatAppId?: string;

    // @Validate(Validator="NotEmpty", Message="WechatOpenId 不可为空")
    public wechatOpenId?: string;

    public constructor(init?: Partial<AddSystemVoteReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddSystemVoteReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AddSystemVoteRes(); }
}

/** @description 提交投票 */
// @Api(Description="提交投票")
export class UpdateSystemVoteReq implements IReturn<BaseResponse>
{
    // @Validate(Validator="NotEmpty", Message="VoteId 不可为空")
    public voteId?: string;

    // @Validate(Validator="NotEmpty", Message="VoteTemplateId 不可为空")
    public voteTemplateId?: string;

    // @Validate(Validator="NotEmpty", Message="WechatAppId 不可为空")
    public wechatAppId?: string;

    // @Validate(Validator="NotEmpty", Message="WechatOpenId 不可为空")
    public wechatOpenId?: string;

    public voteItems?: SystemVoteItemDTO[];

    public constructor(init?: Partial<UpdateSystemVoteReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateSystemVoteReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

