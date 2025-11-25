/* Options:
Date: 2025-11-06 13:34:29
Version: 8.0
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://apigwtest.yban.co/api/educrm

//GlobalNamespace:
//MakePropertiesOptional: False
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion:
//AddDescriptionAsComments: True
//IncludeTypes: SchoolBaseInfo,SchoolProductDTO,SchoolSkuAttr,SchoolFeeItemDTO,WorkFlowStepDTO,StatementShareDetailDTO,SCHOOL_SERVICE_SUB_MODULE,FinanceCloseSettingDTO,H5AppServiceItem,H5AppServiceItemExtra,H5ParentConfig,H5ParentConfigExtra,CreateCourseOrderPaymentReq,AppointmentBalanceLimitType,AppointmentBeginEndTimeType,AppointmentBeginEndType,CourseOrderPaymentType,TEACHER_CLASS_ROLE,SCHOOL_TYPE,MyDayOfWeek,ClassBabyCareSettingDTO,AppointmentSetting,SchoolSettingDTO,GetSchoolSettingReq,ClassTimeTeacherInfoMapDTO,CourseOrderApproveReq,CourseOrderApprovalRuleDTO,GetCourseOrderApprovalRulesReq,ORDER_DIRECTION,SPREADER_PRIVATE_GIFT_SOURCE_TYPE,CourseOrderApprovalState,PrivateGiftCardDTO,CourseOrderApprovalDTO,GetCourseOrderApprovalsReq,AttachTingItem,AttachLinkItem,CourseItem,CourseOrderItemType,CourseOrderPaymentItem,AttachFileItem,AttachVideoItem,AttachImageItem,AttachVoiceItem,EVENT_HOMETIME_SCOPE,SEMESTERTYPE,TASKATTACHTYPE,EventLikeUserDTO,EventItemCommentItemDTO,EventAttachItem,KidEntityUserAuthMapDTO,ParentRelationSchoolInfoDTO,ClassEventItem,CourseSaleItemType,CourseSignType,CourseSaleItemDTO,BuyContentDTO,OrgStudentCourseDTO,CourseDTO,GetCourseConsumDetailReq,ClassTimeStudentType,ClassTimeSignState,COURSE_LOG_SOURCE,ClassTimeState,ClassTimeSignInfoDTO,ClassTimeDTO,CourseConsumLogDTO,GetCourseConsumLogsReq,DeleteCourseOrderReq,CourseOrderItem,EventAttachTingItemDTO,EventAttachLinkItemDTO,EventAttachFileItemDTO,EventAttachAudioItemDTO,EventAttachVideoItemDTO,EventAttachImageItemDTO,StatementAccountDTO,StatementDetailDTO,GetStatementDetailsReq,CreateStatementDetailReq,TeacherBaseInfoDTO,GetCourseOrdersReq,CourseOrderDTO,StudentBaseInfoDTO,OssInfoDTO,GENDERTYPE,ParentInfoDTO,CourseOrderType,CourseOrderState,EventAttachDTO,PARENT_ROLE_TYPE,KidCourseBalanceTransferItem,FeeBalanceTransferItem
//ExcludeTypes:
DefaultImports: package:servicestack/servicestack.dart,dart:typed_data
*/


export enum ORDER_DIRECTION
{
    ascend = 'ascend',
    descend = 'descend',
}

export enum GENDERTYPE
{
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    UNKNOW = 'UNKNOW',
}

export enum PARENT_ROLE_TYPE
{
    MAMA = 'MAMA',
    BABA = 'BABA',
    YEYE = 'YEYE',
    NAINAI = 'NAINAI',
    WAIGONG = 'WAIGONG',
    WAIPO = 'WAIPO',
    GEGE = 'GEGE',
    JIEJIE = 'JIEJIE',
    QITA = 'QITA',
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
    public ossInfoId: string;
    public orderIndex: number;
    public rotate: number;

    public constructor(init?: Partial<EventAttachImageItemDTO>) { (Object as any).assign(this, init); }
}

export class EventAttachVideoItemDTO
{
    public ossInfoId: string;

    public constructor(init?: Partial<EventAttachVideoItemDTO>) { (Object as any).assign(this, init); }
}

export class EventAttachAudioItemDTO
{
    public ossInfoId: string;

    public constructor(init?: Partial<EventAttachAudioItemDTO>) { (Object as any).assign(this, init); }
}

export class EventAttachFileItemDTO
{
    public ossInfoId: string;

    public constructor(init?: Partial<EventAttachFileItemDTO>) { (Object as any).assign(this, init); }
}

export class EventAttachLinkItemDTO
{
    public linkUrl: string;
    public linkTitle: string;
    public linkIcon: string;

    public constructor(init?: Partial<EventAttachLinkItemDTO>) { (Object as any).assign(this, init); }
}

export class EventAttachTingItemDTO
{
    public albumId: string;
    public trackId: string;
    public albumTitle: string;
    public albumDesc: string;
    public albumImageUrl: string;

    public constructor(init?: Partial<EventAttachTingItemDTO>) { (Object as any).assign(this, init); }
}

export class EventAttachDTO
{
    public imageItems: EventAttachImageItemDTO[];
    public videoItems: EventAttachVideoItemDTO[];
    public audioItems: EventAttachAudioItemDTO[];
    public fileItems: EventAttachFileItemDTO[];
    public linkItems: EventAttachLinkItemDTO[];
    public tingItems: EventAttachTingItemDTO[];
    public videoItem: EventAttachVideoItemDTO;
    public audioItem: EventAttachAudioItemDTO;
    public fileItem: EventAttachFileItemDTO;
    public linkItem: EventAttachLinkItemDTO;
    public tingItem: EventAttachTingItemDTO;

    public constructor(init?: Partial<EventAttachDTO>) { (Object as any).assign(this, init); }
}

export enum SEMESTERTYPE
{
    SEMESTER_PKFIRST = 'SEMESTER_PKFIRST',
    SEMESTER_PKSECOND = 'SEMESTER_PKSECOND',
    SEMESTER_K1FIRST = 'SEMESTER_K1FIRST',
    SEMESTER_K1SECOND = 'SEMESTER_K1SECOND',
    SEMESTER_K2FIRST = 'SEMESTER_K2FIRST',
    SEMESTER_K2SECOND = 'SEMESTER_K2SECOND',
    SEMESTER_K3FIRST = 'SEMESTER_K3FIRST',
    SEMESTER_K3SECOND = 'SEMESTER_K3SECOND',
    SEMESTER_OTHER = 'SEMESTER_OTHER',
    SEMESTER_UNKNOW = 'SEMESTER_UNKNOW',
}

export enum TASKATTACHTYPE
{
    ALL = 'ALL',
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
    AUDIO = 'AUDIO',
}

export enum CourseSignType
{
    SIGN = 'SIGN',
    TIME = 'TIME',
    MONTH = 'MONTH',
    MONTHDAY = 'MONTHDAY',
    MONTHWORKDAY = 'MONTHWORKDAY',
}

export enum CourseSaleItemType
{
    SIGN = 'SIGN',
    DAY = 'DAY',
    MONTH = 'MONTH',
    MONTHDAY = 'MONTHDAY',
    MONTHWORKDAY = 'MONTHWORKDAY',
}

