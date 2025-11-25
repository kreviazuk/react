/* Options:
Date: 2024-02-19 13:02:50
Version: 8.0
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://apigwtest.yban.co/api/educrm

//GlobalNamespace: 
MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
IncludeTypes: IReturn`1,IHasSessionId,IHasBearerToken,BaseResponse,CommonRequest,OSTYPE,WEWORK_SCOPE_TYPE,{wework-h5},{speakingArt},ICommonRequest,WeworkContactFollowUserDTO,WeworkContactFollowUserTagDTO,WeworkContactFollowUserWechatChannelsDTO,WeworkSalesLeadAddStudentReq,WeworkGetStudentBaseInfoReq,PARENTACCOUNTSTATUS,ParentRelationClassInfoDTO,UpdateCustomerPhoneNumberReq,WeworkContactDTO,FOLLOWUP_STATE,FOLLOWUP_RESULT,CUSTOM_INTENT_TYPE,WeworkSalesLeadDTO,GetCustomerInfoReq,BindCorpUserReq,GetWeworkUserInfoReq,GetAgentInfoReq,AgentInfo,AgentInfoPrivilege,GetWeworkJsConfigReq,WeworkJsSdkConfig,SendVerifyCodeReq,SchoolBaseInfo,GetSchoolKidCourseBalanceReq,KidCourseBalanceItem,CourseSaleItemType,CourseOrderDTO,CourseOrderType,KidCourseBalanceTransferItem,FeeBalanceTransferItem,CourseOrderItem,CourseOrderPaymentItem,CourseOrderState,CourseOrderPaymentType,CourseOrderItemType,CourseOrderItemType,GetCourseConsumLogsReq,COURSE_LOG_SOURCE,CourseConsumLogDTO,ClassTimeDTO,ClassTimeTeacherInfoMapDTO,ClassTimeState,ClassTimeSignInfoDTO,TEACHER_CLASS_ROLE,ClassTimeSignState,ClassTimeStudentType,GetCourseOrdersReq,CourseItem,PrivateGiftCardDTO,CourseSaleItemDTO,CourseSignType,SPREADER_PRIVATE_GIFT_SOURCE_TYPE,GetCoursesReq
ExcludeTypes: IReturn,CommonReturn,BaseResponse
DefaultImports: IReturn:./base.dtos,BaseResponse:./base.dtos,StudentBaseInfoDTO:./base.dtos
*/

import { IReturn } from "./base.dtos";
import { BaseResponse } from "./base.dtos";
import { StudentBaseInfoDTO } from "./base.dtos";

export interface IHasSessionId
{
    sessionId?: string;
}

export interface IHasBearerToken
{
    bearerToken?: string;
}

export enum OSTYPE
{
    ANDROID = 'ANDROID',
    IOS = 'IOS',
}

export class CommonRequest implements ICommonRequest
{
    public appId?: number;
    public platform?: number;
    public osType?: OSTYPE;
    public version?: string;
    public buildNumber?: string;

    public constructor(init?: Partial<CommonRequest>) { (Object as any).assign(this, init); }
}

export interface ICommonRequest
{
    appId?: number;
    platform?: number;
    version?: string;
    buildNumber?: string;
    osType?: OSTYPE;
}

export enum ORDER_DIRECTION
{
    ascend = 'ascend',
    descend = 'descend',
}

export enum MALLSCOPETYPE
{
    SCHOOL = 'SCHOOL',
    HEAD_QUARTER = 'HEAD_QUARTER',
}

export enum TEACHER_CLASS_ROLE
{
    MASTER_TEACHER = 'MASTER_TEACHER',
    ASSISTANT_TEACHER = 'ASSISTANT_TEACHER',
    CARE_TEACHER = 'CARE_TEACHER',
    OTHER_TEACHER = 'OTHER_TEACHER',
}

export class EventAttachImageItemDTO
{
    public ossInfoId?: string;
    public orderIndex?: number;
    public rotate?: number;

    public constructor(init?: Partial<EventAttachImageItemDTO>) { (Object as any).assign(this, init); }
}

export class EventAttachVideoItemDTO
{
    public ossInfoId?: string;

    public constructor(init?: Partial<EventAttachVideoItemDTO>) { (Object as any).assign(this, init); }
}

export class EventAttachAudioItemDTO
{
    public ossInfoId?: string;

    public constructor(init?: Partial<EventAttachAudioItemDTO>) { (Object as any).assign(this, init); }
}

export class EventAttachFileItemDTO
{
    public ossInfoId?: string;

    public constructor(init?: Partial<EventAttachFileItemDTO>) { (Object as any).assign(this, init); }
}

export class EventAttachLinkItemDTO
{
    public linkUrl?: string;
    public linkTitle?: string;
    public linkIcon?: string;

    public constructor(init?: Partial<EventAttachLinkItemDTO>) { (Object as any).assign(this, init); }
}

export class EventAttachTingItemDTO
{
    public albumId?: string;
    public trackId?: string;
    public albumTitle?: string;
    public albumDesc?: string;
    public albumImageUrl?: string;

    public constructor(init?: Partial<EventAttachTingItemDTO>) { (Object as any).assign(this, init); }
}

export class EventAttachDTO
{
    public imageItems?: EventAttachImageItemDTO[];
    public videoItems?: EventAttachVideoItemDTO[];
    public audioItems?: EventAttachAudioItemDTO[];
    public fileItems?: EventAttachFileItemDTO[];
    public linkItems?: EventAttachLinkItemDTO[];
    public tingItems?: EventAttachTingItemDTO[];
    public videoItem?: EventAttachVideoItemDTO;
    public audioItem?: EventAttachAudioItemDTO;
    public fileItem?: EventAttachFileItemDTO;
    public linkItem?: EventAttachLinkItemDTO;
    public tingItem?: EventAttachTingItemDTO;

    public constructor(init?: Partial<EventAttachDTO>) { (Object as any).assign(this, init); }
}

export enum CourseSignType
{
    SIGN = 'SIGN',
    TIME = 'TIME',
    MONTH = 'MONTH',
    MONTHDAY = 'MONTHDAY',
}

export enum CourseSaleItemType
{
    SIGN = 'SIGN',
    DAY = 'DAY',
    MONTH = 'MONTH',
    MONTHDAY = 'MONTHDAY',
}

export class CourseSaleItemDTO
{
    public id?: string;
    public name?: string;
    public amount?: string;
    public totalPrice?: string;
    public price?: string;
    public type?: CourseSaleItemType;
    public unit?: string;
    public saleUnit?: string;
    public maxGiftAmount?: string;

