/* Options:
Date: 2025-11-24 10:45:33
Version: 8.40
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://apigwtest.yban.co/api/educrm

//GlobalNamespace:
//MakePropertiesOptional: False
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion:
//AddDescriptionAsComments: True
IncludeTypes: GetScanCodeByTeacherReq,HuifuCreateMicroPayReq,GetCashOrderListReq,CashOrderDTO,CASHORDER_VENDOR,CASHORDER_SOURCE,HUIFU_PAY_STATE,AddCashOrderReq,HuifuCreateCashOrderScanReq
ExcludeTypes: BaseResponse
DefaultImports: package:servicestack/servicestack.dart,package:bizreport/models/teacher_api_dtos.dart
*/

import { BaseResponse, CommonRequest, IReturn, StudentBaseInfoDTO, KidBaseInfoDTO } from "./base.dtos";
import { PAYMENT_VENDOR } from "./cashier.dtos";

export enum CASHORDER_SOURCE
{
    COURSE_ORDER = 'COURSE_ORDER',
    STUDENT_SCAN = 'STUDENT_SCAN',
    TEACHER_SCAN = 'TEACHER_SCAN',
    TP_SCAN = 'TP_SCAN',
    HEALTHY_PARTNER_MP_CARDCHARGE = 'HEALTHY_PARTNER_MP_CARDCHARGE',
    HEALTHY_PARTNER_MP_PRODUCT = 'HEALTHY_PARTNER_MP_PRODUCT',
    LIBRARY_SCHOOL_MEMBER_CARD = 'LIBRARY_SCHOOL_MEMBER_CARD',
}

export enum HUIFU_PAY_STATE
{
    WAIT_PAY = 'WAIT_PAY',
    PAID_PROCESSING = 'PAID_PROCESSING',
    PAID_SUCCESS = 'PAID_SUCCESS',
    PAID_FAIL = 'PAID_FAIL',
}

export class CashOrderDTO
{
    public id: string;
    public orderNo: string;
    public orderName: string;
    public schoolId: string;
    public branchId: string;
    public vendor: PAYMENT_VENDOR;
    public source: CASHORDER_SOURCE;
    public sourceId: string;
    public amount: number;
    public fee_Amount?: number;
    public settlement_amt?: number;
    public trade_type: string;
    public out_trans_id: string;
    public order_finish_time?: string;
    public order_time: string;
    public pay_Stat: HUIFU_PAY_STATE;
    public end_time?: string;
    public remark: string;
    public huifuTradeId: string;
    public userIPAddr: string;
    public createOn: string;
    public lastModifyOn: string;
    public courseOrderId: string;
    public kidId: string;
    public accountBalanceHistoryId: string;
    public healthyPartnerMemberCardConfigId: string;

    public constructor(init?: Partial<CashOrderDTO>) { (Object as any).assign(this, init); }
}

export class GetScanCodeByTeacherRes extends BaseResponse
{
    public qrcode: string;
    public schoolName: string;

    public constructor(init?: Partial<GetScanCodeByTeacherRes>) { super(init); (Object as any).assign(this, init); }
}

export class AddCashOrderRes extends BaseResponse
{
    public cashOrderId: string;
    public qrcodeUrl: string;
    public qrcodeUrl2: string;

    public constructor(init?: Partial<AddCashOrderRes>) { super(init); (Object as any).assign(this, init); }
}

export class HuifuCreateCashOrderScanRes extends BaseResponse
{

    public constructor(init?: Partial<HuifuCreateCashOrderScanRes>) { super(init); (Object as any).assign(this, init); }
}

// Fallback for missing DTO
export class HealthyPartnerMemberUserDTO
{
    public id?: string;
    public name?: string;
    public constructor(init?: Partial<HealthyPartnerMemberUserDTO>) { (Object as any).assign(this, init); }
}

export class GetCashOrdersRes extends BaseResponse
{
    public total: number;
    public data: CashOrderDTO[];
    public kidInfo: { [index: string]: StudentBaseInfoDTO; };
    public healthyPartnerMembers: { [index: string]: HealthyPartnerMemberUserDTO; };
    public schoolKidInfos: { [index: number]: KidBaseInfoDTO[]; };

    public constructor(init?: Partial<GetCashOrdersRes>) { super(init); (Object as any).assign(this, init); }
}

/** @description 从教师端获取机构支付码 */
// @Route("/payment/getscancodebyteacher", "GET, OPTIONS")
// @Api(Description="从教师端获取机构支付码")
export class GetScanCodeByTeacherReq implements IReturn<GetScanCodeByTeacherRes>
{
    public schoolId: string;

    public constructor(init?: Partial<GetScanCodeByTeacherReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetScanCodeByTeacherReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetScanCodeByTeacherRes(); }
}

/** @description 创建收银订单信息 */
// @Route("/payment/cashorders", "POST, OPTIONS")
// @Api(Description="创建收银订单信息")
export class AddCashOrderReq extends CommonRequest implements IReturn<AddCashOrderRes>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId 不可为空")
    public schoolId: string;

    public branchId: string;
    public source: CASHORDER_SOURCE;
    public sourceId: string;
    public orderName: string;
    public amount: number;

    public constructor(init?: Partial<AddCashOrderReq>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'AddCashOrderReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AddCashOrderRes(); }
}

/** @description CashOrder返扫下单 */
// @Route("/payment/huifucashorderscanpay", "POST, OPTIONS")
// @Api(Description="CashOrder返扫下单")
export class HuifuCreateCashOrderScanReq implements IReturn<HuifuCreateCashOrderScanRes>
{
    public orderId: string;
    public authCode: string;

    public constructor(init?: Partial<HuifuCreateCashOrderScanReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'HuifuCreateCashOrderScanReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new HuifuCreateCashOrderScanRes(); }
}

/** @description 移动端获取收银订单信息 */
// @Route("/payment/cashorderlist", "GET")
// @Api(Description="移动端获取收银订单信息")
export class GetCashOrderListReq implements IReturn<GetCashOrdersRes>
{
    public schoolId: string;
    public lastId: string;
    public pageSize?: number;

    public constructor(init?: Partial<GetCashOrderListReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetCashOrderListReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetCashOrdersRes(); }
}

/** @description 聚合反扫 */
// @Route("/payment/huifumicropay", "POST, OPTIONS")
// @Api(Description="聚合反扫")
export class HuifuCreateMicroPayReq implements IReturn<BaseResponse>
{
    public schoolId: string;
    public branchId: string;
    public amount: number;
    public authCode: string;
    public goods_Desc: string;
    public remark: string;

    public constructor(init?: Partial<HuifuCreateMicroPayReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'HuifuCreateMicroPayReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}