export class CourseSaleItemDTO
{
    public id: string;
    public name: string;
    public amount: string;
    public totalPrice: string;
    public price: string;
    public type: CourseSaleItemType;
    public unit: string;
    public saleUnit: string;
    public maxGiftAmount: string;

    public constructor(init?: Partial<CourseSaleItemDTO>) { (Object as any).assign(this, init); }
}

export enum MyDayOfWeek
{
    Sunday = 'Sunday',
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday',
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
    public kidId: string;
    public state: ClassTimeSignState;
    public usedCourseHour: number;
    public studentType: ClassTimeStudentType;
    public remark: string;
    public isAppointment: boolean;
    public isMakeUp: boolean;
    public makeUpClassTimeId: string;
    public orgStudentCourseId: string;

    public constructor(init?: Partial<ClassTimeSignInfoDTO>) { (Object as any).assign(this, init); }
}

export class ClassTimeTeacherInfoMapDTO
{
    public id: string;
    public classTimeId: string;
    public schoolId: string;
    public branchId: string;
    public classId: string;
    public userId: number;
    public teacherUserInfoId: string;
    public roleType: TEACHER_CLASS_ROLE;
    public createOn: string;
    public lastModifyOn: string;

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
    public orgStudentCourseId: string;
    public branchId: string;
    public courseOrderId: string;
    public courseId: string;
    public type: CourseSaleItemType;
    public unit: string;
    public totalPrice: number;
    public amount: number;
    public giftAmount: number;
    public transferOutAmount: number;
    public transferOutGiftAmount: number;
    public transferOutTotalPrice: number;
    public bankFee: number;
    public fee: number;
    public debitAccount: string;

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
    public courseOrderId: string;
    public productName: string;
    public branchId: string;
    public type: CourseOrderItemType;
    public unit: string;
    public schoolProductId: string;
    public schoolSKUItemId: string;
    public schoolFeeItemId: string;
    public backToStock: boolean;
    public price: number;
    public transferOutAmount: number;
    public transferOutTotalPrice: number;
    public bankFee: number;
    public fee: number;
    public debitAccount: string;

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

export class ParentInfoDTO
{
    public parentRoleType: PARENT_ROLE_TYPE;
    public phoneNumber: string;

    public constructor(init?: Partial<ParentInfoDTO>) { (Object as any).assign(this, init); }
}

export class CourseOrderItem
{
    public id: string;
    public fadadaContractId: string;
    public unit: string;
    public saleUnit: string;
    public colorId?: number;
    public productName: string;
    public courseCategory: string;
    public type: CourseOrderItemType;
    public courseSaleType?: CourseSaleItemType;
    public courseId: string;
    public courseItemId: string;
    public courseItemName: string;
    public schoolProductId: string;
    public schoolSKUItemId: string;
    public schoolFeeItemId: string;
    public amount: number;
    public addAmount: number;
    public giftAmount: number;
    public classIds: string[];
    public beginDate?: string;
    public endDate?: string;
    public expireOn?: string;
    public payable: number;
    public orderAmount: number;
    public totalPrice: number;
    public auditPrice?: number;
    public price?: number;
    public refundAmount?: number;
    public subType: string;
    public subMoney?: number;
    public subPercent?: number;
    public debitAccount: string;

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
    public id: string;
    public type: CourseOrderPaymentType;
    public paymentState: CourseOrderState;
    public paymentType: string;
    public bankUserName: string;
    public bankAccount: string;
    public bankName: string;
    public bankBranchName: string;
    public payment: number;
    public paymentReceiptUrl: string;
    public dateOn?: string;

    public constructor(init?: Partial<CourseOrderPaymentItem>) { (Object as any).assign(this, init); }
}

export class StatementShareDetailDTO
{
    public id: string;
    public voucherNo: string;
    public orderItemId: string;
    public type: CourseOrderItemType;
    public courseId: string;
    public schoolProductId: string;
    public schoolFeeItemId: string;
    public amount: number;
    public bankFee: number;
    public fee: number;
    public debitAccount: string;
    public statementId: string;
    public schoolId: string;
    public branchId: string;
    public courseOrderId: string;
    public statementCatalog: string;
    public isIncoming?: boolean;
    public bankUserName: string;
    public bankAccount: string;
    public bankName: string;
    public bankBranchName: string;
    public isDelete?: boolean;
    public cashOrderId: string;
    public cashOrderNo: string;
    public paymentType: string;
    public paymentReceiptUrl: string;
    public remark: string;
    public createOn: string;
    public lastModifyOn?: string;
    public deleteOn?: string;
    public dateOn?: string;
    public userIPAddr: string;
    public teacherUserInfoId: string;

    public constructor(init?: Partial<StatementShareDetailDTO>) { (Object as any).assign(this, init); }
}

export class WorkFlowStepDTO
{
    public id: string;
    public name: string;
    public teacherUserInfoIds: string[];
    public isApprove?: boolean;
    public approverId: string;
    public approvedOn?: string;
    public approveRemark: string;

    public constructor(init?: Partial<WorkFlowStepDTO>) { (Object as any).assign(this, init); }
}

export class CourseOrderApprovalRuleDTO
{
    public id: string;
    public schoolId: string;
    public orderType: CourseOrderType;
    public isEnabled: boolean;
    public noLimit: boolean;
    public contidtions: { [index: string]: number; };
    public approverIds: string[];
    public steps: WorkFlowStepDTO[];
    public createOn: string;
    public lastModifyOn: string;

    public constructor(init?: Partial<CourseOrderApprovalRuleDTO>) { (Object as any).assign(this, init); }
}

export enum CourseOrderApprovalState
{
    NONEED_APPROVE = 'NONEED_APPROVE',
    WAIT_APPROVE = 'WAIT_APPROVE',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
}

export class SchoolSkuAttr
{
    public attrName: string;
    public attrValue: string[];

    public constructor(init?: Partial<SchoolSkuAttr>) { (Object as any).assign(this, init); }
}

export class SchoolProductDTO
{
    public id: string;
    public schoolId: string;
    public branchId: string;
    public name: string;
    public courseCategory: string;
    public price: number;
    public isMultiSpecification: boolean;
    public skuAttrs: SchoolSkuAttr[];
    public threshold: number;
    public courseIds: string[];
    public isEnabled: boolean;
    public attachment: EventAttachDTO;
    public isDeleted: boolean;
    public createOn: string;
    public updateOn: string;
    public deleteOn?: string;

    public constructor(init?: Partial<SchoolProductDTO>) { (Object as any).assign(this, init); }
}

export class SchoolFeeItemDTO
{
    public id: string;
    public schoolId: string;
    public branchId: string;
    public name: string;
    public courseCategory: string;
    public price: number;
    public courseIds: string[];
    public isEnabled: boolean;
    public attachment: EventAttachDTO;
    public isDeleted: boolean;
    public createOn: string;
    public updateOn: string;
    public deleteOn?: string;

