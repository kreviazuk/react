/* Options:
Date: 2023-09-13 19:44:09
Version: 6.80
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://localhost:5000/api/educrm

//GlobalNamespace: 
MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
IncludeTypes: {cashier-mp}
ExcludeTypes: BaseResponse,IReturn,CommonReturn,GENDERTYPE
DefaultImports: CommonRequest:./base.dtos,BaseResponse:./base.dtos,type IReturn:./base.dtos,CommonReturn:./base.dtos,GENDERTYPE:./base.dtos,KID_ALLERGY:./base.dtos,STUDENT_STATUS:./base.dtos,OssInfoDTO:./base.dtos,TeacherBaseInfoDTO:./base.dtos,ParentRelationSchoolInfoDTO:./base.dtos,StudentBaseInfoDTO:./base.dtos,KidInfoDTO:./base.dtos,KidClassInfoDTO:./base.dtos,SEMESTERTYPE:./base.dtos
*/

import { CommonRequest } from "./base.dtos";
import { BaseResponse } from "./base.dtos";
import { type IReturn } from "./base.dtos";
import { CommonReturn } from "./base.dtos";
import { GENDERTYPE } from "./base.dtos";
import { KID_ALLERGY } from "./base.dtos";
import { STUDENT_STATUS } from "./base.dtos";
import { OssInfoDTO } from "./base.dtos";
import { TeacherBaseInfoDTO } from "./base.dtos";
import { ParentRelationSchoolInfoDTO } from "./base.dtos";
import { StudentBaseInfoDTO } from "./base.dtos";
import { KidInfoDTO } from "./base.dtos";
import { KidClassInfoDTO } from "./base.dtos";
import { SEMESTERTYPE } from "./base.dtos";

export enum PAYMENT_VENDOR
{
    HUIFU = 'HUIFU',
    SHENGPAY = 'SHENGPAY',
}

export class ShengPayPreOrderDTO
{
    public schoolName?: string;
    public prepayData?: string;
    public productName?: string;
    public orderNum?: string;
    public price?: number;
    public desc?: string;
    public remark?: string;
    public paymentMethods?: string[];
    public defaultPaymentMethods?: string;
    public paymentVendor?: PAYMENT_VENDOR;
    public huifuTradeId?: string;

    public constructor(init?: Partial<ShengPayPreOrderDTO>) { (Object as any).assign(this, init); }
}

export class PrePayWxliteProcessRes extends BaseResponse
{
    public data?: ShengPayPreOrderDTO;

    public constructor(init?: Partial<PrePayWxliteProcessRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetMarketingPrePayCodeFromWxLiteRes extends BaseResponse
{
    public prepayData?: string;
    public wxCode?: string;
    public orderId?: string;
    public schoolName?: string;
    public productName?: string;
    public orderNo?: string;
    public orderNum?: string;
    public price?: number;

    public constructor(init?: Partial<GetMarketingPrePayCodeFromWxLiteRes>) { super(init); (Object as any).assign(this, init); }
}

/** @description 小程序创建订单接口 */
// @Route("/payment/prepaywxliteprocess", "POST, OPTIONS")
// @Api(Description="小程序创建订单接口")
export class PrePayWxliteProcessReq implements IReturn<PrePayWxliteProcessRes>
{
    public wxCode?: string;
    public code?: string;
    public wxAppId?: string;
    public useCloud?: boolean;

    public constructor(init?: Partial<PrePayWxliteProcessReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PrePayWxliteProcessReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new PrePayWxliteProcessRes(); }
}

/** @description 家长活动支付请求prepaydata（通过小程序） */
// @Route("/marketing/page/orderprepayfromwxlite", "POST, OPTIONS")
// @Api(Description="家长活动支付请求prepaydata（通过小程序）")
export class GetMarketingPrePayCodeFromWxLiteReq implements IReturn<GetMarketingPrePayCodeFromWxLiteRes>
{
    public marketingPageId?: string;
    public activityOrderId?: string;
    public paymentFrom?: string;
    public code?: string;
    public wxAppId?: string;

    public constructor(init?: Partial<GetMarketingPrePayCodeFromWxLiteReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMarketingPrePayCodeFromWxLiteReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetMarketingPrePayCodeFromWxLiteRes(); }
}

