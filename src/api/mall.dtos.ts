/* Options:
Date: 2023-09-16 20:10:40
Version: 6.80
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://localhost:5000/api/educrm

//GlobalNamespace: 
MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
IncludeTypes: SendVerifyCodeReq,CheckVerifyCodeReq,GetPrivateGiftPointLogsReq,PrivateGiftPointLogDTO,SPREADER_PRIVATE_GIFT_SOURCE_TYPE,SPREADER_LOG_STATE,{h5-mall},WechatComponentUnBindReq
ExcludeTypes: BaseResponse,IReturn
DefaultImports: BaseResponse:./base.dtos,type IReturn:./base.dtos,CommonRequest:./base.dtos,TeacherBaseInfoDTO:./base.dtos,ProTableRequest:./base.dtos,SchoolBaseInfo:./school.dtos
*/

import { BaseResponse } from "./base.dtos";
import { type IReturn } from "./base.dtos";
import { CommonRequest } from "./base.dtos";
import { TeacherBaseInfoDTO } from "./base.dtos";
import { ProTableRequest } from "./base.dtos";
import { SchoolBaseInfo } from "./school.dtos";

export enum MALLSCOPETYPE
{
    SCHOOL = 'SCHOOL',
    HEAD_QUARTER = 'HEAD_QUARTER',
}

export enum MALL_BUY_TYPE
{
    POINT = 'POINT',
    RMB = 'RMB',
    POINT_AND_RMB = 'POINT_AND_RMB',
}

export enum MALL_DELIVERY_TYPE
{
    IN_STORE = 'IN_STORE',
    BY_COURIER = 'BY_COURIER',
}

export enum APP_TYPE
{
    APP_ALL = 0,
    APP_TEACHER = 1,
    APP_PARENT = 2,
    APP_ADMIN = 4,
    APP_PARTNER = 5,
    APP_HEALTHY = 6,
    APP_HEALTHY_MP = 7,
    APP_YOYOLIB = 8,
    APP_YOYOLIB_MP = 9,
    APP_DITUI = 10,
}

export enum SPREADER_PRIVATE_GIFT_SOURCE_TYPE
{
    ACTIVITY_ORDER = 'ACTIVITY_ORDER',
    COURSE_ORDER = 'COURSE_ORDER',
    ROLLBACK = 'ROLLBACK',
    MANUAL = 'MANUAL',
    MALL_BUY = 'MALL_BUY',
}

export class MallSchoolConfigDTO
{
    public id?: string;
    public scopeType?: MALLSCOPETYPE;
    public relationId?: string;
    public mallDomainId?: string;
    public pointName?: string;
    public createOn?: string;
    public lastModifyOn?: string;
    public schoolName?: string;
    public schoolLogo?: string;

    public constructor(init?: Partial<MallSchoolConfigDTO>) { (Object as any).assign(this, init); }
}

export class SwiperImgItem
{
    public imageUrl?: string;
    public targetUrl?: string;

    public constructor(init?: Partial<SwiperImgItem>) { (Object as any).assign(this, init); }
}

export enum MALL_ORDER_STATE
{
    WAIT_CONFIRM = 'WAIT_CONFIRM',
    WAIT_DELIVERY = 'WAIT_DELIVERY',
    FINISHED_DELIVERY = 'FINISHED_DELIVERY',
    ORDER_CANCELED = 'ORDER_CANCELED',
}

export class MallOrderLogDTO
{
    public createOn?: string;
    public method?: string;
    public teacherUserInfoId?: string;
    public name?: string;
    public userIPAddr?: string;

    public constructor(init?: Partial<MallOrderLogDTO>) { (Object as any).assign(this, init); }
}

export class MallOrderDTO
{
    public id?: string;
    public mallId?: string;
    public orderNo?: string;
    public mallGoodsItemId?: string;
    public userId?: number;
    public kidId?: string;
    public kidName?: string;
    public goodsCount?: number;
    public price?: number;
    public pointAmount?: number;
    public totalPoint?: number;
    public totalPrice?: number;
    public deliveryProvince?: string;
    public deliveryCity?: string;
    public deliveryDistrinct?: string;
    public deliveryAddr?: string;
    public deliveryContact?: string;
    public deliveryPhone?: string;
    public deliveryRemark?: string;
    public orderState?: MALL_ORDER_STATE;
    public orderStateStr?: string;
    public createOn?: string;
    public lastModifyOn?: string;
    public goodsName?: string;
    public goodsCoverImg?: string;
    public logs?: MallOrderLogDTO[];

