/* Options:
Date: 2025-11-18 15:21:44
Version: 8.40
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://apigwtest.yban.co/api/educrm

//GlobalNamespace: 
MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
IncludeTypes: RequireAckEventReq,GetSchoolBillItemLogsReq,TerminateSchoolBillItemReq,CancelSchoolBillItemReq,AddSchoolBillItemReq,GetSchoolBillItemsReq,AuditTopicTestInterceptReq,GetTopicTestInterceptLogsReq,UpdateSchoolTopicTestKeyWordsReq,UpdateSchoolTopicTestKeyWordsV2Req,GetSchoolTopicTestKeyWordsReq,GetSchoolTopicTestKeyWordsV2Req,GetGrowBooksReq,GetLiveVideoVisitCountReq,GetLiveVideoVisitSummaryReq,GetLiveChannelsReq,GetClassLiveScheduleReq,GetLiveVideoVisitHistoryReq,SetKidDailyHealthyReq,GetSchoolKidDailyHealthieSummaryReq,GetBabyCareDailyTaskReq,GetAppToDoItemsReq,GetSchoolDashboardReq,SaveTeacherCustomAppMenuReq,GetTeacherAppMenuReq,TeacherClassInfoDTO,TeacherInfoDTO,CLASS_STATUS,CLASSGRADETYPE,GetSchoolClassInfosV3Req,GetWechatMPInfoBySchoolReq,GetSchoolInfoReq,GetSchoolBaseInfoReq,SchoolBaseInfo,SchoolInfoDTO,GeoCoordinates,STUDENT_MEMBER_BUY_TYPE,SCHOOL_LICENSE_TYPE,SCHOOL_STATE,SYSTEM_LICENSE_TYPE,CheckBindReq,GetRegInfoFromTokenReq,BindKidItem,KidEntityItem,KidBindReq,SchoolOrgInfoDTO,SCHOOL_DEPT_TYPE,GetSchoolParentH5AppConfigReq,SchoolParentH5AppConfig,H5AppAnnouncementItem,H5AppServiceItem,H5ParentConfig,AdConfigVideoTrail,AdConfigSplash,AdConfigInteraction,GetSchoolTeachersReq,GetSchoolSettingReq,SchoolSettingDTO,ClassBabyCareSettingDTO,AppointmentSetting,AppointmentBeginEndType,AppointmentBeginEndTimeType,AppointmentBalanceLimitType,H5ParentConfigExtra,H5AppServiceItemExtra,FinanceCloseSettingDTO,SCHOOL_SERVICE_SUB_MODULE
ExcludeTypes: BaseResponse,IReturn,CommonReturn
DefaultImports: ClassBillLogDTO:./base.dtos,ClassBillItemDTO:./base.dtos,ClassBaseInfoDTO:./base.dtos,EVENTAUDITSTATE:./base.dtos,TOPIC_TEST_SOURCE_TYPE:./base.dtos,TOPIC_TEST_KEYWORD_TYPE:./base.dtos,EVENTPUBLISHSTATE:./base.dtos,TeacherBaseInfoDTO:./base.dtos,TopicTestInterceptLogDTO:./base.dtos,TopicTestInterceptGroupByKeyWordTypeDTO:./base.dtos,TopicTestSchoolKeyWordDTO:./base.dtos,TopicTestInterceptGroupByKeyWordItem:./base.dtos,TopicTestSchoolKeyWordV2DTO:./base.dtos,GrowBookSummaryDTO:./base.dtos,LiveVideoVisitHistoryDTO:./base.dtos,LiveVideoVisitSummaryDTO:./base.dtos,CommonRequest:./base.dtos,LiveScheduleItemDTO:./base.dtos,LiveChannelDTO:./base.dtos,LiveVideoVisitHistory:./base.dtos,DailyCareExtraData:./base.dtos,EventAttachDTO:./base.dtos,DailyHealthyDTO:./base.dtos,KidDailyHealthState:./base.dtos,OSTYPE:./base.dtos,ProTableRequest:./base.dtos,ICommonRequest:./base.dtos,OssInfoDTO:./base.dtos,CurriculumDTO:./base.dtos,BabyCareDailyTaskDTO:./base.dtos,AppToDoItemDTO:./base.dtos,KidInfoDTO:./base.dtos,KidDailySummark:./base.dtos,TeacherAppMenuDTO:./base.dtos,BaseResponse:./base.dtos,type IReturn:./base.dtos,CommonReturn:./base.dtos,GENDERTYPE:./base.dtos,MyDayOfWeek:./base.dtos,TEACHER_CLASS_ROLE:./base.dtos,StudentBaseInfoDTO:./base.dtos,ParentRelationClassInfoDTO:./base.dtos,ClassInfoDTO:./base.dtos,SCHOOL_TYPE:./base.dtos
*/

import { ClassBillLogDTO } from "./base.dtos";
import { ClassBillItemDTO } from "./base.dtos";
import { ClassBaseInfoDTO } from "./base.dtos";
import { EVENTAUDITSTATE } from "./base.dtos";
import { TOPIC_TEST_SOURCE_TYPE } from "./base.dtos";
import { TOPIC_TEST_KEYWORD_TYPE } from "./base.dtos";
import { EVENTPUBLISHSTATE } from "./base.dtos";
import { TeacherBaseInfoDTO } from "./base.dtos";
import { TopicTestInterceptLogDTO } from "./base.dtos";
import { TopicTestInterceptGroupByKeyWordTypeDTO } from "./base.dtos";
import { TopicTestSchoolKeyWordDTO } from "./base.dtos";
import { TopicTestInterceptGroupByKeyWordItem } from "./base.dtos";
import { TopicTestSchoolKeyWordV2DTO } from "./base.dtos";
import { GrowBookSummaryDTO } from "./base.dtos";
import { LiveVideoVisitHistoryDTO } from "./base.dtos";
import { LiveVideoVisitSummaryDTO } from "./base.dtos";
import { CommonRequest } from "./base.dtos";
import { LiveScheduleItemDTO } from "./base.dtos";
import { LiveChannelDTO } from "./base.dtos";
import { LiveVideoVisitHistory } from "./base.dtos";
import { DailyCareExtraData } from "./base.dtos";
import { EventAttachDTO } from "./base.dtos";
import { DailyHealthyDTO } from "./base.dtos";
import { KidDailyHealthState } from "./base.dtos";
import { OSTYPE } from "./base.dtos";
import { ProTableRequest } from "./base.dtos";
import { ICommonRequest } from "./base.dtos";
import { OssInfoDTO } from "./base.dtos";
import { CurriculumDTO } from "./base.dtos";
import { BabyCareDailyTaskDTO } from "./base.dtos";
import { AppToDoItemDTO } from "./base.dtos";
import { KidInfoDTO } from "./base.dtos";
import { KidDailySummark } from "./base.dtos";
import { TeacherAppMenuDTO } from "./base.dtos";
import { BaseResponse } from "./base.dtos";
import { type IReturn } from "./base.dtos";
import { CommonReturn } from "./base.dtos";
import { GENDERTYPE } from "./base.dtos";
import { MyDayOfWeek } from "./base.dtos";
import { TEACHER_CLASS_ROLE } from "./base.dtos";
import { StudentBaseInfoDTO } from "./base.dtos";
import { ParentRelationClassInfoDTO } from "./base.dtos";
import { ClassInfoDTO } from "./base.dtos";
import { SCHOOL_TYPE } from "./base.dtos";

