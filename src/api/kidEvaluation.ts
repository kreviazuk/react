/* Options:
Date: 2024-01-31 13:57:36
Version: 8.0
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://apigwtest.yban.co/api/educrm

//GlobalNamespace: 
MakePropertiesOptional: True
AddServiceStackTypes: False
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
IncludeTypes: KidEvaluationCatalogDTO,GetKidEvaluationTemplatesReq,SetKidEvaluationReq,KidEvaluationTemplateDTO,SchoolOpenEndDTO,KidEvaluationItemDTO,KidEvaluationOptionDTO,GetKidEvaluationsReq,KidEvaluationDTO,KidEvaluationMaterialDTO,FindKidEvaluationReq,UpdateKidEvaluationReq,UpdateKidEvaluationItemsReq,UpdateKidEvaluationByParentReq
ExcludeTypes: BaseResponse
DefaultImports: BaseResponse:./base.dtos,IReturn:./base.dtos,GENDERTYPE:./base.dtos,PARENT_ROLE_TYPE:./base.dtos,ORDER_DIRECTION:./base.dtos
*/

import { BaseResponse } from "./base.dtos";
import { IReturn } from "./base.dtos";
import { GENDERTYPE } from "./base.dtos";
import { PARENT_ROLE_TYPE } from "./base.dtos";
import { ORDER_DIRECTION } from "./base.dtos";

export class KidEvaluationMaterialDTO
{
    public id?: string;
    public name?: string;
    public icon?: string;
    public isDelete?: boolean;
    public createOn?: string;
    public lastModifyOn?: string;
    public orderIndex?: number;

    public constructor(init?: Partial<KidEvaluationMaterialDTO>) { (Object as any).assign(this, init); }
}

export class SchoolOpenEndDTO
{
    public schoolId?: string;
    public openOn?: string;
    public closeOn?: string;
    public isEnable?: boolean;

    public constructor(init?: Partial<SchoolOpenEndDTO>) { (Object as any).assign(this, init); }
}

export class KidEvaluationCatalogDTO
{
    public catalog?: string;
    public totalScore?: number;
    public ranks?: { [index: string]: number; };
    public score?: number;
    public rank?: string;
    public comments?: string[];
    public suggestions?: string[];

    public constructor(init?: Partial<KidEvaluationCatalogDTO>) { (Object as any).assign(this, init); }
}

export class KidEvaluationOptionDTO
{
    public id?: string;
    public score?: number;
    public label?: string;
    public suggestion?: string;
    public isSelected?: boolean;

    public constructor(init?: Partial<KidEvaluationOptionDTO>) { (Object as any).assign(this, init); }
}

export class KidEvaluationItemDTO
{
    public id?: string;
    public catalog?: string;
    public title?: string;
    public summary?: string;
    public success?: string;
    public materialIds?: string[];
    public options?: KidEvaluationOptionDTO[];

    public constructor(init?: Partial<KidEvaluationItemDTO>) { (Object as any).assign(this, init); }
}

export class KidEvaluationTemplateDTO
{
    public id?: string;
    public openEnds?: SchoolOpenEndDTO[];
    public name?: string;
    public summary?: string;
    public resultSummary?: string;
    public catalogs?: KidEvaluationCatalogDTO[];
    public voteItems?: KidEvaluationItemDTO[];
    public isDelete?: boolean;
    public createOn?: string;
    public lastModifyOn?: string;
    public orderIndex?: number;

    public constructor(init?: Partial<KidEvaluationTemplateDTO>) { (Object as any).assign(this, init); }
}

export class KidEvaluationDTO
{
    public id?: string;
    public schoolId?: string;
    public saleLeadId?: string;
    public isFinish?: boolean;
    public studentName?: string;
    public gender?: GENDERTYPE;
    public birthDate?: string;
    public parentRoleType?: PARENT_ROLE_TYPE;
    public parentName?: string;
    public phoneNumber?: string;
    public templateId?: string;
    public templateName?: string;
    public resultSummary?: string;
    public catalogs?: KidEvaluationCatalogDTO[];
    public voteItems?: KidEvaluationItemDTO[];
    public createOn?: string;
    public createByTeacherUserInfoId?: string;
    public lastModifyOn?: string;
    public isDelete?: boolean;
    public deleteOn?: string;
    public deleteByTeacherUserInfoId?: string;
    public isAcked?: boolean;
    public ackOn?: string;
    public url?: string;

    public constructor(init?: Partial<KidEvaluationDTO>) { (Object as any).assign(this, init); }
}

export class GetKidEvaluationTemplatesRes extends BaseResponse
{
    public total?: number;
    public data?: KidEvaluationTemplateDTO[];
    public materials?: { [index: string]: KidEvaluationMaterialDTO; };