    public constructor(init?: Partial<CourseSaleItemDTO>) { (Object as any).assign(this, init); }
}

export enum ClassTimeState
{
    UNSIGN = 'UNSIGN',
    SIGNED = 'SIGNED',
    CANCELLED = 'CANCELLED',
}

export enum ClassTimeSignState
{
    UNSIGN = 'UNSIGN',
    OK = 'OK',
    LATE = 'LATE',
    LEAVE = 'LEAVE',
    ABSENCE = 'ABSENCE',
}

export enum ClassTimeStudentType
{
    FIXED = 'FIXED',
    TEMPORARY = 'TEMPORARY',
    DEMO = 'DEMO',
}

export class ClassTimeSignInfoDTO
{
    public kidId?: string;
    public state?: ClassTimeSignState;
    public usedCourseHour?: number;
    public studentType?: ClassTimeStudentType;
    public remark?: string;
    public isAppointment?: boolean;
    public isMakeUp?: boolean;
    public makeUpClassTimeId?: string;
    public orgStudentCourseId?: string;

    public constructor(init?: Partial<ClassTimeSignInfoDTO>) { (Object as any).assign(this, init); }
}

export class ClassTimeTeacherInfoMapDTO
{
    public id?: string;
    public classTimeId?: string;
    public schoolId?: string;
    public branchId?: string;
    public classId?: string;
    public userId?: number;
    public teacherUserInfoId?: string;
    public roleType?: TEACHER_CLASS_ROLE;
    public createOn?: string;
    public lastModifyOn?: string;

    public constructor(init?: Partial<ClassTimeTeacherInfoMapDTO>) { (Object as any).assign(this, init); }
}

export enum COURSE_LOG_SOURCE
{
    SIGN = 'SIGN',
    MODIFY_SIGN = 'MODIFY_SIGN',
    VOID = 'VOID',
    BUYCONTENT = 'BUYCONTENT',
    SYSTEM_SIGN = 'SYSTEM_SIGN',
    REVERSAL = 'REVERSAL',
    MODIFY = 'MODIFY',
    REFUND = 'REFUND',
    TRANSFEROUT = 'TRANSFEROUT',
    TRANSFER_IN = 'TRANSFER_IN',
    COURSE_ORDER_IN = 'COURSE_ORDER_IN',
}

export class KidCourseBalanceTransferItem
{
    public orgStudentCourseId?: string;
    public branchId?: string;
    public courseOrderId?: string;
    public courseId?: string;
    public type?: CourseSaleItemType;
    public unit?: string;
    public totalPrice?: number;
    public amount?: number;
    public giftAmount?: number;
    public transferOutAmount?: number;
    public transferOutGiftAmount?: number;
    public transferOutTotalPrice?: number;
    public bankFee?: number;
    public fee?: number;

    public constructor(init?: Partial<KidCourseBalanceTransferItem>) { (Object as any).assign(this, init); }
}

export enum CourseOrderItemType
{
    COURSE = 'COURSE',
    PRODUCT = 'PRODUCT',
    FEE = 'FEE',
}

export class FeeBalanceTransferItem
{
    public courseOrderId?: string;
    public productName?: string;
    public branchId?: string;
    public type?: CourseOrderItemType;
    public unit?: string;
    public schoolProductId?: string;
    public schoolSKUItemId?: string;
    public schoolFeeItemId?: string;
    public backToStock?: boolean;
    public price?: number;
    public transferOutAmount?: number;
    public transferOutTotalPrice?: number;
    public bankFee?: number;
    public fee?: number;

    public constructor(init?: Partial<FeeBalanceTransferItem>) { (Object as any).assign(this, init); }
}

export enum CourseOrderType
{
    BAOMING = 'BAOMING',
    SALELEAD = 'SALELEAD',
    CHONGZHI = 'CHONGZHI',
    ZHUANKE = 'ZHUANKE',
    TUIKE = 'TUIKE',
    TUIWUPING = 'TUIWUPING',
    TUIFEIYONG = 'TUIFEIYONG',
    TUIKUAN = 'TUIKUAN',
}

export enum CUSTOM_INTENT_TYPE
{
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
    HIGHER = 'HIGHER',
}

export enum FOLLOWUP_STATE
{
    WAIT_ALLOCATE = 'WAIT_ALLOCATE',
    PRIVATE_ALLOCATE = 'PRIVATE_ALLOCATE',
    PUBLIC_ALLOCATE = 'PUBLIC_ALLOCATE',
    FOLLOWING = 'FOLLOWING',
    FINISHED = 'FINISHED',
}

export enum FOLLOWUP_RESULT
{
    JIANLILIANXI = 'JIANLILIANXI',
    QUERENYIXIANG = 'QUERENYIXIANG',
    CHENGNUODAOFANG = 'CHENGNUODAOFANG',
    YUYUESHITING = 'YUYUESHITING',
    WANCHENGSHITING = 'WANCHENGSHITING',
    FINISH_ORDER = 'FINISH_ORDER',
}

export class CourseOrderItem
{
    public id?: string;
    public fadadaContractId?: string;
    public unit?: string;
    public saleUnit?: string;
    public colorId?: number;
    public productName?: string;
    public courseCategory?: string;
    public type?: CourseOrderItemType;
    public courseSaleType?: CourseSaleItemType;
    public courseId?: string;
    public courseItemId?: string;
    public courseItemName?: string;
    public schoolProductId?: string;
    public schoolSKUItemId?: string;
    public schoolFeeItemId?: string;
    public amount?: number;
    public giftAmount?: number;
    public classIds?: string[];
    public beginDate?: string;
    public endDate?: string;
    public expireOn?: string;
    public payable?: number;
    public orderAmount?: number;
    public totalPrice?: number;
    public auditPrice?: number;
    public price?: number;
    public refundAmount?: number;
    public subType?: string;
    public subMoney?: number;
    public subPercent?: number;

    public constructor(init?: Partial<CourseOrderItem>) { (Object as any).assign(this, init); }
}

export enum CourseOrderPaymentType
{
    OTHER = 'OTHER',
    YOYO = 'YOYO',
    YOYO_BALANCE = 'YOYO_BALANCE',
}