    public constructor(init?: Partial<MallOrderDTO>) { (Object as any).assign(this, init); }
}

export class MallKidInfo
{
    public kidId?: string;
    public name?: string;
    public pointBalance?: number;
    public logoUrl?: string;

    public constructor(init?: Partial<MallKidInfo>) { (Object as any).assign(this, init); }
}

export class MallAddressBookDTO
{
    public id?: string;
    public index?: number;
    public userId?: number;
    public deliveryProvince?: string;
    public deliveryCity?: string;
    public deliveryDistrinct?: string;
    public deliveryAddr?: string;
    public deliveryContact?: string;
    public deliveryPhone?: string;
    public isDefault?: boolean;
    public createOn?: string;
    public lastModifyOn?: string;

    public constructor(init?: Partial<MallAddressBookDTO>) { (Object as any).assign(this, init); }
}

export class MallGoodsCatalogDTO
{
    public id?: string;
    public mallId?: string;
    public name?: string;
    public createOn?: string;
    public lastModifyOn?: string;

    public constructor(init?: Partial<MallGoodsCatalogDTO>) { (Object as any).assign(this, init); }
}

export class GoodsItem
{
    public goodsId?: string;
    public goodsConverImg?: string;
    public goodsName?: string;
    public intro?: string;
    public goodsDetailContant?: string;
    public goodsSwiperImageList?: string[];
    public goodsCatalogIds?: string[];
    public buyType?: MALL_BUY_TYPE;
    public deliveryType?: MALL_DELIVERY_TYPE;
    public stock?: number;
    public originalPointAmount?: number;
    public realPointAmount?: number;
    public originalPrice?: number;
    public realPrice?: number;
    public isSale?: boolean;

    public constructor(init?: Partial<GoodsItem>) { (Object as any).assign(this, init); }
}

export class ShopCartItem
{
    public cartItemId?: string;
    public goodsCount?: number;
    public goodsCoverImg?: string;
    public goodsId?: string;
    public goodsName?: string;
    public price?: number;

    public constructor(init?: Partial<ShopCartItem>) { (Object as any).assign(this, init); }
}

export enum SPREADER_LOG_STATE
{
    INIT = 'INIT',
    WAIT_CONFIRM = 'WAIT_CONFIRM',
    CONFIRM_SUCCESS = 'CONFIRM_SUCCESS',
    CONFIRM_FAIL = 'CONFIRM_FAIL',
    REFUND = 'REFUND',
}

export class PrivateGiftPointLogDTO
{
    public id?: string;
    public schoolId?: string;
    public spreaderId?: string;
    public privateGiftPointId?: string;
    public sourceType?: SPREADER_PRIVATE_GIFT_SOURCE_TYPE;
    public source?: string;
    public logSource?: string;
    public point?: number;
    public balancePoint?: number;
    public createOn?: string;
    public lastModifyOn?: string;
    public userIPAddr?: string;
    public state?: SPREADER_LOG_STATE;
    public createByTeacherUserInfoId?: string;

    public constructor(init?: Partial<PrivateGiftPointLogDTO>) { (Object as any).assign(this, init); }
}

export class GetMallSchoolConfigRes extends BaseResponse
{
    public data?: MallSchoolConfigDTO;

