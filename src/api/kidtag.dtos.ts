/* Options:
Date: 2023-11-15 16:56:36
Version: 6.80
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://localhost:5000/api/educrm

//GlobalNamespace: 
MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
IncludeTypes: GetKidTagsReq,UpdateKidTagReq,KidTagDTO,KidTagItemDTO,KidTagType,GetKidTagGoodsReq,KidTagGoodsDTO,KidTagGoodRecommendLogDTO,AddKidTagGoodRecommendReq
ExcludeTypes: BaseResponse
DefaultImports: IReturn:./base.dtos,BaseResponse:./base.dtos,StudentBaseInfoDTO:./base.dtos,ClassInfoDTO:./base.dtos
*/

import { IReturn } from "./base.dtos";
import { BaseResponse } from "./base.dtos";
import { StudentBaseInfoDTO } from "./base.dtos";
import { ClassInfoDTO } from "./base.dtos";

export class KidTagGoodsDTO
{
    public id?: string;
    public catalog?: string;
    public title?: string;
    public icon?: string;
    public goodName?: string;
    public goodDesc?: string;
    public isDelete?: boolean;
    public createOn?: string;
    public lastModifyOn?: string;
    public orderIndex?: number;

    public constructor(init?: Partial<KidTagGoodsDTO>) { (Object as any).assign(this, init); }
}

export enum KidTagType
{
    NONE = 'NONE',
    NUMBER = 'NUMBER',
    TEXT = 'TEXT',
    CHECKBOX = 'CHECKBOX',
    RADIO = 'RADIO',
    TEECH = 'TEECH',
    TEECH_POSITION = 'TEECH_POSITION',
    TEECH_COUNT = 'TEECH_COUNT',
    GOODS = 'GOODS',
}

export class KidTagItemDTO
{
    public id?: string;
    public catalog?: string;
    public label?: string;
    public addonBefore?: string;
    public valueType?: KidTagType;
    public value?: string;
    public memo?: string;
    public goodsCatalog?: string;
    public precision?: number;
    public unit?: string;
    public addonAfter?: string;
    public options?: string[];
    public lastModifyOn?: string;
    public remaining?: number;

    public constructor(init?: Partial<KidTagItemDTO>) { (Object as any).assign(this, init); }
}

export class KidTagDTO
{
    public id?: string;
    public schoolId?: string;
    public tags?: KidTagItemDTO[];
    public createOn?: string;
    public lastModifyOn?: string;

    public constructor(init?: Partial<KidTagDTO>) { (Object as any).assign(this, init); }
}

export class KidTagGoodRecommendLogDTO
{
    public id?: string;
    public goodsId?: string;
    public schoolId?: string;
    public kidId?: string;
    public createOn?: string;

    public constructor(init?: Partial<KidTagGoodRecommendLogDTO>) { (Object as any).assign(this, init); }
}

export class GetKidTagsRes extends BaseResponse
{
    public data?: ClassInfoDTO[];
    public kidTag?: { [index: string]: KidTagDTO; };
    public kidInfo?: { [index: string]: StudentBaseInfoDTO; };

    public constructor(init?: Partial<GetKidTagsRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetKidTagGoodsRes extends BaseResponse
{
    public total?: number;
    public data?: KidTagGoodsDTO[];
    public log?: KidTagGoodRecommendLogDTO[];

    public constructor(init?: Partial<GetKidTagGoodsRes>) { super(init); (Object as any).assign(this, init); }
}

// @Route("/kidtag/{SchoolId}/kids", "GET")
export class GetKidTagsReq implements IReturn<GetKidTagsRes>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId 不能为空")
    public schoolId?: string;

    public classId?: string;
    public kidId?: string;
    public days?: number;

    public constructor(init?: Partial<GetKidTagsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetKidTagsReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetKidTagsRes(); }
}

// @Route("/kidtag/{SchoolId}/{KidId}", "POST")
export class UpdateKidTagReq implements IReturn<BaseResponse>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId 不能为空")
    public schoolId?: string;

    // @Validate(Validator="NotEmpty", Message="KidId 不能为空")
    public kidId?: string;

    // @Validate(Validator="NotEmpty", Message="TagValue 不能为空")
    public tagValue?: { [index: string]: string; };

    public constructor(init?: Partial<UpdateKidTagReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateKidTagReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

// @Route("/kidtag/{SchoolId}/goods", "GET")
export class GetKidTagGoodsReq implements IReturn<GetKidTagGoodsRes>
{
    public schoolId?: string;
    public kidId?: string;
    public catalog?: string;
    public title?: string;
    public goodName?: string;
    public goodDesc?: string;
    public createOn?: string[];
    public lastModifyOn?: string[];
    public pageIndex?: number;
    public pageSize?: number;

    public constructor(init?: Partial<GetKidTagGoodsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetKidTagGoodsReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetKidTagGoodsRes(); }
}

// @Route("/kidtag/goods/recommend", "POST")
export class AddKidTagGoodRecommendReq implements IReturn<BaseResponse>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId 不能为空")
    public schoolId?: string;

    // @Validate(Validator="NotEmpty", Message="KidId 不能为空")
    public kidId?: string;

    // @Validate(Validator="NotEmpty", Message="GoodId 不能为空")
    public goodId?: string;

    // @Validate(Validator="NotEmpty", Message="TagId 不能为空")
    public tagId?: string;

    public constructor(init?: Partial<AddKidTagGoodRecommendReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddKidTagGoodRecommendReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