export enum CourseOrderState
{
    WAIT_PAYMENT = 'WAIT_PAYMENT',
    FINISH_PAYMENT = 'FINISH_PAYMENT',
    ARREARS = 'ARREARS',
    CANCEL = 'CANCEL',
    DISCARD = 'DISCARD',
}

export class CourseOrderPaymentItem
{
    public id?: string;
    public type?: CourseOrderPaymentType;
    public paymentState?: CourseOrderState;
    public paymentType?: string;
    public bankUserName?: string;
    public bankAccount?: string;
    public bankName?: string;
    public bankBranchName?: string;
    public payment?: number;
    public paymentReceiptUrl?: string;

    public constructor(init?: Partial<CourseOrderPaymentItem>) { (Object as any).assign(this, init); }
}

export class SpeakingArtCatalogDTO
{
    public id?: string;
    public schoolId?: string;
    public name?: string;
    public isDelete?: boolean;
    public deleteBy?: string;
    public deleteOn?: string;
    public deleteIPAddr?: string;
    public createBy?: string;
    public createOn?: string;
    public lastModifyOn?: string;
    public orderIndex?: number;

    public constructor(init?: Partial<SpeakingArtCatalogDTO>) { (Object as any).assign(this, init); }
}

export class SpeakingArtItemDTO
{
    public id?: string;
    public schoolId?: string;
    public speakingArtCatalogId?: string;
    public title?: string;
    public content?: string;
    public attachment?: EventAttachDTO;
    public orderIndex?: number;
    public isDelete?: boolean;
    public deleteBy?: string;
    public deleteOn?: string;
    public deleteIPAddr?: string;
    public createBy?: string;
    public createIPAddr?: string;
    public createOn?: string;
    public lastModifyOn?: string;

    public constructor(init?: Partial<SpeakingArtItemDTO>) { (Object as any).assign(this, init); }
}

export enum SPREADER_PRIVATE_GIFT_SOURCE_TYPE
{
    ACTIVITY_ORDER = 'ACTIVITY_ORDER',
    COURSE_ORDER = 'COURSE_ORDER',
    ROLLBACK = 'ROLLBACK',
    MANUAL = 'MANUAL',
    MALL_BUY = 'MALL_BUY',
}

export enum PARENTACCOUNTSTATUS
{
    STATUS_NONE = 'STATUS_NONE',
    STATUS_INVITE = 'STATUS_INVITE',
    STATUS_LOGINED = 'STATUS_LOGINED',
    STATUS_DISABLED = 'STATUS_DISABLED',
}

export class ParentRelationClassInfoDTO
{
    public parentRelationSchoolInfoId?: string;
    public profileId?: string;
    public isDefault?: boolean;
    public userId?: number;
    public roleName?: string;
    public phoneNumber?: string;
    public imClientId?: string;
    public rongCloudUserId?: string;
    public easeMobUserId?: string;
    public parentId?: string;
    public kidId?: string;
    public inviteStatus?: PARENTACCOUNTSTATUS;

    public constructor(init?: Partial<ParentRelationClassInfoDTO>) { (Object as any).assign(this, init); }
}

export enum WEWORK_CONTACTWAY_TYPE
{
    PERSONAL = 1,
    CHANNEL = 2,
}

export enum WEWORK_CONTACTWAY_SCENE
{
    MINIPROGRAME = 1,
    QRCODE = 2,
}

export class WeworkAttachmentItemImage
{
    public mediainfo_id?: string;
    public media_id?: string;

    public constructor(init?: Partial<WeworkAttachmentItemImage>) { (Object as any).assign(this, init); }
}

export class WeworkAttachmentItemLink
{
    public title?: string;
    public picurl?: string;
    public desc?: string;
    public url?: string;

    public constructor(init?: Partial<WeworkAttachmentItemLink>) { (Object as any).assign(this, init); }
}

export class WeworkAttachmentItemMiniPrograme
{
    public title?: string;
    public pic_media_id?: string;
    public appid?: string;
    public page?: string;

    public constructor(init?: Partial<WeworkAttachmentItemMiniPrograme>) { (Object as any).assign(this, init); }
}

export class WeworkAttachmentItemVideo
{
    public mediainfo_id?: string;
    public media_id?: string;

    public constructor(init?: Partial<WeworkAttachmentItemVideo>) { (Object as any).assign(this, init); }
}

export class WeworkAttachmentItemFile
{
    public mediainfo_id?: string;
    public media_id?: string;

    public constructor(init?: Partial<WeworkAttachmentItemFile>) { (Object as any).assign(this, init); }
}

export class WeworkAttachmentItem
{
    public msgtype?: string;
    public image?: WeworkAttachmentItemImage;
    public link?: WeworkAttachmentItemLink;
    public miniprogram?: WeworkAttachmentItemMiniPrograme;
    public video?: WeworkAttachmentItemVideo;
    public file?: WeworkAttachmentItemFile;
    public fileOssUrl?: string;
    public fileName?: string;

    public constructor(init?: Partial<WeworkAttachmentItem>) { (Object as any).assign(this, init); }
}

export enum WEWORK_CONTACTACTIVITY_TYPE
{
    CONTACT_TYPE = 'CONTACT_TYPE',
    FOLLOW_TYPE = 'FOLLOW_TYPE',
}

// @DataContract
export class ResponseError
{
    // @DataMember(Order=1)
    public errorCode?: string;

    // @DataMember(Order=2)
    public fieldName?: string;

    // @DataMember(Order=3)
    public message?: string;

    // @DataMember(Order=4)
    public meta?: { [index: string]: string; };

    public constructor(init?: Partial<ResponseError>) { (Object as any).assign(this, init); }
}

// @DataContract
export class ResponseStatus
{
    // @DataMember(Order=1)
    public errorCode?: string;

    // @DataMember(Order=2)
    public message?: string;

    // @DataMember(Order=3)
    public stackTrace?: string;

    // @DataMember(Order=4)
    public errors?: ResponseError[];

    // @DataMember(Order=5)
    public meta?: { [index: string]: string; };

    public constructor(init?: Partial<ResponseStatus>) { (Object as any).assign(this, init); }
}

export class OssInfoDTO
{
    public resId?: string;
    public fileUri?: string;
    public thumbnilUri?: string;
    public playSeconds?: number;
    public aspectRatio?: string;
    public fileExt?: string;
    public fileName?: string;
    public imageWidth?: number;
    public imageHeight?: number;

    public constructor(init?: Partial<OssInfoDTO>) { (Object as any).assign(this, init); }
}