// @DataContract
export class GeoCoordinates
{
    // @DataMember(Order=1)
    public lng?: number;

    // @DataMember(Order=2)
    public lat?: number;

    public constructor(init?: Partial<GeoCoordinates>) { (Object as any).assign(this, init); }
}

export enum CLASS_STATUS
{
    NORMAL = 'NORMAL',
    GRADUATION = 'GRADUATION',
    TRANSFEROUT = 'TRANSFEROUT',
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

export enum CLASSGRADETYPE
{
    GRADE_PRE = 'GRADE_PRE',
    GRADE_1 = 'GRADE_1',
    GRADE_2 = 'GRADE_2',
    GRADE_3 = 'GRADE_3',
    GRADE_OTHER = 'GRADE_OTHER',
}

export enum SYSTEM_LICENSE_TYPE
{
    BASIC = 'BASIC',
    STANDARD = 'STANDARD',
    PREMIUM = 'PREMIUM',
}

export class TeacherClassInfoDTO
{
    public classId?: string;
    public className?: string;
    public roleType?: TEACHER_CLASS_ROLE;
    public teacherRole?: string;
    public originalClassName?: string;

    public constructor(init?: Partial<TeacherClassInfoDTO>) { (Object as any).assign(this, init); }
}

export class TeacherInfoDTO
{
    public id?: string;
    public userId?: number;
    public fullName?: string;
    public nickName?: string;
    public employeeNo?: string;
    public remark?: string;
    public logoUrl?: string;
    public schoolName?: string;
    public schoolId?: string;
    public branchRole?: { [index: string]: string; };
    public userName?: string;
    public profileId?: string;
    public teacherRole?: string;
    public imClientId?: string;
    public rongImClientId?: string;
    public easeMobIMUserId?: string;
    public classInfos?: TeacherClassInfoDTO[];
    public needPublishAudit?: boolean;
    public teacherRoleIds?: string[];
    public timestamp?: number;
    public attendanceTemplateId?: string;
    public orderIndex?: number;
    public isDelete?: boolean;
    public isHidden?: boolean;
    public birthDate?: string;
    public education?: string;
    public entryDate?: string;
    public idNumber?: string;
    public createOn?: string;
    public lastModifyOn?: string;

    public constructor(init?: Partial<TeacherInfoDTO>) { (Object as any).assign(this, init); }
}

// @DataContract
export enum SCHOOL_STATE
{
    NORMAL = 0,
    SUSPAND = 1,
    EXPIRE = 2,
    TRIAL = 3,
    WAIT_APPROVE = -1,
}

// @DataContract
export enum STUDENT_MEMBER_BUY_TYPE
{
    BUY_BY_PARENT = 'BUY_BY_PARENT',
    BUY_BY_SCHOOL = 'BUY_BY_SCHOOL',
}

// @DataContract
export enum SCHOOL_LICENSE_TYPE
{
    UNLIMIT_NUMBER_OF_STUDENTS = 'UNLIMIT_NUMBER_OF_STUDENTS',
    FIXED_NUMBER_OF_STUDENTS = 'FIXED_NUMBER_OF_STUDENTS',
    ELASTIC_NUMBER_OF_STUDENTS = 'ELASTIC_NUMBER_OF_STUDENTS',
}

// @DataContract
export class SchoolInfoDTO
{
    // @DataMember(Order=1)
    public id?: string;

    // @DataMember(Order=2)
    public name?: string;

    // @DataMember(Order=3)
    public eName?: string;

    // @DataMember(Order=4)
    public remark?: string;

    // @DataMember(Order=5)
    public createOn?: string;

    // @DataMember(Order=6)
    public masterFullName?: string;

    // @DataMember(Order=7)
    public masterUserName?: string;

    // @DataMember(Order=8)
    public masterUserId?: number;

    // @DataMember(Order=9)
    public logoUrl?: string;

    // @DataMember(Order=10)
    public schoolImageUrl?: string;

    // @DataMember(Order=11)
    public desc?: string;

    // @DataMember(Order=12)
    public schoolType?: string;

    // @DataMember(Order=13)
    public province?: string;

    // @DataMember(Order=14)
    public city?: string;

    // @DataMember(Order=15)
    public district?: string;

    // @DataMember(Order=16)
    public phoneNumber?: string;

    // @DataMember(Order=17)
    public address?: string;

    // @DataMember(Order=18)
    public location?: GeoCoordinates;

    // @DataMember(Order=19)
    public memberBuyType?: STUDENT_MEMBER_BUY_TYPE;

    // @DataMember(Order=20)
    public isEnforceMember?: boolean;

    // @DataMember(Order=21)
    public schoolMemberExpireOn?: string;

    // @DataMember(Order=22)
    public serviceModules?: string[];

    // @DataMember(Order=23)
    public privateServiceModules?: string[];

    // @DataMember(Order=24)
    public excludeServiceModules?: string[];

    // @DataMember(Order=25)
    public disabledServiceModules?: string[];

    // @DataMember(Order=26)
    public miniSiteUrl?: string;

    // @DataMember(Order=27)
    public licenseType?: SCHOOL_LICENSE_TYPE;

    // @DataMember(Order=35)
    public maxStudentNumber?: number;

    // @DataMember(Order=28)
    public schoolState?: SCHOOL_STATE;

    // @DataMember(Order=29)
    public totalLicenseNumber?: number;

    // @DataMember(Order=30)
    public avaliableLicenseNumber?: number;

    // @DataMember(Order=31)
    public schoolKidCount?: number;

    // @DataMember(Order=32)
    public schoolPartnerInfoId?: string;

    // @DataMember(Order=33)
    public systemLicenseType?: SYSTEM_LICENSE_TYPE;

    // @DataMember(Order=34)
    public loveLiveMemberBuyType?: STUDENT_MEMBER_BUY_TYPE;

    // @DataMember(Order=35)
    public vrUrl?: string;

    public constructor(init?: Partial<SchoolInfoDTO>) { (Object as any).assign(this, init); }
}

export class ClassBabyCareSettingDTO
{
    public classId?: string;
    public babyCareNotifyHour?: number;
    public babyCareNotifyHours?: number[];
    public isShowBabyCareNutrition?: boolean;
    public babyCareWeekNotifyHour?: number;
    public babyCareWeekNotifyWeekDay?: MyDayOfWeek;
    public isShowBabyCareWeekNutrition?: boolean;

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
    public beginType?: AppointmentBeginEndType;
    public beginTime?: number;
    public beginTimeType?: AppointmentBeginEndTimeType;
    public beginDay?: number;
    public beginDayMinutes?: number;
    public endType?: AppointmentBeginEndType;
    public endTime?: number;
    public endTimeType?: AppointmentBeginEndTimeType;
    public endDay?: number;
    public endDayMinutes?: number;
    public cancelType?: AppointmentBeginEndType;
    public cancelTime?: number;
    public cancelTimeType?: AppointmentBeginEndTimeType;
    public cancelDay?: number;
    public cancelDayMinutes?: number;
    public balanceLimitType?: AppointmentBalanceLimitType;
    public balance?: number;
    public isShowAppointmentCount?: boolean;

