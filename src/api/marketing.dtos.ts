/* Options:
Date: 2023-02-14 17:15:32
Version: 6.10
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://localhost:5000/api/educrm

//GlobalNamespace: 
MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
IncludeTypes: GetMarketingPagesReq,MarketingPageDTO,ActivityProdectBaseDTO,MarketingFeedExtraItem,MarketingPageTemplateDTO,WeiXinShareConfig,MARKETING_ACTIVITY_TYPE,SpreaderConfig,MARKETING_FEEDBACK_ITEMTYPE,SPREADER_PRIVATE_GIFT_TYPE
ExcludeTypes: BaseResponse,IReturn
DefaultImports: BaseResponse:./base.dtos,IReturn:./base.dtos
*/

import { BaseResponse } from "./base.dtos";
import { IReturn } from "./base.dtos";

export class WeiXinShareConfig
{
    public coverImage?: string;
    public title?: string;
    public description?: string;
    public shareWx?: boolean;

    public constructor(init?: Partial<WeiXinShareConfig>) { (Object as any).assign(this, init); }
}

export enum SPREADER_PRIVATE_GIFT_TYPE
{
    POINT = 'POINT',
    CARD = 'CARD',
}

export class SpreaderConfig
{
    public giftType?: SPREADER_PRIVATE_GIFT_TYPE;
    public amount?: number;
    public expiredDays?: number;
    public minPrice?: number;

    public constructor(init?: Partial<SpreaderConfig>) { (Object as any).assign(this, init); }
}

export enum MARKETING_ACTIVITY_TYPE
{
    NONE = 'NONE',
    ACTIVITY = 'ACTIVITY',
    PINTUAN = 'PINTUAN',
    KANJIA = 'KANJIA',
    QIANGGOU = 'QIANGGOU',
}

export class MarketingPageTemplateDTO
{
    public id?: string;
    public title?: string;
    public coverImage?: string;
    public description?: string;
    public script?: string;
    public author?: string;
    public width?: number;
    public height?: number;
    public pageMode?: string;
    public pages?: string;
    public config?: string;
    public flipType?: number;
    public sliderNumber?: boolean;
    public createOn?: string;
    public lastModifyOn?: string;
    public status?: number;
    public isPublish?: boolean;
    public isDelete?: boolean;
    public tags?: string[];
    public shareConfig?: WeiXinShareConfig;
    public spreaderConfig?: SpreaderConfig;
    public activityType?: MARKETING_ACTIVITY_TYPE;
    public orderIndex?: number;

    public constructor(init?: Partial<MarketingPageTemplateDTO>) { (Object as any).assign(this, init); }
}

export enum MARKETING_FEEDBACK_ITEMTYPE
{
    INPUT = 'INPUT',
    INPUTNUMBER = 'INPUTNUMBER',
    PHONENUMBER = 'PHONENUMBER',
    TEXT = 'TEXT',
    CHECKBOX = 'CHECKBOX',
    DROPDOWN = 'DROPDOWN',
    DATEPICK = 'DATEPICK',
}

export class MarketingFeedExtraItem
{
    public itemType?: MARKETING_FEEDBACK_ITEMTYPE;
    public title?: string;
    public value?: string;
    public options?: string[];

    public constructor(init?: Partial<MarketingFeedExtraItem>) { (Object as any).assign(this, init); }
}

export class MarketingPageDTO extends MarketingPageTemplateDTO
{
    public schoolId?: string;
    public templateId?: string;
    public beginAt?: string;
    public endAt?: string;
    public needPayment?: boolean;
    public fee?: number;
    public formStudentNameEnabled?: boolean;
    public formStudentBirthEnabled?: boolean;
    public formPhoneNumberEnabled?: boolean;
    public formGenderEnabled?: boolean;
    public formParentRoleEnabled?: boolean;
    public formParentNameEnabled?: boolean;
    public formContactAddressEnabled?: boolean;
    public formXiaoquNameEnabled?: boolean;
    public formSchoolNameEnabled?: boolean;
    public formIsMemberEnabled?: boolean;
    public formExtraDatas?: MarketingFeedExtraItem[];
    public virtualVisitorAmount?: number;
    public virtualOrdersAmount?: number;
    public virtualShareAmount?: number;

    public constructor(init?: Partial<MarketingPageDTO>) { super(init); (Object as any).assign(this, init); }
}

export class ActivityProdectBaseDTO
{
    public id?: string;
    public marketingPageId?: string;
    public name?: string;
    public desc?: string;
    public images?: string[];
    public productNumber?: number;
    public originalPrice?: number;
    public orderCount?: number;
    public availableCount?: number;
    public qiangGouPrice?: number;
    public needZhuliCount?: number;
    public memberCount?: number;
    public leaderPrice?: number;
    public memberPrice?: number;

    public constructor(init?: Partial<ActivityProdectBaseDTO>) { (Object as any).assign(this, init); }
}

export class GetMarketingPagesRes extends BaseResponse
{
    public data?: MarketingPageDTO[];
    public totalCount?: number;
    public productDatas?: { [index: string]: ActivityProdectBaseDTO; };

    public constructor(init?: Partial<GetMarketingPagesRes>) { super(init); (Object as any).assign(this, init); }
}

/**
* 获取学校营销列表
*/
// @Route("/marketing/pages", "GET, OPTIONS")
// @Api(Description="获取学校营销列表")
export class GetMarketingPagesReq implements IReturn<GetMarketingPagesRes>
{
    public schoolId?: string;
    public title?: string;
    public pageMode?: string;
    public isPublish?: boolean;
    public isDelete?: boolean;
    public beginAt?: string[];
    public endAt?: string[];
    public needPayment?: boolean;
    public fee?: number[];
    public tags?: string[];
    public pageSize?: number;
    public pageIndex?: number;

    public constructor(init?: Partial<GetMarketingPagesReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMarketingPagesReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetMarketingPagesRes(); }
}