    public constructor(init?: Partial<GetKidEvaluationTemplatesRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetKidEvaluationsRes extends BaseResponse
{
    public total?: number;
    public data?: KidEvaluationDTO[];

    public constructor(init?: Partial<GetKidEvaluationsRes>) { super(init); (Object as any).assign(this, init); }
}

export class FindKidEvaluationRes extends BaseResponse
{
    public data?: KidEvaluationDTO;
    public materials?: { [index: string]: KidEvaluationMaterialDTO; };

    public constructor(init?: Partial<FindKidEvaluationRes>) { super(init); (Object as any).assign(this, init); }
}

export class UpdateKidEvaluationRes extends BaseResponse
{
    public id?: string;

    public constructor(init?: Partial<UpdateKidEvaluationRes>) { super(init); (Object as any).assign(this, init); }
}

/** @description 获取模板列表 */
// @Api(Description="获取模板列表")
export class GetKidEvaluationTemplatesReq implements IReturn<GetKidEvaluationTemplatesRes>
{
    public name?: string;
    public summary?: string;
    public isDelete?: boolean;
    public schoolId?: string;
    public isEnable?: boolean;
    public createOn?: string[];
    public lastModifyOn?: string[];
    public sort?: { [index: string]: ORDER_DIRECTION; };
    public pageIndex?: number;
    public pageSize?: number;

    public constructor(init?: Partial<GetKidEvaluationTemplatesReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetKidEvaluationTemplatesReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetKidEvaluationTemplatesRes(); }
}

/** @description 获取测评列表 */
// @Api(Description="获取测评列表")
export class GetKidEvaluationsReq implements IReturn<GetKidEvaluationsRes>
{
    public schoolId?: string;
    public studentName?: string;
    public gender?: GENDERTYPE;
    public birthDate?: string[];
    public parentRoleType?: PARENT_ROLE_TYPE;
    public parentName?: string;
    public phoneNumber?: string;
    public templateId?: string;
    public createByTeacherUserInfoId?: string;
    public isFinish?: boolean;
    public deleteByTeacherUserInfoId?: string;
    public isDelete?: boolean;
    public deleteOn?: string[];
    public isAcked?: boolean;
    public ackOn?: string[];
    public createOn?: string[];
    public lastModifyOn?: string[];
    public sort?: { [index: string]: ORDER_DIRECTION; };
    public pageIndex?: number;
    public pageSize?: number;

    public constructor(init?: Partial<GetKidEvaluationsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetKidEvaluationsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetKidEvaluationsRes(); }
}

/** @description 结束测评 */
// @Api(Description="结束测评")
export class SetKidEvaluationReq implements IReturn<BaseResponse>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId 不可为空")
    public schoolId?: string;

    // @Validate(Validator="NotEmpty", Message="Id 不可为空")
    public id?: string;

    public sign?: string;
    public nonce?: string;
    public isFinish?: boolean;
    public isDelete?: boolean;
    public isAcked?: boolean;

    public constructor(init?: Partial<SetKidEvaluationReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SetKidEvaluationReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取测评详情 */
// @Api(Description="获取测评详情")
export class FindKidEvaluationReq implements IReturn<FindKidEvaluationRes>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId 不可为空")
    public schoolId?: string;

    // @Validate(Validator="NotEmpty", Message="Id 不可为空")
    public id?: string;

    public sign?: string;
    public nonce?: string;

    public constructor(init?: Partial<FindKidEvaluationReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'FindKidEvaluationReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new FindKidEvaluationRes(); }
}

/** @description 更新测评详情 */
// @Api(Description="更新测评详情")
export class UpdateKidEvaluationReq implements IReturn<UpdateKidEvaluationRes>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId 不可为空")
    public schoolId?: string;

    public data?: KidEvaluationDTO;

    public constructor(init?: Partial<UpdateKidEvaluationReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateKidEvaluationReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new UpdateKidEvaluationRes(); }
}

/** @description 更新测评详情 */
// @Api(Description="更新测评详情")
export class UpdateKidEvaluationItemsReq implements IReturn<BaseResponse>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId 不可为空")
    public schoolId?: string;

    // @Validate(Validator="NotEmpty", Message="Id 不可为空")
    public id?: string;

    public voteItems?: KidEvaluationItemDTO[];

    public constructor(init?: Partial<UpdateKidEvaluationItemsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateKidEvaluationItemsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 家长更新测评 */
// @Api(Description="家长更新测评")
export class UpdateKidEvaluationByParentReq implements IReturn<BaseResponse>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId 不可为空")
    public schoolId?: string;

    // @Validate(Validator="NotEmpty", Message="SchoolId 不可为空")
    public id?: string;

    public sign?: string;
    public nonce?: string;
    public studentName?: string;
    public gender?: GENDERTYPE;
    public birthDate?: string;
    public parentRoleType?: PARENT_ROLE_TYPE;
    public parentName?: string;
    public phoneNumber?: string;

    public constructor(init?: Partial<UpdateKidEvaluationByParentReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateKidEvaluationByParentReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

