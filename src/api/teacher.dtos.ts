/* Options:
Date: 2025-11-12 13:54:20
Version: 8.0
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://apigwtest.yban.co/api/educrm

//GlobalNamespace: 
MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
IncludeTypes: GeoCoordinates,AttendanceKidByTeacherReq,GetClassAttendanceMonthReportReq,GetClassKidsAttendanceMonthReportReq,GetTeacherAttendanceMonthReportReq,GetClassKidsAttendanceDailyReportReq,GetClassAttendanceDailyReportReq,GetTeacherAttendanceDailyReportReq,AttendanceTeacherDailyReq,GetTeacherAttendanceLogReq,GetKidsAttendanceLogReq,GetSchoolYearCalendarReq,GetTeacherAttendanceReq,AttendanceDailyReq,GetClassAttendanceLogReq,UpdateSchoolTeacherFullNameReq,GetSchoolTeacherHandoverInfoReq,SchoolTeacherHandoverReq,AllocateSchoolTeacherToClassReq,DeleteSchoolTeacherReq,SetTeacherAttendanceTemplateReq,CreateSchoolTeacherReq,GetSchoolTeacherAttendanceBindsReq,GetSchoolTeachersReq,GetAttendanceTeacherTemplateReq,GetSchoolSettingReq,GetAttendanceDeviceReq,GetSchoolInfosReq,GetSchoolClassInfosV3Req,GetAppRolesReq,GetSchoolChildOrgInfosReq,GetSchoolConfigJobTitleReq,GetSchoolTeacherNextEmployeeNoReq,UpdateSchoolTeacherNeedPublishAuditReq,UpdateSchoolTeacherBranchIdReq,UpdateSchoolTeacherPhoneNumberReq,UpdateSchoolTeacherRoleReq,GetTeacherIMCatalogReq,IMCatalogItem,GetTeacherMyUserInfoReq,TeacherMyUserInfo,TermInfoItem,GetTeacherIMContactsReq,IMContactItem,GroupItem,GetTeacherKidsReq,GetKidGrowBooksReq,GrowBookGroupDTO,GrowBookInfoDTO,GetTeacherClassLiveVideoInfoReq,GetTeacherClassLiveVideosReq,LiveMemberDTO,LiveScheduleItemDTO,LiveVideoItem,LiveVideoVisitHistory,LiveScheduleItemMinute,DVR_DEVICE_TYPE,PostTeacherClassLiveVideoPlayStateReq,PostTeacherClassLiveVideoOnlineReq,GetTeacherOrderProductsReq,OrderProductDTO,ORDERPRODUCT_CATALOG,CLASSLIVEPRODUCT_SCOPE,PrePayWxliteReq,GetBabyCareDailyTaskReq,BabyCareDailyTaskDTO,CurriculumDTO,BabyCareDailyTaskFlowDTO,DailyCareExtraType,GetAttendanceLogsByTeacherReq,AttendanceLogDTO,GetTeacherDailyHealthyReq,DailyHealthyDTO,DailyCareHealthyType,GetDailyCareBasesReq,DAILYCARE_TOILET_TYPE,DAILYCARE_EAT_STATUS,DailyCareExtraDTO,DailyCareItem,DailyCareExtraData,GetKidTeachersReq,AddKidOtherTeacherReq,DeleteKidOtherTeacherReq,GetMedicCaresByStudentReq,AddMedicCareReq,CancelMedicCardReq,MedicCareDTO,MedicCareLogDTO,MEDICSTAT,ChangeUserNameReq,UploadMultiFileReq,FILETYPE,UpdateKidNameReq,UpdateKidGenderReq,UpdateKidBirthDateReq,UpdateKidHobbyReq,PrepareBookOrderReq,CreateBookOrderReq,BOOKORDER_TYPE,BOOKORDER_EDITION,BookOrderConfigItemDTO
ExcludeTypes: BaseResponse,CommonReturn
DefaultImports: KidAttendance:./base.dtos,TeacherAttendanceMonthReport:./base.dtos,KidAttendanceMonthReport:./base.dtos,ClassAttendanceMonthReport:./base.dtos,KidMyLeaveRequestItem:./base.dtos,TeacherAttendanceDailyReportItem:./base.dtos,ClassAttendanceDailyReport:./base.dtos,SchoolYearCalendarDTO:./base.dtos,AttendanceTeacherLogDTO:./base.dtos,VacationItemDTO:./base.dtos,ATTENDANCEMETHOD:./base.dtos,ATTENDANCE_HEALTH_TEMPERATURE_STATUS:./base.dtos,AttendanceCheckState:./base.dtos,AttendanceKidDTO:./base.dtos,BaseKidInfoDTO:./base.dtos,AttendanceTeacherDTO:./base.dtos,ORDER_DIRECTION:./base.dtos,AttendanceDoor_Direction:./base.dtos,AttendanceDevice_Type:./base.dtos,TEACHER_CLASS_ROLE:./base.dtos,AttendanceDeviceDTO:./base.dtos,SchoolSettingDTO:./base.dtos,ResponseStatus:./base.dtos,SchoolOrgInfoItemDTO:./base.dtos,DartStringList:./base.dtos,SchoolOrgInfoDTO:./base.dtos,ParentRelationClassInfoDTO:./base.dtos,TeacherInfoDTO:./base.dtos,SchoolInfoDTO:./base.dtos,ClassInfoDTO:./base.dtos,RoleItemDTO:./base.dtos,AttendanceTeacherTemplateItem:./base.dtos,AiFaceItem:./base.dtos,SchoolAttendanceBindItem:./base.dtos,SchoolPartnerOpenEndDTO:./base.dtos,TeacherInSchoolRoleType:./base.dtos,GENDERTYPE:./base.dtos,CommonReturn:./base.dtos,CommonRequest:./base.dtos,SchoolBaseInfo:./school.dtos,ClassBaseInfoDTO:./base.dtos,BaseResponse:./base.dtos,type IReturn:./base.dtos,OssInfoDTO:./base.dtos,SEMESTERTYPE:./base.dtos,ProTableRequest:./base.dtos,type ICommonRequest:./base.dtos,OSTYPE:./base.dtos,StudentBaseInfoDTO:./base.dtos,TeacherBaseInfoDTO:./base.dtos,EventAttachItem:./event.dtos,EventAttachDTO:./event.dtos,EventAttachImageItemDTO:./event.dtos,UploadFileItem:./ai.dtos
*/

import { KidAttendance } from "./base.dtos";
import { TeacherAttendanceMonthReport } from "./base.dtos";
import { KidAttendanceMonthReport } from "./base.dtos";
import { ClassAttendanceMonthReport } from "./base.dtos";
import { KidMyLeaveRequestItem } from "./base.dtos";
import { TeacherAttendanceDailyReportItem } from "./base.dtos";
import { ClassAttendanceDailyReport } from "./base.dtos";
import { SchoolYearCalendarDTO } from "./base.dtos";
import { AttendanceTeacherLogDTO } from "./base.dtos";
import { VacationItemDTO } from "./base.dtos";
import { ATTENDANCEMETHOD } from "./base.dtos";
import { ATTENDANCE_HEALTH_TEMPERATURE_STATUS } from "./base.dtos";
import { AttendanceCheckState } from "./base.dtos";
import { AttendanceKidDTO } from "./base.dtos";
import { BaseKidInfoDTO } from "./base.dtos";
import { AttendanceTeacherDTO } from "./base.dtos";
import { ORDER_DIRECTION } from "./base.dtos";
import { AttendanceDoor_Direction } from "./base.dtos";
import { AttendanceDevice_Type } from "./base.dtos";
import { TEACHER_CLASS_ROLE } from "./base.dtos";
import { AttendanceDeviceDTO } from "./base.dtos";
import { SchoolSettingDTO } from "./base.dtos";
import { ResponseStatus } from "./base.dtos";
import { SchoolOrgInfoItemDTO } from "./base.dtos";
import { DartStringList } from "./base.dtos";
import { SchoolOrgInfoDTO } from "./base.dtos";
import { ParentRelationClassInfoDTO } from "./base.dtos";
import { TeacherInfoDTO } from "./base.dtos";
import { SchoolInfoDTO } from "./base.dtos";
import { ClassInfoDTO } from "./base.dtos";
import { RoleItemDTO } from "./base.dtos";
import { AttendanceTeacherTemplateItem } from "./base.dtos";
import { AiFaceItem } from "./base.dtos";
import { SchoolAttendanceBindItem } from "./base.dtos";
import { SchoolPartnerOpenEndDTO } from "./base.dtos";
import { TeacherInSchoolRoleType } from "./base.dtos";
import { GENDERTYPE } from "./base.dtos";
import { CommonReturn } from "./base.dtos";
import { CommonRequest } from "./base.dtos";
import { SchoolBaseInfo } from "./school.dtos";
import { ClassBaseInfoDTO } from "./base.dtos";
import { BaseResponse } from "./base.dtos";
import { type IReturn } from "./base.dtos";
import { OssInfoDTO } from "./base.dtos";
import { SEMESTERTYPE } from "./base.dtos";
import { ProTableRequest } from "./base.dtos";
import { type ICommonRequest } from "./base.dtos";
import { OSTYPE } from "./base.dtos";
import { StudentBaseInfoDTO } from "./base.dtos";
import { TeacherBaseInfoDTO } from "./base.dtos";
import { EventAttachItem } from "./event.dtos";
import { EventAttachDTO } from "./event.dtos";
import { EventAttachImageItemDTO } from "./event.dtos";
import { UploadFileItem } from "./ai.dtos";