export class TeacherBaseInfoDTO
{
    public id?: string;
    public schoolId?: string;
    public fullName?: string;
    public nickName?: string;
    public phoneNumber?: string;
    public logoUrl?: string;
    public userProfileId?: string;

    public constructor(init?: Partial<TeacherBaseInfoDTO>) { (Object as any).assign(this, init); }
}

export class ClassTimeDTO
{
    public id?: string;
    public scheduleId?: string;
    public schoolId?: string;
    public classId?: string;
    public courseSubject?: string[];
    public beginTime?: string;
    public endTime?: string;
    public startMinute?: number;
    public endMinute?: number;
    public index?: number;
    public signTime?: string;
    public signInfos?: ClassTimeSignInfoDTO[];
    public createOn?: string;
    public lastModifyOn?: string;
    public fixedStudentIds?: string[];
    public temporaryStudentIds?: string[];
    public demoStudentIds?: string[];
    public signTeacherUserInfoId?: string;
    public teacherUserInfoIds?: string[];
    public classTimeTeacherMaps?: ClassTimeTeacherInfoMapDTO[];
    public state?: ClassTimeState;
    public branchId?: string;
    public totalCourseHour?: number;
    public totalPrice?: number;
    public canAppointmentValue?: boolean;
    public appointmentCountValue?: number;
    public canAppointment?: boolean;
    public isBeforeAppointmentTime?: boolean;
    public appointmentCount?: number;
    public appointmentKidCount?: number;

    public constructor(init?: Partial<ClassTimeDTO>) { (Object as any).assign(this, init); }
}

export class CourseItem
{
    public id?: string;
    public schoolId?: string;
    public name?: string;
    public colorId?: number;
    public courseCategory?: string;
    public deductionWhenAbsence?: boolean;
    public deductionWhenLeave?: boolean;
    public isOneToOne?: boolean;
    public remark?: string;
    public isDisabled?: boolean;
    public signType?: CourseSignType;
    public unit?: string;
    public saleItemsByCount?: CourseSaleItemDTO[];
    public saleItemsByMonth?: CourseSaleItemDTO[];
    public nextCourseIds?: string[];
    public lastModifyOn?: string;
    public autoSign?: boolean;
    public signByClassTime?: boolean;
    public branchIds?: string[];
    public createOn?: string;

    public constructor(init?: Partial<CourseItem>) { (Object as any).assign(this, init); }
}

export class KidCourseBalanceItem
{
    public branchId?: string;
    public orgStudentCourseId?: string;
    public studentId?: string;
    public courseOrderId?: string;
    public courseId?: string;
    public type?: CourseSaleItemType;
    public unit?: string;
    public saleUnit?: string;
    public saleAmount?: number;
    public amount?: number;
    public giftAmount?: number;
    public transferOutAmount?: number;
    public usedAmount?: number;
    public usedGiftAmount?: number;
    public totalPrice?: number;
    public price?: number;
    public auditPrice?: number;
    public balanceGiftAmount?: number;
    public balanceAmount?: number;
    public balance?: number;
    public createOn?: string;
    public expireOn?: string;
    public beginDate?: string;
    public endDate?: string;

    public constructor(init?: Partial<KidCourseBalanceItem>) { (Object as any).assign(this, init); }
}

export class CourseOrderDTO
{
    public orderNo?: string;
    public contractNo?: string;
    public schoolId?: string;
    public branchId?: string;
    public kidId?: string;
    public createOn?: string;
    public payedOn?: string;
    public orderType?: CourseOrderType;
    public courseBalance?: KidCourseBalanceTransferItem[];
    public feeBalance?: FeeBalanceTransferItem[];
    public orderItems?: CourseOrderItem[];
    public paymentItem?: CourseOrderPaymentItem[];
    public totalPrice?: string;
    public payable?: string;
    public payment?: string;
    public needPayment?: string;
    public source?: string;
    public createByTeacherUserInfoId?: string;
    public userIPAddr?: string;
    public orderState?: CourseOrderState;
    public isDelete?: boolean;
    public deleteOn?: string;
    public expireOn?: string;
    public signOn?: string;
    public beginDate?: string;
    public remark?: string;
    public attachment?: EventAttachDTO;
    public relateCourseOrderIds?: string[];

    public constructor(init?: Partial<CourseOrderDTO>) { (Object as any).assign(this, init); }
}

export class SchoolBaseInfo
{
    public id?: string;
    public name?: string;
    public eName?: string;
    public logoUrl?: string;
    public loginBgUrl?: string;
    public pointName?: string;
    public vrUrl?: string;

    public constructor(init?: Partial<SchoolBaseInfo>) { (Object as any).assign(this, init); }
}

export class PrivateGiftCardDTO
{
    public id?: string;
    public schoolId?: string;
    public entityId?: string;
    public fee?: number;
    public expiredDate?: string;
    public minPrice?: number;
    public spreaderId?: string;
    public sourceType?: SPREADER_PRIVATE_GIFT_SOURCE_TYPE;
    public isUsed?: boolean;
    public usedOn?: string;
    public isDelete?: boolean;
    public deleteOn?: string;
    public createOn?: string;
    public lastModifyOn?: string;

    public constructor(init?: Partial<PrivateGiftCardDTO>) { (Object as any).assign(this, init); }
}

export class CourseConsumLogDTO
{
    public id?: string;
    public schoolId?: string;
    public branchId?: string;
    public studentId?: string;
    public courseId?: string;
    public classTimeId?: string;
    public courseSubject?: string[];
    public eventId?: string;
    public orgStudentCourseId?: string;
    public modifyAmount?: number;
    public useGift?: boolean;
    public price?: string;
    public auditPrice?: string;
    public remark?: string;
    public paymentReceiptUrl?: string;
    public createOn?: string;
    public teacherUserInfoId?: string;
    public userIPAddr?: string;
    public source?: COURSE_LOG_SOURCE;
    public transferOutCourseOrderId?: string;
    public classId?: string;
    public signDate?: string;
    public isReversal?: boolean;
    public reversalFrom?: string;
    public voucherNo?: string;

    public constructor(init?: Partial<CourseConsumLogDTO>) { (Object as any).assign(this, init); }
}

export class WeworkContactTagItemDTO
{
    public id?: string;
    public name?: string;
    public create_time?: number;
    public order?: number;
    public deleted?: boolean;

    public constructor(init?: Partial<WeworkContactTagItemDTO>) { (Object as any).assign(this, init); }
}

