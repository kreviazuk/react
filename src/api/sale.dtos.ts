/* Options:
Date: 2025-10-28 14:27:16
Version: 8.0
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://apigwtest.yban.co/api/educrm

//GlobalNamespace:
//MakePropertiesOptional: False
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion:
//AddDescriptionAsComments: True
IncludeTypes: FinanceCloseSettingDTO,EventAttachImageItemDTO,EventAttachVideoItemDTO,EventAttachAudioItemDTO,EventAttachFileItemDTO,EventAttachLinkItemDTO,EventAttachTingItemDTO,EventAttachDTO,OssInfoDTO,CreateSalesFollowUpInfoReq,UpdateSalesFollowUpInfoReq,GetSalesFollowUpInfoReq,UpdateSalesLeadsReq,SalesFollowUpInfoDTO,DeleteSalesLeadsReq,ORDER_DIRECTION,SALESLEAD_FASTFILTER_TYPE,GeoCoordinates,SCHOOL_DEPT_TYPE,FOLLOWUP_RESULT,FOLLOWUP_METHOD,PARENTACCOUNTSTATUS,SEMESTERTYPE,ParentRelationClassInfoDTO,KID_ALLERGY,KidClassInfoDTO,STUDENT_STATUS,KIDACCOUNTSTATE,SchoolOrgInfoDTO,KidInfoDTO,TeacherBaseInfoDTO,SalesLeadDTO,GetSalesLeadsReq,CourseSaleItemType,CourseSaleItemDTO,CourseSignType,CourseItem,StudentBaseInfoDTO,KidCourseBalanceItem,GetSchoolKidsCourseBalanceeMinReq,UpdateSchoolSettingReq,SCHOOL_SERVICE_SUB_MODULE,H5AppServiceItem,H5AppServiceItemExtra,SCHOOL_TYPE,H5ParentConfig,AppointmentBalanceLimitType,AppointmentBeginEndTimeType,AppointmentBeginEndType,H5ParentConfigExtra,AppointmentSetting,ClassBabyCareSettingDTO,MyDayOfWeek,SchoolSettingDTO,PARENT_ROLE_TYPE,CUSTOM_INTENT_TYPE,FOLLOWUP_STATE,ParentInfoDTO,GENDERTYPE,GetSchoolSettingReq,UpdateSalesLeadReq,CreateSalesLeadReq
//ExcludeTypes:
DefaultImports: package:servicestack/servicestack.dart
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

// @DataContract
export class GeoCoordinates
{
    // @DataMember(Order=1)
    public lng: number;

    // @DataMember(Order=2)
    public lat: number;

    public constructor(init?: Partial<GeoCoordinates>) { (Object as any).assign(this, init); }
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

export enum STUDENT_STATUS
{
    NORMAL = 'NORMAL',
    TRANSFEROUT = 'TRANSFEROUT',
    WAIT = 'WAIT',
    GRADUATION = 'GRADUATION',
    FREEZE = 'FREEZE',
}

export enum KIDACCOUNTSTATE
{
    STATE_WAITAPPROVE = 'STATE_WAITAPPROVE',
    STATE_WAITLOGIN = 'STATE_WAITLOGIN',
    STATE_NORMAL = 'STATE_NORMAL',
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

export enum SALESLEAD_FASTFILTER_TYPE
{
    All = 'All',
    ToDayFollow = 'ToDayFollow',
    WeekFollow = 'WeekFollow',
    DoubleWeekFollow = 'DoubleWeekFollow',
    MonthFollow = 'MonthFollow',
    ToDayNew = 'ToDayNew',
    WeekNew = 'WeekNew',
    MonthNew = 'MonthNew',
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

export class ParentInfoDTO
{
    public parentRoleType: PARENT_ROLE_TYPE;
    public phoneNumber: string;

    public constructor(init?: Partial<ParentInfoDTO>) { (Object as any).assign(this, init); }
}

export enum FOLLOWUP_METHOD
{
    PHONE = 'PHONE',
    WECHAT = 'WECHAT',
    FACE2FACE = 'FACE2FACE',
    SMS = 'SMS',
    OTHER = 'OTHER',
    ONLINE = 'ONLINE',
    RESERVE = 'RESERVE',
    TRADE = 'TRADE',
}

export enum SCHOOL_DEPT_TYPE
{
    HEADQUARTERS = 'HEADQUARTERS',
    DEPARTMENT = 'DEPARTMENT',
    BRANCH = 'BRANCH',
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

export enum KID_ALLERGY
{
    ALLERGY_MILK = 'ALLERGY_MILK',
    ALLERGY_EGG = 'ALLERGY_EGG',
    ALLERGY_SEAFOOD = 'ALLERGY_SEAFOOD',
    ALLERGY_NUTS = 'ALLERGY_NUTS',
    ALLERGY_FISH = 'ALLERGY_FISH',
    ALLERGY_SOYBEAN = 'ALLERGY_SOYBEAN',
    ALLERGY_WHEAT = 'ALLERGY_WHEAT',
    ALLERGY_PEANUT = 'ALLERGY_PEANUT',
    ALLERGY_MUSHROOM = 'ALLERGY_MUSHROOM',
    ALLERGY_SESAME = 'ALLERGY_SESAME',
}

export enum SCHOOL_TYPE
{
    KINDERGARTEN = 'KINDERGARTEN',
    EDUAFFAIR = 'EDUAFFAIR',
    SCHOOL = 'SCHOOL',
    ALL = 'ALL',
}

export class KidClassInfoDTO
{
    public branchId: string;
    public className: string;
    public originalClassName: string;
    public classId: string;
    public currentSemester: SEMESTERTYPE;
    public hasLoveVideo: boolean;
    public status: STUDENT_STATUS;

    public constructor(init?: Partial<KidClassInfoDTO>) { (Object as any).assign(this, init); }
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
    public parentRelationSchoolInfoId: string;
    public profileId: string;
    public isDefault: boolean;
    public userId?: number;
    public roleName: string;
    public phoneNumber: string;
    public imClientId: string;
    public rongCloudUserId: string;
    public easeMobUserId: string;
    public parentId: string;
    public kidId: string;
    public inviteStatus: PARENTACCOUNTSTATUS;

    public constructor(init?: Partial<ParentRelationClassInfoDTO>) { (Object as any).assign(this, init); }
}

export class KidInfoDTO
{
    public id: string;
    public name: string;
    public nickName: string;
    public gender: GENDERTYPE;
    public birthDate?: string;
    public kidMonth: number;
    public logoUrl: string;
    public createOn: string;
    public state: KIDACCOUNTSTATE;
    public studentStatus: STUDENT_STATUS;
    public primaryContact: ParentInfoDTO;
    public secondaryContact: ParentInfoDTO;
    public classInfos: KidClassInfoDTO[];
    public schoolId: string;
    public hobby: string;
    public allergies: KID_ALLERGY[];
    public followUpTeacherUserInfoId: string;
    public parents: ParentRelationClassInfoDTO[];
    public remark: string;

    public constructor(init?: Partial<KidInfoDTO>) { (Object as any).assign(this, init); }
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

export class KidCourseBalanceItem
{
    public branchId: string;
    public orgStudentCourseId: string;
    public studentId: string;
    public courseOrderId: string;
    public courseId: string;
    public type: CourseSaleItemType;
    public unit: string;
    public saleUnit: string;
    public saleAmount?: number;
    public saleAddAmount: number;
    public amount: number;
    public giftAmount: number;
    public transferOutAmount: number;
    public usedAmount: number;
    public usedGiftAmount: number;
    public totalPrice: number;
    public price: number;
    public auditPrice: number;
    public balanceGiftAmount: number;
    public balanceAmount: number;
    public balance: number;
    public balancePrice?: number;
    public createOn: string;
    public expireOn?: string;
    public beginDate?: string;
    public endDate?: string;
    public debitAccount: string;

    public constructor(init?: Partial<KidCourseBalanceItem>) { (Object as any).assign(this, init); }
}

export class SalesLeadDTO
{
    public id: string;
    public schoolId: string;
    public branchId: string;
    public studentName: string;
    public primaryContact: ParentInfoDTO;
    public gender: GENDERTYPE;
    public birthDate: string;
    public kidMonth: number;
    public schoolName: string;
    public schoolGrade: string;
    public secondaryContact: ParentInfoDTO;
    public homeAddr: string;
    public intentType: CUSTOM_INTENT_TYPE;
    public score: number;
    public source: string;
    public remark: string;
    public tags: string[];
    public firstCheckInOn?: string;
    public createOn: string;
    public lastModifyOn: string;
    public followUpState: FOLLOWUP_STATE;
    public followUpTeacherUserInfoId: string;
    public createByTeacherUserInfoId: string;
    public lastFollowUpDate?: string;
    public lastFollowUpTeacherId: string;
    public nextFollowUpDate?: string;
    public followUpMethod?: FOLLOWUP_METHOD;
    public followUpResult?: FOLLOWUP_RESULT;
    public followUpResultDesc: string;
    public lastDemoDate?: string;
    public lastPrivateAllocateDate?: string;
    public lastPublicAllocateDate?: string;
    public kidId: string;
    public isDelete: boolean;
    public deleteOn?: string;
    public deleteBy: string;

    public constructor(init?: Partial<SalesLeadDTO>) { (Object as any).assign(this, init); }
}

export class SchoolOrgInfoDTO
{
    public id: string;
    public schoolId: string;
    public name: string;
    public deptType: SCHOOL_DEPT_TYPE;
    public parentId: string;
    public createOn: string;
    public lastModifyOn: string;
    public address: string;
    public phoneNumber: string;
    public location: GeoCoordinates;

    public constructor(init?: Partial<SchoolOrgInfoDTO>) { (Object as any).assign(this, init); }
}

export class SalesFollowUpInfoDTO
{
    public id: string;
    public schoolId: string;
    public branchId: string;
    public salesLeadId: string;
    public followUpMethod: FOLLOWUP_METHOD;
    public followUpResult: FOLLOWUP_RESULT;
    public followUpResultDesc: string;
    public followUpDate: string;
    public nextFollowUpDate: string;
    public createByTeacherUserInfoId: string;
    public followUpContent: string;
    public createOn: string;
    public lastModifyOn: string;
    public attachment: EventAttachDTO;

    public constructor(init?: Partial<SalesFollowUpInfoDTO>) { (Object as any).assign(this, init); }
}

export class BaseResponse
{
    public code: number;
    public message: string;

    public constructor(init?: Partial<BaseResponse>) { (Object as any).assign(this, init); }
}

export class GetSalesLeadsRes extends BaseResponse
{
    public totalCount: number;
    public leadData: SalesLeadDTO[];
    public teacherInfo: { [index: string]: TeacherBaseInfoDTO; };
    public kidInfo: { [index: string]: KidInfoDTO; };
    public orgInfo: { [index: string]: SchoolOrgInfoDTO; };

    public constructor(init?: Partial<GetSalesLeadsRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetSalesFollowUpInfoRes extends BaseResponse
{
    public data: SalesFollowUpInfoDTO[];
    public leadData: { [index: string]: SalesLeadDTO; };
    public ossInfos: { [index: string]: OssInfoDTO; };
    public teacherInfo: { [index: string]: TeacherBaseInfoDTO; };
    public totalCount: number;

    public constructor(init?: Partial<GetSalesFollowUpInfoRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchoolKidsCourseBalanceeMinRes extends BaseResponse
{
    public totalCount: number;
    public data: KidCourseBalanceItem[];
    public studentData: { [index: string]: StudentBaseInfoDTO; };
    public courseData: { [index: string]: CourseItem; };

    public constructor(init?: Partial<GetSchoolKidsCourseBalanceeMinRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchoolSettingRes extends BaseResponse
{
    public data: SchoolSettingDTO;

    public constructor(init?: Partial<GetSchoolSettingRes>) { super(init); (Object as any).assign(this, init); }
}

/** @description 获取销售线索 */
// @Route("/eduaffair/{SchoolId}/salesleads", "GET, OPTIONS")
// @Api(Description="获取销售线索")
export class GetSalesLeadsReq implements IReturn<GetSalesLeadsRes>
{
    public schoolPartnerInfoId: string;
    public schoolIds: string[];
    public fastFilterType: SALESLEAD_FASTFILTER_TYPE;
    public schoolId: string;
    public branchIds: string[];
    public showFlag: number;
    public studentName: string;
    public phoneNumber: string;
    public gender?: GENDERTYPE;
    public birthDate: string[];
    public schoolName: string;
    public schoolGrade: string;
    public homeAddr: string;
    public intentType?: CUSTOM_INTENT_TYPE;
    public source: string;
    public sourceFirst: string[];
    public sourceSecond: string[];
    public remark: string;
    public createOn: string[];
    public lastModifyOn: string[];
    public followUpState: FOLLOWUP_STATE[];
    public followUpTeacherUserInfoId: string;
    public lastFollowUpDate: string[];
    public nextFollowUpDate: string[];
    public followUpResult?: FOLLOWUP_RESULT;
    public followUpResultDesc: string;
    public isDelete?: boolean;
    public deleteOn: string[];
    public deleteBy: string;
    public kidInfoId: string;
    public isMember?: boolean;
    public score?: number;
    public firstCheckInOn: string[];
    public createByTeacherUserInfoId: string;
    public lastFollowUpTeacherId: string;
    public lastPrivateAllocateDate: string[];
    public lastPublicAllocateDate: string[];
    public lastDemoDate: string[];
    public tags: string[];
    public lastId: string;
    public pageSize?: number;
    public pageIndex?: number;
    public sort: { [index: string]: ORDER_DIRECTION; };