export enum FILETYPE
{
    TYPE_UNKNOW = 0,
    TYPE_PERSON = 1,
    TYPE_CLASS = 2,
    TYPE_USERLOGO = 3,
    TYPE_CLASSLOGO = 4,
    TYPE_EVENTATTACH = 5,
    TYPE_CHATATTACH = 6,
    TYPE_KIDLOGO = 7,
    TYPE_SCHOOLLOGO = 8,
    TYPE_SCHOOLDESC = 9,
    TYPE_KIDENTITYLOG = 10,
    TYPE_SCHOOLSHAREDISK = 11,
    TYPE_STUDENTAIFACE = 12,
    TYPE_PARENTAIFACE = 13,
    TYPE_TEACHERAIFACE = 14,
    TYPE_ATTENDANCESNAP = 15,
    TYPE_BABYCAREVIDEO = 16,
    TYPE_TEACHERSTUDY = 17,
    TYPE_RECIPT = 18,
    TYPE_SCHOOLAUTHBIZ = 19,
    TYPE_SCHOOLAUTHIDCARDFRONT = 20,
    TYPE_SCHOOLAUTHIDCARDBACK = 21,
    TYPE_SCHOOL_CONTRACT_TEMPLATE = 22,
    TYPE_SCHOOL_CONTRACT = 23,
    TYPE_WEWORK_MEDIA = 24,
    TYPE_WEWORK = 25,
    TYPE_YOYOLIB_PARTNER = 26,
    TYPE_CALLCENTER_RECORD = 27,
    TYPE_LIVE_SNAPSHOT = 28,
    TYPE_DATAVSNAPSHOT = 100,
}

// @DataContract
export class GeoCoordinates
{
    // @DataMember(Order=1)
    public lng?: number;

    // @DataMember(Order=2)
    public lat?: number;

    public constructor(init?: Partial<GeoCoordinates>) { (Object as any).assign(this, init); }
}

export enum DailyCareHealthyType
{
    NoonCheck = 'NoonCheck',
    MorningCheck = 'MorningCheck',
    NightCheck = 'NightCheck',
}

export enum DailyCareExtraType
{
    Number = 'Number',
    String = 'String',
}

export class DailyCareExtraData
{
    public type?: DailyCareExtraType;
    public value?: number;
    public unit?: string;
    public memo?: string;

    public constructor(init?: Partial<DailyCareExtraData>) { (Object as any).assign(this, init); }
}

export enum DAILYCARE_TOILET_TYPE
{
    NONE = 'NONE',
    PEE = 'PEE',
    POO = 'POO',
}

export enum DAILYCARE_EAT_STATUS
{
    NOT_EAT = 'NOT_EAT',
    EAT_HALF = 'EAT_HALF',
    EAT_ALL = 'EAT_ALL',
    EAT_ONE_MORE = 'EAT_ONE_MORE',
    EAT_DOUBLE = 'EAT_DOUBLE',
}

export class DailyCareExtraDTO
{
    public isDelete?: boolean;
    public id?: string;
    public dailyCareType?: string;
    public isSummary?: boolean;
    public count?: number;
    public checkTime?: string;
    public waterContent?: string;
    public eatStatus?: DAILYCARE_EAT_STATUS;
    public memo?: string;
    public toiletType?: DAILYCARE_TOILET_TYPE;
    public sleepOn?: string;
    public wakeupOn?: string;
    public milkVol?: number;
    public healthyType?: DailyCareHealthyType;
    public temperature?: string;
    public mouthHaveProblem?: boolean;
    public mouthProblem?: string;
    public handHaveProblem?: boolean;
    public handProblem?: string;
    public bodyHaveProblem?: boolean;
    public bodyProblem?: string;
    public mindset?: string;
    public attachment?: EventAttachDTO;
    public mouthAttachment?: EventAttachDTO;
    public handAttachment?: EventAttachDTO;
    public bodyAttachment?: EventAttachDTO;
    public note?: string;
    public extraData?: { [index: string]: DailyCareExtraData; };
    public customType?: string;
    public customTitle?: string;
    public isDailySingle?: boolean;

    public constructor(init?: Partial<DailyCareExtraDTO>) { (Object as any).assign(this, init); }
}

export class CurriculumDTO
{
    public id?: string;
    public schoolPartnerInfoId?: string;
    public schoolId?: string;
    public name?: string;
    public catalogId?: string;
    public coverUrl?: string;
    public teacherSummary?: string;
    public teacherAttachment?: EventAttachDTO;
    public parentSummary?: string;
    public parentAttachment?: EventAttachDTO;
    public tags?: string[];
    public orderIndex?: number;
    public createOn?: string;
    public lastModifyOn?: string;
    public isDelete?: boolean;
    public deleteOn?: string;
    public deleteBy?: string;
    public deleteIPAddress?: string;

    public constructor(init?: Partial<CurriculumDTO>) { (Object as any).assign(this, init); }
}

export class BabyCareDailyTaskFlowDTO
{
    public id?: string;
    public moduleCode?: string;
    public timeBegin?: string;
    public timeEnd?: string;
    public appRoute?: string;
    public flowName?: string;
    public coverUrl?: string;
    public coverRotateY?: boolean;
    public curriculumId?: string;

    public constructor(init?: Partial<BabyCareDailyTaskFlowDTO>) { (Object as any).assign(this, init); }
}

export class BabyCareDailyTaskDTO
{
    public id?: string;
    public schoolPartnerInfoId?: string;
    public openEnds?: SchoolPartnerOpenEndDTO[];
    public schoolId?: string;
    public allocatedClassIds?: string[];
    public taskName?: string;
    public flows?: BabyCareDailyTaskFlowDTO[];
    public createOn?: string;
    public lastModifyOn?: string;
    public isDelete?: boolean;
    public deleteOn?: string;
    public deleteBy?: string;

    public constructor(init?: Partial<BabyCareDailyTaskDTO>) { (Object as any).assign(this, init); }
}

export enum BOOKORDER_TYPE
{
    GROWBOOK = 'GROWBOOK',
    EXTRABOOK = 'EXTRABOOK',
}

export enum BOOKORDER_EDITION
{
    PRO = 'PRO',
    DELUX = 'DELUX',
}

export enum ORDERPRODUCT_CATALOG
{
    CLASSLIVE = 'CLASSLIVE',
    COIN = 'COIN',
    MEMBER = 'MEMBER',
    MARKETING = 'MARKETING',
    CLASSBILL = 'CLASSBILL',
    HEALTHYPARTNER_CARDCHARGE = 'HEALTHYPARTNER_CARDCHARGE',
    HEALTHYPARTNER_PRODUCTORDER = 'HEALTHYPARTNER_PRODUCTORDER',
}

export enum DVR_DEVICE_TYPE
{
    HKVISION = 0,
    DAHUA = 1,
    TPLINK = 2,
    GB28181 = 3,
    YSCLOUD_CAMERA = 4,
    OTHER = 99,
}

export class LiveScheduleItemMinute
{
    public beginMinute?: number;
    public endMinute?: number;

    public constructor(init?: Partial<LiveScheduleItemMinute>) { (Object as any).assign(this, init); }
}