    public constructor(init?: Partial<AppointmentSetting>) { (Object as any).assign(this, init); }
}

export class H5ParentConfig
{
    public classScheduleImageUrl?: string;
    public topSwiperImageUrls?: string[];
    public isShowSignBalanceInH5?: boolean;
    public isShowTimeBalanceInH5?: boolean;
    public isShowMonthBalanceInH5?: boolean;
    public showCourseHourLog?: boolean;
    public showMyCourseBalance?: boolean;
    public showMyCourseOrder?: boolean;
    public showCourseOrderRemark?: boolean;
    public showMyEContract?: boolean;

    public constructor(init?: Partial<H5ParentConfig>) { (Object as any).assign(this, init); }
}

export class H5AppServiceItem
{
    public type?: string;
    public iconUrl?: string;
    public name?: string;
    public path?: string;
    public redDotRoutePath?: string;

    public constructor(init?: Partial<H5AppServiceItem>) { (Object as any).assign(this, init); }
}

export class H5AppServiceItemExtra extends H5AppServiceItem
{
    public serviceSubModule?: SCHOOL_SERVICE_SUB_MODULE;
    public desc?: string;
    public previewUrl?: string;
    public appRoute?: string;
    public orderIndex?: number;
    public isShow?: boolean;
    public isRequired?: boolean;

    public constructor(init?: Partial<H5AppServiceItemExtra>) { super(init); (Object as any).assign(this, init); }
}

export class H5ParentConfigExtra extends H5ParentConfig
{
    public serviceItems?: H5AppServiceItemExtra[];

    public constructor(init?: Partial<H5ParentConfigExtra>) { super(init); (Object as any).assign(this, init); }
}

export class FinanceCloseSettingDTO
{
    public isCloseMonthDay?: boolean;
    public closeMonthDay?: number;
    public excludeTeacherRole?: string[];
    public electronicSeal?: string;
    public isEnableElectronicSeal?: boolean;

    public constructor(init?: Partial<FinanceCloseSettingDTO>) { (Object as any).assign(this, init); }
}

export class SchoolSettingDTO
{
    public id?: string;
    public schoolType?: SCHOOL_TYPE;
    public lastClassTimeNotifyOn?: string;
    public createOn?: string;
    public lastModifyOn?: string;
    public attendanceVoiceTimeOutSeconds?: number;
    public attendanceCheckOutInterval?: number;
    public loveLiveTrialSeconds?: number;
    public isSendEventDailyHealthy?: boolean;
    public isSendEventDailyHealthyBySms?: boolean;
    public isSendEventDailyHealthyByWechat?: boolean;
    public isSendEventAttendance?: boolean;
    public isSendEventAttendanceBySms?: boolean;
    public isSendEventAttendanceByWechat?: boolean;
    public isSendAuditLeaveRequestByApp?: boolean;
    public isSendAuditLeaveRequestBySms?: boolean;
    public isSendAuditLeaveRequestByWechat?: boolean;
    public isSendClassBillByApp?: boolean;
    public isSendClassBillBySms?: boolean;
    public isSendClassBillByWechat?: boolean;
    public isSendAddClassTimeStudentDemoByApp?: boolean;
    public isSendAddClassTimeStudentDemoBySms?: boolean;
    public isSendAddClassTimeStudentDemoByWechat?: boolean;
    public sendWishNotifyHour?: number;
    public isSendWishBirthdayByApp?: boolean;
    public isSendWishBirthdayBySms?: boolean;
    public isSendWishBirthdayByWechat?: boolean;
    public isSendWishHolidayByApp?: boolean;
    public isSendWishHolidayBySms?: boolean;
    public isSendWishHolidayByWechat?: boolean;
    public kidBlacklistSendNotify?: string[];
    public wechatMsgSuffix?: string;
    public classTimeNotifyHour?: number;
    public classTimeByMonthSignHour?: number;
    public isSendClassTimeNotifyByApp?: boolean;
    public isSendClassTimeNotifyBySms?: boolean;
    public isSendClassTimeNotifyByWechat?: boolean;
    public sendClassTimeNotifyBlacklist?: string[];
    public isSendClassTimeSignByApp?: boolean;
    public isSendClassTimeSignBySms?: boolean;
    public isSendClassTimeSignByWechat?: boolean;
    public sendClassTimeSignBlacklist?: string[];
    public isSendClassTimeCommentApp?: boolean;
    public isSendClassTimeCommentBySms?: boolean;
    public isSendClassTimeCommentByWechat?: boolean;
    public sendClassTimeCommentBlacklist?: string[];
    public isSendEventKGTimeByApp?: boolean;
    public isSendEventKGTimeBySms?: boolean;
    public isSendEventKGTimeByWechat?: boolean;
    public isSendEventTaskByApp?: boolean;
    public isSendEventTaskBySms?: boolean;
    public isSendEventTaskByWechat?: boolean;
    public isSendEventLiveClassRoomByApp?: boolean;
    public isSendEventLiveClassRoomBySms?: boolean;
    public isSendEventLiveClassRoomByWechat?: boolean;
    public isSendEventNotifyByApp?: boolean;
    public isSendEventNotifyBySms?: boolean;
    public isSendEventNotifyByWechat?: boolean;
    public isSendEventShareByApp?: boolean;
    public isSendEventShareBySms?: boolean;
    public isSendEventShareByWechat?: boolean;
    public isSendEventEvaluateByApp?: boolean;
    public isSendEventEvaluateBySms?: boolean;
    public isSendEventEvaluateByWechat?: boolean;
    public isSendEventKidRemarkByApp?: boolean;
    public isSendEventKidRemarkBySms?: boolean;
    public isSendEventKidRemarkByWechat?: boolean;
    public isSendEventVoteByApp?: boolean;
    public isSendEventVoteBySms?: boolean;
    public isSendEventVoteByWechat?: boolean;
    public isSendEventClockInByApp?: boolean;
    public isSendEventClockInBySms?: boolean;
    public isSendEventClockInByWechat?: boolean;
    public isSendEventDailyMenuByApp?: boolean;
    public isSendEventDailyMenuBySms?: boolean;
    public isSendEventDailyMenuByWechat?: boolean;
    public isSendEventCommissionPickupByApp?: boolean;
    public isSendEventCommissionPickupBySms?: boolean;
    public isSendEventCommissionPickupByWechat?: boolean;
    public isSendEventKidCheckUpByApp?: boolean;
    public isSendEventKidCheckUpBySms?: boolean;
    public isSendEventKidCheckUpByWechat?: boolean;
    public isSendEventKGTimeUnreadNotifyByWechat?: boolean;
    public sendClassTimeSignModifyBlacklist?: string[];
    public isSendCLassTimeSignModifyBySms?: boolean;
    public isSendClassTimeSignModifyByWechat?: boolean;
    public isSendClassTimeModifyBySms?: boolean;
    public isSendClassTimeModifyByWechat?: boolean;
    public sendClassTimeModifyBlacklist?: string[];
    public isSendCourseOrderNotifyBySms?: boolean;
    public isSendCourseOrderNotifyByWechat?: boolean;
    public sendCourseOrderNotifyBlacklist?: string[];
    public sendEventTaskBlacklist?: string[];
    public isSendEventTaskUnreadNotifyByWechat?: boolean;
    public isSendTeacherCommentByWechat?: boolean;
    public isSendTeacherCommentUnreadNotifyByWechat?: boolean;
    public sendTeacherCommentBlacklist?: string[];
    public isSendTeacherCommentBySms?: boolean;
    public isSendEventNotifyUnreadNotifyByWechat?: boolean;
    public sendEventNotifBlacklist?: string[];
    public saleSource?: string[];
    public isRequiredSaleSource?: boolean;
    public checkExistsSaleLeadPhoneNumber?: boolean;
    public saleTag?: string[];
    public followUpResult?: string[];
    public courseCategory?: string[];
    public courseSubject?: string[];
    public curriculumTag?: string[];
    public paymentType?: string[];
    public refundPaymentType?: string[];
    public refundReason?: string[];
    public isRequiredRefundBankAccount?: boolean;
    public isDeleteCourseOrderNeedPermission?: boolean;
    public isAddBalanceAfterFinishPayment?: boolean;
    public alarmKidCourseBalanceMin?: number;
    public alarmKidCourseBalanceMinDays?: number;
    public isCanUpdateKidCourseBalance?: boolean;
    public isClassTimeSignUseAttendance?: boolean;
    public isCanClassTimeSignBalanceNotEnough?: boolean;
    public isShowTeacherEmployeeNo?: boolean;
    public isShowTeacherFullPhoneNumber?: boolean;
    public isShowParentFullPhoneNumber?: boolean;
    public isShowSaleFullPhoneNumber?: boolean;
    public dailyMaxFullPhoneNumberRequest?: number;
    public isCanSetKidFaceByTeacher?: boolean;
    public isCanAddKidOtherParent?: boolean;
    public isShowBalanceInH5?: boolean;
    public isShowSignBalanceInH5?: boolean;
    public isShowTimeBalanceInH5?: boolean;
    public isShowMonthBalanceInH5?: boolean;
    public isShowWeekNutritionInParent?: boolean;
    public isShowWatch?: boolean;
    public privateGiftPointName?: string;
    public appSplashImageUrl?: string;
    public appSplashJumpUrl?: string;
    public enableIMClassGroup?: boolean;
    public isTeacherCanRecallParentIM?: boolean;
    public babyCareDetailClassIds?: string[];
    public babyCareDisableClassIds?: string[];
    public babyCareNotifyHour?: number;
    public babyCareNotifyHours?: number[];
    public isShowBabyCareNutrition?: boolean;
    public babyCareWeekNotifyHour?: number;
    public babyCareWeekNotifyWeekDay?: MyDayOfWeek;
    public isShowBabyCareWeekNutrition?: boolean;
    public isShowBabyCareMorningCheck?: boolean;
    public isShowDailyCareBrunch?: boolean;
    public isShowDailyCareBreakfast?: boolean;
    public isShowDailyCareLunch?: boolean;
    public isShowBabyCareNoonCheck?: boolean;
    public isShowDailyCareSleep?: boolean;
    public isShowDailyCareSnack?: boolean;
    public isShowDailyCareMilk?: boolean;
    public isShowDailyCareDrinkWater?: boolean;
    public isShowDailyCareToilet?: boolean;
    public isShowDailyCareDiaper?: boolean;
    public isShowBabyCareNightCheck?: boolean;
    public isShowDailyCareDinner?: boolean;
    public isShowDailyCareClean?: boolean;
    public isShowDailyCareHandWashing?: boolean;
    public isShowDailyCareChangeClothes?: boolean;
    public isShowDailyCareMindset?: boolean;
    public isShowDailyCareWork?: boolean;
    public isShowDailyCareNote?: boolean;
    public isShowDailyCareNoteWeek?: boolean;
    public classBabyCareSettings?: ClassBabyCareSettingDTO[];
    public isSendBabyCareNotify?: boolean;
    public isSendBabyCareNotifyBySms?: boolean;
    public isSendBabyCareNotifyByWechat?: boolean;
    public isAllowSubmitBabyCareTimeOut?: boolean;
    public checkTimeDailyCareDrinkWater?: number;
    public checkTimeDailyCareMilk?: number;
    public checkTimeDailyCareDiaper?: number;
    public checkTimeDailyCareToilet?: number;
    public babyCareNoteTemplateDaily?: string;
    public babyCareNoteTemplateWeek?: string;
    public disabledPermissionCode?: string[];
    public teacherStudy_WaterMask_IsShowSchoolName?: boolean;
    public teacherStudy_WaterMask_IsShowTeacherName?: boolean;
    public teacherStudy_WaterMask_IsShowTeacherPhoneNumber?: boolean;
    public patrolType?: string[];
    public appointmentSetting?: AppointmentSetting;
    public h5ParentConfig?: H5ParentConfigExtra;
    public financeCloseSetting?: FinanceCloseSettingDTO;
    public debitAccount?: string[];