    public constructor(init?: Partial<GetMallSchoolConfigRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetSwiperImgsRes extends BaseResponse
{
    public data?: SwiperImgItem[];

    public constructor(init?: Partial<GetSwiperImgsRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetMallOrderDetailRes extends BaseResponse
{
    public data?: MallOrderDTO;

    public constructor(init?: Partial<GetMallOrderDetailRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetMallOrdersRes extends BaseResponse
{
    public data?: MallOrderDTO[];
    public totalCount?: number;
    public totalPage?: number;

    public constructor(init?: Partial<GetMallOrdersRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetMallMyKidInfoRes extends BaseResponse
{
    public userId?: number;
    public phoneNumber?: string;
    public data?: MallKidInfo[];

    public constructor(init?: Partial<GetMallMyKidInfoRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetAddressBookRes extends BaseResponse
{
    public data?: MallAddressBookDTO;

    public constructor(init?: Partial<GetAddressBookRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetAddressBooksRes extends BaseResponse
{
    public data?: MallAddressBookDTO[];

    public constructor(init?: Partial<GetAddressBooksRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetMallGoodsCatalogRes extends BaseResponse
{
    public data?: MallGoodsCatalogDTO;

    public constructor(init?: Partial<GetMallGoodsCatalogRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetMallGoodsCatalogsRes extends BaseResponse
{
    public data?: MallGoodsCatalogDTO[];

    public constructor(init?: Partial<GetMallGoodsCatalogsRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetGoodsDetailRes extends BaseResponse
{
    public data?: GoodsItem;

    public constructor(init?: Partial<GetGoodsDetailRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetShopCartRes extends BaseResponse
{
    public data?: ShopCartItem[];

    public constructor(init?: Partial<GetShopCartRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetGoodsListRes extends BaseResponse
{
    public data?: GoodsItem[];
    public totalCount?: number;

    public constructor(init?: Partial<GetGoodsListRes>) { super(init); (Object as any).assign(this, init); }
}

export class WechatComponentBindRes extends BaseResponse
{
    public needBindKid?: boolean;
    public phoneNumber?: string;
    public needBindSchoolId?: string;
    public bindKidToken?: string;
    public mToken?: string;
    public bearerToken?: string;

    public constructor(init?: Partial<WechatComponentBindRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetPrivateGiftPointLogsRes extends BaseResponse
{
    public total?: number;
    public data?: PrivateGiftPointLogDTO[];
    public teacherInfo?: { [index: string]: TeacherBaseInfoDTO; };

    public constructor(init?: Partial<GetPrivateGiftPointLogsRes>) { super(init); (Object as any).assign(this, init); }
}

export class CheckVerifyCodeRes extends BaseResponse
{
    public token?: string;

    public constructor(init?: Partial<CheckVerifyCodeRes>) { super(init); (Object as any).assign(this, init); }
}

export class SendVerifyCodeRes
{
    public ret?: boolean;
    public message?: string;
    public needBindKid?: boolean;
    public bindKidToken?: string;
    public bindKidUrl?: string;
    public schoolInfos?: SchoolBaseInfo[];

    public constructor(init?: Partial<SendVerifyCodeRes>) { (Object as any).assign(this, init); }
}

/** @description 获取h5Mall的配置 */
// @Route("/mall/mallschoolconfigbyschoolid/{RelateId}", "GET, OPTIONS")
// @Api(Description="获取h5Mall的配置")
export class GetMallSchoolConfigBySchoolIdReq implements IReturn<GetMallSchoolConfigRes>
{
    public relateId?: string;
    public scopeType?: MALLSCOPETYPE;

    public constructor(init?: Partial<GetMallSchoolConfigBySchoolIdReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMallSchoolConfigBySchoolIdReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetMallSchoolConfigRes(); }
}

/** @description 获取h5Mall的配置 */
// @Route("/mall/mallschoolconfig/{MallDomainId}", "GET, OPTIONS")
// @Api(Description="获取h5Mall的配置")
export class GetMallSchoolConfigReq implements IReturn<GetMallSchoolConfigRes>
{
    public mallDomainId?: string;

    public constructor(init?: Partial<GetMallSchoolConfigReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMallSchoolConfigReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetMallSchoolConfigRes(); }
}

/** @description 获取h5Mall的滚动图片 */
// @Route("/mall/swiperimgs", "GET, OPTIONS")
// @Api(Description="获取h5Mall的滚动图片")
export class GetSwiperImgsReq implements IReturn<GetSwiperImgsRes>
{
    public schoolId?: string;

    public constructor(init?: Partial<GetSwiperImgsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSwiperImgsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSwiperImgsRes(); }
}

/** @description 审核订单状态 */
// @Route("/mall/confirmorderstate", "POST, OPTIONS")
// @Api(Description="审核订单状态")
export class ConfirmMallOrderStateReq implements IReturn<BaseResponse>
{
    public mallId?: string;
    public mallOrderId?: string;
    public allow?: boolean;

    public constructor(init?: Partial<ConfirmMallOrderStateReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'ConfirmMallOrderStateReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 订单确认发货 */
// @Route("/mall/finishorderstate", "POST, OPTIONS")
// @Api(Description="订单确认发货")
export class FinishMallOrderStateReq implements IReturn<BaseResponse>
{
    public mallId?: string;
    public mallOrderId?: string;

    public constructor(init?: Partial<FinishMallOrderStateReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'FinishMallOrderStateReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取订单详情 */
// @Route("/mall/orders/{MallOrderId}", "GET, OPTIONS")
// @Api(Description="获取订单详情")
export class GetSchoolMallOrderDetailReq implements IReturn<GetMallOrderDetailRes>
{
    public mallId?: string;
    public mallOrderId?: string;

    public constructor(init?: Partial<GetSchoolMallOrderDetailReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolMallOrderDetailReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetMallOrderDetailRes(); }
}

/** @description 获取订单详情 */
// @Route("/mall/myorders/{MallOrderId}", "GET, OPTIONS")
// @Api(Description="获取订单详情")
export class GetMallOrderDetailReq implements IReturn<GetMallOrderDetailRes>
{
    public schoolId?: string;
    public mallId?: string;
    public mallOrderId?: string;

    public constructor(init?: Partial<GetMallOrderDetailReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMallOrderDetailReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetMallOrderDetailRes(); }
}

/** @description 获取所有订单列表 */
// @Route("/mall/schoolorders", "GET, OPTIONS")
// @Api(Description="获取所有订单列表")
export class GetMallSchoolOrdersReq implements IReturn<GetMallOrdersRes>
{
    public mallId?: string;
    public orderState?: string;
    public pageIndex?: number;
    public pageSize?: number;

    public constructor(init?: Partial<GetMallSchoolOrdersReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMallSchoolOrdersReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetMallOrdersRes(); }
}

/** @description 获取订单列表 */
// @Route("/mall/myorders", "GET, OPTIONS")
// @Api(Description="获取订单列表")
export class GetMallOrdersReq implements IReturn<GetMallOrdersRes>
{
    public schoolId?: string;
    public mallId?: string;
    public orderState?: string;
    public pageIndex?: number;
    public pageSize?: number;

    public constructor(init?: Partial<GetMallOrdersReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMallOrdersReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetMallOrdersRes(); }
}

/** @description 删除收货地址 */
// @Route("/mall/deleteaddressbooks", "POST, OPTIONS")
// @Api(Description="删除收货地址")
export class DeleteDeliveryAddrReq implements IReturn<BaseResponse>
{
    public addressIndex?: number;

    public constructor(init?: Partial<DeleteDeliveryAddrReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteDeliveryAddrReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取关联的学员信息 */
// @Route("/mall/mykidinfo", "GET, OPTIONS")
// @Api(Description="获取关联的学员信息")
export class GetMallMyKidInfoReq implements IReturn<GetMallMyKidInfoRes>
{
    public mallId?: string;
    public schoolId?: string;

    public constructor(init?: Partial<GetMallMyKidInfoReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMallMyKidInfoReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetMallMyKidInfoRes(); }
}

/** @description 下订单 */
// @Route("/mall/createorder", "POST, OPTIONS")
// @Api(Description="下订单")
export class CreateMallOrderReq implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public mallId?: string;
    public mallGoodsItemId?: string;
    public kidId?: string;
    public goodsCount?: number;
    public addressIndex?: number;

    public constructor(init?: Partial<CreateMallOrderReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateMallOrderReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 修改收货地址 */
// @Route("/mall/addressbooks/{AddressIndex}", "POST, OPTIONS")
// @Api(Description="修改收货地址")
export class UpdateDeliveryAddrReq implements IReturn<BaseResponse>
{
    public addressIndex?: number;
    public deliveryProvince?: string;
    public deliveryCity?: string;
    public deliveryDistrinct?: string;
    public deliveryAddr?: string;
    public deliveryContact?: string;
    public deliveryPhone?: string;
    public isDefault?: boolean;

    public constructor(init?: Partial<UpdateDeliveryAddrReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateDeliveryAddrReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 增加商品目录 */
// @Route("/mall/mallgoodscatalogs", "POST, OPTIONS")
// @Api(Description="增加商品目录")
export class AddMallGoodsCatalogReq implements IReturn<BaseResponse>
{
    public name?: string;
    public mallId?: string;

    public constructor(init?: Partial<AddMallGoodsCatalogReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddMallGoodsCatalogReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取收货地址详情 */
// @Route("/mall/addressbook", "GET, OPTIONS")
// @Api(Description="获取收货地址详情")
export class GetAddressBookReq implements IReturn<GetAddressBookRes>
{
    public addressIndex?: number;

    public constructor(init?: Partial<GetAddressBookReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetAddressBookReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetAddressBookRes(); }
}

/** @description 获取收货地址列表 */
// @Route("/mall/addressbooks", "GET, OPTIONS")
// @Api(Description="获取收货地址列表")
export class GetAddressBooksReq implements IReturn<GetAddressBooksRes>
{

    public constructor(init?: Partial<GetAddressBooksReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetAddressBooksReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetAddressBooksRes(); }
}

/** @description 增加收货地址 */
// @Route("/mall/addressbooks", "POST, OPTIONS")
// @Api(Description="增加收货地址")
export class AddDeliveryAddrReq implements IReturn<BaseResponse>
{
    public deliveryProvince?: string;
    public deliveryCity?: string;
    public deliveryDistrinct?: string;
    public deliveryAddr?: string;
    public deliveryContact?: string;
    public deliveryPhone?: string;
    public isDefault?: boolean;

    public constructor(init?: Partial<AddDeliveryAddrReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddDeliveryAddrReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 更新商品上架状态 */
// @Route("/mall/updategoodsissalestate", "POST, OPTIONS")
// @Api(Description="更新商品上架状态")
export class UpdateGoodsIsSaleStateReq implements IReturn<BaseResponse>
{
    public mallId?: string;
    public goodsId?: string;
    public isSale?: boolean;

    public constructor(init?: Partial<UpdateGoodsIsSaleStateReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateGoodsIsSaleStateReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 删除商品目录 */
// @Route("/mall/deletemallgoodscatalog/{CatalogId}", "POST, OPTIONS")
// @Api(Description="删除商品目录")
export class DeleteMallGoodsCatalogReq implements IReturn<BaseResponse>
{
    public mallId?: string;
    public catalogId?: string;

    public constructor(init?: Partial<DeleteMallGoodsCatalogReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteMallGoodsCatalogReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 更新商品目录 */
// @Route("/mall/mallgoodscatalog/{CatalogId}", "POST, OPTIONS")
// @Api(Description="更新商品目录")
export class UpdateMallGoodsCatalogReq implements IReturn<BaseResponse>
{
    public mallId?: string;
    public catalogId?: string;
    public name?: string;

    public constructor(init?: Partial<UpdateMallGoodsCatalogReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateMallGoodsCatalogReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取商品单个目录 */
// @Route("/mall/mallgoodscatalog/{CatalogId}", "GET, OPTIONS")
// @Api(Description="获取商品单个目录")
export class GetMallGoodsCatalogReq implements IReturn<GetMallGoodsCatalogRes>
{
    public mallId?: string;
    public catalogId?: string;

    public constructor(init?: Partial<GetMallGoodsCatalogReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMallGoodsCatalogReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetMallGoodsCatalogRes(); }
}

/** @description 获取商品目录 */
// @Route("/mall/mallgoodscatalogs", "GET, OPTIONS")
// @Api(Description="获取商品目录")
export class GetMallGoodsCatalogsReq implements IReturn<GetMallGoodsCatalogsRes>
{
    public schoolId?: string;
    public mallId?: string;

    public constructor(init?: Partial<GetMallGoodsCatalogsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMallGoodsCatalogsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetMallGoodsCatalogsRes(); }
}

/** @description 增加商城配置 */
// @Route("/mall/mallschoolconfigs", "POST, OPTIONS")
// @Api(Description="增加商城配置")
export class AddMallSchoolConfigsReq implements IReturn<BaseResponse>
{
    public scopeType?: MALLSCOPETYPE;
    public relationId?: string;

    public constructor(init?: Partial<AddMallSchoolConfigsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddMallSchoolConfigsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 增加商品 */
// @Route("/mall/mallgoodsitems", "POST, OPTIONS")
// @Api(Description="增加商品")
export class AddGoodsItemReq implements IReturn<BaseResponse>
{
    public goodsId?: string;
    public mallId?: string;
    public mallGoodsCatalogIds?: string[];
    public name?: string;
    public converImg?: string;
    public detailContent?: string;
    public swiperImageList?: string[];
    public buyType?: MALL_BUY_TYPE;
    public deliveryType?: MALL_DELIVERY_TYPE;
    public stock?: number;
    public originalPointAmount?: number;
    public realPointAmount?: number;
    public originalPrice?: number;
    public realPrice?: number;
    public isSale?: boolean;

    public constructor(init?: Partial<AddGoodsItemReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddGoodsItemReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取h5mall商品详情 */
// @Route("/mall/goodsdetail", "GET, OPTIONS")
// @Api(Description="获取h5mall商品详情")
export class GetGoodsDetailReq implements IReturn<GetGoodsDetailRes>
{
    public schoolId?: string;
    public goodsId?: string;

    public constructor(init?: Partial<GetGoodsDetailReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetGoodsDetailReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetGoodsDetailRes(); }
}

/** @description 获取h5mall购物车 */
// @Route("/mall/goodsdetail", "GET, OPTIONS")
// @Api(Description="获取h5mall购物车")
export class GetShopCartReq implements IReturn<GetShopCartRes>
{
    public mallId?: string;

    public constructor(init?: Partial<GetShopCartReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetShopCartReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetShopCartRes(); }
}

/** @description 获取h5mall商品列表 */
// @Route("/mall/goodslist", "GET, OPTIONS")
// @Api(Description="获取h5mall商品列表")
export class GetGoodsListReq implements IReturn<GetGoodsListRes>
{
    public schoolId?: string;
    public mallId?: string;
    public catalogId?: string;
    public includeNotSale?: boolean;
    public pageIndex?: number;
    public pageSize?: number;
    public filterCanRedeem?: boolean;
    public kidId?: string;

    public constructor(init?: Partial<GetGoodsListReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetGoodsListReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetGoodsListRes(); }
}

/** @description 微信H5用户绑定 */
// @Route("/wechatmp/userbind2", "POST, OPTIONS")
// @Api(Description="微信H5用户绑定")
export class WechatComponentBindUserReq implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public appId?: APP_TYPE;
    public authorizer_OpenId?: string;
    public component_appid?: string;
    public authorizer_appid?: string;
    public isWx3rdCloud?: boolean;

    public constructor(init?: Partial<WechatComponentBindUserReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'WechatComponentBindUserReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 微信H5用户激活绑定 */
// @Route("/wechatmp/userbind", "POST, OPTIONS")
// @Api(Description="微信H5用户激活绑定")
export class WechatComponentBindReq implements IReturn<WechatComponentBindRes>
{
    public schoolId?: string;
    public phoneCode?: string;
    public phoneNumber?: string;
    public verifyCode?: string;
    public authorizer_OpenId?: string;
    public component_appid?: string;
    public authorizer_appid?: string;
    public needToken?: boolean;
    public isWx3rdCloud?: boolean;
    public healthyPartnerId?: string;

    public constructor(init?: Partial<WechatComponentBindReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'WechatComponentBindReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new WechatComponentBindRes(); }
}

/** @description 微信H5用户取消绑定 */
// @Route("/wechatmp/unbind", "POST, OPTIONS")
// @Api(Description="微信H5用户取消绑定")
export class WechatComponentUnBindReq implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public authorizer_OpenId?: string;

    public constructor(init?: Partial<WechatComponentUnBindReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'WechatComponentUnBindReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取积分日志 */
// @Route("/privategift/point/logs", "POST")
// @Api(Description="获取积分日志")
export class GetPrivateGiftPointLogsReq extends ProTableRequest implements IReturn<GetPrivateGiftPointLogsRes>
{
    public schoolId?: string;
    public kidId?: string;
    public createOn?: string[];
    public lastModifyOn?: string[];

    public constructor(init?: Partial<GetPrivateGiftPointLogsReq>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetPrivateGiftPointLogsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetPrivateGiftPointLogsRes(); }
}

// @Route("/system/checkverifycode", "POST, OPTIONS")
export class CheckVerifyCodeReq implements IReturn<CheckVerifyCodeRes>
{
    public phonenumber?: string;
    public codetype?: string;
    public code?: string;

    public constructor(init?: Partial<CheckVerifyCodeReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CheckVerifyCodeReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CheckVerifyCodeRes(); }
}

// @Route("/system/sendverifycode", "POST, OPTIONS")
export class SendVerifyCodeReq extends CommonRequest implements IReturn<SendVerifyCodeRes>
{
    public phonenumber?: string;
    public codetype?: string;
    public nc?: string;
    public sessionid?: string;
    public sig?: string;
    public token?: string;
    public scene?: string;
    public captchaId?: number;
    public ticket?: string;
    public randstr?: string;
    public checkUnbindKid?: boolean;

    public constructor(init?: Partial<SendVerifyCodeReq>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SendVerifyCodeReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new SendVerifyCodeRes(); }
}