export class LiveScheduleItemDTO
{
    public dayOfWeek?: number;
    public hour?: number[];
    public minute?: LiveScheduleItemMinute[];

    public constructor(init?: Partial<LiveScheduleItemDTO>) { (Object as any).assign(this, init); }
}

export enum CLASSLIVEPRODUCT_SCOPE
{
    PARENTS = 'PARENTS',
    SINGLE = 'SINGLE',
    FAMILY = 'FAMILY',
}

export enum MEDICSTAT
{
    WAIT = 'WAIT',
    FINISH = 'FINISH',
    CANCEL = 'CANCEL',
}

export class GrowBookGroupDTO
{
    public eventId?: string;
    public eventTitle?: string;
    public eventContent?: string;
    public eventType?: string;
    public createOn?: string;
    public feedTime?: string;
    public createBy?: string;
    public feedAttachment?: EventAttachItem;

    public constructor(init?: Partial<GrowBookGroupDTO>) { (Object as any).assign(this, init); }
}

export class MedicCareLogDTO
{
    public id?: string;
    public createOn?: string;
    public logContent?: string;

    public constructor(init?: Partial<MedicCareLogDTO>) { (Object as any).assign(this, init); }
}

export class OrderProductDTO
{
    public id?: string;
    public schoolId?: string;
    public catalog?: ORDERPRODUCT_CATALOG;
    public classLiveProductScope?: CLASSLIVEPRODUCT_SCOPE;
    public amount?: number;
    public expireOn?: string;
    public productName?: string;
    public price?: number;
    public iosPrice?: number;
    public iapCode?: string;
    public createOn?: string;
    public lastModifyOn?: string;
    public isDelete?: boolean;
    public deleteOn?: string;

    public constructor(init?: Partial<OrderProductDTO>) { (Object as any).assign(this, init); }
}

export class AttendanceLogDTO
{
    public id?: number;
    public kidId?: string;
    public teacherUserInfoId?: string;
    public attendanceMethod?: ATTENDANCEMETHOD;
    public isCheckIn?: boolean;
    public checkUUID?: string;
    public createOn?: string;
    public healthTemperature?: string;
    public healthTemperatureStatus?: ATTENDANCE_HEALTH_TEMPERATURE_STATUS;

    public constructor(init?: Partial<AttendanceLogDTO>) { (Object as any).assign(this, init); }
}

export class DailyCareItem extends DailyCareExtraDTO
{
    public schoolId?: string;
    public classId?: string;
    public kidId?: string;
    public recordDateOn?: string;
    public teacherUserInfoId?: string;
    public createOn?: string;
    public lastModifyOn?: string;
    public isInspected?: boolean;
    public inspectedOn?: string;

    public constructor(init?: Partial<DailyCareItem>) { super(init); (Object as any).assign(this, init); }
}

export class DailyHealthyDTO
{
    public healthyType?: DailyCareHealthyType;
    public id?: string;
    public schoolId?: string;
    public kidId?: string;
    public dateOn?: string;
    public temperature?: string;
    public mouthHaveProblem?: boolean;
    public mouthProblem?: string;
    public handHaveProblem?: boolean;
    public handProblem?: string;
    public bodyHaveProblem?: boolean;
    public bodyProblem?: string;
    public mindset?: string;
    public remark?: string;
    public teacherUserInfoId?: string;
    public createOn?: string;
    public lastModifyOn?: string;
    public mouthAttachment?: EventAttachDTO;
    public handAttachment?: EventAttachDTO;
    public bodyAttachment?: EventAttachDTO;
    public attachment?: EventAttachDTO;
    public extraData?: { [index: string]: DailyCareExtraData; };

    public constructor(init?: Partial<DailyHealthyDTO>) { (Object as any).assign(this, init); }
}

export class IMContactItem
{
    public kidId?: string;
    public parentId?: string;
    public name?: string;
    public rongCloudUserId?: string;
    public easeMobIMUserId?: string;
    public avatarUrl?: string;
    public classId?: string;
    public schoolId?: string;
    public className?: string;
    public schoolName?: string;
    public isTeacher?: boolean;
    public teacherRole?: string;
    public parentRole?: string;
    public phoneNumber?: string;

    public constructor(init?: Partial<IMContactItem>) { (Object as any).assign(this, init); }
}

export class GroupItem
{
    public groupId?: string;
    public userRongIMId?: string[];

    public constructor(init?: Partial<GroupItem>) { (Object as any).assign(this, init); }
}

export class IMCatalogItem
{
    public name?: string;
    public iconUrl?: string;
    public filter?: string;

    public constructor(init?: Partial<IMCatalogItem>) { (Object as any).assign(this, init); }
}

export class MedicCareDTO
{
    public id?: string;
    public schoolId?: string;
    public studentId?: string;
    public medicTimeOn?: string;
    public parentCreateOn?: string;
    public teacherSubmitOn?: string;
    public teacherActualTimeOn?: string;
    public lastModifyOn?: string;
    public stat?: MEDICSTAT;
    public parentImageItems?: EventAttachImageItemDTO[];
    public teacherImageItems?: EventAttachImageItemDTO[];
    public medicDesc?: string;
    public parentMemo?: string;
    public teacherMemo?: string;
    public parentRelationSchoolInfoId?: string;
    public teacherUserInfoId?: string;
    public logs?: MedicCareLogDTO[];

    public constructor(init?: Partial<MedicCareDTO>) { (Object as any).assign(this, init); }
}

export class LiveVideoVisitHistory
{
    public liveChannelId?: string;
    public userId?: number;
    public kidId?: string;
    public kidName?: string;
    public avatarUrl?: string;
    public parentRole?: string;
    public visitOn?: string;

    public constructor(init?: Partial<LiveVideoVisitHistory>) { (Object as any).assign(this, init); }
}

export class TeacherMyUserInfo
{
    public uid?: number;
    public displayname?: string;
    public fullname?: string;
    public nickname?: string;
    public username?: string;
    public teacheruserinfoid?: string;
    public logourl?: string;
    public profileId?: string;
    public imClientId?: string;
    public imLoginSign?: string;
    public imLoginSignNonce?: string;
    public imLoginSignTimestamp?: number;
    public schoolRoles?: TeacherInSchoolRoleType[];

    public constructor(init?: Partial<TeacherMyUserInfo>) { (Object as any).assign(this, init); }
}

export class TermInfoItem
{
    public termId?: number;
    public startTime?: string;
    public endTime?: string;

    public constructor(init?: Partial<TermInfoItem>) { (Object as any).assign(this, init); }
}

export class LiveVideoItem
{
    public liveChannelId?: string;
    public name?: string;
    public liveUrl?: string;
    public liveHDUrl?: string;
    public liveHLSUrl?: string;
    public liveHLSHDUrl?: string;
    public deviceType?: DVR_DEVICE_TYPE;
    public ysCloud_DeviceSerial?: string;
    public ysCloud_ChannelNo?: number;
    public ysCloud_AccessToken?: string;
    public ysCloud_VerifyCode?: string;
    public ysCloud_NormalUrl?: string;
    public ysCloud_HDUrl?: string;
    public snapshotUrl?: string;

    public constructor(init?: Partial<LiveVideoItem>) { (Object as any).assign(this, init); }
}

export class LiveMemberDTO
{
    public expireOn?: string;
    public isTrial?: boolean;
    public trialSeconds?: number;
    public lastPaymentOn?: string;

    public constructor(init?: Partial<LiveMemberDTO>) { (Object as any).assign(this, init); }
}

export class BookOrderConfigItemDTO
{
    public bookEdition?: BOOKORDER_EDITION;
    public bookEditionStr?: string;
    public bookEditionTitle?: string;
    public price?: string;
    public pageNumber?: number;
    public editionMainBackgroundUrl?: string;
    public editionDetailImageUrl?: string;
    public maxNum?: number;

    public constructor(init?: Partial<BookOrderConfigItemDTO>) { (Object as any).assign(this, init); }
}

export class GrowBookInfoDTO
{
    public kidId?: string;
    public kidName?: string;
    public termId?: number;
    public totalAmount?: number;
    public teacherAmount?: number;
    public momAmount?: number;
    public dadAmount?: number;
    public otherAmount?: number;
    public frontPageUrl?: string;
    public semesterType?: SEMESTERTYPE;
    public items?: GrowBookGroupDTO[];
    public termDateStart?: string;
    public termDateEnd?: string;
    public albumUrl?: string;
    public pageNumber?: number;