export class WeworkContactTagGroupDTO
{
    public tag?: WeworkContactTagItemDTO[];
    public group_id?: string;
    public group_name?: string;
    public create_time?: number;
    public order?: number;
    public deleted?: boolean;

    public constructor(init?: Partial<WeworkContactTagGroupDTO>) { (Object as any).assign(this, init); }
}

export class AgentInfoPrivilege
{
    public level?: number;
    public allow_party?: number[];
    public allow_user?: string[];
    public allow_tag?: number[];
    public extra_party?: number[];
    public extra_user?: string[];
    public extra_tag?: number[];

    public constructor(init?: Partial<AgentInfoPrivilege>) { (Object as any).assign(this, init); }
}

export class AgentInfo
{
    public agentid?: number;
    public name?: string;
    public round_logo_url?: string;
    public appid?: number;
    public auth_mode?: number;
    public is_customized_app?: boolean;
    public auth_from_thirdapp?: boolean;
    public privilege?: AgentInfoPrivilege;

    public constructor(init?: Partial<AgentInfo>) { (Object as any).assign(this, init); }
}

export class WeworkJsSdkConfig
{
    public appId?: string;
    public corpId?: string;
    public agentId?: number;
    public timestamp?: number;
    public nonceStr?: string;
    public signature_corp?: string;
    public signature_app?: string;

    public constructor(init?: Partial<WeworkJsSdkConfig>) { (Object as any).assign(this, init); }
}

export class WeworkContactDTO
{
    public id?: string;
    public schoolWeworkInfoId?: string;
    public external_userid?: string;
    public name?: string;
    public position?: string;
    public avatar?: string;
    public corp_name?: string;
    public corp_full_name?: string;
    public type?: number;
    public gender?: number;
    public unionid?: string;
    public createOn?: string;
    public lastModifyOn?: string;

    public constructor(init?: Partial<WeworkContactDTO>) { (Object as any).assign(this, init); }
}

export class WeworkSalesLeadDTO
{
    public id?: string;
    public schoolId?: string;
    public weworkContactId?: string;
    public phoneNumber?: string;
    public intentType?: CUSTOM_INTENT_TYPE;
    public score?: number;
    public source?: string;
    public remark?: string;
    public tags?: string[];
    public firstCheckInOn?: string;
    public createOn?: string;
    public lastModifyOn?: string;
    public userIPAddr?: string;
    public followUpState?: FOLLOWUP_STATE;
    public followUpTeacherUserInfoId?: string[];
    public createByTeacherUserInfoId?: string;
    public lastFollowUpDate?: string;
    public nextFollowUpDate?: string;
    public followUpResult?: FOLLOWUP_RESULT;
    public kidInfoId?: string[];
    public branchId?: string;

    public constructor(init?: Partial<WeworkSalesLeadDTO>) { (Object as any).assign(this, init); }
}

export class WeworkContactFollowUserTagDTO
{
    public group_name?: string;
    public tag_name?: string;
    public tag_id?: string;
    public type?: number;

    public constructor(init?: Partial<WeworkContactFollowUserTagDTO>) { (Object as any).assign(this, init); }
}

export class WeworkContactFollowUserWechatChannelsDTO
{
    public nickname?: string;
    public source?: number;

    public constructor(init?: Partial<WeworkContactFollowUserWechatChannelsDTO>) { (Object as any).assign(this, init); }
}

export class WeworkContactFollowUserDTO
{
    public userid?: string;
    public remark?: string;
    public description?: string;
    public createtime?: number;
    public tags?: WeworkContactFollowUserTagDTO[];
    public remark_corp_name?: string;
    public remark_mobiles?: string[];
    public oper_userid?: string;
    public add_way?: number;
    public wechat_channels?: WeworkContactFollowUserWechatChannelsDTO;
    public state?: string;
    public corpUserName?: string;
    public addTime?: string;
    public deleteTime?: string;

    public constructor(init?: Partial<WeworkContactFollowUserDTO>) { (Object as any).assign(this, init); }
}

export class WeworkContactWayDTO
{
    public id?: string;
    public type?: WEWORK_CONTACTWAY_TYPE;
    public scene?: WEWORK_CONTACTWAY_SCENE;
    public style?: number;
    public remark?: string;
    public skipVerify?: boolean;
    public state?: string;
    public user?: string[];
    public strUsers?: string[];
    public party?: number[];
    public isTemp?: boolean;
    public expiresIn?: number;
    public chatExpiresIn?: number;
    public unionId?: string;
    public isExclusive?: boolean;
    public conclusions?: string;
    public externalContactUserId?: string;
    public tags?: string[];
    public strTags?: string[];
    public enabledSendWelcome?: boolean;
    public welcomeMsg1?: string;
    public attachments?: WeworkAttachmentItem[];
    public configId?: string;
    public qrCode?: string;
    public contactCount?: number;
    public isDelete?: boolean;
    public deleteOn?: string;
    public createOn?: string;
    public lastModifyOn?: string;

    public constructor(init?: Partial<WeworkContactWayDTO>) { (Object as any).assign(this, init); }
}

export class WeworkContactActivityDTO
{
    public id?: string;
    public schoolId?: string;
    public activityType?: WEWORK_CONTACTACTIVITY_TYPE;
    public externalContactUserId?: string;
    public title?: string;
    public content?: string;
    public createOn?: string;

    public constructor(init?: Partial<WeworkContactActivityDTO>) { (Object as any).assign(this, init); }
}

export class GetCoursesRes extends BaseResponse
{
    public data?: CourseItem[];