    public constructor(init?: Partial<SchoolSettingDTO>) { (Object as any).assign(this, init); }
}

export class SchoolOrgInfoDTO
{
    public id?: string;
    public schoolId?: string;
    public name?: string;
    public deptType?: SCHOOL_DEPT_TYPE;
    public parentId?: string;
    public createOn?: string;
    public lastModifyOn?: string;
    public address?: string;
    public phoneNumber?: string;
    public location?: GeoCoordinates;

    public constructor(init?: Partial<SchoolOrgInfoDTO>) { (Object as any).assign(this, init); }
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

export class BindKidItem
{
    public kidId?: string;
    public kidName?: string;
    public birthDate?: string;
    public gender?: GENDERTYPE;
    public phoneNumbers?: string[];

    public constructor(init?: Partial<BindKidItem>) { (Object as any).assign(this, init); }
}

export class KidEntityItem
{
    public kidEntityId?: string;
    public kidEntityName?: string;
    public avatarUrl?: string;
    public birthDate?: string;
    public gender?: GENDERTYPE;

    public constructor(init?: Partial<KidEntityItem>) { (Object as any).assign(this, init); }
}

export class H5AppAnnouncementItem
{
    public title?: string;
    public id?: string;

    public constructor(init?: Partial<H5AppAnnouncementItem>) { (Object as any).assign(this, init); }
}

export class AdConfigVideoTrail
{
    public isEnable?: boolean;
    public posAndroidId?: string;
    public posIosId?: string;
    public maxCount?: number;
    public awardMins?: number;
    public enableBidding?: boolean;
    public ecpm?: number;

    public constructor(init?: Partial<AdConfigVideoTrail>) { (Object as any).assign(this, init); }
}

export class AdConfigSplash
{
    public isEnable?: boolean;
    public posAndroidId?: string;
    public posIosId?: string;
    public enableBidding?: boolean;
    public ecpm?: number;

    public constructor(init?: Partial<AdConfigSplash>) { (Object as any).assign(this, init); }
}

export class AdConfigInteraction
{
    public isEnable?: boolean;
    public posAndroidId?: string;
    public posIosId?: string;
    public enableBidding?: boolean;
    public ecpm?: number;