    public constructor(init?: Partial<GrowBookInfoDTO>) { (Object as any).assign(this, init); }
}

export class GetSchoolTeacherAttendanceBindsRes extends BaseResponse
{
    public cardData?: { [index: string]: SchoolAttendanceBindItem[]; };
    public faceData?: { [index: string]: AiFaceItem; };
    public weChatUserIds?: number[];

    public constructor(init?: Partial<GetSchoolTeacherAttendanceBindsRes>) { super(init); (Object as any).assign(this, init); }
}

export class SetTeacherAttendanceTemplateRes extends BaseResponse
{

    public constructor(init?: Partial<SetTeacherAttendanceTemplateRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetAttendanceTeacherTemplateRes extends BaseResponse
{
    public data?: AttendanceTeacherTemplateItem[];

    public constructor(init?: Partial<GetAttendanceTeacherTemplateRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetTeacherAttendanceRes extends BaseResponse
{
    public data?: AttendanceTeacherDTO[];

    public constructor(init?: Partial<GetTeacherAttendanceRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetClassAttendanceLogRes extends BaseResponse
{
    public data?: BaseKidInfoDTO[];
    public leaveKids?: { [index: string]: KidMyLeaveRequestItem; };
    public logs?: { [index: string]: AttendanceKidDTO; };
    public checkOutLogs?: { [index: string]: AttendanceKidDTO; };
    public lastCheckLogs?: { [index: string]: AttendanceKidDTO; };

    public constructor(init?: Partial<GetClassAttendanceLogRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetKidsAttendanceLogRes extends BaseResponse
{
    public totalCount?: number;
    public data?: AttendanceKidDTO[];
    public classNames?: { [index: string]: string; };
    public kids?: { [index: string]: BaseKidInfoDTO; };
    public parentRole?: { [index: string]: string; };

    public constructor(init?: Partial<GetKidsAttendanceLogRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetClassKidsAttendanceDailyReportRes extends BaseResponse
{
    public classSummary?: ClassAttendanceDailyReport;
    public data?: BaseKidInfoDTO[];
    public kidAttendances?: { [index: string]: KidAttendance; };

    public constructor(init?: Partial<GetClassKidsAttendanceDailyReportRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetClassAttendanceDailyReportRes extends BaseResponse
{
    public data?: ClassAttendanceDailyReport[];
    public classNames?: { [index: string]: string; };

    public constructor(init?: Partial<GetClassAttendanceDailyReportRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetClassAttendanceMonthReportRes extends BaseResponse
{
    public data?: ClassAttendanceMonthReport[];
    public classNames?: { [index: string]: string; };

    public constructor(init?: Partial<GetClassAttendanceMonthReportRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetClassKidsAttendanceMonthReportRes extends BaseResponse
{
    public data?: KidAttendanceMonthReport[];
    public kids?: { [index: string]: BaseKidInfoDTO; };

    public constructor(init?: Partial<GetClassKidsAttendanceMonthReportRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetTeacherAttendanceLogRes extends BaseResponse
{
    public data?: AttendanceTeacherLogDTO[];

    public constructor(init?: Partial<GetTeacherAttendanceLogRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetTeacherAttendanceMonthReportRes extends BaseResponse
{
    public data?: TeacherAttendanceMonthReport[];

    public constructor(init?: Partial<GetTeacherAttendanceMonthReportRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetTeacherAttendanceDailyReportRes extends BaseResponse
{
    public data?: TeacherAttendanceDailyReportItem[];

    public constructor(init?: Partial<GetTeacherAttendanceDailyReportRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchoolYearCalendarRes extends BaseResponse
{
    public data?: SchoolYearCalendarDTO;

    public constructor(init?: Partial<GetSchoolYearCalendarRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetDailyCareBasesRes extends BaseResponse
{
    public dailyReporUrl?: string;
    public total?: number;
    public data?: DailyCareItem[];
    public kidInfos?: { [index: string]: StudentBaseInfoDTO; };
    public teacherInfos?: { [index: string]: TeacherBaseInfoDTO; };
    public ossInfos?: { [index: string]: OssInfoDTO; };
    public classNames?: { [index: string]: string; };

    public constructor(init?: Partial<GetDailyCareBasesRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetBabyCareDailyTaskRes extends BaseResponse
{
    public data?: BabyCareDailyTaskDTO;
    public curriculumData?: { [index: string]: CurriculumDTO; };
    public ossInfos?: { [index: string]: OssInfoDTO; };

    public constructor(init?: Partial<GetBabyCareDailyTaskRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetIMContactsRes extends CommonReturn
{
    public contacts?: IMContactItem[];
    public groupData?: GroupItem[];
    public studentData?: { [index: string]: StudentBaseInfoDTO; };
    public schoolStudentData?: { [index: string]: StudentBaseInfoDTO; };
    public classData?: { [index: string]: ClassBaseInfoDTO; };
    public schoolData?: { [index: string]: SchoolBaseInfo; };

    public constructor(init?: Partial<GetIMContactsRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetTeacherIMCatalogRes extends BaseResponse
{
    public data?: IMCatalogItem[];
    public isGlobalMute?: boolean;
    public muteConvIds?: string[];

    public constructor(init?: Partial<GetTeacherIMCatalogRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetRolesReq extends BaseResponse
{
    public data?: RoleItemDTO[];
    public p1?: number;
    public p2?: number;

    public constructor(init?: Partial<GetRolesReq>) { super(init); (Object as any).assign(this, init); }
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

export class GetSchoolChildOrgInfosRes extends BaseResponse
{
    public data?: SchoolOrgInfoDTO[];
    public department?: { [index: string]: DartStringList; };
    public children?: { [index: string]: SchoolOrgInfoItemDTO[]; };

    public constructor(init?: Partial<GetSchoolChildOrgInfosRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetTeacherMyUserInfoRes
{
    public ret?: boolean;
    public data?: TeacherMyUserInfo;
    public termInfos?: TermInfoItem[];
    public schoolConfigs?: { [index: string]: Object; };

    public constructor(init?: Partial<GetTeacherMyUserInfoRes>) { (Object as any).assign(this, init); }
}

export class GetSchoolTeacherHandoverInfoRes extends BaseResponse
{
    public data?: { [index: string]: number; };

    public constructor(init?: Partial<GetSchoolTeacherHandoverInfoRes>) { super(init); (Object as any).assign(this, init); }
}

export class CreateSchoolTeacherRes
{
    public ret?: boolean;
    public responseStatus?: ResponseStatus;
    public message?: string;
    public userName?: string;
    public fullName?: string;
    public profileId?: string;
    public teacherUserInfoId?: string;

    public constructor(init?: Partial<CreateSchoolTeacherRes>) { (Object as any).assign(this, init); }
}

export class GetSchoolTeacherNextEmployeeNoRes extends BaseResponse
{
    public nextEmployeeNo?: string;

    public constructor(init?: Partial<GetSchoolTeacherNextEmployeeNoRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchoolTeachersRes
{
    public data?: TeacherInfoDTO[];

    public constructor(init?: Partial<GetSchoolTeachersRes>) { (Object as any).assign(this, init); }
}

export class GetSchoolInfosRes extends CommonReturn
{
    public data?: SchoolInfoDTO[];

    public constructor(init?: Partial<GetSchoolInfosRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchoolSettingRes extends BaseResponse
{
    public data?: SchoolSettingDTO;

    public constructor(init?: Partial<GetSchoolSettingRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchoolConfigJobTitleRes extends BaseResponse
{
    public data?: string[];

    public constructor(init?: Partial<GetSchoolConfigJobTitleRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetMedicCaresRes extends BaseResponse
{
    public data?: MedicCareDTO[];
    public ossInfo?: { [index: string]: OssInfoDTO; };
    public kidInfo?: { [index: string]: StudentBaseInfoDTO; };
    public parentRole?: { [index: string]: string; };
    public teacherInfo?: { [index: string]: TeacherBaseInfoDTO; };

    public constructor(init?: Partial<GetMedicCaresRes>) { super(init); (Object as any).assign(this, init); }
}

export class PrepareBookOrderRes
{
    public ret?: boolean;
    public message?: string;
    public needPrepare?: boolean;
    public pageCount?: number;
    public pageMin?: number;
    public pageMax?: number;
    public data?: BookOrderConfigItemDTO[];

    public constructor(init?: Partial<PrepareBookOrderRes>) { (Object as any).assign(this, init); }
}

export class CreateBookOrderRes
{
    public ret?: boolean;
    public message?: string;
    public shopurl?: string;
    public miniProgramType?: number;
    public isH5?: boolean;
    public noticeMessage?: string;
    public shopCode?: string;

    public constructor(init?: Partial<CreateBookOrderRes>) { (Object as any).assign(this, init); }
}

export class PrePayWxliteRes extends BaseResponse
{
    public wxCode?: string;

    public constructor(init?: Partial<PrePayWxliteRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetAttendanceDeviceRes extends BaseResponse
{
    public total?: number;
    public data?: AttendanceDeviceDTO[];
    public childOrgInfo?: { [index: string]: string; };
    public doorInfo?: { [index: string]: string; };

    public constructor(init?: Partial<GetAttendanceDeviceRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetKidGrowBooksRes
{
    public ret?: boolean;
    public message?: string;
    public data?: GrowBookInfoDTO[];

    public constructor(init?: Partial<GetKidGrowBooksRes>) { (Object as any).assign(this, init); }
}

/** @description 修改登录名（手机） */
// @Route("/system/changeusername", "POST, OPTIONS")
// @Api(Description="修改登录名（手机）")
export class ChangeUserNameReq implements IReturn<CommonReturn>
{
    public originalUserName?: string;
    public userId?: number;
    public newUserName?: string;
    public verifyCode?: string;

    public constructor(init?: Partial<ChangeUserNameReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'ChangeUserNameReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CommonReturn(); }
}

/** @description 获取学校的所有教师的绑卡信息 */
// @Route("/attendance/school/{SchoolId}/teacherbindcards", "GET, OPTIONS")
// @Api(Description="获取学校的所有教师的绑卡信息")
export class GetSchoolTeacherAttendanceBindsReq implements IReturn<GetSchoolTeacherAttendanceBindsRes>
{
    public schoolId?: string;

    public constructor(init?: Partial<GetSchoolTeacherAttendanceBindsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolTeacherAttendanceBindsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSchoolTeacherAttendanceBindsRes(); }
}

/** @description 教师为学生补考勤 */
// @Route("/attendance/kidattendancebyteacher", "POST, OPTIONS")
// @Api(Description="教师为学生补考勤")
export class AttendanceKidByTeacherReq implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public kidIds?: string[];
    public attendanceDate?: string;
    public isCheckIn?: boolean;
    public checkUUID?: string;
    public location?: GeoCoordinates;

    public constructor(init?: Partial<AttendanceKidByTeacherReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AttendanceKidByTeacherReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 设置教师的考勤时段 */
// @Route("/attendance/{SchoolId}/setteachertemplate", "POST, OPTIONS")
// @Api(Description="设置教师的考勤时段")
export class SetTeacherAttendanceTemplateReq implements IReturn<SetTeacherAttendanceTemplateRes>
{
    public schoolId?: string;
    public teacherUserInfoId?: string;
    public attendanceTemplateId?: string;
    public immediate?: boolean;

    public constructor(init?: Partial<SetTeacherAttendanceTemplateReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SetTeacherAttendanceTemplateReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new SetTeacherAttendanceTemplateRes(); }
}

/** @description 获取学校的考勤时段 */
// @Route("/attendance/{SchoolId}/teachertemplates", "GET, OPTIONS")
// @Api(Description="获取学校的考勤时段")
export class GetAttendanceTeacherTemplateReq implements IReturn<GetAttendanceTeacherTemplateRes>
{
    public schoolId?: string;

    public constructor(init?: Partial<GetAttendanceTeacherTemplateReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetAttendanceTeacherTemplateReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetAttendanceTeacherTemplateRes(); }
}

/** @description 列取教师出勤信息 */
// @Route("/attendance/school/{SchoolId}/teacher/attendance", "GET, OPTIONS")
// @Api(Description="列取教师出勤信息")
export class GetTeacherAttendanceReq implements IReturn<GetTeacherAttendanceRes>
{
    public schoolId?: string;
    public branchIds?: string[];
    public teacherUserInfoId?: string;
    public beginDate?: string;
    public endDate?: string;

    public constructor(init?: Partial<GetTeacherAttendanceReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetTeacherAttendanceReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetTeacherAttendanceRes(); }
}

/** @description 列取指定班级的学生出勤 */
// @Route("/attendance/school/{SchoolId}/class/{ClassId}/attendance", "GET, OPTIONS")
// @Api(Description="列取指定班级的学生出勤")
export class GetClassAttendanceLogReq implements IReturn<GetClassAttendanceLogRes>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId 不可为空")
    public schoolId?: string;

    public classId?: string;
    public classIds?: string[];
    // @Validate(Validator="NotEmpty", Message="DateOn 不可为空")
    public dateOn?: string;

    public constructor(init?: Partial<GetClassAttendanceLogReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetClassAttendanceLogReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetClassAttendanceLogRes(); }
}

/** @description 列取学生出勤 */
// @Route("/attendance/school/{SchoolId}/kid/attendance", "GET, OPTIONS")
// @Api(Description="列取学生出勤")
export class GetKidsAttendanceLogReq implements IReturn<GetKidsAttendanceLogRes>
{
    public schoolId?: string;
    public dateOn?: string;
    public pageSize?: number;
    public classId?: string;
    public attendanceByKid?: boolean;

    public constructor(init?: Partial<GetKidsAttendanceLogReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetKidsAttendanceLogReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetKidsAttendanceLogRes(); }
}

/** @description 列取班级学生出勤日统计 */
// @Route("/attendance/school/{SchoolId}/class/attendance/kids", "GET, OPTIONS")
// @Api(Description="列取班级学生出勤日统计")
export class GetClassKidsAttendanceDailyReportReq implements IReturn<GetClassKidsAttendanceDailyReportRes>
{
    public schoolId?: string;
    public classId?: string;
    public dateOn?: string;

    public constructor(init?: Partial<GetClassKidsAttendanceDailyReportReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetClassKidsAttendanceDailyReportReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetClassKidsAttendanceDailyReportRes(); }
}

/** @description 班级出勤日报 */
// @Route("/attendance/school/{SchoolId}/class/attendance/dailyreport", "GET, OPTIONS")
// @Api(Description="班级出勤日报")
export class GetClassAttendanceDailyReportReq implements IReturn<GetClassAttendanceDailyReportRes>
{
    public schoolId?: string;
    public branchIds?: string[];
    public dateOn?: string;

    public constructor(init?: Partial<GetClassAttendanceDailyReportReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetClassAttendanceDailyReportReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetClassAttendanceDailyReportRes(); }
}

/** @description 班级出勤月报 */
// @Route("/attendance/school/{SchoolId}/class/attendance/monthreport", "GET, OPTIONS")
// @Api(Description="班级出勤月报")
export class GetClassAttendanceMonthReportReq implements IReturn<GetClassAttendanceMonthReportRes>
{
    public schoolId?: string;
    public branchIds?: string[];
    public dateOn?: string;

    public constructor(init?: Partial<GetClassAttendanceMonthReportReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetClassAttendanceMonthReportReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetClassAttendanceMonthReportRes(); }
}

/** @description 班级学生出勤月报 */
// @Route("/attendance/school/{SchoolId}/class/{ClassId}/attendance/monthreport", "GET, OPTIONS")
// @Api(Description="班级学生出勤月报")
export class GetClassKidsAttendanceMonthReportReq implements IReturn<GetClassKidsAttendanceMonthReportRes>
{
    public schoolId?: string;
    public classId?: string;
    public dateOn?: string;

    public constructor(init?: Partial<GetClassKidsAttendanceMonthReportReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetClassKidsAttendanceMonthReportReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetClassKidsAttendanceMonthReportRes(); }
}

/** @description 列取教师出勤详情 */
// @Route("/attendance/school/{SchoolId}/teacher/attendancelog", "GET, OPTIONS")
// @Api(Description="列取教师出勤详情")
export class GetTeacherAttendanceLogReq implements IReturn<GetTeacherAttendanceLogRes>
{
    public schoolId?: string;
    public branchIds?: string[];
    public teacherUserInfoId?: string;
    public beginDate?: string;
    public endDate?: string;
    public checkState?: AttendanceCheckState[];
    public lastId?: string;
    public pageSize?: number;

    public constructor(init?: Partial<GetTeacherAttendanceLogReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetTeacherAttendanceLogReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetTeacherAttendanceLogRes(); }
}

/** @description 教师考勤月报 */
// @Route("/attendance/school/{SchoolId}/teacher/monthreport", "GET, OPTIONS")
// @Api(Description="教师考勤月报")
export class GetTeacherAttendanceMonthReportReq implements IReturn<GetTeacherAttendanceMonthReportRes>
{
    public schoolId?: string;
    public branchIds?: string[];
    public reportDateStart?: string;
    public reportDateEnd?: string;

    public constructor(init?: Partial<GetTeacherAttendanceMonthReportReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetTeacherAttendanceMonthReportReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetTeacherAttendanceMonthReportRes(); }
}

/** @description 教师考勤日报 */
// @Route("/attendance/school/{SchoolId}/teacher/dailyreport", "GET, OPTIONS")
// @Api(Description="教师考勤日报")
export class GetTeacherAttendanceDailyReportReq implements IReturn<GetTeacherAttendanceDailyReportRes>
{
    public schoolId?: string;
    public branchIds?: string[];
    public reportDateStart?: string;
    public reportDateEnd?: string;

    public constructor(init?: Partial<GetTeacherAttendanceDailyReportReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetTeacherAttendanceDailyReportReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetTeacherAttendanceDailyReportRes(); }
}

/** @description 获取学校的假期信息 */
// @Route("/attendance/{SchoolId}/yearcalendar/{Year}", "GET, OPTIONS")
// @Api(Description="获取学校的假期信息")
export class GetSchoolYearCalendarReq implements IReturn<GetSchoolYearCalendarRes>
{
    public schoolId?: string;
    public year?: number;

    public constructor(init?: Partial<GetSchoolYearCalendarReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolYearCalendarReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSchoolYearCalendarRes(); }
}

/** @description 获取学校babycare数据 */
// @Route("/babycare/{SchoolId}/cares", "GET, OPTIONS")
// @Api(Description="获取学校babycare数据")
export class GetDailyCareBasesReq extends CommonRequest implements IReturn<GetDailyCareBasesRes>
{
    public schoolId?: string;
    public classId?: string;
    public kidId?: string;
    public recordDateOn?: string;
    public types?: string[];
    public pageIndex?: number;
    public pageSize?: number;

    public constructor(init?: Partial<GetDailyCareBasesReq>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetDailyCareBasesReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetDailyCareBasesRes(); }
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

/** @description 教师端获取联系人 */
// @Route("/teacher/im/contacts", "GET, OPTIONS")
// @Api(Description="教师端获取联系人")
export class GetTeacherIMContactsReq implements IReturn<GetIMContactsRes>
{
    /** @description SchoolId */
    // @ApiMember(DataType="string", Description="SchoolId", IsRequired=true, Name="SchoolId", ParameterType="query")
    public schoolId?: string;

    /** @description ClassId */
    // @ApiMember(DataType="string", Description="ClassId", IsRequired=true, Name="ClassId", ParameterType="query")
    public classId?: string;

    public isHeadMode?: boolean;

    public constructor(init?: Partial<GetTeacherIMContactsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetTeacherIMContactsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetIMContactsRes(); }
}

/** @description 教师端获取目录 */
// @Route("/teacher/im/catalog", "GET, OPTIONS")
// @Api(Description="教师端获取目录")
export class GetTeacherIMCatalogReq implements IReturn<GetTeacherIMCatalogRes>
{
    public schoolId?: string;

    public constructor(init?: Partial<GetTeacherIMCatalogReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetTeacherIMCatalogReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetTeacherIMCatalogRes(); }
}

/** @description 获取应用角色列表 */
// @Route("/aaa/app/roles", "GET, OPTIONS")
// @Api(Description="获取应用角色列表")
export class GetAppRolesReq implements IReturn<GetRolesReq>
{
    public schoolId?: string;

    public constructor(init?: Partial<GetAppRolesReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetAppRolesReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetRolesReq(); }
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

/** @description 修改教师手机 */
// @Route("/school/{SchoolId}/teacher/{TeacherId}/phonenumber", "POST, OPTIONS")
// @Api(Description="修改教师手机")
export class UpdateSchoolTeacherPhoneNumberReq implements IReturn<CommonReturn>
{
    /** @description 园所id */
    // @ApiMember(DataType="string", Description="园所id", IsRequired=true, Name="SchoolId", ParameterType="path")
    public schoolId?: string;

    /** @description 教师Id */
    // @ApiMember(DataType="string", Description="教师Id", IsRequired=true, Name="TeacherId", ParameterType="path")
    public teacherId?: string;

    /** @description 手机号码 */
    // @ApiMember(DataType="string", Description="手机号码", IsRequired=true, Name="PhoneNumber", ParameterType="query")
    public phoneNumber?: string;

    public constructor(init?: Partial<UpdateSchoolTeacherPhoneNumberReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateSchoolTeacherPhoneNumberReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CommonReturn(); }
}

/** @description 修改教师的发布权限 */
// @Route("/school/{SchoolId}/teacher/{TeacherId}/needpublishaudit", "POST, OPTIONS")
// @Api(Description="修改教师的发布权限")
export class UpdateSchoolTeacherNeedPublishAuditReq implements IReturn<CommonReturn>
{
    /** @description 园所id */
    // @ApiMember(DataType="string", Description="园所id", IsRequired=true, Name="SchoolId", ParameterType="path")
    public schoolId?: string;

    /** @description 教师Id */
    // @ApiMember(DataType="string", Description="教师Id", IsRequired=true, Name="TeacherId", ParameterType="path")
    public teacherId?: string;

    /** @description 是否需要审核 */
    // @ApiMember(DataType="boolean", Description="是否需要审核", IsRequired=true, Name="NeedPublishAudit", ParameterType="query")
    public needPublishAudit?: boolean;

    public constructor(init?: Partial<UpdateSchoolTeacherNeedPublishAuditReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateSchoolTeacherNeedPublishAuditReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CommonReturn(); }
}

/** @description 取消用药申请 */
// @Route("/school/{SchoolId}/healthy/mediccare/{MedicCareId}/cancel", "POST, OPTIONS")
// @Api(Description="取消用药申请")
export class CancelMedicCardReq extends CommonRequest implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public teacherUserInfoId?: string;
    public medicCareId?: string;
    public studentId?: string;

    public constructor(init?: Partial<CancelMedicCardReq>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'CancelMedicCardReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取学校组织架构 */
// @Route("/school/{SchoolId}/orgs", "GET, OPTIONS")
// @Api(Description="获取学校组织架构")
export class GetSchoolChildOrgInfosReq implements IReturn<GetSchoolChildOrgInfosRes>
{
    public schoolId?: string;

    public constructor(init?: Partial<GetSchoolChildOrgInfosReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolChildOrgInfosReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSchoolChildOrgInfosRes(); }
}

/** @description 获取教师自己的用户信息 */
// @Route("/teacher/my/userinfo", "GET, OPTIONS")
// @Api(Description="获取教师自己的用户信息")
export class GetTeacherMyUserInfoReq extends CommonRequest implements IReturn<GetTeacherMyUserInfoRes>
{
    /** @description 极光AppKey */
    // @ApiMember(DataType="string", Description="极光AppKey", Name="JPushAppKey", ParameterType="query")
    public jPushAppKey?: string;

    /** @description 极光设备id */
    // @ApiMember(DataType="string", Description="极光设备id", Name="JPushRegId", ParameterType="query")
    public jPushRegId?: string;

    /** @description MobPushAppKey */
    // @ApiMember(DataType="string", Description="MobPushAppKey", Name="MobPushAppKey", ParameterType="query")
    public mobPushAppKey?: string;

    /** @description MobPush设备id */
    // @ApiMember(DataType="string", Description="MobPush设备id", Name="MobPushRegId", ParameterType="query")
    public mobPushRegId?: string;

    public constructor(init?: Partial<GetTeacherMyUserInfoReq>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetTeacherMyUserInfoReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetTeacherMyUserInfoRes(); }
}

/** @description 将教师分配到指定的班级 */
// @Route("/school/{SchoolId}/teacher/allocate/{ClassId}", "POST, OPTIONS")
// @Api(Description="将教师分配到指定的班级")
export class AllocateSchoolTeacherToClassReq implements IReturn<CommonReturn>
{
    /** @description 园所id */
    // @ApiMember(DataType="string", Description="园所id", IsRequired=true, Name="SchoolId", ParameterType="path")
    public schoolId?: string;

    /** @description 班级id */
    // @ApiMember(DataType="string", Description="班级id", IsRequired=true, Name="ClassId", ParameterType="path")
    public classId?: string;

    /** @description 教师id */
    // @ApiMember(DataType="string", Description="教师id", IsRequired=true, Name="TeacherId", ParameterType="query")
    public teacherId?: string;

    public teacherClassRole?: TEACHER_CLASS_ROLE;
    /** @description 操作方向（分配/解除分配） */
    // @ApiMember(DataType="boolean", Description="操作方向（分配/解除分配）", IsRequired=true, Name="IsAllocateIn", ParameterType="query")
    public isAllocateIn?: boolean;

    public constructor(init?: Partial<AllocateSchoolTeacherToClassReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AllocateSchoolTeacherToClassReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CommonReturn(); }
}

/** @description 删除教师 */
// @Route("/school/{SchoolId}/teacher", "DELETE, OPTIONS")
// @Api(Description="删除教师")
export class DeleteSchoolTeacherReq implements IReturn<CommonReturn>
{
    public schoolId?: string;
    public teacherId?: string;
    public isDelete?: boolean;
    public isHidden?: boolean;

    public constructor(init?: Partial<DeleteSchoolTeacherReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteSchoolTeacherReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CommonReturn(); }
}

/** @description 获取员工交接信息 */
// @Route("/school/{SchoolId}/teacher/handover/info", "GET")
// @Api(Description="获取员工交接信息")
export class GetSchoolTeacherHandoverInfoReq implements IReturn<GetSchoolTeacherHandoverInfoRes>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId 不可为空")
    public schoolId?: string;

    // @Validate(Validator="NotEmpty", Message="TeacherId 不可为空")
    public teacherId?: string;

    public constructor(init?: Partial<GetSchoolTeacherHandoverInfoReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolTeacherHandoverInfoReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetSchoolTeacherHandoverInfoRes(); }
}

/** @description 员工交接 */
// @Route("/school/{SchoolId}/teacher/handover/info", "POST")
// @Api(Description="员工交接")
export class SchoolTeacherHandoverReq implements IReturn<BaseResponse>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId 不可为空")
    public schoolId?: string;

    // @Validate(Validator="NotEmpty", Message="TeacherId 不可为空")
    public teacherId?: string;

    // @Validate(Validator="NotEmpty", Message="ToTeacherId 不可为空")
    public toTeacherId?: string;

    public constructor(init?: Partial<SchoolTeacherHandoverReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SchoolTeacherHandoverReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 创建教师 */
// @Route("/school/{SchoolId}/teacher", "POST, OPTIONS")
// @Api(Description="创建教师")
export class CreateSchoolTeacherReq implements IReturn<CreateSchoolTeacherRes>
{
    /** @description 园所id */
    // @ApiMember(DataType="string", Description="园所id", IsRequired=true, Name="SchoolId", ParameterType="path")
    public schoolId?: string;

    public branchRole?: { [index: string]: string; };
    /** @description JobTitle */
    // @ApiMember(DataType="string", Description="JobTitle", Name="JobTitle", ParameterType="query")
    public jobTitle?: string;

    /** @description 手机号码 */
    // @ApiMember(DataType="string", Description="手机号码", IsRequired=true, Name="PhoneNumber", ParameterType="query")
    public phoneNumber?: string;

    /** @description 全名 */
    // @ApiMember(DataType="string", Description="全名", IsRequired=true, Name="FullName", ParameterType="query")
    public fullName?: string;

    public nickName?: string;
    public employeeNo?: string;
    /** @description 备注 */
    // @ApiMember(DataType="string", Description="备注", Name="Remark", ParameterType="query")
    public remark?: string;

    public isHidden?: boolean;
    /** @description 教师职务 */
    // @ApiMember(DataType="string", Description="教师职务", Name="TeacherRole", ParameterType="query")
    public teacherRole?: string;

    public roleCodes?: string[];
    public birthDate?: string;
    public education?: string;
    public entryDate?: string;
    public idNumber?: string;

    public constructor(init?: Partial<CreateSchoolTeacherReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateSchoolTeacherReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CreateSchoolTeacherRes(); }
}

/** @description 更新老师的职务 */
// @Route("/school/{SchoolId}/teacher/{TeacherId}/teacherRole", "POST, OPTIONS")
// @Api(Description="更新老师的职务")
export class UpdateSchoolTeacherRoleReq implements IReturn<CommonReturn>
{
    /** @description 园所id */
    // @ApiMember(DataType="string", Description="园所id", IsRequired=true, Name="SchoolId", ParameterType="path")
    public schoolId?: string;

    public teacherUserInfoId?: string;
    public teacherRole?: string;

    public constructor(init?: Partial<UpdateSchoolTeacherRoleReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateSchoolTeacherRoleReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CommonReturn(); }
}

/** @description 更新老师所属校区 */
// @Route("/school/{SchoolId}/teacher/{TeacherId}/branchid", "POST, OPTIONS")
// @Api(Description="更新老师所属校区")
export class UpdateSchoolTeacherBranchIdReq implements IReturn<BaseResponse>
{
    /** @description 园所id */
    // @ApiMember(DataType="string", Description="园所id", IsRequired=true, Name="SchoolId", ParameterType="path")
    public schoolId?: string;

    public teacherUserInfoId?: string;
    public branchRole?: { [index: string]: string; };

    public constructor(init?: Partial<UpdateSchoolTeacherBranchIdReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateSchoolTeacherBranchIdReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取教师工号 */
// @Route("/school/{SchoolId}/teacher/nextemployeeno", "GET, OPTIONS")
// @Api(Description="获取教师工号")
export class GetSchoolTeacherNextEmployeeNoReq implements IReturn<GetSchoolTeacherNextEmployeeNoRes>
{
    /** @description 园所id */
    // @ApiMember(DataType="string", Description="园所id", IsRequired=true, Name="SchoolId", ParameterType="path")
    public schoolId?: string;

    public constructor(init?: Partial<GetSchoolTeacherNextEmployeeNoReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolTeacherNextEmployeeNoReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSchoolTeacherNextEmployeeNoRes(); }
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

/** @description 修改教师姓名 */
// @Route("/school/{SchoolId}/teacher/{TeacherId}/fullname", "POST, OPTIONS")
// @Api(Description="修改教师姓名")
export class UpdateSchoolTeacherFullNameReq implements IReturn<CommonReturn>
{
    /** @description 园所id */
    // @ApiMember(DataType="string", Description="园所id", IsRequired=true, Name="SchoolId", ParameterType="path")
    public schoolId?: string;

    /** @description 教师Id */
    // @ApiMember(DataType="string", Description="教师Id", IsRequired=true, Name="TeacherId", ParameterType="path")
    public teacherId?: string;

    /** @description 全名 */
    // @ApiMember(DataType="string", Description="全名", IsRequired=true, Name="FullName", ParameterType="query")
    public fullName?: string;

    public nickName?: string;
    public employeeNo?: string;
    public remark?: string;
    public birthDate?: string;
    public education?: string;
    public entryDate?: string;
    public idNumber?: string;

    public constructor(init?: Partial<UpdateSchoolTeacherFullNameReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateSchoolTeacherFullNameReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CommonReturn(); }
}

/** @description 获取园所列表 */
// @Route("/schools", "GET, OPTIONS")
// @Api(Description="获取园所列表")
export class GetSchoolInfosReq implements IReturn<GetSchoolInfosRes>
{
    public dataOnly?: boolean;

    public constructor(init?: Partial<GetSchoolInfosReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolInfosReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSchoolInfosRes(); }
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

/** @description 获取员工职务配置信息 */
// @Route("/school/{SchoolId}/config/jobtitles", "GET, OPTIONS")
// @Api(Description="获取员工职务配置信息")
export class GetSchoolConfigJobTitleReq implements IReturn<GetSchoolConfigJobTitleRes>
{
    public schoolId?: string;

    public constructor(init?: Partial<GetSchoolConfigJobTitleReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolConfigJobTitleReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSchoolConfigJobTitleRes(); }
}

/** @description 更新孩子的兴趣爱好 */
// @Route("/kid/{KidId}/hobby", "POST, OPTIONS")
// @Api(Description="更新孩子的兴趣爱好")
export class UpdateKidHobbyReq extends CommonRequest implements IReturn<CommonReturn>
{
    /** @description 学生id */
    // @ApiMember(DataType="string", Description="学生id", IsRequired=true, Name="KidId", ParameterType="path")
    public kidId?: string;

    /** @description 兴趣爱好 */
    // @ApiMember(DataType="string", Description="兴趣爱好", IsRequired=true, Name="Hobby", ParameterType="query")
    public hobby?: string;

    public constructor(init?: Partial<UpdateKidHobbyReq>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateKidHobbyReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CommonReturn(); }
}

/** @description 更新孩子的生日 */
// @Route("/kid/{KidId}/birthdate", "POST, OPTIONS")
// @Api(Description="更新孩子的生日")
export class UpdateKidBirthDateReq implements IReturn<CommonReturn>
{
    /** @description 学生id */
    // @ApiMember(DataType="string", Description="学生id", IsRequired=true, Name="KidId", ParameterType="path")
    public kidId?: string;

    /** @description 生日 */
    // @ApiMember(DataType="string", Description="生日", IsRequired=true, Name="birthdate", ParameterType="query")
    public birthdate?: string;

    public constructor(init?: Partial<UpdateKidBirthDateReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateKidBirthDateReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CommonReturn(); }
}

/** @description 家长获取用药申请 */
// @Route("/school/{SchoolId}/healthy/mediccaresbystudent", "GET, OPTIONS")
// @Api(Description="家长获取用药申请")
export class GetMedicCaresByStudentReq implements IReturn<GetMedicCaresRes>
{
    public schoolId?: string;
    public studentId?: string;

    public constructor(init?: Partial<GetMedicCaresByStudentReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMedicCaresByStudentReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetMedicCaresRes(); }
}

/** @description 家长创建用药申请 */
// @Route("/school/{SchoolId}/healthy/mediccares", "POST, OPTIONS")
// @Api(Description="家长创建用药申请")
export class AddMedicCareReq implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public studentId?: string;
    public medicDesc?: string;
    public medicTimeOn?: string;
    public parentMemo?: string;
    public parentImageItems?: EventAttachImageItemDTO[];

    public constructor(init?: Partial<AddMedicCareReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddMedicCareReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 用户下单准备接口 */
// @Route("/shop/prepareorder", "POST, OPTIONS")
// @Api(Description="用户下单准备接口")
export class PrepareBookOrderReq implements IReturn<PrepareBookOrderRes>
{
    /** @description Kidid */
    // @ApiMember(DataType="string", Description="Kidid", IsRequired=true, Name="Kidid", ParameterType="query")
    public kidid?: string;

    /** @description Termid */
    // @ApiMember(DataType="integer", Description="Termid", IsRequired=true, Name="Termid", ParameterType="query")
    public termid?: number;

    /** @description ExtraBookConfigId */
    // @ApiMember(DataType="string", Description="ExtraBookConfigId", IsRequired=true, Name="ExtraBookConfigId", ParameterType="query")
    public extraBookConfigId?: string;

    /** @description 类型 */
    // @ApiMember(DataType="string", Description="类型", IsRequired=true, Name="OrderType", ParameterType="query")
    public orderType?: BOOKORDER_TYPE;

    public constructor(init?: Partial<PrepareBookOrderReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PrepareBookOrderReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new PrepareBookOrderRes(); }
}

/** @description 用户下单接口 */
// @Route("/shop/createorder", "POST, OPTIONS")
// @Api(Description="用户下单接口")
export class CreateBookOrderReq implements IReturn<CreateBookOrderRes>
{
    /** @description Kidid */
    // @ApiMember(DataType="string", Description="Kidid", IsRequired=true, Name="Kidid", ParameterType="query")
    public kidid?: string;

    /** @description Termid */
    // @ApiMember(DataType="integer", Description="Termid", IsRequired=true, Name="Termid", ParameterType="query")
    public termid?: number;

    /** @description ExtraBookConfigId */
    // @ApiMember(DataType="string", Description="ExtraBookConfigId", IsRequired=true, Name="ExtraBookConfigId", ParameterType="query")
    public extraBookConfigId?: string;

    /** @description 类型 */
    // @ApiMember(DataType="string", Description="类型", IsRequired=true, Name="OrderType", ParameterType="query")
    public orderType?: BOOKORDER_TYPE;

    /** @description 型号 */
    // @ApiMember(DataType="string", Description="型号", IsRequired=true, Name="BookEdition", ParameterType="query")
    public bookEdition?: BOOKORDER_EDITION;

    /** @description 购买数量 */
    // @ApiMember(DataType="string", Description="购买数量", IsRequired=true, Name="Num", ParameterType="query")
    public num?: number;

    public constructor(init?: Partial<CreateBookOrderReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateBookOrderReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CreateBookOrderRes(); }
}

/** @description 小程序订单预处理接口 */
// @Route("/payment/prepaywxlite", "POST, OPTIONS")
// @Api(Description="小程序订单预处理接口")
export class PrePayWxliteReq extends CommonRequest implements IReturn<PrePayWxliteRes>
{
    public productId?: string;
    public schoolId?: string;
    public kidId?: string;
    public productCatalog?: ORDERPRODUCT_CATALOG;

    public constructor(init?: Partial<PrePayWxliteReq>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'PrePayWxliteReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new PrePayWxliteRes(); }
}

/** @description 列取设备 */
// @Route("/attendance/devices/{SchoolId}", "GET, OPTIONS")
// @Api(Description="列取设备")
export class GetAttendanceDeviceReq implements IReturn<GetAttendanceDeviceRes>
{
    public schoolId?: string;
    public serialNo?: string;
    public remark?: string;
    public deviceType?: AttendanceDevice_Type[];
    public macAddr?: string;
    public direction?: AttendanceDoor_Direction[];
    public registOn?: string[];
    public lastModifyOn?: string[];
    public lastHeartbeatOn?: string[];
    public sort?: { [index: string]: ORDER_DIRECTION; };
    public pageIndex?: number;
    public pageSize?: number;

    public constructor(init?: Partial<GetAttendanceDeviceReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetAttendanceDeviceReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetAttendanceDeviceRes(); }
}

/** @description 获取某个学生所有成长册详情 */
// @Route("/growbook/KidId/{KidId}/all", "GET, OPTIONS")
// @Api(Description="获取某个学生所有成长册详情")
export class GetKidGrowBooksReq implements IReturn<GetKidGrowBooksRes>
{
    public kidId?: string;

    public constructor(init?: Partial<GetKidGrowBooksReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetKidGrowBooksReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetKidGrowBooksRes(); }
}

/** @description 更新孩子的姓名 */
// @Route("/kid/{KidId}/name", "POST, OPTIONS")
// @Api(Description="更新孩子的姓名")
export class UpdateKidNameReq implements IReturn<CommonReturn>
{
    /** @description 学生id */
    // @ApiMember(DataType="string", Description="学生id", IsRequired=true, Name="KidId", ParameterType="path")
    public kidId?: string;

    public fullname?: string;

    public constructor(init?: Partial<UpdateKidNameReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateKidNameReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CommonReturn(); }
}

/** @description 更新孩子的性别 */
// @Route("/kid/{KidId}/gender", "POST, OPTIONS")
// @Api(Description="更新孩子的性别")
export class UpdateKidGenderReq extends CommonRequest implements IReturn<CommonReturn>
{
    /** @description 学生id */
    // @ApiMember(DataType="string", Description="学生id", IsRequired=true, Name="KidId", ParameterType="path")
    public kidId?: string;

    /** @description 性别 */
    // @ApiMember(DataType="string", Description="性别", IsRequired=true, Name="gender", ParameterType="query")
    public gender?: GENDERTYPE;

    public constructor(init?: Partial<UpdateKidGenderReq>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateKidGenderReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CommonReturn(); }
}

// @Route("/file/uploadmulti", "POST, OPTIONS")
export class UploadMultiFileReq implements IReturn<CommonReturn>
{
    public filetype?: FILETYPE;
    public classid?: string;
    public kidid?: string;
    public schoolid?: string;
    public files?: UploadFileItem[];

    public constructor(init?: Partial<UploadMultiFileReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UploadMultiFileReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CommonReturn(); }
}