    public constructor(init?: Partial<GetCoursesRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetCourseOrdersRes extends BaseResponse
{
    public totalCount?: number;
    public payable?: number;
    public payment?: number;
    public data?: CourseOrderDTO[];
    public schoolData?: { [index: string]: SchoolBaseInfo; };
    public teacherData?: { [index: string]: TeacherBaseInfoDTO; };
    public studentData?: { [index: string]: StudentBaseInfoDTO; };
    public ossInfos?: { [index: string]: OssInfoDTO; };
    public classNames?: { [index: string]: string; };
    public courses?: { [index: string]: CourseItem; };
    public privateGiftCards?: { [index: string]: PrivateGiftCardDTO; };

    public constructor(init?: Partial<GetCourseOrdersRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchoolKidCourseBalanceRes extends BaseResponse
{
    public data?: KidCourseBalanceItem[];
    public courseOrder?: { [index: string]: CourseOrderDTO; };

    public constructor(init?: Partial<GetSchoolKidCourseBalanceRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetCourseConsumLogsRes extends BaseResponse
{
    public totalCount?: number;
    public totalConsumPrice?: string;
    public totalAuditPrice?: string;
    public data?: CourseConsumLogDTO[];
    public studentData?: { [index: string]: StudentBaseInfoDTO; };
    public courseData?: { [index: string]: CourseOrderItem; };
    public classTimeData?: { [index: string]: ClassTimeDTO; };
    public eventTitleData?: { [index: string]: string; };
    public className?: { [index: string]: string; };
    public teacherInfos?: { [index: string]: TeacherBaseInfoDTO; };
    public orgStudentCourseCourseOrderIds?: { [index: string]: string; };

    public constructor(init?: Partial<GetCourseConsumLogsRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetSpeakingArtCatalogsRes extends BaseResponse
{
    public total?: number;
    public data?: SpeakingArtCatalogDTO[];
    public summary?: { [index: string]: number; };

    public constructor(init?: Partial<GetSpeakingArtCatalogsRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetSpeakingArtItemsRes extends BaseResponse
{
    public total?: number;
    public data?: SpeakingArtItemDTO[];
    public ossInfos?: { [index: string]: OssInfoDTO; };
    public teacherInfo?: { [index: string]: TeacherBaseInfoDTO; };

    public constructor(init?: Partial<GetSpeakingArtItemsRes>) { super(init); (Object as any).assign(this, init); }
}

export class BindCorpUserRes extends BaseResponse
{
    public jwt_token?: string;

    public constructor(init?: Partial<BindCorpUserRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetCorpContactTagsRes extends BaseResponse
{
    public tag_group?: WeworkContactTagGroupDTO[];

    public constructor(init?: Partial<GetCorpContactTagsRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetAgentInfoRes extends BaseResponse
{
    public agentinfo?: AgentInfo;

    public constructor(init?: Partial<GetAgentInfoRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetWeworkUserInfoRes extends BaseResponse
{
    public userid?: string;
    public user_ticket?: string;
    public jwt_token?: string;
    public need_bind?: boolean;

    public constructor(init?: Partial<GetWeworkUserInfoRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetWeworkJsConfigRes extends BaseResponse
{
    public data?: WeworkJsSdkConfig;

    public constructor(init?: Partial<GetWeworkJsConfigRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetCustomerInfoRes extends BaseResponse
{
    public contractData?: WeworkContactDTO;
    public studentDatas?: StudentBaseInfoDTO[];
    public leadData?: WeworkSalesLeadDTO;
    public relationCountEmployee?: number;
    public relationCountChatGroup?: number;
    public relationCountSameChatGroup?: number;
    public followdata?: WeworkContactFollowUserDTO;

    public constructor(init?: Partial<GetCustomerInfoRes>) { super(init); (Object as any).assign(this, init); }
}

export class WeworkMediaUploadRes extends BaseResponse
{
    public media_id?: string;

    public constructor(init?: Partial<WeworkMediaUploadRes>) { super(init); (Object as any).assign(this, init); }
}

export class WeworkGetContactWayRes extends BaseResponse
{
    public data?: WeworkContactWayDTO[];
    public contactCount?: { [index: string]: number; };

    public constructor(init?: Partial<WeworkGetContactWayRes>) { super(init); (Object as any).assign(this, init); }
}

export class WeworkGetStudentBaseInfoRes extends BaseResponse
{
    public studentData?: StudentBaseInfoDTO;

    public constructor(init?: Partial<WeworkGetStudentBaseInfoRes>) { super(init); (Object as any).assign(this, init); }
}

export class WeworkGetContactActivityRes extends BaseResponse
{
    public data?: WeworkContactActivityDTO[];

    public constructor(init?: Partial<WeworkGetContactActivityRes>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class AuthenticateResponse implements IHasSessionId, IHasBearerToken
{
    // @DataMember(Order=1)
    public userId?: string;

    // @DataMember(Order=2)
    public sessionId?: string;

    // @DataMember(Order=3)
    public userName?: string;

    // @DataMember(Order=4)
    public displayName?: string;

    // @DataMember(Order=5)
    public referrerUrl?: string;

    // @DataMember(Order=6)
    public bearerToken?: string;

    // @DataMember(Order=7)
    public refreshToken?: string;

    // @DataMember(Order=8)
    public profileUrl?: string;

    // @DataMember(Order=9)
    public roles?: string[];

    // @DataMember(Order=10)
    public permissions?: string[];

    // @DataMember(Order=11)
    public responseStatus?: ResponseStatus;

    // @DataMember(Order=12)
    public meta?: { [index: string]: string; };

    public constructor(init?: Partial<AuthenticateResponse>) { (Object as any).assign(this, init); }
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

/** @description 获取所有课程 */
// @Route("/eduaffair/{SchoolId}/courses", "GET, OPTIONS")
// @Api(Description="获取所有课程")
export class GetCoursesReq implements IReturn<GetCoursesRes>
{
    public schoolId?: string;
    public branchIds?: string[];
    public includeMonth?: boolean;
    public includeMonthDay?: boolean;

    public constructor(init?: Partial<GetCoursesReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetCoursesReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetCoursesRes(); }
}

/** @description 获取报名订单列表 */
// @Route("/eduaffair/{SchoolId}/courseorders", "GET, OPTIONS")
// @Api(Description="获取报名订单列表")
export class GetCourseOrdersReq implements IReturn<GetCourseOrdersRes>
{
    public schoolPartnerInfoId?: string;
    public orderNo?: string;
    public contractNo?: string;
    public schoolId?: string;
    public schoolIds?: string[];
    public branchIds?: string[];
    public kidName?: string;
    public phoneNumber?: string;
    public kidId?: string;
    public createOn?: string[];
    public payedOn?: string[];
    public expireOn?: string[];
    public orderType?: CourseOrderType[];
    public courseId?: string;
    public totalPrice?: number[];
    public payable?: number[];
    public payment?: number[];
    public source?: string;
    public createByTeacher?: string;
    public orderState?: CourseOrderState[];
    public isDelete?: boolean;
    public deleteOn?: string[];
    public signOn?: string[];
    public lastId?: string;
    public pageSize?: number;
    public pageIndex?: number;

    public constructor(init?: Partial<GetCourseOrdersReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetCourseOrdersReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetCourseOrdersRes(); }
}

/** @description 获取学校的某个学生所有课程的课时剩余信息 */
// @Route("/school/{SchoolId}/kidcoursebalance/{StudentId}", "GET, OPTIONS")
// @Api(Description="获取学校的某个学生所有课程的课时剩余信息")
export class GetSchoolKidCourseBalanceReq implements IReturn<GetSchoolKidCourseBalanceRes>
{
    public schoolId?: string;
    public studentId?: string;
    public onlyShowData?: boolean;

    public constructor(init?: Partial<GetSchoolKidCourseBalanceReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolKidCourseBalanceReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSchoolKidCourseBalanceRes(); }
}

/** @description 获取课消记录列表 */
// @Route("/eduaffair/{SchoolId}/courseconsumlogs", "GET, OPTIONS")
// @Api(Description="获取课消记录列表")
export class GetCourseConsumLogsReq implements IReturn<GetCourseConsumLogsRes>
{
    public schoolPartnerInfoId?: string;
    public showAll?: boolean;
    public schoolId?: string;
    public schoolIds?: string[];
    public branchIds?: string[];
    public courseSubject?: string[];
    public kidName?: string;
    public phoneNumber?: string;
    public studentId?: string;
    public courseId?: string;
    public classTimeId?: string;
    public orgStudentCourseId?: string;
    public modifyAmount?: number[];
    public useGift?: boolean;
    public price?: number[];
    public remark?: string;
    public createOn?: string[];
    public signDate?: string[];
    public source?: COURSE_LOG_SOURCE[];
    public lastId?: string;
    public pageSize?: number;
    public pageIndex?: number;

    public constructor(init?: Partial<GetCourseConsumLogsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetCourseConsumLogsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetCourseConsumLogsRes(); }
}

/** @description 更新话术库分组 */
// @Route("/speakingart/{SchoolId}/catalog/update", "POST")
// @Api(Description="更新话术库分组")
export class AddSpeakingArtCatalogReq implements IReturn<BaseResponse>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId不可为空")
    public schoolId?: string;

    public data?: SpeakingArtCatalogDTO;

    public constructor(init?: Partial<AddSpeakingArtCatalogReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddSpeakingArtCatalogReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 更新话术库 */
// @Route("/speakingart/{SchoolId}/item/update", "POST")
// @Api(Description="更新话术库")
export class AddSpeakingArtItemReq implements IReturn<BaseResponse>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId不可为空")
    public schoolId?: string;

    public data?: SpeakingArtItemDTO;

    public constructor(init?: Partial<AddSpeakingArtItemReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddSpeakingArtItemReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取话术库栏目 */
// @Route("/speakingart/{SchoolId}/catalogs", "GET")
// @Api(Description="获取话术库栏目")
export class GetSpeakingArtCatalogsReq implements IReturn<GetSpeakingArtCatalogsRes>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId 不能为空")
    public schoolId?: string;

    public constructor(init?: Partial<GetSpeakingArtCatalogsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSpeakingArtCatalogsReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetSpeakingArtCatalogsRes(); }
}

/** @description 获取话术库栏目 */
// @Route("/speakingart/{SchoolId}/items", "POST")
// @Api(Description="获取话术库栏目")
export class GetSpeakingArtItemsReq implements IReturn<GetSpeakingArtItemsRes>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId 不能为空")
    public schoolId?: string;

    public speakingArtCatalogId?: string;
    public title?: string;
    public content?: string;
    public createBy?: string;
    public createOn?: string[];
    public lastModifyOn?: string[];
    public sort?: { [index: string]: ORDER_DIRECTION; };
    // @Validate(Validator="NotNull", Message="PageIndex 不能为空")
    public pageIndex?: number;

    // @Validate(Validator="NotNull", Message="PageSize 不能为空")
    public pageSize?: number;

    public constructor(init?: Partial<GetSpeakingArtItemsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSpeakingArtItemsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSpeakingArtItemsRes(); }
}

/** @description 绑定企业微信账号和幼幼家园账号 */
// @Route("/wework/bindcorpuser", "POST")
// @Api(Description="绑定企业微信账号和幼幼家园账号")
export class BindCorpUserReq implements IReturn<BindCorpUserRes>
{
    public wxCorpId?: string;
    public schoolId?: string;
    public phoneNumber?: string;
    public verifyCode?: string;
    public weworkUserId?: string;

    public constructor(init?: Partial<BindCorpUserReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'BindCorpUserReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BindCorpUserRes(); }
}

/** @description 获取企业的联系人列表 */
// @Route("/wework/synccontact", "GET")
// @Api(Description="获取企业的联系人列表")
export class SyncCorpContactReq implements IReturn<BaseResponse>
{
    public corpid?: string;
    public suiteid?: string;

    public constructor(init?: Partial<SyncCorpContactReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SyncCorpContactReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取企业的外部群组列表 */
// @Route("/wework/synccontactgroup", "GET")
// @Api(Description="获取企业的外部群组列表")
export class SyncCorpContactGroupReq implements IReturn<BaseResponse>
{
    public corpid?: string;
    public suiteid?: string;

    public constructor(init?: Partial<SyncCorpContactGroupReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SyncCorpContactGroupReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 更新联系人的企业标签 */
// @Route("/wework/updatecontacttags", "GET")
// @Api(Description="更新联系人的企业标签")
export class UpdateContactTagsReq implements IReturn<BaseResponse>
{
    public corpid?: string;
    public suiteid?: string;
    public schoolId?: string;
    public external_userid?: string;
    public newTagIds?: string[];

    public constructor(init?: Partial<UpdateContactTagsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateContactTagsReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取企业的联系人标签列表 */
// @Route("/wework/getcontacttags", "GET")
// @Api(Description="获取企业的联系人标签列表")
export class GetCorpContactTagsReq implements IReturn<GetCorpContactTagsRes>
{
    public corpid?: string;
    public suiteid?: string;
    public needSync?: boolean;

    public constructor(init?: Partial<GetCorpContactTagsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetCorpContactTagsReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetCorpContactTagsRes(); }
}

/** @description 获取企业的agentinfo */
// @Route("/wework/getagentinfo", "GET")
// @Api(Description="获取企业的agentinfo")
export class GetAgentInfoReq implements IReturn<GetAgentInfoRes>
{
    public corpid?: string;
    public suiteid?: string;

    public constructor(init?: Partial<GetAgentInfoReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetAgentInfoReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetAgentInfoRes(); }
}

/** @description 获取访问用户身份 */
// @Route("/wework/auth/getuserinfo", "GET")
// @Api(Description="获取访问用户身份")
export class GetWeworkUserInfoReq implements IReturn<GetWeworkUserInfoRes>
{
    public corpid?: string;
    public suite_id?: string;
    public code?: string;

    public constructor(init?: Partial<GetWeworkUserInfoReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetWeworkUserInfoReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetWeworkUserInfoRes(); }
}

/** @description 获取jssdk的签名 */
// @Route("/wework/getjssdkconfig", "GET")
// @Api(Description="获取jssdk的签名")
export class GetWeworkJsConfigReq implements IReturn<GetWeworkJsConfigRes>
{
    public corpid?: string;
    public suite_id?: string;
    public url?: string;

    public constructor(init?: Partial<GetWeworkJsConfigReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetWeworkJsConfigReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetWeworkJsConfigRes(); }
}

/** @description 获取企业的外部群组列表 */
// @Route("/wework/customerinfo", "GET")
// @Api(Description="获取企业的外部群组列表")
export class GetCustomerInfoReq implements IReturn<GetCustomerInfoRes>
{
    public weworkCorpId?: string;
    public chat_id?: string;
    public external_userid?: string;

    public constructor(init?: Partial<GetCustomerInfoReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetCustomerInfoReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetCustomerInfoRes(); }
}

/** @description 上传媒体资源 */
// @Route("/wework/mediaupload", "POST")
// @Api(Description="上传媒体资源")
export class WeworkMediaUploadReq implements IReturn<WeworkMediaUploadRes>
{
    public corpId?: string;
    public suiteId?: string;
    public media_type?: string;
    public media_base64?: string;

    public constructor(init?: Partial<WeworkMediaUploadReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'WeworkMediaUploadReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new WeworkMediaUploadRes(); }
}

/** @description 获取企业活码 */
// @Route("/wework/contactway", "POST")
// @Api(Description="获取企业活码")
export class WeworkGetContactWayReq implements IReturn<WeworkGetContactWayRes>
{
    public corpId?: string;
    public suiteId?: string;
    public schoolId?: string;
    public contactWayType?: WEWORK_CONTACTWAY_TYPE;
    public externalContactUserId?: string;

    public constructor(init?: Partial<WeworkGetContactWayReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'WeworkGetContactWayReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new WeworkGetContactWayRes(); }
}

/** @description 关联企微线索到学员 */
// @Route("/wework/addstudenttoweworklead", "POST")
// @Api(Description="关联企微线索到学员")
export class WeworkSalesLeadAddStudentReq implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public kidId?: string;
    public weworkSalesLeadId?: string;

    public constructor(init?: Partial<WeworkSalesLeadAddStudentReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'WeworkSalesLeadAddStudentReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取学员基本信息 */
// @Route("/wework/studentbaseinfo", "GET")
// @Api(Description="获取学员基本信息")
export class WeworkGetStudentBaseInfoReq implements IReturn<WeworkGetStudentBaseInfoRes>
{
    public schoolId?: string;
    public kidId?: string;

    public constructor(init?: Partial<WeworkGetStudentBaseInfoReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'WeworkGetStudentBaseInfoReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new WeworkGetStudentBaseInfoRes(); }
}

/** @description 更新企微线索的手机号码 */
// @Route("/wework/updatesalesleadphone", "POST")
// @Api(Description="更新企微线索的手机号码")
export class UpdateCustomerPhoneNumberReq implements IReturn<BaseResponse>
{
    public weworkSalesLeadId?: string;
    public phoneNumber?: string;

    public constructor(init?: Partial<UpdateCustomerPhoneNumberReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateCustomerPhoneNumberReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取客户动态列表 */
// @Route("/wework/contactactivities", "GET")
// @Api(Description="获取客户动态列表")
export class WeworkGetContactActivityReq implements IReturn<WeworkGetContactActivityRes>
{
    public schoolId?: string;
    public externalUserId?: string;
    public pageIndex?: number;
    public pageSize?: number;

    public constructor(init?: Partial<WeworkGetContactActivityReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'WeworkGetContactActivityReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new WeworkGetContactActivityRes(); }
}

/** @description 添加客户动态 */
// @Route("/wework/contactactivities", "GET")
// @Api(Description="添加客户动态")
export class WeworkAddContactActivityReq implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public activityType?: WEWORK_CONTACTACTIVITY_TYPE;
    public externalContactUserId?: string;
    public title?: string;
    public content?: string;
    public weworkCorpUserId?: string;

    public constructor(init?: Partial<WeworkAddContactActivityReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'WeworkAddContactActivityReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 企业微信绑定 */
// @Route("/wework/3rd/bind", "POST")
// @Api(Description="企业微信绑定")
export class Wework3rdBindReq implements IReturn<BaseResponse>
{
    public suiteId?: string;
    public code?: string;
    public phoneNumber?: string;
    public mToken?: string;

    public constructor(init?: Partial<Wework3rdBindReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'Wework3rdBindReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 企业微信登陆 */
// @Route("/wework/3rdloginbycode", "GET")
// @Api(Description="企业微信登陆")
export class Wework3rdLoginByCodeReq implements IReturn<AuthenticateResponse>
{
    public schoolId?: string;
    public suiteId?: string;
    public code?: string;

    public constructor(init?: Partial<Wework3rdLoginByCodeReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'Wework3rdLoginByCodeReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new AuthenticateResponse(); }
}

/** @description 获取第三方应用授权返回链接 */
// @Route("/wework/getthirdappbindbackurl", "GET")
// @Api(Description="获取第三方应用授权返回链接")
export class WechatWorkGetThirdAppBindBackUrl implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public scopeType?: MALLSCOPETYPE;
    public auth_code?: string;
    public suiteid?: string;
    public state?: string;

    public constructor(init?: Partial<WechatWorkGetThirdAppBindBackUrl>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'WechatWorkGetThirdAppBindBackUrl'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取第三方应用授权链接 */
// @Route("/wework/getthirdappbindurl", "GET")
// @Api(Description="获取第三方应用授权链接")
export class WechatWorkGetThirdAppBindUrl implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public scopeType?: MALLSCOPETYPE;

    public constructor(init?: Partial<WechatWorkGetThirdAppBindUrl>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'WechatWorkGetThirdAppBindUrl'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new BaseResponse(); }
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