    public constructor(init?: Partial<AdConfigInteraction>) { (Object as any).assign(this, init); }
}

export class SchoolParentH5AppConfig extends H5ParentConfig
{
    public announcementItems?: H5AppAnnouncementItem[];
    public serviceItems?: H5AppServiceItem[];
    public adLiveTrail?: AdConfigVideoTrail;
    public adSplash?: AdConfigSplash;
    public adInteraction?: AdConfigInteraction;

    public constructor(init?: Partial<SchoolParentH5AppConfig>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchoolDashboardRes extends BaseResponse
{
    public data?: KidDailySummark;
    public weeklyKids?: KidInfoDTO[];

    public constructor(init?: Partial<GetSchoolDashboardRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetBabyCareDailyTaskRes extends BaseResponse
{
    public data?: BabyCareDailyTaskDTO;
    public curriculumData?: { [index: string]: CurriculumDTO; };
    public ossInfos?: { [index: string]: OssInfoDTO; };

    public constructor(init?: Partial<GetBabyCareDailyTaskRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchoolBillItemsRes extends BaseResponse
{
    public data?: ClassBillItemDTO[];
    public classInfo?: { [index: string]: ClassBaseInfoDTO; };
    public teacherInfo?: { [index: string]: TeacherBaseInfoDTO; };

    public constructor(init?: Partial<GetSchoolBillItemsRes>) { super(init); (Object as any).assign(this, init); }
}

export class AddSchoolBillItemRes extends BaseResponse
{
    public billItemId?: string;

    public constructor(init?: Partial<AddSchoolBillItemRes>) { super(init); (Object as any).assign(this, init); }
}

export class CancelSchoolBillItemRes extends BaseResponse
{
    public refundOrderNos?: string[];

    public constructor(init?: Partial<CancelSchoolBillItemRes>) { super(init); (Object as any).assign(this, init); }
}

export class TerminateSchoolBillItemRes extends BaseResponse
{

    public constructor(init?: Partial<TerminateSchoolBillItemRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchoolBillItemLogsRes extends BaseResponse
{
    public data?: ClassBillLogDTO[];
    public studentInfos?: { [index: string]: StudentBaseInfoDTO; };

    public constructor(init?: Partial<GetSchoolBillItemLogsRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchoolClassInfosV2Res extends BaseResponse
{
    public data?: ClassInfoDTO[];
    public schoolInfos?: { [index: string]: SchoolInfoDTO; };
    public studentData?: { [index: string]: StudentBaseInfoDTO; };
    public teacherData?: { [index: string]: TeacherInfoDTO; };
    public parentData?: { [index: string]: ParentRelationClassInfoDTO; };

    public constructor(init?: Partial<GetSchoolClassInfosV2Res>) { super(init); (Object as any).assign(this, init); }
}

export class GetLiveVideoVisitCountRes extends BaseResponse
{
    public onlineCount?: number;
    public channelOnlineCount?: number;
    public channelName?: { [index: string]: string; };
    public online?: LiveVideoVisitHistory[];
    public visitHistory?: LiveVideoVisitHistory[];

    public constructor(init?: Partial<GetLiveVideoVisitCountRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetLiveVideoVisitSummaryRes extends BaseResponse
{
    public data?: LiveVideoVisitSummaryDTO[];
    public kidInfo?: { [index: string]: StudentBaseInfoDTO; };
    public parentRole?: { [index: string]: string; };

    public constructor(init?: Partial<GetLiveVideoVisitSummaryRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetLiveVideoVisitHistoryRes extends BaseResponse
{
    public total?: number;
    public data?: LiveVideoVisitHistoryDTO[];

    public constructor(init?: Partial<GetLiveVideoVisitHistoryRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchoolTopicTestKeyWordsV2Res extends BaseResponse
{
    public data?: TopicTestSchoolKeyWordV2DTO;
    public countData?: TopicTestInterceptGroupByKeyWordItem[];

    public constructor(init?: Partial<GetSchoolTopicTestKeyWordsV2Res>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchoolTopicTestKeyWordsRes extends BaseResponse
{
    public data?: TopicTestSchoolKeyWordDTO;
    public countData?: { [index: string]: TopicTestInterceptGroupByKeyWordTypeDTO; };

    public constructor(init?: Partial<GetSchoolTopicTestKeyWordsRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetTopicTestInterceptLogsRes extends BaseResponse
{
    public total?: number;
    public data?: TopicTestInterceptLogDTO[];
    public userPhoneNames?: { [index: number]: string; };
    public teacherInfos?: { [index: string]: TeacherBaseInfoDTO; };
    public studentInfos?: { [index: string]: StudentBaseInfoDTO; };

    public constructor(init?: Partial<GetTopicTestInterceptLogsRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetGrowBooksRes
{
    public ret?: boolean;
    public message?: string;
    public data?: GrowBookSummaryDTO;

    public constructor(init?: Partial<GetGrowBooksRes>) { (Object as any).assign(this, init); }
}

export class GetSchoolTeachersRes
{
    public data?: TeacherInfoDTO[];

    public constructor(init?: Partial<GetSchoolTeachersRes>) { (Object as any).assign(this, init); }
}

export class GetSchoolBaseInfoRes extends BaseResponse
{
    public data?: SchoolBaseInfo;

    public constructor(init?: Partial<GetSchoolBaseInfoRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchoolInfoRes extends CommonReturn
{
    public data?: SchoolInfoDTO;
    public date?: string;

    public constructor(init?: Partial<GetSchoolInfoRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchoolKidDailyHealthieSummaryRes extends BaseResponse
{
    public data?: ClassInfoDTO[];
    public kidState?: { [index: string]: KidDailyHealthState; };
    public dailyHealthy?: { [index: string]: DailyHealthyDTO; };
    public studentData?: { [index: string]: StudentBaseInfoDTO; };
    public ossInfos?: { [index: string]: OssInfoDTO; };

    public constructor(init?: Partial<GetSchoolKidDailyHealthieSummaryRes>) { super(init); (Object as any).assign(this, init); }
}

export class SetKidDailyHealthyRes extends BaseResponse
{

    public constructor(init?: Partial<SetKidDailyHealthyRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchoolSettingRes extends BaseResponse
{
    public data?: SchoolSettingDTO;

    public constructor(init?: Partial<GetSchoolSettingRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetTeacherAppMenuRes extends BaseResponse
{
    public data?: TeacherAppMenuDTO[];
    public customIconPermissionCode?: string[];

    public constructor(init?: Partial<GetTeacherAppMenuRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetRegInfoFromTokenRes
{
    public ret?: boolean;
    public message?: string;
    public logoUrl?: string;
    public classId?: string;
    public className?: string;
    public teacherName?: string;
    public schoolName?: string;

    public constructor(init?: Partial<GetRegInfoFromTokenRes>) { (Object as any).assign(this, init); }
}

export class CheckBindRes extends BaseResponse
{
    public kiddata?: BindKidItem[];
    public kidentitydata?: KidEntityItem[];

    public constructor(init?: Partial<CheckBindRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchoolParentH5AppConfigRes extends BaseResponse
{
    public data?: SchoolParentH5AppConfig;
    public config?: { [index: string]: string; };

    public constructor(init?: Partial<GetSchoolParentH5AppConfigRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetLiveChannelsRes extends BaseResponse
{
    public data?: LiveChannelDTO[];
    public childOrgInfo?: { [index: string]: string; };
    public classInfos?: ClassInfoDTO[];

    public constructor(init?: Partial<GetLiveChannelsRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetClassLiveScheduleRes extends BaseResponse
{
    public data?: LiveScheduleItemDTO[];

    public constructor(init?: Partial<GetClassLiveScheduleRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetAppToDoItemsRes extends BaseResponse
{
    public data?: AppToDoItemDTO[];

    public constructor(init?: Partial<GetAppToDoItemsRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetWechatMPInfoBySchoolRes extends BaseResponse
{
    public mpQrcodeUrl?: string;
    public nickName?: string;

    public constructor(init?: Partial<GetWechatMPInfoBySchoolRes>) { super(init); (Object as any).assign(this, init); }
}

/** @description 学校班级动态 班级维度 */
// @Route("/report/school/{SchoolId}/dashboard", "GET")
// @Api(Description="学校班级动态 班级维度")
export class GetSchoolDashboardReq implements IReturn<GetSchoolDashboardRes>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId 不可为空")
    public schoolId?: string;

    public classId?: string;

    public constructor(init?: Partial<GetSchoolDashboardReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolDashboardReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetSchoolDashboardRes(); }
}

/** @description 获取班级一日流程列表 */
// @Route("/babycare/{SchoolId}/{ClassId}/dailytask", "GET")
// @Api(Description="获取班级一日流程列表")
export class GetBabyCareDailyTaskReq extends ProTableRequest implements IReturn<GetBabyCareDailyTaskRes>, ICommonRequest
{
    public appId?: number;
    public platform?: number;
    public osType?: OSTYPE;
    public version?: string;
    public buildNumber?: string;
    // @Validate(Validator="NotEmpty", Message="SchoolId 不可为空")
    public schoolId?: string;

    // @Validate(Validator="NotEmpty", Message="ClassId 不可为空")
    public classId?: string;

    public dateOn?: string;

    public constructor(init?: Partial<GetBabyCareDailyTaskReq>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetBabyCareDailyTaskReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetBabyCareDailyTaskRes(); }
}

/** @description 获取当前学校所有的收款 */
// @Route("/classbill/billitems/{SchoolId}", "GET, OPTIONS")
// @Api(Description="获取当前学校所有的收款")
export class GetSchoolBillItemsReq implements IReturn<GetSchoolBillItemsRes>
{
    public schoolId?: string;

    public constructor(init?: Partial<GetSchoolBillItemsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolBillItemsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSchoolBillItemsRes(); }
}

/** @description 创建班级收款 */
// @Route("/classbill/billitem", "POST, OPTIONS")
// @Api(Description="创建班级收款")
export class AddSchoolBillItemReq implements IReturn<AddSchoolBillItemRes>
{
    public schoolId?: string;
    public classId?: string;
    public kidIds?: string[];
    public name?: string;
    public amount?: number;

    public constructor(init?: Partial<AddSchoolBillItemReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddSchoolBillItemReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AddSchoolBillItemRes(); }
}

/** @description 取消班级收款 */
// @Route("/classbill/billitem/{BillItemId}/cancel", "POST, OPTIONS")
// @Api(Description="取消班级收款")
export class CancelSchoolBillItemReq implements IReturn<CancelSchoolBillItemRes>
{
    public schoolId?: string;
    public billItemId?: string;

    public constructor(init?: Partial<CancelSchoolBillItemReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CancelSchoolBillItemReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CancelSchoolBillItemRes(); }
}

/** @description 提前终止班级收款 */
// @Route("/classbill/billitem/{BillItemId}/terminate", "POST, OPTIONS")
// @Api(Description="提前终止班级收款")
export class TerminateSchoolBillItemReq implements IReturn<TerminateSchoolBillItemRes>
{
    public schoolId?: string;
    public billItemId?: string;

    public constructor(init?: Partial<TerminateSchoolBillItemReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'TerminateSchoolBillItemReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new TerminateSchoolBillItemRes(); }
}

/** @description 获取班级收款的详情 */
// @Route("/classbill/billitem/{BillItemId}", "GET, OPTIONS")
// @Api(Description="获取班级收款的详情")
export class GetSchoolBillItemLogsReq implements IReturn<GetSchoolBillItemLogsRes>
{
    public schoolId?: string;
    public billItemId?: string;

    public constructor(init?: Partial<GetSchoolBillItemLogsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolBillItemLogsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSchoolBillItemLogsRes(); }
}

/** @description 统一获取班级列表V3 */
// @Route("/v3/school/{SchoolId}/classes", "GET, OPTIONS")
// @Api(Description="统一获取班级列表V3")
export class GetSchoolClassInfosV3Req implements IReturn<GetSchoolClassInfosV2Res>
{
    /** @description 园所id */
    // @ApiMember(DataType="string", Description="园所id", IsRequired=true, Name="SchoolId", ParameterType="path")
    public schoolId?: string;

    public branchIds?: string[];
    public showAllClassStatus?: boolean;

    public constructor(init?: Partial<GetSchoolClassInfosV3Req>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolClassInfosV3Req'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSchoolClassInfosV2Res(); }
}

/** @description 校长获取爱心视频浏览日志 */
// @Route("/live/{SchoolId}/{ClassId}/livehistory/summary", "GET")
// @Api(Description="校长获取爱心视频浏览日志")
export class GetLiveVideoVisitCountReq implements IReturn<GetLiveVideoVisitCountRes>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId 不能为空")
    public schoolId?: string;

    // @Validate(Validator="NotEmpty", Message="ClassId 不能为空")
    public classId?: string;

    public liveChannelId?: string;
    public pageIndex?: number;
    public pageSize?: number;

    public constructor(init?: Partial<GetLiveVideoVisitCountReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetLiveVideoVisitCountReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetLiveVideoVisitCountRes(); }
}

/** @description 校长获取爱心视频浏览统计 */
// @Route("/live/{SchoolId}/{ClassId}/livehistory/summary", "GET")
// @Api(Description="校长获取爱心视频浏览统计")
export class GetLiveVideoVisitSummaryReq implements IReturn<GetLiveVideoVisitSummaryRes>
{
    public schoolId?: string;
    public classId?: string;
    public beginDate?: string;
    public endDate?: string;

    public constructor(init?: Partial<GetLiveVideoVisitSummaryReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetLiveVideoVisitSummaryReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetLiveVideoVisitSummaryRes(); }
}

/** @description 校长获取爱心视频浏览日志 */
// @Route("/live/{SchoolId}/{ClassId}/livehistory/", "GET, OPTIONS")
// @Api(Description="校长获取爱心视频浏览日志")
export class GetLiveVideoVisitHistoryReq implements IReturn<GetLiveVideoVisitHistoryRes>
{
    public schoolId?: string;
    public branchIds?: string[];
    public classId?: string;
    public createOn?: string[];
    public pageSize?: number;
    public pageIndex?: number;

    public constructor(init?: Partial<GetLiveVideoVisitHistoryReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetLiveVideoVisitHistoryReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetLiveVideoVisitHistoryRes(); }
}

/** @description 获得学校舆情关键词设置V2 */
// @Route("/school/{SchoolId}/topictest/keywordsv2", "GET, OPTIONS")
// @Api(Description="获得学校舆情关键词设置V2")
export class GetSchoolTopicTestKeyWordsV2Req implements IReturn<GetSchoolTopicTestKeyWordsV2Res>
{
    public schoolId?: string;

    public constructor(init?: Partial<GetSchoolTopicTestKeyWordsV2Req>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolTopicTestKeyWordsV2Req'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSchoolTopicTestKeyWordsV2Res(); }
}

/** @description 获得学校舆情关键词设置 */
// @Route("/school/{SchoolId}/topictest/keywords", "GET, OPTIONS")
// @Api(Description="获得学校舆情关键词设置")
export class GetSchoolTopicTestKeyWordsReq implements IReturn<GetSchoolTopicTestKeyWordsRes>
{
    public schoolId?: string;

    public constructor(init?: Partial<GetSchoolTopicTestKeyWordsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolTopicTestKeyWordsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSchoolTopicTestKeyWordsRes(); }
}

/** @description 更新学校舆情关键词设置 */
// @Route("/school/{SchoolId}/topictest/keywordsv2", "POST, OPTIONS")
// @Api(Description="更新学校舆情关键词设置")
export class UpdateSchoolTopicTestKeyWordsV2Req implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public data?: TopicTestSchoolKeyWordV2DTO;

    public constructor(init?: Partial<UpdateSchoolTopicTestKeyWordsV2Req>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateSchoolTopicTestKeyWordsV2Req'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 更新学校舆情关键词设置 */
// @Route("/school/{SchoolId}/topictest/keywords", "POST, OPTIONS")
// @Api(Description="更新学校舆情关键词设置")
export class UpdateSchoolTopicTestKeyWordsReq implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public data?: TopicTestSchoolKeyWordDTO;

    public constructor(init?: Partial<UpdateSchoolTopicTestKeyWordsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateSchoolTopicTestKeyWordsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获得学校舆情列表 */
// @Route("/school/{SchoolId}/topictest/list", "POST, OPTIONS")
// @Api(Description="获得学校舆情列表")
export class GetTopicTestInterceptLogsReq implements IReturn<GetTopicTestInterceptLogsRes>
{
    public schoolId?: string;
    public createOn?: string[];
    public auditState?: EVENTAUDITSTATE;
    public source?: TOPIC_TEST_SOURCE_TYPE;
    public keyWordType?: TOPIC_TEST_KEYWORD_TYPE;
    public publishState?: EVENTPUBLISHSTATE;
    public lastId?: string;
    public pageIndex?: number;
    public pageSize?: number;

    public constructor(init?: Partial<GetTopicTestInterceptLogsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetTopicTestInterceptLogsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetTopicTestInterceptLogsRes(); }
}

/** @description 学校舆情审核 */
// @Route("/school/{SchoolId}/topictest/audit", "POST, OPTIONS")
// @Api(Description="学校舆情审核")
export class AuditTopicTestInterceptReq implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public id?: string;
    public publishState?: EVENTPUBLISHSTATE;

    public constructor(init?: Partial<AuditTopicTestInterceptReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AuditTopicTestInterceptReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 教师获取班级学期成长手册汇总 */
// @Route("/class/{ClassId}/growbooks/{TermId}", "GET, OPTIONS")
// @Api(Description="教师获取班级学期成长手册汇总")
export class GetGrowBooksReq implements IReturn<GetGrowBooksRes>
{
    public classId?: string;
    public termId?: number;

    public constructor(init?: Partial<GetGrowBooksReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetGrowBooksReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetGrowBooksRes(); }
}

/** @description 老师提醒家长查看消息 */
// @Route("/class/event/requireack/{EventId}", "PUT, OPTIONS")
// @Api(Description="老师提醒家长查看消息")
export class RequireAckEventReq implements IReturn<CommonReturn>
{
    /** @description 消息id */
    // @ApiMember(DataType="string", Description="消息id", IsRequired=true, Name="EventId", ParameterType="path")
    public eventId?: string;

    /** @description KidId(空为班级所有小孩) */
    // @ApiMember(DataType="string", Description="KidId(空为班级所有小孩)", Name="KidId", ParameterType="query")
    public kidId?: string;

    public kidIds?: string[];

    public constructor(init?: Partial<RequireAckEventReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'RequireAckEventReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CommonReturn(); }
}

/** @description 获取教师列表 */
// @Route("/school/{SchoolId}/teachers", "GET, OPTIONS")
// @Api(Description="获取教师列表")
export class GetSchoolTeachersReq implements IReturn<GetSchoolTeachersRes>
{
    /** @description 园所id */
    // @ApiMember(DataType="string", Description="园所id", IsRequired=true, Name="SchoolId", ParameterType="path")
    public schoolId?: string;

    public branchIds?: string[];
    public showDeleted?: boolean;

    public constructor(init?: Partial<GetSchoolTeachersReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolTeachersReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSchoolTeachersRes(); }
}

/** @description 获取园所基础信息 */
// @Route("/schoolbaseinfo", "GET, OPTIONS")
// @Api(Description="获取园所基础信息")
export class GetSchoolBaseInfoReq implements IReturn<GetSchoolBaseInfoRes>
{
    public schoolId?: string;

    public constructor(init?: Partial<GetSchoolBaseInfoReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolBaseInfoReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSchoolBaseInfoRes(); }
}

/** @description 获取园所信息 */
// @Route("/school", "GET, OPTIONS")
// @Api(Description="获取园所信息")
export class GetSchoolInfoReq implements IReturn<GetSchoolInfoRes>
{
    public schoolId?: string;

    public constructor(init?: Partial<GetSchoolInfoReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolInfoReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSchoolInfoRes(); }
}

/** @description 获取学生的晨检数据 */
// @Route("/school/{SchoolId}/healthies/summary", "GET, OPTIONS")
// @Api(Description="获取学生的晨检数据")
export class GetSchoolKidDailyHealthieSummaryReq implements IReturn<GetSchoolKidDailyHealthieSummaryRes>
{
    public schoolId?: string;
    public dateOn?: string;

    public constructor(init?: Partial<GetSchoolKidDailyHealthieSummaryReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolKidDailyHealthieSummaryReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSchoolKidDailyHealthieSummaryRes(); }
}

/** @description 设置学生的晨检数据 */
// @Route("/school/{SchoolId}/healthy/dailycheck", "POST, OPTIONS")
// @Api(Description="设置学生的晨检数据")
export class SetKidDailyHealthyReq implements IReturn<SetKidDailyHealthyRes>
{
    public schoolId?: string;
    public kidId?: string;
    public temperature?: string;
    public mouthHaveProblem?: boolean;
    public mouthProblem?: string;
    public handHaveProblem?: boolean;
    public handProblem?: string;
    public bodyHaveProblem?: boolean;
    public bodyProblem?: string;
    public mindset?: string;
    public remark?: string;
    public mouthAttachment?: EventAttachDTO;
    public handAttachment?: EventAttachDTO;
    public bodyAttachment?: EventAttachDTO;
    public attachment?: EventAttachDTO;
    public extraData?: { [index: string]: DailyCareExtraData; };

    public constructor(init?: Partial<SetKidDailyHealthyReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SetKidDailyHealthyReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new SetKidDailyHealthyRes(); }
}

/** @description 获得学校平台设置 */
// @Route("/system/{SchoolId}/setting", "GET, OPTIONS")
// @Api(Description="获得学校平台设置")
export class GetSchoolSettingReq implements IReturn<GetSchoolSettingRes>
{
    public schoolId?: string;

    public constructor(init?: Partial<GetSchoolSettingReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolSettingReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSchoolSettingRes(); }
}

/** @description 自定义教师APP菜单 */
// @Route("/system/{SchoolId}/customappmenudata", "POST, OPTIONS")
// @Api(Description="自定义教师APP菜单")
export class SaveTeacherCustomAppMenuReq implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public customIconPermissionCode?: string[];

    public constructor(init?: Partial<SaveTeacherCustomAppMenuReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveTeacherCustomAppMenuReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获得教师APP菜单 */
// @Route("/system/{SchoolId}/appmenudata", "GET, OPTIONS")
// @Api(Description="获得教师APP菜单")
export class GetTeacherAppMenuReq implements IReturn<GetTeacherAppMenuRes>
{
    public schoolId?: string;

    public constructor(init?: Partial<GetTeacherAppMenuReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetTeacherAppMenuReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetTeacherAppMenuRes(); }
}

/** @description 根据注册token查询班级信息 */
// @Route("/class/reginfo/{Token}", "GET, OPTIONS")
// @Api(Description="根据注册token查询班级信息")
export class GetRegInfoFromTokenReq implements IReturn<GetRegInfoFromTokenRes>
{
    public token?: string;

    public constructor(init?: Partial<GetRegInfoFromTokenReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetRegInfoFromTokenReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetRegInfoFromTokenRes(); }
}

/** @description 获取kidid中的待注册小孩 */
// @Route("/school/checkbindkidentity", "POST, OPTIONS")
// @Api(Description="获取kidid中的待注册小孩")
export class CheckBindReq implements IReturn<CheckBindRes>
{
    /** @description PhoneNumber */
    // @ApiMember(DataType="string", Description="PhoneNumber", IsRequired=true, Name="PhoneNumber", ParameterType="query")
    public phoneNumber?: string;

    /** @description Token */
    // @ApiMember(DataType="string", Description="Token", IsRequired=true, Name="Token", ParameterType="query")
    public token?: string;

    /** @description MToken */
    // @ApiMember(DataType="string", Description="MToken", IsRequired=true, Name="MToken", ParameterType="query")
    public mToken?: string;

    public constructor(init?: Partial<CheckBindReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CheckBindReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CheckBindRes(); }
}

/** @description 绑定kidid中的待注册小孩 */
// @Route("/school/bindkidentity", "POST, OPTIONS")
// @Api(Description="绑定kidid中的待注册小孩")
export class KidBindReq implements IReturn<BaseResponse>
{
    /** @description PhoneNumber */
    // @ApiMember(DataType="string", Description="PhoneNumber", IsRequired=true, Name="PhoneNumber", ParameterType="query")
    public phoneNumber?: string;

    /** @description Token */
    // @ApiMember(DataType="string", Description="Token", IsRequired=true, Name="Token", ParameterType="query")
    public token?: string;

    /** @description MToken */
    // @ApiMember(DataType="string", Description="MToken", IsRequired=true, Name="MToken", ParameterType="query")
    public mToken?: string;

    /** @description KidId */
    // @ApiMember(DataType="string", Description="KidId", IsRequired=true, Name="KidId", ParameterType="query")
    public kidId?: string;

    /** @description KidEntityId */
    // @ApiMember(DataType="string", Description="KidEntityId", Name="KidEntityId", ParameterType="query")
    public kidEntityId?: string;

    /** @description Name */
    // @ApiMember(DataType="string", Description="Name", Name="Name", ParameterType="query")
    public name?: string;

    /** @description AvatarUrl */
    // @ApiMember(DataType="string", Description="AvatarUrl", Name="AvatarUrl", ParameterType="query")
    public avatarUrl?: string;

    /** @description BirthDate */
    // @ApiMember(DataType="string", Description="BirthDate", Name="BirthDate", ParameterType="query")
    public birthDate?: string;

    /** @description Gender */
    // @ApiMember(DataType="string", Description="Gender", Name="Gender", ParameterType="query")
    public gender?: GENDERTYPE;

    /** @description ParentRole */
    // @ApiMember(DataType="string", Description="ParentRole", Name="ParentRole", ParameterType="query")
    public parentRole?: string;

    public constructor(init?: Partial<KidBindReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'KidBindReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取园所H5App配置信息 */
// @Route("/h5app/config", "GET, OPTIONS")
// @Api(Description="获取园所H5App配置信息")
export class GetSchoolParentH5AppConfigReq implements IReturn<GetSchoolParentH5AppConfigRes>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId 不可为空")
    public schoolId?: string;

    public from?: string;

    public constructor(init?: Partial<GetSchoolParentH5AppConfigReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolParentH5AppConfigReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSchoolParentH5AppConfigRes(); }
}

/** @description 获取监控视频通道 */
// @Route("/live/livechannels", "GET, OPTIONS")
// @Api(Description="获取监控视频通道")
export class GetLiveChannelsReq extends CommonRequest implements IReturn<GetLiveChannelsRes>
{
    public schoolId?: string;
    public isFromWeb?: boolean;

    public constructor(init?: Partial<GetLiveChannelsReq>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetLiveChannelsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetLiveChannelsRes(); }
}

/** @description 获取班级摄像头时间段配置 */
// @Route("/live/class/{ClassId}/scheduleconfigs", "GET, OPTIONS")
// @Api(Description="获取班级摄像头时间段配置")
export class GetClassLiveScheduleReq implements IReturn<GetClassLiveScheduleRes>
{
    public schoolId?: string;
    public classId?: string;

    public constructor(init?: Partial<GetClassLiveScheduleReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetClassLiveScheduleReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetClassLiveScheduleRes(); }
}

/** @description 获取待办列表 */
// @Route("/school/{SchoolId}/todolist", "GET")
// @Api(Description="获取待办列表")
export class GetAppToDoItemsReq implements IReturn<GetAppToDoItemsRes>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId不可为空")
    public schoolId?: string;

    public showTmpl?: boolean;

    public constructor(init?: Partial<GetAppToDoItemsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetAppToDoItemsReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetAppToDoItemsRes(); }
}

/** @description 获取学校绑定的公众号信息 */
// @Route("/wechat/getwechatmpinfobyschool/{SchoolId}", "GET, OPTIONS")
// @Api(Description="获取学校绑定的公众号信息")
export class GetWechatMPInfoBySchoolReq implements IReturn<GetWechatMPInfoBySchoolRes>
{
    public schoolId?: string;

    public constructor(init?: Partial<GetWechatMPInfoBySchoolReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetWechatMPInfoBySchoolReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetWechatMPInfoBySchoolRes(); }
}