    public constructor(init?: Partial<SchoolFeeItemDTO>) { (Object as any).assign(this, init); }
}

export enum SCHOOL_SERVICE_SUB_MODULE
{
    NONE = 0,
    BASE = 1100,
    ADMIN = 1150,
    WECHATMP = 1170,
    TEACHER = 1200,
    CLASS = 1250,
    KID = 1300,
    SCHOOL_NOTICE = 1350,
    ATTENDANCE = 1400,
    SMS = 1425,
    LEAVE = 1450,
    LEAVE_TEACHER = 1500,
    COMMISSION_PICKUP = 1550,
    MEDICARE = 1600,
    KIDACCOUNT_BALANCE = 1650,
    CLASSBILL = 1700,
    TEACHERSTUDY = 1750,
    EVENT_TEMPLATES = 1800,
    CLASSES_BAOKU = 1850,
    NETDISK = 1900,
    CURRICULUM = 1950,
    SALES = 2100,
    COURSE = 2150,
    APPOINTMENT = 2160,
    COURSEORDER = 2200,
    YOYOPAY = 2220,
    CLASSTIMECOMMENT = 2250,
    TING = 2300,
    SPEAKING_ART = 2500,
    POINTS = 3000,
    POSTER = 3100,
    PUBLICITY = 3150,
    MINISITE = 3200,
    MARKETING = 3250,
    WE_WORK = 3300,
    KID_EVALUATE = 3350,
    TOPICTEST = 4100,
    WATCH = 4150,
    BABYCARE = 4200,
    LIVECLASSROOM = 4250,
    LIVECHANNEL = 4300,
    DAILYHEALTHY = 4350,
    KIDCHECKUP = 4360,
    DAILYMENU = 4400,
    IOTAIR = 4450,
    PATROL = 4500,
    TV = 4550,
    MANQU = 4600,
    KID_HEALTHY = 4700,
}

export enum SCHOOL_TYPE
{
    KINDERGARTEN = 'KINDERGARTEN',
    EDUAFFAIR = 'EDUAFFAIR',
    SCHOOL = 'SCHOOL',
    ALL = 'ALL',
}

export class AttachVideoItem
{
    public thumbnilUri: string;
    public videoUri: string;
    public resId: string;
    public playSeconds: number;
    public aspectRatio: string;

    public constructor(init?: Partial<AttachVideoItem>) { (Object as any).assign(this, init); }
}

export class AttachLinkItem
{
    public linkUri: string;
    public linkTitle: string;
    public linkIcon: string;

    public constructor(init?: Partial<AttachLinkItem>) { (Object as any).assign(this, init); }
}

export class AttachImageItem
{
    public rotate: number;
    public imageUri: string;
    public thumbnilUri: string;
    public resId: string;

    public constructor(init?: Partial<AttachImageItem>) { (Object as any).assign(this, init); }
}

export class AttachFileItem
{
    public resId: string;
    public fileUri: string;
    public fileType: string;
    public fileName: string;

    public constructor(init?: Partial<AttachFileItem>) { (Object as any).assign(this, init); }
}

export enum EVENT_HOMETIME_SCOPE
{
    SCOPE_ALL = 'SCOPE_ALL',
    SCOPE_FAMILY = 'SCOPE_FAMILY',
    SCOPE_FAMILY_TEACHER = 'SCOPE_FAMILY_TEACHER',
}

export class AttachVoiceItem
{
    public resId: string;
    public publisher: string;
    public publishTime?: string;
    public voiceUri: string;
    public voiceSeconds: number;
    public fileName: string;

    public constructor(init?: Partial<AttachVoiceItem>) { (Object as any).assign(this, init); }
}

export class EventItemCommentItemDTO
{
    public id: string;
    public isAudio: boolean;
    public audioItem: AttachVoiceItem;
    public content: string;
    public createBy: string;
    public createByName: string;
    public avatarUrl: string;
    public createOn: string;
    public createIPAddr: string;
    public replyTo: string;
    public replyToName: string;

    public constructor(init?: Partial<EventItemCommentItemDTO>) { (Object as any).assign(this, init); }
}

export class EventLikeUserDTO
{
    public isTeacher: boolean;
    public userId: number;
    public userProfileId: string;
    public showName: string;
    public avatarUrl: string;

    public constructor(init?: Partial<EventLikeUserDTO>) { (Object as any).assign(this, init); }
}

export enum SPREADER_PRIVATE_GIFT_SOURCE_TYPE
{
    ACTIVITY_ORDER = 'ACTIVITY_ORDER',
    COURSE_ORDER = 'COURSE_ORDER',
    ROLLBACK = 'ROLLBACK',
    MANUAL = 'MANUAL',
    MALL_BUY = 'MALL_BUY',
}

export class AttachTingItem
{
    public albumId: string;
    public trackId: string;
    public albumTitle: string;
    public albumDesc: string;
    public albumImageUrl: string;

    public constructor(init?: Partial<AttachTingItem>) { (Object as any).assign(this, init); }
}

export class EventAttachItem
{
    public attachImages: AttachImageItem[];
    public attachVideos: AttachVideoItem[];
    public attachVoices: AttachVoiceItem[];
    public attachFiles: AttachFileItem[];
    public attachLinks: AttachLinkItem[];
    public attachTings: AttachTingItem[];
    public attachVideo: AttachVideoItem;
    public attachVoice: AttachVoiceItem;
    public attachFile: AttachFileItem;
    public attachLink: AttachLinkItem;
    public attachTing: AttachTingItem;