    public constructor(init?: Partial<GetSalesLeadsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSalesLeadsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSalesLeadsRes(); }
}

/** @description 创建销售线索 */
// @Route("/eduaffair/{SchoolId}/saleslead", "POST, OPTIONS")
// @Api(Description="创建销售线索")
export class CreateSalesLeadReq implements IReturn<BaseResponse>
{
    public schoolPartnerInfoId: string;
    public schoolId: string;
    public branchId: string;
    public studentName: string;
    public gender: GENDERTYPE;
    public homeAddr: string;
    public schoolName: string;
    public schoolGrade: string;
    public primaryContact: ParentInfoDTO;
    public secondaryContact: ParentInfoDTO;
    public birthDate?: string;
    public followUpState: FOLLOWUP_STATE;
    public followUpTeacherUserInfoId: string;
    public intentType: CUSTOM_INTENT_TYPE;
    public remark: string;
    public source: string;
    public tags: string[];
    public score: number;
    public firstCheckInOn?: string;
    public createByTeacherUserInfoId: string;

    public constructor(init?: Partial<CreateSalesLeadReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateSalesLeadReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 更新销售线索 */
// @Route("/eduaffair/{SchoolId}/saleslead/{SalesLeadId}", "POST, OPTIONS")
// @Api(Description="更新销售线索")
export class UpdateSalesLeadReq implements IReturn<BaseResponse>
{
    public schoolId: string;
    public branchId: string;
    public salesLeadId: string;
    public studentName: string;
    public gender: GENDERTYPE;
    public homeAddr: string;
    public schoolName: string;
    public schoolGrade: string;
    public primaryContact: ParentInfoDTO;
    public secondaryContact: ParentInfoDTO;
    public birthDate?: string;
    public followUpState: FOLLOWUP_STATE;
    public followUpTeacherUserInfoId: string;
    public intentType: CUSTOM_INTENT_TYPE;
    public remark: string;
    public source: string;
    public tags: string[];
    public score: number;
    public firstCheckInOn?: string;
    public createByTeacherUserInfoId: string;

    public constructor(init?: Partial<UpdateSalesLeadReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateSalesLeadReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 批量分配销售线索 */
// @Route("/eduaffair/{SchoolId}/salesleads", "POST, OPTIONS")
// @Api(Description="批量分配销售线索")
export class UpdateSalesLeadsReq implements IReturn<BaseResponse>
{
    public schoolId: string;
    public salesLeadIds: string[];
    public followUpState: FOLLOWUP_STATE;
    public followUpTeacherUserInfoId: string;

    public constructor(init?: Partial<UpdateSalesLeadsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateSalesLeadsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 批量删除销售线索 */
// @Route("/eduaffair/{SchoolId}/salesleads", "POST, OPTIONS")
// @Api(Description="批量删除销售线索")
export class DeleteSalesLeadsReq implements IReturn<BaseResponse>
{
    public schoolId: string;
    public salesLeadIds: string[];
    public isDelete: boolean;
    public remark: string;

    public constructor(init?: Partial<DeleteSalesLeadsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteSalesLeadsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取销售跟进记录 */
// @Route("/eduaffair/{SchoolId}/salesfollowupinfos", "GET, OPTIONS")
// @Api(Description="获取销售跟进记录")
export class GetSalesFollowUpInfoReq implements IReturn<GetSalesFollowUpInfoRes>
{
    public schoolPartnerInfoId: string;
    public schoolIds: string[];
    public schoolId: string;
    public branchIds: string[];
    public studentName: string;
    public phoneNumber: string;
    public salesLeadId: string;
    public followUpMethod?: FOLLOWUP_METHOD;
    public followUpDate: string[];
    public nextFollowUpDate: string[];
    public followUpResult?: FOLLOWUP_RESULT;
    public followUpResultDesc: string;
    public intentType?: CUSTOM_INTENT_TYPE;
    public createByTeacherUserInfoId: string;
    public followUpContent: string;
    public createOn: string[];
    public lastModifyOn: string[];
    public lastId: string;
    public pageSize?: number;
    public pageIndex?: number;

    public constructor(init?: Partial<GetSalesFollowUpInfoReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSalesFollowUpInfoReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSalesFollowUpInfoRes(); }
}

/** @description 创建销售跟进记录 */
// @Route("/eduaffair/{SchoolId}/salesfollowupinfo", "POST, OPTIONS")
// @Api(Description="创建销售跟进记录")
export class CreateSalesFollowUpInfoReq implements IReturn<BaseResponse>
{
    public schoolId: string;
    public salesLeadId: string;
    public followUpMethod: FOLLOWUP_METHOD;
    public followUpContent: string;
    public followUpDate?: string;
    public nextFollowUpDate: string;
    public followUpResult?: FOLLOWUP_RESULT;
    public followUpResultDesc: string;
    public attachment: EventAttachDTO;

    public constructor(init?: Partial<CreateSalesFollowUpInfoReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateSalesFollowUpInfoReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 更新销售跟进记录 */
// @Route("/eduaffair/{SchoolId}/salesfollowupinfo/{SalesFollowUpInfoId}", "POST, OPTIONS")
// @Api(Description="更新销售跟进记录")
export class UpdateSalesFollowUpInfoReq implements IReturn<BaseResponse>
{
    public schoolId: string;
    public salesFollowUpInfoId: string;
    public followUpMethod: FOLLOWUP_METHOD;
    public followUpContent: string;
    public followUpDate: string;
    public nextFollowUpDate: string;
    public followUpResult?: FOLLOWUP_RESULT;
    public followUpResultDesc: string;
    public attachment: EventAttachDTO;

    public constructor(init?: Partial<UpdateSalesFollowUpInfoReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateSalesFollowUpInfoReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取学校的学生课程聚合后的课时信息 */
// @Route("/school/{SchoolId}/kidscoursebalancemin", "GET, OPTIONS")
// @Api(Description="获取学校的学生课程聚合后的课时信息")
export class GetSchoolKidsCourseBalanceeMinReq implements IReturn<GetSchoolKidsCourseBalanceeMinRes>
{
    public schoolId: string;
    public branchIds: string[];
    public type: CourseSaleItemType;
    public kidName: string;
    public studentId: string;
    public courseId: string;
    public studentStatus?: STUDENT_STATUS;
    public balance: number[];
    public expired?: boolean;
    public pageSize: number;
    public pageIndex: number;

    public constructor(init?: Partial<GetSchoolKidsCourseBalanceeMinReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolKidsCourseBalanceeMinReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSchoolKidsCourseBalanceeMinRes(); }
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

/** @description 更新学校平台设置 */
// @Route("/system/{SchoolId}/setting", "POST, OPTIONS")
// @Api(Description="更新学校平台设置")
export class UpdateSchoolSettingReq implements IReturn<GetSchoolSettingRes>
{
    public schoolId: string;
    public settingKey: string;
    public settingValue: string;

    public constructor(init?: Partial<UpdateSchoolSettingReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateSchoolSettingReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSchoolSettingRes(); }
}