    public constructor(init?: Partial<EventAttachItem>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EventAttachItem'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class ClassEventItem
{
    public userName: string;
    public userProfileId: string;
    public classId: string;
    public schoolId: string;
    public schoolName: string;
    public className: string;
    public userLogoUrl: string;
    public eventId: string;
    public eventType: string;
    public timeString: string;
    public timeStamp: number;
    public createOn: string;
    public updateOn: string;
    public publishTime?: string;
    public title: string;
    public content: string;
    public attachItem: EventAttachItem;
    public targetKids: string[];
    public isPartialPublish: boolean;
    public studentTotalCount: number;
    public isTruncate: boolean;
    public imageUri: string;
    public linkUri: string;
    public pageView: number;
    public themeId: string;
    public themeTitle: string;
    public kidId: string;
    public kidName: string;
    public parentId: string;
    public parentRoleName: string;
    public comments: EventItemCommentItemDTO[];
    public likes: EventLikeUserDTO[];
    public commentType: TASKATTACHTYPE;
    public isVisited: boolean;
    public isAcked: boolean;
    public termId: number;
    public semesterType: SEMESTERTYPE;
    public extraFields: { [index: string]: Object; };
    public homeTime_Scope: EVENT_HOMETIME_SCOPE;
    public needPayment: boolean;
    public privacyMode: boolean;
    public isPayed: boolean;
    public paymentCourseId: string;
    public paymentPrice?: number;
    public showBeforeTimestamp?: number;
    public myAiOssIds: string[];
    public privacyAttachments: { [index: string]: EventAttachItem; };

    public constructor(init?: Partial<ClassEventItem>) { (Object as any).assign(this, init); }
}

export class OssInfoDTO
{
    public resId: string;
    public fileUri: string;
    public thumbnilUri: string;
    public playSeconds?: number;
    public aspectRatio: string;
    public fileExt: string;
    public fileName: string;
    public imageWidth?: number;
    public imageHeight?: number;

    public constructor(init?: Partial<OssInfoDTO>) { (Object as any).assign(this, init); }
}

export class TeacherBaseInfoDTO
{
    public id: string;
    public schoolId: string;
    public fullName: string;
    public nickName: string;
    public phoneNumber: string;
    public logoUrl: string;
    public userProfileId: string;

    public constructor(init?: Partial<TeacherBaseInfoDTO>) { (Object as any).assign(this, init); }
}

export class StudentBaseInfoDTO
{
    public id: string;
    public name: string;
    public nickName: string;
    public gender: GENDERTYPE;
    public birthDate?: string;
    public kidMonth?: number;
    public logoUrl: string;
    public primaryContact: ParentInfoDTO;
    public secondaryContact: ParentInfoDTO;
    public classIds: string[];
    public studentStatus?: STUDENT_STATUS;
    public parentRelationSchoolIds: string[];
    public followUpTeacherUserInfoId: string;
    public babyCareDailyPageUrl: string;
    public babyCareWeeklyPageUrl: string;

    public constructor(init?: Partial<StudentBaseInfoDTO>) { (Object as any).assign(this, init); }
}

export class ClassTimeDTO
{
    public id: string;
    public scheduleId: string;
    public schoolId: string;
    public classId: string;
    public courseSubject: string[];
    public beginTime: string;
    public endTime: string;
    public startMinute: number;
    public endMinute: number;
    public index: number;
    public signTime?: string;
    public signInfos: ClassTimeSignInfoDTO[];
    public createOn: string;
    public lastModifyOn: string;
    public fixedStudentIds: string[];
    public temporaryStudentIds: string[];
    public demoStudentIds: string[];
    public signTeacherUserInfoId: string;
    public teacherUserInfoIds: string[];
    public classTimeTeacherMaps: ClassTimeTeacherInfoMapDTO[];
    public state: ClassTimeState;
    public branchId: string;
    public totalCourseHour: number;
    public totalPrice: number;
    public canAppointmentValue: boolean;
    public appointmentCountValue: number;
    public canAppointment: boolean;
    public isBeforeAppointmentTime: boolean;
    public appointmentCount: number;
    public appointmentKidCount: number;

    public constructor(init?: Partial<ClassTimeDTO>) { (Object as any).assign(this, init); }
}

export class CourseItem
{
    public id: string;
    public schoolId: string;
    public name: string;
    public colorId: number;
    public courseCategory: string;
    public deductionWhenAbsence: boolean;
    public deductionWhenLeave: boolean;
    public isOneToOne: boolean;
    public remark: string;
    public isDisabled: boolean;
    public signType: CourseSignType;
    public unit: string;
    public saleItemsByCount: CourseSaleItemDTO[];
    public saleItemsByMonth: CourseSaleItemDTO[];
    public nextCourseIds: string[];
    public lastModifyOn: string;
    public autoSign: boolean;
    public signByClassTime: boolean;
    public branchIds: string[];
    public createOn: string;

    public constructor(init?: Partial<CourseItem>) { (Object as any).assign(this, init); }
}

export class CourseDTO extends CourseItem
{

    public constructor(init?: Partial<CourseDTO>) { super(init); (Object as any).assign(this, init); }
}

export class ClassBabyCareSettingDTO
{
    public classId: string;
    public babyCareNotifyHour: number;
    public babyCareNotifyHours: number[];
    public isShowBabyCareNutrition: boolean;
    public babyCareWeekNotifyHour: number;
    public babyCareWeekNotifyWeekDay: MyDayOfWeek;
    public isShowBabyCareWeekNutrition: boolean;

    public constructor(init?: Partial<ClassBabyCareSettingDTO>) { (Object as any).assign(this, init); }
}

export enum AppointmentBeginEndType
{
    NONE = 'NONE',
    TIME = 'TIME',
    DAY = 'DAY',
    NOT_ALLOW = 'NOT_ALLOW',
}

export enum AppointmentBeginEndTimeType
{
    MINUTE = 'MINUTE',
    HOUR = 'HOUR',
}

export enum AppointmentBalanceLimitType
{
    CLASS = 'CLASS',
    BALANCE = 'BALANCE',
}

export class AppointmentSetting
{
    public beginType: AppointmentBeginEndType;
    public beginTime: number;
    public beginTimeType: AppointmentBeginEndTimeType;
    public beginDay: number;
    public beginDayMinutes: number;
    public endType: AppointmentBeginEndType;
    public endTime: number;
    public endTimeType: AppointmentBeginEndTimeType;
    public endDay: number;
    public endDayMinutes: number;
    public cancelType: AppointmentBeginEndType;
    public cancelTime: number;
    public cancelTimeType: AppointmentBeginEndTimeType;
    public cancelDay: number;
    public cancelDayMinutes: number;
    public balanceLimitType: AppointmentBalanceLimitType;
    public balance: number;
    public isShowAppointmentCount: boolean;

    public constructor(init?: Partial<AppointmentSetting>) { (Object as any).assign(this, init); }
}

export class H5ParentConfig
{
    public classScheduleImageUrl: string;
    public topSwiperImageUrls: string[];
    public isShowSignBalanceInH5: boolean;
    public isShowTimeBalanceInH5: boolean;
    public isShowMonthBalanceInH5: boolean;
    public showCourseHourLog: boolean;
    public showMyCourseBalance: boolean;
    public showMyCourseOrder: boolean;
    public showCourseOrderRemark: boolean;
    public showMyEContract: boolean;

    public constructor(init?: Partial<H5ParentConfig>) { (Object as any).assign(this, init); }
}

export class H5AppServiceItem
{
    public type: string;
    public iconUrl: string;
    public name: string;
    public path: string;
    public redDotRoutePath: string;

    public constructor(init?: Partial<H5AppServiceItem>) { (Object as any).assign(this, init); }
}

export class H5AppServiceItemExtra extends H5AppServiceItem
{
    public serviceSubModule?: SCHOOL_SERVICE_SUB_MODULE;
    public desc: string;
    public previewUrl: string;
    public appRoute: string;
    public orderIndex: number;
    public isShow: boolean;
    public isRequired: boolean;

    public constructor(init?: Partial<H5AppServiceItemExtra>) { super(init); (Object as any).assign(this, init); }
}

export class H5ParentConfigExtra extends H5ParentConfig
{
    public serviceItems: H5AppServiceItemExtra[];

    public constructor(init?: Partial<H5ParentConfigExtra>) { super(init); (Object as any).assign(this, init); }
}

export class FinanceCloseSettingDTO
{
    public isCloseMonthDay: boolean;
    public closeMonthDay: number;
    public excludeTeacherRole: string[];
    public electronicSeal: string;
    public isEnableElectronicSeal: boolean;

    public constructor(init?: Partial<FinanceCloseSettingDTO>) { (Object as any).assign(this, init); }
}

export class SchoolSettingDTO
{
    public id: string;
    public schoolType: SCHOOL_TYPE;
    public lastClassTimeNotifyOn: string;
    public createOn: string;
    public lastModifyOn: string;
    public attendanceVoiceTimeOutSeconds: number;
    public attendanceCheckOutInterval: number;
    public loveLiveTrialSeconds: number;
    public isSendEventDailyHealthy: boolean;
    public isSendEventDailyHealthyBySms: boolean;
    public isSendEventDailyHealthyByWechat: boolean;
    public isSendEventAttendance: boolean;
    public isSendEventAttendanceBySms: boolean;
    public isSendEventAttendanceByWechat: boolean;
    public isSendAuditLeaveRequestByApp: boolean;
    public isSendAuditLeaveRequestBySms: boolean;
    public isSendAuditLeaveRequestByWechat: boolean;
    public isSendClassBillByApp: boolean;
    public isSendClassBillBySms: boolean;
    public isSendClassBillByWechat: boolean;
    public isSendAddClassTimeStudentDemoByApp: boolean;
    public isSendAddClassTimeStudentDemoBySms: boolean;
    public isSendAddClassTimeStudentDemoByWechat: boolean;
    public sendWishNotifyHour: number;
    public isSendWishBirthdayByApp: boolean;
    public isSendWishBirthdayBySms: boolean;
    public isSendWishBirthdayByWechat: boolean;
    public isSendWishHolidayByApp: boolean;
    public isSendWishHolidayBySms: boolean;
    public isSendWishHolidayByWechat: boolean;
    public kidBlacklistSendNotify: string[];
    public wechatMsgSuffix: string;
    public classTimeNotifyHour: number;
    public isSendClassTimeNotifyByApp: boolean;
    public isSendClassTimeNotifyBySms: boolean;
    public isSendClassTimeNotifyByWechat: boolean;
    public sendClassTimeNotifyBlacklist: string[];
    public isSendClassTimeSignByApp: boolean;
    public isSendClassTimeSignBySms: boolean;
    public isSendClassTimeSignByWechat: boolean;
    public sendClassTimeSignBlacklist: string[];
    public isSendClassTimeCommentApp: boolean;
    public isSendClassTimeCommentBySms: boolean;
    public isSendClassTimeCommentByWechat: boolean;
    public sendClassTimeCommentBlacklist: string[];
    public isSendEventKGTimeByApp: boolean;
    public isSendEventKGTimeBySms: boolean;
    public isSendEventKGTimeByWechat: boolean;
    public isSendEventTaskByApp: boolean;
    public isSendEventTaskBySms: boolean;
    public isSendEventTaskByWechat: boolean;
    public isSendEventLiveClassRoomByApp: boolean;
    public isSendEventLiveClassRoomBySms: boolean;
    public isSendEventLiveClassRoomByWechat: boolean;
    public isSendEventNotifyByApp: boolean;
    public isSendEventNotifyBySms: boolean;
    public isSendEventNotifyByWechat: boolean;
    public isSendEventShareByApp: boolean;
    public isSendEventShareBySms: boolean;
    public isSendEventShareByWechat: boolean;
    public isSendEventEvaluateByApp: boolean;
    public isSendEventEvaluateBySms: boolean;
    public isSendEventEvaluateByWechat: boolean;
    public isSendEventKidRemarkByApp: boolean;
    public isSendEventKidRemarkBySms: boolean;
    public isSendEventKidRemarkByWechat: boolean;
    public isSendEventVoteByApp: boolean;
    public isSendEventVoteBySms: boolean;
    public isSendEventVoteByWechat: boolean;
    public isSendEventClockInByApp: boolean;
    public isSendEventClockInBySms: boolean;
    public isSendEventClockInByWechat: boolean;
    public isSendEventDailyMenuByApp: boolean;
    public isSendEventDailyMenuBySms: boolean;
    public isSendEventDailyMenuByWechat: boolean;
    public isSendEventCommissionPickupByApp: boolean;
    public isSendEventCommissionPickupBySms: boolean;
    public isSendEventCommissionPickupByWechat: boolean;
    public isSendEventKidCheckUpByApp: boolean;
    public isSendEventKidCheckUpBySms: boolean;
    public isSendEventKidCheckUpByWechat: boolean;
    public isSendEventKGTimeUnreadNotifyByWechat: boolean;
    public sendClassTimeSignModifyBlacklist: string[];
    public isSendCLassTimeSignModifyBySms: boolean;
    public isSendClassTimeSignModifyByWechat: boolean;
    public isSendClassTimeModifyBySms: boolean;
    public isSendClassTimeModifyByWechat: boolean;
    public sendClassTimeModifyBlacklist: string[];
    public isSendCourseOrderNotifyBySms: boolean;
    public isSendCourseOrderNotifyByWechat: boolean;
    public sendCourseOrderNotifyBlacklist: string[];
    public sendEventTaskBlacklist: string[];
    public isSendEventTaskUnreadNotifyByWechat: boolean;
    public isSendTeacherCommentByWechat: boolean;
    public isSendTeacherCommentUnreadNotifyByWechat: boolean;
    public sendTeacherCommentBlacklist: string[];
    public isSendTeacherCommentBySms: boolean;
    public isSendEventNotifyUnreadNotifyByWechat: boolean;
    public sendEventNotifBlacklist: string[];
    public saleSource: string[];
    public isRequiredSaleSource: boolean;
    public checkExistsSaleLeadPhoneNumber: boolean;
    public saleTag: string[];
    public followUpResult: string[];
    public courseCategory: string[];
    public courseSubject: string[];
    public curriculumTag: string[];
    public paymentType: string[];
    public refundPaymentType: string[];
    public refundReason: string[];
    public isRequiredRefundBankAccount: boolean;
    public isDeleteCourseOrderNeedPermission: boolean;
    public isAddBalanceAfterFinishPayment: boolean;
    public alarmKidCourseBalanceMin: number;
    public alarmKidCourseBalanceMinDays: number;
    public isCanUpdateKidCourseBalance: boolean;
    public isClassTimeSignUseAttendance: boolean;
    public isCanClassTimeSignBalanceNotEnough: boolean;
    public isShowTeacherEmployeeNo: boolean;
    public isShowTeacherFullPhoneNumber: boolean;
    public isShowParentFullPhoneNumber: boolean;
    public isShowSaleFullPhoneNumber: boolean;
    public dailyMaxFullPhoneNumberRequest?: number;
    public isCanSetKidFaceByTeacher: boolean;
    public isCanAddKidOtherParent: boolean;
    public isShowBalanceInH5: boolean;
    public isShowSignBalanceInH5: boolean;
    public isShowTimeBalanceInH5: boolean;
    public isShowMonthBalanceInH5: boolean;
    public isShowWeekNutritionInParent: boolean;
    public isShowWatch: boolean;
    public privateGiftPointName: string;
    public appSplashImageUrl: string;
    public appSplashJumpUrl: string;
    public enableIMClassGroup: boolean;
    public isTeacherCanRecallParentIM: boolean;
    public babyCareDetailClassIds: string[];
    public babyCareDisableClassIds: string[];
    public babyCareNotifyHour: number;
    public babyCareNotifyHours: number[];
    public isShowBabyCareNutrition: boolean;
    public babyCareWeekNotifyHour: number;
    public babyCareWeekNotifyWeekDay: MyDayOfWeek;
    public isShowBabyCareWeekNutrition: boolean;
    public isShowBabyCareMorningCheck: boolean;
    public isShowDailyCareBrunch: boolean;
    public isShowDailyCareBreakfast: boolean;
    public isShowDailyCareLunch: boolean;
    public isShowBabyCareNoonCheck: boolean;
    public isShowDailyCareSleep: boolean;
    public isShowDailyCareSnack: boolean;
    public isShowDailyCareMilk: boolean;
    public isShowDailyCareDrinkWater: boolean;
    public isShowDailyCareToilet: boolean;
    public isShowDailyCareDiaper: boolean;
    public isShowBabyCareNightCheck: boolean;
    public isShowDailyCareDinner: boolean;
    public isShowDailyCareClean: boolean;
    public isShowDailyCareHandWashing: boolean;
    public isShowDailyCareChangeClothes: boolean;
    public isShowDailyCareMindset: boolean;
    public isShowDailyCareWork: boolean;
    public isShowDailyCareNote: boolean;
    public isShowDailyCareNoteWeek: boolean;
    public classBabyCareSettings: ClassBabyCareSettingDTO[];
    public isSendBabyCareNotify: boolean;
    public isSendBabyCareNotifyBySms: boolean;
    public isSendBabyCareNotifyByWechat: boolean;
    public isAllowSubmitBabyCareTimeOut: boolean;
    public checkTimeDailyCareDrinkWater: number;
    public checkTimeDailyCareMilk: number;
    public checkTimeDailyCareDiaper: number;
    public checkTimeDailyCareToilet: number;
    public babyCareNoteTemplateDaily: string;
    public babyCareNoteTemplateWeek: string;
    public disabledPermissionCode: string[];
    public teacherStudy_WaterMask_IsShowSchoolName: boolean;
    public teacherStudy_WaterMask_IsShowTeacherName: boolean;
    public teacherStudy_WaterMask_IsShowTeacherPhoneNumber: boolean;
    public patrolType: string[];
    public appointmentSetting: AppointmentSetting;
    public h5ParentConfig: H5ParentConfigExtra;
    public financeCloseSetting: FinanceCloseSettingDTO;
    public debitAccount: string[];

    public constructor(init?: Partial<SchoolSettingDTO>) { (Object as any).assign(this, init); }
}

export class StatementDetailDTO
{
    public id: string;
    public schoolId: string;
    public branchId: string;
    public courseOrderId: string;
    public createOn: string;
    public catalog: string;
    public isIncoming: boolean;
    public bankUserName: string;
    public bankAccount: string;
    public bankName: string;
    public bankBranchName: string;
    public amount: string;
    public bankFee: string;
    public fee: string;
    public paymentType: string;
    public paymentReceiptUrl: string;
    public statementAccountId: string;
    public cashOrderId: string;
    public cashOrderNo: string;
    public dateOn: string;
    public isDelete: boolean;
    public deleteOn?: string;
    public teacherUserInfoId: string;
    public remark: string;
    public orderNo: string;
    public shareDetails: StatementShareDetailDTO[];

    public constructor(init?: Partial<StatementDetailDTO>) { (Object as any).assign(this, init); }
}

export class CourseOrderDTO
{
    public orderNo: string;
    public contractNo: string;
    public statementCatalog: string;
    public schoolId: string;
    public branchId: string;
    public kidId: string;
    public createOn: string;
    public payedOn?: string;
    public orderType: CourseOrderType;
    public courseBalance: KidCourseBalanceTransferItem[];
    public feeBalance: FeeBalanceTransferItem[];
    public orderItems: CourseOrderItem[];
    public paymentItem: CourseOrderPaymentItem[];
    public totalPrice: string;
    public payable: string;
    public payment: string;
    public needPayment: string;
    public source: string;
    public createByTeacherUserInfoId: string;
    public userIPAddr: string;
    public orderState: CourseOrderState;
    public isDelete: boolean;
    public deleteOn?: string;
    public expireOn?: string;
    public signOn?: string;
    public beginDate?: string;
    public refundReason: string;
    public remark: string;
    public attachment: EventAttachDTO;
    public relateCourseOrderIds: string[];

    public constructor(init?: Partial<CourseOrderDTO>) { (Object as any).assign(this, init); }
}

export class SchoolBaseInfo
{
    public id: string;
    public name: string;
    public eName: string;
    public logoUrl: string;
    public loginBgUrl: string;
    public pointName: string;
    public vrUrl: string;

    public constructor(init?: Partial<SchoolBaseInfo>) { (Object as any).assign(this, init); }
}

export class PrivateGiftCardDTO
{
    public id: string;
    public schoolId: string;
    public entityId: string;
    public fee: number;
    public expiredDate?: string;
    public minPrice?: number;
    public spreaderId: string;
    public sourceType: SPREADER_PRIVATE_GIFT_SOURCE_TYPE;
    public isUsed: boolean;
    public usedOn?: string;
    public isDelete: boolean;
    public deleteOn?: string;
    public createOn: string;
    public lastModifyOn: string;

    public constructor(init?: Partial<PrivateGiftCardDTO>) { (Object as any).assign(this, init); }
}

export class StatementAccountDTO
{
    public id: string;
    public isDelete: boolean;
    public name: string;

    public constructor(init?: Partial<StatementAccountDTO>) { (Object as any).assign(this, init); }
}

export class OrgStudentCourseDTO
{
    public id: string;
    public schoolId: string;
    public branchId: string;
    public studentId: string;
    public courseOrderId: string;
    public courseId: string;
    public amount: number;
    public giftAmount: number;
    public transferOutAmount: number;
    public usedAmount: number;
    public usedGiftAmount: number;
    public totalPrice: string;
    public price: string;
    public auditPrice: string;
    public balanceGiftAmount: number;
    public balanceAmount: number;
    public balance: number;
    public usedAllAmount: number;
    public usedPrice: string;
    public balancePrice: string;
    public createOn: string;
    public lastModifyOn: string;
    public salesTeacherUserInfoId: string;
    public expireOn?: string;
    public beginDate?: string;
    public endDate?: string;
    public type: CourseSaleItemType;
    public unit: string;
    public saleUnit: string;
    public saleAmount?: number;
    public saleAddAmount: number;
    public debitAccount: string;

    public constructor(init?: Partial<OrgStudentCourseDTO>) { (Object as any).assign(this, init); }
}

export class CourseConsumLogDTO
{
    public id: string;
    public schoolId: string;
    public branchId: string;
    public studentId: string;
    public courseId: string;
    public classTimeId: string;
    public courseSubject: string[];
    public eventId: string;
    public orgStudentCourseId: string;
    public modifyAmount: number;
    public useGift: boolean;
    public price: string;
    public balancePrice: string;
    public auditPrice: string;
    public balanceAmount?: number;
    public balanceGiftAmount?: number;
    public remark: string;
    public paymentReceiptUrl: string;
    public createOn: string;
    public teacherUserInfoId: string;
    public userIPAddr: string;
    public source: COURSE_LOG_SOURCE;
    public transferOutCourseOrderId: string;
    public classId: string;
    public signDate?: string;
    public isReversal: boolean;
    public reversalFrom: string;
    public voucherNo: string;

    public constructor(init?: Partial<CourseConsumLogDTO>) { (Object as any).assign(this, init); }
}

export class ParentRelationSchoolInfoDTO
{
    public id: string;
    public kidEntityUserAuthMapId: string;
    public userId: number;
    public schoolId: string;
    public userProfileId: string;
    public createOn: string;
    public createIPAddr: string;
    public kidId: string;
    public lastModifyOn: string;
    public isDelete: boolean;
    public parentRole: string;

    public constructor(init?: Partial<ParentRelationSchoolInfoDTO>) { (Object as any).assign(this, init); }
}

export class KidEntityUserAuthMapDTO
{
    public id: string;
    public userId: number;
    public kidEntityId: string;
    public isDefault: boolean;
    public parentRole: string;
    public isDelete: boolean;
    public createOn: string;
    public lastModifyOn: string;
    public rongCloudUserId: string;
    public easeMobUserId: string;
    public phoneNumber: string;
    public isActive: boolean;

    public constructor(init?: Partial<KidEntityUserAuthMapDTO>) { (Object as any).assign(this, init); }
}

export class BuyContentDTO
{
    public classEventData: ClassEventItem;
    public parentRelationSchoolInfo: ParentRelationSchoolInfoDTO;
    public kidEntityUserAuthMap: KidEntityUserAuthMapDTO;

    public constructor(init?: Partial<BuyContentDTO>) { (Object as any).assign(this, init); }
}

export class CourseOrderApprovalDTO
{
    public id: string;
    public userId: number;
    public createBy: string;
    public createOn: string;
    public schoolId: string;
    public branchId: string;
    public kidId: string;
    public orderType: CourseOrderType;
    public courseBalance: KidCourseBalanceTransferItem[];
    public feeBalance: FeeBalanceTransferItem[];
    public orderItem: CourseOrderItem[];
    public paymentItem: CourseOrderPaymentItem[];
    public totalPrice: number;
    public payable: number;
    public payment: number;
    public amount: number;
    public giftAmount: number;
    public paymentType: string;
    public paymentReceiptUrl: string;
    public expireOn?: string;
    public source: string;
    public statementCatalog: string;
    public userIPAddr: string;
    public classIds: string[];
    public contractNo: string;
    public refundReason: string;
    public remark: string;
    public attachment: EventAttachDTO;
    public beginDate?: string;
    public signOn?: string;
    public giftPointPayment: number;
    public giftCardPayment: string;
    public approveState: CourseOrderApprovalState;
    public approverId: string;
    public approveRemark: string;
    public courseOrderId: string;
    public approvedOn?: string;
    public steps: WorkFlowStepDTO[];

    public constructor(init?: Partial<CourseOrderApprovalDTO>) { (Object as any).assign(this, init); }
}

export class BaseResponse
{
    public code: number;
    public message: string;

    public constructor(init?: Partial<BaseResponse>) { (Object as any).assign(this, init); }
}

export class CreateCourseOrderPaymentRes extends BaseResponse
{
    public data: StatementDetailDTO;

    public constructor(init?: Partial<CreateCourseOrderPaymentRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetCourseOrdersRes extends BaseResponse
{
    public hasYoYoPay?: boolean;
    public totalCount: number;
    public payable: number;
    public payment: number;
    public data: CourseOrderDTO[];
    public schoolData: { [index: string]: SchoolBaseInfo; };
    public teacherData: { [index: string]: TeacherBaseInfoDTO; };
    public studentData: { [index: string]: StudentBaseInfoDTO; };
    public ossInfos: { [index: string]: OssInfoDTO; };
    public classNames: { [index: string]: string; };
    public courses: { [index: string]: CourseItem; };
    public privateGiftCards: { [index: string]: PrivateGiftCardDTO; };
    public statementData: { [index: string]: StatementDetailDTO[]; };

    public constructor(init?: Partial<GetCourseOrdersRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetStatementDetailsRes extends BaseResponse
{
    public totalCount: number;
    public totalInCount: number;
    public totalInAmount: string;
    public totalOutCount: number;
    public totalOutAmount: string;
    public data: StatementDetailDTO[];
    public teacherData: { [index: string]: TeacherBaseInfoDTO; };
    public statementAccountData: { [index: string]: StatementAccountDTO; };
    public kidInfo: { [index: string]: StudentBaseInfoDTO; };
    public courseData: { [index: string]: CourseOrderItem; };
    public products: { [index: string]: SchoolProductDTO; };
    public feeItems: { [index: string]: SchoolFeeItemDTO; };

    public constructor(init?: Partial<GetStatementDetailsRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetCourseConsumDetailRes extends BaseResponse
{
    public data: CourseConsumLogDTO;
    public teacherData: { [index: string]: TeacherBaseInfoDTO; };
    public courseData: CourseDTO;
    public classTimeData: ClassTimeDTO;
    public studentData: StudentBaseInfoDTO;
    public studentCourseData: OrgStudentCourseDTO;
    public buyContentData: BuyContentDTO;

    public constructor(init?: Partial<GetCourseConsumDetailRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetCourseConsumLogsRes extends BaseResponse
{
    public totalCount: number;
    public totalConsumPrice: string;
    public totalAuditPrice: string;
    public data: CourseConsumLogDTO[];
    public studentData: { [index: string]: StudentBaseInfoDTO; };
    public courseData: { [index: string]: CourseOrderItem; };
    public classTimeData: { [index: string]: ClassTimeDTO; };
    public eventTitleData: { [index: string]: string; };
    public className: { [index: string]: string; };
    public teacherInfos: { [index: string]: TeacherBaseInfoDTO; };
    public orgStudentCourseCourseOrderIds: { [index: string]: string; };
    public courseOrder: { [index: string]: CourseOrderDTO; };

    public constructor(init?: Partial<GetCourseConsumLogsRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetCourseOrderApprovalRulesRes extends BaseResponse
{
    public rules: CourseOrderApprovalRuleDTO[];
    public teacherInfos: { [index: string]: TeacherBaseInfoDTO; };

    public constructor(init?: Partial<GetCourseOrderApprovalRulesRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetCourseOrderApprovalsRes extends BaseResponse
{
    public total: number;
    public data: CourseOrderApprovalDTO[];
    public kidInfos: { [index: string]: StudentBaseInfoDTO; };
    public teacherInfo: { [index: string]: TeacherBaseInfoDTO; };
    public ossInfos: { [index: string]: OssInfoDTO; };
    public classNames: { [index: string]: string; };
    public courses: { [index: string]: CourseItem; };
    public privateGiftCards: { [index: string]: PrivateGiftCardDTO; };

    public constructor(init?: Partial<GetCourseOrderApprovalsRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchoolSettingRes extends BaseResponse
{
    public data: SchoolSettingDTO;

    public constructor(init?: Partial<GetSchoolSettingRes>) { super(init); (Object as any).assign(this, init); }
}

/** @description 创建报名订单的支付 */
// @Route("/eduaffair/{SchoolId}/courseorder", "POST, OPTIONS")
// @Api(Description="创建报名订单的支付")
export class CreateCourseOrderPaymentReq implements IReturn<CreateCourseOrderPaymentRes>
{
    public schoolId: string;
    public courseOrderId: string;
    public amount: number;
    public dateOn?: string;
    public paymentType: string;
    public paymentReceiptUrl: string;
    public remark: string;

    public constructor(init?: Partial<CreateCourseOrderPaymentReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateCourseOrderPaymentReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CreateCourseOrderPaymentRes(); }
}

/** @description 创建或修改收支明细 */
// @Route("/eduaffair/{SchoolId}/courseorder", "POST, OPTIONS")
// @Api(Description="创建或修改收支明细")
export class CreateStatementDetailReq implements IReturn<BaseResponse>
{
    public schoolId: string;
    public branchId: string;
    public statementDetailId: string;
    public dateOn: string;
    public statementCatalog: string;
    public isIncoming: boolean;
    public isDelete: boolean;
    public amount: number;
    public paymentType: string;
    public paymentReceiptUrl: string;
    public remark: string;

    public constructor(init?: Partial<CreateStatementDetailReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateStatementDetailReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 删除报名订单 */
// @Route("/eduaffair/{SchoolId}/courseorder/{OrderNo}", "DELETE, OPTIONS")
// @Api(Description="删除报名订单")
export class DeleteCourseOrderReq implements IReturn<BaseResponse>
{
    // @Validate(Validator="NotEmpty", Message="OrderNo 不可为空")
    public orderNo: string;

    // @Validate(Validator="NotEmpty", Message="SchoolId 不可为空")
    public schoolId: string;

    // @Validate(Validator="NotEmpty", Message="KidId 不可为空")
    public kidId: string;

    // @Validate(Validator="NotEmpty", Message="Remark 不可为空")
    public remark: string;

    public constructor(init?: Partial<DeleteCourseOrderReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteCourseOrderReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取报名订单列表 */
// @Route("/eduaffair/{SchoolId}/courseorders", "GET, OPTIONS")
// @Api(Description="获取报名订单列表")
export class GetCourseOrdersReq implements IReturn<GetCourseOrdersRes>
{
    public schoolPartnerInfoId: string;
    public orderNo: string;
    public contractNo: string;
    public schoolId: string;
    public schoolIds: string[];
    public branchIds: string[];
    public kidName: string;
    public phoneNumber: string;
    public kidId: string;
    public followUpTeacherUserInfoId: string[];
    public createOn: string[];
    public payedOn: string[];
    public expireOn: string[];
    public orderType: CourseOrderType[];
    public statementCatalog: string;
    public courseId: string;
    public totalPrice: number[];
    public payable: number[];
    public payment: number[];
    public source: string;
    public sourceFirst: string[];
    public sourceSecond: string[];
    public createByTeacher: string;
    public orderState: CourseOrderState[];
    public isDelete?: boolean;
    public deleteOn: string[];
    public signOn: string[];
    public refundReason: string;
    public remark: string;
    public lastId: string;
    public pageSize?: number;
    public pageIndex?: number;

    public constructor(init?: Partial<GetCourseOrdersReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetCourseOrdersReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetCourseOrdersRes(); }
}

/** @description 获取收支明细列表 */
// @Route("/eduaffair/{SchoolId}/statementdetails", "GET, OPTIONS")
// @Api(Description="获取收支明细列表")
export class GetStatementDetailsReq implements IReturn<GetStatementDetailsRes>
{
    public schoolPartnerInfoId: string;
    public schoolIds: string[];
    public schoolId: string;
    public branchIds: string[];
    public kidId: string;
    public kidName: string;
    public phoneNumber: string;
    public courseOrderId: string;
    public statementCatalog: string;
    public isIncoming?: boolean;
    public isDelete?: boolean;
    public amount: number[];
    public fee: number[];
    public statementAccountId: string;
    public paymentType: string;
    public remark: string;
    public createOn: string[];
    public lastModifyOn: string[];
    public deleteOn: string[];
    public dateOn: string[];
    public userIPAddr: string;
    public teacherUserInfoId: string;
    public lastId: string;
    public pageSize?: number;
    public pageIndex?: number;

    public constructor(init?: Partial<GetStatementDetailsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetStatementDetailsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetStatementDetailsRes(); }
}

/** @description 获取课消记录详情 */
// @Route("/eduaffair/{SchoolId}/courseconsum/{CourseConsumId}", "GET, OPTIONS")
// @Api(Description="获取课消记录详情")
export class GetCourseConsumDetailReq implements IReturn<GetCourseConsumDetailRes>
{
    public schoolId: string;
    public courseConsumId: string;

    public constructor(init?: Partial<GetCourseConsumDetailReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetCourseConsumDetailReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetCourseConsumDetailRes(); }
}

/** @description 获取课消记录列表 */
// @Route("/eduaffair/{SchoolId}/courseconsumlogs", "GET, OPTIONS")
// @Api(Description="获取课消记录列表")
export class GetCourseConsumLogsReq implements IReturn<GetCourseConsumLogsRes>
{
    public schoolPartnerInfoId: string;
    public showAll?: boolean;
    public schoolId: string;
    public schoolIds: string[];
    public branchIds: string[];
    public courseSubject: string[];
    public kidName: string;
    public phoneNumber: string;
    public studentId: string;
    public classId: string;
    public courseId: string;
    public classTimeId: string;
    public orgStudentCourseId: string;
    public modifyAmount: number[];
    public useGift?: boolean;
    public price: number[];
    public remark: string;
    public createOn: string[];
    public signDate: string[];
    public source: COURSE_LOG_SOURCE[];
    public lastId: string;
    public pageSize?: number;
    public pageIndex?: number;

    public constructor(init?: Partial<GetCourseConsumLogsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetCourseConsumLogsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetCourseConsumLogsRes(); }
}

/** @description 获取学校订单审核规则 */
// @Route("/eduaffair/{SchoolId}/approvalrules", "GET, OPTIONS")
// @Api(Description="获取学校订单审核规则")
export class GetCourseOrderApprovalRulesReq implements IReturn<GetCourseOrderApprovalRulesRes>
{
    public schoolId: string;

    public constructor(init?: Partial<GetCourseOrderApprovalRulesReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetCourseOrderApprovalRulesReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetCourseOrderApprovalRulesRes(); }
}

/** @description 待审核合同列表 */
// @Route("/eduaffair/{SchoolId}/courseorderapprovals", "POST")
// @Api(Description="待审核合同列表")
export class GetCourseOrderApprovalsReq implements IReturn<GetCourseOrderApprovalsRes>
{
    public showType: string;
    public schoolId: string;
    public kidId: string;
    public kidName: string;
    public createBy: string;
    public orderType: CourseOrderType[];
    public totalPrice: number[];
    public payable: number[];
    public payment: number[];
    public amount: number[];
    public giftAmount: number[];
    public paymentType: string;
    public expireOn: string[];
    public source: string;
    public statementCatalog: string;
    public classId: string;
    public contractNo: string;
    public refundReason: string;
    public remark: string;
    public beginDate: string[];
    public signOn: string[];
    public giftPointPayment: number[];
    public giftCardPayment: string;
    public approveState: CourseOrderApprovalState[];
    public approverId: string;
    public courseOrderId: string;
    public sourceCourseOrderId: string;
    public approvedOn: string[];
    public approveRemark: string;
    public createOn: string[];
    public lastId: string;
    public sort: { [index: string]: ORDER_DIRECTION; };
    public pageSize: number;
    public pageIndex: number;

    public constructor(init?: Partial<GetCourseOrderApprovalsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetCourseOrderApprovalsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetCourseOrderApprovalsRes(); }
}

/** @description 审核合同 */
// @Route("/eduaffair/{SchoolId}/courseorderapprove", "POST, OPTIONS")
// @Api(Description="审核合同")
export class CourseOrderApproveReq implements IReturn<BaseResponse>
{
    public schoolId: string;
    public approveId: string;
    public stepId: string;
    public isApprove: boolean;
    public approveRemark: string;

    public constructor(init?: Partial<CourseOrderApproveReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CourseOrderApproveReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获得学校平台设置 */
// @Route("/system/{SchoolId}/setting", "GET, OPTIONS")
// @Api(Description="获得学校平台设置")
export class GetSchoolSettingReq implements IReturn<GetSchoolSettingRes>
{
    public schoolId: string;

    public constructor(init?: Partial<GetSchoolSettingReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolSettingReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSchoolSettingRes(); }
}

