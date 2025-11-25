/* Options:
Date: 2025-11-18 10:17:37
Version: 8.40
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://apigwtest.yban.co/api/educrm

//GlobalNamespace: 
MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
IncludeTypes: CLASSBILL_PAY_STATUS,ClassBillLogDTO,CLASSBILL_ITEM_STATUS,CLASSBILL_TYPE,ClassBillItemDTO,TopicTestResultItem,EVENTAUDITSTATE,TopicTestResult,TOPIC_TEST_SOURCE_TYPE,TOPIC_TEST_KEYWORD_TYPE,TopicTestKeysWords,TopicTestKeysWordsV2,TopicTestInterceptLogDTO,TopicTestInterceptGroupByKeyWordTypeDTO,TopicTestSchoolKeyWordDTO,TopicTestInterceptGroupByKeyWordItem,TopicTestSchoolKeyWordV2DTO,GrowBookSummaryItem,GrowBookSummaryDTO,LiveVideoVisitHistoryDTO,LiveVideoVisitSummaryDTO,DVR_DEVICE_TYPE,LiveScheduleItemMinute,CommonRequest,LiveScheduleItemDTO,LiveChannelDTO,LiveVideoVisitHistory,DailyCareExtraType,DailyCareExtraData,DailyCareHealthyType,DailyHealthyDTO,KidDailyHealthState,KidAttendance,TeacherAttendanceMonthReportItem,LEAVESTATE,LEAVE_REQUEST_TYPE,TeacherAttendanceMonthReport,KidAttendanceMonthReport,ClassAttendanceMonthReport,KidMyLeaveRequestItem,TeacherAttendanceDailyReportItem,ClassAttendanceDailyReport,ATTENDANCETYPE,ATTENDANCE_HEALTH_HSJC_STATUS,ATTENDANCE_HEALTH_CODE_COLOR,ATTENDANCE_HEALTH_CODE_STATUS,ATTENDANCE_HEALTH_FACEMASK_STATUS,AttendanceTeacherDTO,AttendanceKidDTO,VACATION_TYPE,ATTENDANCEMETHOD,VacationItemDTO,ATTENDANCE_HEALTH_TEMPERATURE_STATUS,AttendanceCheckState,SchoolYearCalendarDTO,AttendanceTeacherLogDTO,ORDER_DIRECTION,AttendanceDoor_Direction,AttendanceDevice_Type,TEACHER_CLASS_ROLE,SCHOOL_SERVICE_SUB_MODULE,H5AppServiceItem,H5AppServiceItemExtra,H5ParentConfig,AppointmentBalanceLimitType,AppointmentBeginEndTimeType,AppointmentBeginEndType,AttendanceDevice_Type,AttendanceDoor_Direction,AttendanceHeartbeatDataDTO,SCHOOL_DEPT_TYPE,FinanceCloseSettingDTO,H5ParentConfigExtra,AppointmentSetting,ClassBabyCareSettingDTO,AttendanceTimeConfigDTO,ATTENDANCECARDOWNERTYPE,USERROLE,STUDENT_MEMBER_BUY_TYPE,SCHOOL_STATE,SCHOOL_LICENSE_TYPE,STUDENT_MEMBER_BUY_TYPE,GeoCoordinates,TeacherClassInfoDTO,AttendanceDeviceDTO,SchoolSettingDTO,SchoolInfoDTO,TeacherInfoDTO,ResponseStatus,SchoolOrgInfoItemDTO,DartStringList,SchoolOrgInfoDTO,ParentRelationClassInfoDTO,TeacherInfoDTO,SchoolInfoDTO,ClassInfoDTO,RoleItemDTO,AttendanceTeacherTemplateItem,AiFaceItem,SchoolAttendanceBindItem,SchoolPartnerOpenEndDTO,TeacherInSchoolRoleType,SYSTEM_LICENSE_TYPE,TermInfoItem,TeacherMyUserInfo,IHasBearerToken,IHasSessionId,ClassEventTrendParent,AttachTingItem,AttachLinkItem,AttachFileItem,AttachVoiceItem,AttachVideoItem,AttachImageItem,EventAttachItem,EventItemCommentItemDTO,EventLikeUserDTO,TASKATTACHTYPE,EVENT_HOMETIME_SCOPE,EventAttachItem,ClassEventTrendItemView,ClassEventTrendItemViewV2,ClassEventTrendInfo,EVENTPUBLISHSTATE,ClassEventItem,ClassEventTrendInfoV2,ParentRelationSchoolInfoDTO,ClassEventItemForTeacher,BabyCareDailyTaskFlowDTO,SchoolPartnerOpenEndDTO,OSTYPE,ProTableRequest,ICommonRequest,OssInfoDTO,CurriculumDTO,BabyCareDailyTaskDTO,AppToDoItemDTO,KidInfoDTO,KidDailySummark,TeacherAppMenuDTO,PERMISSION_TYPE,EventAttachImageItemDTO,EventAttachTingItemDTO,EventAttachLinkItemDTO,EventAttachFileItemDTO,EventAttachAudioItemDTO,EventAttachVideoItemDTO,EventAttachDTO,DishMenuDishDTO,DishMenuContentDTO,DishMenuDTO,DishMenuWeeklyDTO,NutritionBase,Nutrition,IngredientType,IngredientItemDTO,CLASS_TYPE,TargetClassAndMember,IReturn`1,OSTYPE,CommonRequest,ICommonRequest,BaseResponse,CommonReturn,ResponseStatus,ResponseError,TeacherBaseInfoDTO,ClassBaseInfoDTO,ClassTimeTeacherInfoMapDTO,TEACHER_CLASS_ROLE,IProTableRequest,ProTableRequest,ORDER_DIRECTION,GENDERTYPE,StudentInfoDTO,StudentBaseInfoDTO,BaseKidInfoDTO,ParentInfoDTO,PARENT_ROLE_TYPE,STUDENT_STATUS,KIDACCOUNTSTATE,KID_ALLERGY,OssInfoDTO,ParentRelationSchoolInfoDTO,KidInfoDTO,KidClassInfoDTO,ParentRelationClassInfoDTO,SEMESTERTYPE,PARENTACCOUNTSTATUS,GetAliyunStsTokenV2Req,AliyunOssSignItem,ClassInfoDTO,CLASSGRADETYPE,CLASS_STATUS,REPORT_DIMENSION,MyDayOfWeek,SCHOOL_TYPE
//ExcludeTypes: 
//DefaultImports: 
*/


export interface IReturn<T>
{
    createResponse(): T;
}

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

export class ProTableRequest implements IProTableRequest
{
    public sort?: { [index: string]: ORDER_DIRECTION; };
    // @Validate(Validator="NotNull", Message="PageIndex 不能为空")
    public pageIndex?: number;

    // @Validate(Validator="NotNull", Message="PageSize 不能为空")
    public pageSize?: number;

    public constructor(init?: Partial<ProTableRequest>) { (Object as any).assign(this, init); }
}

export interface IProTableRequest
{
    sort?: { [index: string]: ORDER_DIRECTION; };
    pageIndex?: number;
    pageSize?: number;
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
    public lng?: number;

    // @DataMember(Order=2)
    public lat?: number;

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

export enum REPORT_DIMENSION
{
    Daily = 0,
    Weekly = 1,
    Monthly = 2,
    Month = 2,
    Yearly = 3,
}

export enum TEACHER_CLASS_ROLE
{
    MASTER_TEACHER = 'MASTER_TEACHER',
    ASSISTANT_TEACHER = 'ASSISTANT_TEACHER',
    CARE_TEACHER = 'CARE_TEACHER',
    OTHER_TEACHER = 'OTHER_TEACHER',
}

export enum DailyCareHealthyType
{
    NoonCheck = 'NoonCheck',
    MorningCheck = 'MorningCheck',
    NightCheck = 'NightCheck',
}

export enum ATTENDANCECARDOWNERTYPE
{
    TEACHER = 'TEACHER',
    PARENT = 'PARENT',
    STUDENT = 'STUDENT',
}

export enum ATTENDANCEMETHOD
{
    ICCARD = 'ICCARD',
    AIFACE = 'AIFACE',
    QRCODE = 'QRCODE',
    MANUAL = 'MANUAL',
    ROBOT = 'ROBOT',
}

export enum ATTENDANCE_HEALTH_TEMPERATURE_STATUS
{
    UNKNOW = 'UNKNOW',
    OK = 'OK',
    NOTOK = 'NOTOK',
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

export class AttendanceTimeConfigDTO
{
    public dayOfWeek?: MyDayOfWeek;
    public timeBegin?: string;
    public timeEnd?: string;

    public constructor(init?: Partial<AttendanceTimeConfigDTO>) { (Object as any).assign(this, init); }
}

export enum AttendanceCheckState
{
    CHECK_NOTCHECK = 'CHECK_NOTCHECK',
    CHECK_OK = 'CHECK_OK',
    CHECK_TOOLATE = 'CHECK_TOOLATE',
    CHECK_TOOEARLY = 'CHECK_TOOEARLY',
    CHECK_MISS = 'CHECK_MISS',
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

export class SchoolPartnerOpenEndDTO
{
    public schoolId?: string;
    public openOn?: string;
    public closeOn?: string;

    public constructor(init?: Partial<SchoolPartnerOpenEndDTO>) { (Object as any).assign(this, init); }
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

export class TargetClassAndMember
{
    public classId?: string;
    public selectedTeacherId?: number[];
    public selectedKidId?: string[];

    public constructor(init?: Partial<TargetClassAndMember>) { (Object as any).assign(this, init); }
}

export enum TASKATTACHTYPE
{
    ALL = 'ALL',
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
    AUDIO = 'AUDIO',
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

export enum CLASS_TYPE
{
    NONE = 'NONE',
    KINDERGARTEN = 'KINDERGARTEN',
    EARLYCHILDHOOD = 'EARLYCHILDHOOD',
    EDUCATION = 'EDUCATION',
}

export class ParentInfoDTO
{
    public parentRoleType?: PARENT_ROLE_TYPE;
    public phoneNumber?: string;

    public constructor(init?: Partial<ParentInfoDTO>) { (Object as any).assign(this, init); }
}

export enum USERROLE
{
    ROLE_TEACHER = 'ROLE_TEACHER',
    ROLE_PARENT = 'ROLE_PARENT',
    ROLE_STUDENT = 'ROLE_STUDENT',
}

export enum LEAVE_REQUEST_TYPE
{
    LEAVE = 'LEAVE',
    ATTENDANCE = 'ATTENDANCE',
}

export enum LEAVESTATE
{
    WAIT_APPROVE = 'WAIT_APPROVE',
    APPROVE = 'APPROVE',
    REFUSE = 'REFUSE',
    SELF_CANCEL = 'SELF_CANCEL',
}

export enum PERMISSION_TYPE
{
    admin_home_schools_getall = 'admin_home_schools_getall',
    admin_tv = 'admin_tv',
    admin_partner = 'admin_partner',
    admin_school_auth = 'admin_school_auth',
    admin_sms_log = 'admin_sms_log',
    admin_school_userauth = 'admin_school_userauth',
    partner_sales = 'partner_sales',
    partner_sales_saleslead = 'partner_sales_saleslead',
    partner_sales_saleslead_edit = 'partner_sales_saleslead_edit',
    partner_sales_followup = 'partner_sales_followup',
    partner_sales_followup_edit = 'partner_sales_followup_edit',
    partner_sales_setting = 'partner_sales_setting',
    partner_group_teacher = 'partner_group_teacher',
    partner_group_teacher_edit = 'partner_group_teacher_edit',
    partner_group_kid = 'partner_group_kid',
    partner_group_kid_edit = 'partner_group_kid_edit',
    partner_group_parent = 'partner_group_parent',
    partner_group_curriculum = 'partner_group_curriculum',
    partner_school_home = 'partner_school_home',
    partner_school_teacher = 'partner_school_teacher',
    partner_school_kid = 'partner_school_kid',
    partner_school_class = 'partner_school_class',
    partner_school_classtime = 'partner_school_classtime',
    partner_school_course = 'partner_school_course',
    partner_school_courseorder = 'partner_school_courseorder',
    partner_school_coursehour = 'partner_school_coursehour',
    partner_school_statement = 'partner_school_statement',
    partner_school_yoyopay = 'partner_school_yoyopay',
    partner_school_goods = 'partner_school_goods',
    partner_school_sales = 'partner_school_sales',
    partner_school_audit = 'partner_school_audit',
    partner_knowledge_teacherstudy = 'partner_knowledge_teacherstudy',
    partner_knowledge_teacherstudy_content_edit = 'partner_knowledge_teacherstudy_content_edit',
    partner_knowledge_teacherstudy_catalog_edit = 'partner_knowledge_teacherstudy_catalog_edit',
    partner_dashboard_school = 'partner_dashboard_school',
    partner_dashboard_babycare = 'partner_dashboard_babycare',
    partner_dashboard_schoolsaleslead = 'partner_dashboard_schoolsaleslead',
    partner_dashboard_coursehour = 'partner_dashboard_coursehour',
    partner_dashboard_class = 'partner_dashboard_class',
    partner_dashboard_applogin = 'partner_dashboard_applogin',
    partner_system_user = 'partner_system_user',
    partner_system_user_edit = 'partner_system_user_edit',
    school_admin = 'school_admin',
    school_admin_export_kid = 'school_admin_export_kid',
    school_admin_export_yoyopay = 'school_admin_export_yoyopay',
    school_admin_export_statement = 'school_admin_export_statement',
    school_admin_export_coursehourlog = 'school_admin_export_coursehourlog',
    school_teacher_add = 'school_teacher_add',
    school_admin_sensitive = 'school_admin_sensitive',
    classes_kidsmanagement = 'classes_kidsmanagement',
    school_kidsmanagement = 'school_kidsmanagement',
    sales_kidscourse_home = 'sales_kidscourse_home',
    classes_commissionpickup_getall = 'classes_commissionpickup_getall',
    classes_audit = 'classes_audit',
    dashboard_coursehour_teacher_getall = 'dashboard_coursehour_teacher_getall',
    educational_imcontacts_getall = 'educational_imcontacts_getall',
    school_kgtime_getall = 'school_kgtime_getall',
    school_kgtime_addallclass = 'school_kgtime_addallclass',
    school_classes_getall = 'school_classes_getall',
    babycare_classes_getall = 'babycare_classes_getall',
    school_medicare_getall = 'school_medicare_getall',
    school_leave_kid_getall = 'school_leave_kid_getall',
    school_leave_kid = 'school_leave_kid',
    school_leave_teacher = 'school_leave_teacher',
    classes_eventtemplates_edit = 'classes_eventtemplates_edit',
    educational_healthy_getall = 'educational_healthy_getall',
    educational_foodmenu = 'educational_foodmenu',
    educational_foodmenu_getall = 'educational_foodmenu_getall',
    educational_watch_getall = 'educational_watch_getall',
    educational_teacherstudy_catalog = 'educational_teacherstudy_catalog',
    educational_teacherstudy_modify = 'educational_teacherstudy_modify',
    educational_teacherstudy_download = 'educational_teacherstudy_download',
    finance_yoyopay_orders = 'finance_yoyopay_orders',
    school_settings_topictest = 'school_settings_topictest',
    school_live_channel_getall = 'school_live_channel_getall',
    teachorg_classtimecomment_getall = 'teachorg_classtimecomment_getall',
    teachorg_classtimes_getall = 'teachorg_classtimes_getall',
    teachorg_classes_schedules_edit = 'teachorg_classes_schedules_edit',
    sales_order_home = 'sales_order_home',
    sales_order_modify = 'sales_order_modify',
    sales_order_delete = 'sales_order_delete',
    sales_order_approval = 'sales_order_approval',
    sales_order_approval_audit = 'sales_order_approval_audit',
    sales_order_approval_setting = 'sales_order_approval_setting',
    sales_kid_coursehour_balance = 'sales_kid_coursehour_balance',
    sales_kidcoursealarm = 'sales_kidcoursealarm',
    sales_clue_setfollow = 'sales_clue_setfollow',
    sales_speakingart = 'sales_speakingart',
    sales_speakingart_edit = 'sales_speakingart_edit',
    sales_demo_admin = 'sales_demo_admin',
    services_patrol = 'services_patrol',
    services_patrol_area = 'services_patrol_area',
    services_patrol_areaitem = 'services_patrol_areaitem',
    services_patrollog = 'services_patrollog',
    services_patrol_edit = 'services_patrol_edit',
    services_patrollog_edit = 'services_patrollog_edit',
    school_attendance_device = 'school_attendance_device',
    school_tv = 'school_tv',
    school_setting_auth = 'school_setting_auth',
    school_setting_kidlicense = 'school_setting_kidlicense',
    school_manqu_template = 'school_manqu_template',
    kid_privategiftpoint_update = 'kid_privategiftpoint_update',
    kid_privategiftpoint_log = 'kid_privategiftpoint_log',
    school_babycare_report = 'school_babycare_report',
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

export enum TOPIC_TEST_KEYWORD_TYPE
{
    ANQUAN = 'ANQUAN',
    TOUSU = 'TOUSU',
    FEIYON = 'FEIYON',
    WEISHENG = 'WEISHENG',
    YUYAN = 'YUYAN',
    ZIDINGYI = 'ZIDINGYI',
}

export class TopicTestKeysWordsV2
{
    public data?: string[];

    public constructor(init?: Partial<TopicTestKeysWordsV2>) { (Object as any).assign(this, init); }
}

export class TopicTestSchoolKeyWordV2DTO
{
    public id?: string;
    public isEnabled?: boolean;
    public keysWords?: { [index: string]: TopicTestKeysWordsV2; };

    public constructor(init?: Partial<TopicTestSchoolKeyWordV2DTO>) { (Object as any).assign(this, init); }
}

export class TopicTestKeysWords extends Array<string>
{

    public constructor(init?: Partial<TopicTestKeysWords>) { super(); (Object as any).assign(this, init); }
}

export class TopicTestSchoolKeyWordDTO
{
    public id?: string;
    public isEnabled?: boolean;
    public keysWords?: { [index: string]: TopicTestKeysWords; };

    public constructor(init?: Partial<TopicTestSchoolKeyWordDTO>) { (Object as any).assign(this, init); }
}

export enum EVENTAUDITSTATE
{
    NONEED_AUDIT = 'NONEED_AUDIT',
    WAIT_AUDIT = 'WAIT_AUDIT',
    FINISH_AUDITED = 'FINISH_AUDITED',
}

export enum TOPIC_TEST_SOURCE_TYPE
{
    EVENT = 'EVENT',
    EVENT_COMMENT = 'EVENT_COMMENT',
    EVENT_LIVECLASSROOM = 'EVENT_LIVECLASSROOM',
    EVENT_TASK_ITEM = 'EVENT_TASK_ITEM',
    EVENT_TASK_ITEM_COMMENT = 'EVENT_TASK_ITEM_COMMENT',
    EVENT_CLOCKIN_ITEM = 'EVENT_CLOCKIN_ITEM',
    EVENT_CLOCKIN_ITEM_COMMENT = 'EVENT_CLOCKIN_ITEM_COMMENT',
    IM = 'IM',
    EVENT_DAILYMENU = 'EVENT_DAILYMENU',
}

export enum EVENTPUBLISHSTATE
{
    STATE_ALLSEE = 'STATE_ALLSEE',
    STATE_INIT = 'STATE_INIT',
    STATE_OWNERSEE = 'STATE_OWNERSEE',
    STATE_WAITAUDIT = 'STATE_WAITAUDIT',
    STATE_DELETE = 'STATE_DELETE',
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

export enum IngredientType
{
    GRAIN = 1,
    MILK = 2,
    EGG = 3,
    FISH = 4,
    BABY = 5,
    SNACK = 6,
    FASTFOOD = 7,
    DRINK = 8,
    ALCOHOL = 9,
    SUGAR = 10,
    OIL = 11,
    RICE = 12,
    SPICE = 13,
    DRUG = 14,
    BEAN = 15,
    VEGETABLE = 16,
    BACTERIA = 17,
    FRUIT = 18,
    NUT = 19,
    MEAT = 20,
    POULTRY = 21,
}

export class NutritionBase
{
    public energy?: number;
    public fat?: number;
    public protein?: number;
    public fiber?: number;
    public carbohydrate?: number;

    public constructor(init?: Partial<NutritionBase>) { (Object as any).assign(this, init); }
}

export class Nutrition extends NutritionBase
{
    public va?: number;
    public carotene?: number;
    public vb1?: number;
    public vb2?: number;
    public vb3?: number;
    public vc?: number;
    public ve?: number;
    public ca?: number;
    public p?: number;
    public k?: number;
    public na?: number;
    public mg?: number;
    public fe?: number;
    public zn?: number;
    public se?: number;
    public cu?: number;
    public mn?: number;
    public i?: number;

    public constructor(init?: Partial<Nutrition>) { super(init); (Object as any).assign(this, init); }
}

export class IngredientItemDTO
{
    public id?: string;
    public alias?: string;
    public ingredientName?: string;
    public ingredientType?: IngredientType;
    public nutritions?: Nutrition;
    public isDelete?: boolean;
    public schoolId?: string;
    public createByTeacherId?: string;
    public createOn?: string;

    public constructor(init?: Partial<IngredientItemDTO>) { (Object as any).assign(this, init); }
}

export class DishMenuDishDTO
{
    public id?: string;
    public ingredientAmount?: { [index: string]: number; };

    public constructor(init?: Partial<DishMenuDishDTO>) { (Object as any).assign(this, init); }
}

export class DishMenuContentDTO
{
    public title?: string;
    public dishs?: DishMenuDishDTO[];
    public attachment?: EventAttachDTO;

    public constructor(init?: Partial<DishMenuContentDTO>) { (Object as any).assign(this, init); }
}

export class DishMenuDTO
{
    public dateOn?: string;
    public nutritions?: Nutrition;
    public contents?: DishMenuContentDTO[];

    public constructor(init?: Partial<DishMenuDTO>) { (Object as any).assign(this, init); }
}

export class DishMenuWeeklyDTO
{
    public id?: string;
    public schoolId?: string;
    public branchId?: string;
    public dateOn?: string;
    public title?: string;
    public createByTeacherId?: string;
    public nutritions?: Nutrition;
    public dishMenus?: DishMenuDTO[];
    public isDelete?: boolean;
    public deleteByTeacherId?: string;
    public deleteOn?: string;
    public createOn?: string;
    public lastModifyOn?: string;

    public constructor(init?: Partial<DishMenuWeeklyDTO>) { (Object as any).assign(this, init); }
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

export enum CLASSGRADETYPE
{
    GRADE_PRE = 'GRADE_PRE',
    GRADE_1 = 'GRADE_1',
    GRADE_2 = 'GRADE_2',
    GRADE_3 = 'GRADE_3',
    GRADE_OTHER = 'GRADE_OTHER',
}

export enum SCHOOL_TYPE
{
    KINDERGARTEN = 'KINDERGARTEN',
    EDUAFFAIR = 'EDUAFFAIR',
    SCHOOL = 'SCHOOL',
    ALL = 'ALL',
}

export enum SYSTEM_LICENSE_TYPE
{
    BASIC = 'BASIC',
    STANDARD = 'STANDARD',
    PREMIUM = 'PREMIUM',
}

export class AttachVideoItem
{
    public thumbnilUri?: string;
    public videoUri?: string;
    public resId?: string;
    public playSeconds?: number;
    public aspectRatio?: string;

    public constructor(init?: Partial<AttachVideoItem>) { (Object as any).assign(this, init); }
}

export class AttachLinkItem
{
    public linkUri?: string;
    public linkTitle?: string;
    public linkIcon?: string;

    public constructor(init?: Partial<AttachLinkItem>) { (Object as any).assign(this, init); }
}

export class AttachImageItem
{
    public rotate?: number;
    public imageUri?: string;
    public thumbnilUri?: string;
    public resId?: string;

    public constructor(init?: Partial<AttachImageItem>) { (Object as any).assign(this, init); }
}

export class AttachFileItem
{
    public resId?: string;
    public fileUri?: string;
    public fileType?: string;
    public fileName?: string;

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
    public resId?: string;
    public publisher?: string;
    public publishTime?: string;
    public voiceUri?: string;
    public voiceSeconds?: number;
    public fileName?: string;

    public constructor(init?: Partial<AttachVoiceItem>) { (Object as any).assign(this, init); }
}

export class EventItemCommentItemDTO
{
    public id?: string;
    public isAudio?: boolean;
    public audioItem?: AttachVoiceItem;
    public content?: string;
    public createBy?: string;
    public createByName?: string;
    public avatarUrl?: string;
    public createOn?: string;
    public createIPAddr?: string;
    public replyTo?: string;
    public replyToName?: string;

    public constructor(init?: Partial<EventItemCommentItemDTO>) { (Object as any).assign(this, init); }
}

export class EventLikeUserDTO
{
    public isTeacher?: boolean;
    public userId?: number;
    public userProfileId?: string;
    public showName?: string;
    public avatarUrl?: string;

    public constructor(init?: Partial<EventLikeUserDTO>) { (Object as any).assign(this, init); }
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

export class KidClassInfoDTO
{
    public branchId?: string;
    public className?: string;
    public originalClassName?: string;
    public classId?: string;
    public currentSemester?: SEMESTERTYPE;
    public hasLoveVideo?: boolean;
    public status?: STUDENT_STATUS;

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

export class KidInfoDTO
{
    public id?: string;
    public name?: string;
    public nickName?: string;
    public gender?: GENDERTYPE;
    public birthDate?: string;
    public kidMonth?: number;
    public logoUrl?: string;
    public createOn?: string;
    public state?: KIDACCOUNTSTATE;
    public studentStatus?: STUDENT_STATUS;
    public primaryContact?: ParentInfoDTO;
    public secondaryContact?: ParentInfoDTO;
    public classInfos?: KidClassInfoDTO[];
    public schoolId?: string;
    public hobby?: string;
    public allergies?: KID_ALLERGY[];
    public followUpTeacherUserInfoId?: string;
    public parents?: ParentRelationClassInfoDTO[];
    public remark?: string;

    public constructor(init?: Partial<KidInfoDTO>) { (Object as any).assign(this, init); }
}

export enum AttendanceDevice_Type
{
    DEVICE_CHANNEL = 'DEVICE_CHANNEL',
    DEVICE_SHOWBOARD = 'DEVICE_SHOWBOARD',
    DEVICE_WALLBOX = 'DEVICE_WALLBOX',
    DEVICE_YITIJI = 'DEVICE_YITIJI',
    DEVICE_UNIUBI_FACE = 'DEVICE_UNIUBI_FACE',
    DEVICE_FUYIN_FACE = 'DEVICE_FUYIN_FACE',
    DEVICE_USB_READER = 'DEVICE_USB_READER',
    DEVICE_SELFCHECKIN = 'DEVICE_SELFCHECKIN',
    DEVICE_VGUANG_READER = 'DEVICE_VGUANG_READER',
    DEVICE_WEIGENG_BOARD = 'DEVICE_WEIGENG_BOARD',
    DEVICE_SHIKU_FACE = 'DEVICE_SHIKU_FACE',
    DEVICE_KMF_FACE = 'DEVICE_KMF_FACE',
    DEVICE_AI_CAMERA_N9 = 'DEVICE_AI_CAMERA_N9',
    DEVICE_FJGS_FACE = 'DEVICE_FJGS_FACE',
    DEVICE_WALKLAKE_FACE = 'DEVICE_WALKLAKE_FACE',
    DEVICE_HIK_FACE = 'DEVICE_HIK_FACE',
    DEVICE_AI_CAMERA_HIK = 'DEVICE_AI_CAMERA_HIK',
    DEVICE_SMT_FACE = 'DEVICE_SMT_FACE',
}

export enum AttendanceDoor_Direction
{
    IN = 'IN',
    OUT = 'OUT',
    NONE = 'NONE',
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

export class AttachTingItem
{
    public albumId?: string;
    public trackId?: string;
    public albumTitle?: string;
    public albumDesc?: string;
    public albumImageUrl?: string;

    public constructor(init?: Partial<AttachTingItem>) { (Object as any).assign(this, init); }
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

export class EventAttachItem
{
    public attachImages?: AttachImageItem[];
    public attachVideos?: AttachVideoItem[];
    public attachVoices?: AttachVoiceItem[];
    public attachFiles?: AttachFileItem[];
    public attachLinks?: AttachLinkItem[];
    public attachTings?: AttachTingItem[];
    public attachVideo?: AttachVideoItem;
    public attachVoice?: AttachVoiceItem;
    public attachFile?: AttachFileItem;
    public attachLink?: AttachLinkItem;
    public attachTing?: AttachTingItem;

    public constructor(init?: Partial<EventAttachItem>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EventAttachItem'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class ClassEventItem
{
    public userName?: string;
    public userProfileId?: string;
    public classId?: string;
    public schoolId?: string;
    public schoolName?: string;
    public className?: string;
    public userLogoUrl?: string;
    public eventId?: string;
    public eventType?: string;
    public timeString?: string;
    public timeStamp?: number;
    public createOn?: string;
    public updateOn?: string;
    public publishTime?: string;
    public title?: string;
    public content?: string;
    public attachItem?: EventAttachItem;
    public targetKids?: string[];
    public isPartialPublish?: boolean;
    public studentTotalCount?: number;
    public isTruncate?: boolean;
    public imageUri?: string;
    public linkUri?: string;
    public pageView?: number;
    public themeId?: string;
    public themeTitle?: string;
    public kidId?: string;
    public kidName?: string;
    public parentId?: string;
    public parentRoleName?: string;
    public comments?: EventItemCommentItemDTO[];
    public likes?: EventLikeUserDTO[];
    public commentType?: TASKATTACHTYPE;
    public isVisited?: boolean;
    public isAcked?: boolean;
    public termId?: number;
    public semesterType?: SEMESTERTYPE;
    public extraFields?: { [index: string]: Object; };
    public homeTime_Scope?: EVENT_HOMETIME_SCOPE;
    public needPayment?: boolean;
    public privacyMode?: boolean;
    public isPayed?: boolean;
    public paymentCourseId?: string;
    public paymentPrice?: number;
    public showBeforeTimestamp?: number;
    public myAiOssIds?: string[];
    public privacyAttachments?: { [index: string]: EventAttachItem; };

    public constructor(init?: Partial<ClassEventItem>) { (Object as any).assign(this, init); }
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

export class ClassBaseInfoDTO
{
    public id?: string;
    public branchId?: string;
    public className?: string;
    public alias?: string;
    public colorId?: number;
    public courseSubject?: string[];
    public kidCount?: number;
    public courseId?: string;
    public courseHour?: number;
    public capacity?: number;
    public mustCapacity?: boolean;

    public constructor(init?: Partial<ClassBaseInfoDTO>) { (Object as any).assign(this, init); }
}

export class StudentBaseInfoDTO
{
    public id?: string;
    public name?: string;
    public nickName?: string;
    public gender?: GENDERTYPE;
    public birthDate?: string;
    public kidMonth?: number;
    public logoUrl?: string;
    public primaryContact?: ParentInfoDTO;
    public secondaryContact?: ParentInfoDTO;
    public classIds?: string[];
    public studentStatus?: STUDENT_STATUS;
    public parentRelationSchoolIds?: string[];
    public followUpTeacherUserInfoId?: string;
    public babyCareDailyPageUrl?: string;
    public babyCareWeeklyPageUrl?: string;

    public constructor(init?: Partial<StudentBaseInfoDTO>) { (Object as any).assign(this, init); }
}

export class KidDailySummark
{
    public allEventCount?: number;
    public allTeacherCount?: number;
    public allKidCount?: number;
    public kidCount?: number;
    public checkInCount?: number;
    public checkOutCount?: number;
    public dailyHealthyCount?: number;
    public dailyHealthyWarnCount?: number;
    public leaveRequestCount?: number;
    public medicCareCount?: number;
    public strangerRiskCount?: number;
    public attendanceRiskCount?: number;
    public leaveRequestCreateCount?: number;
    public commissionPickupCount?: number;

    public constructor(init?: Partial<KidDailySummark>) { (Object as any).assign(this, init); }
}

export class AiFaceItem
{
    public configId?: string;
    public imageUrl?: string;
    public ownerRole?: USERROLE;
    public parentRole?: string;
    public createTime?: string;
    public name?: string;
    public userId?: number;
    public enableAttendance?: boolean;

    public constructor(init?: Partial<AiFaceItem>) { (Object as any).assign(this, init); }
}

export class SchoolAttendanceBindItem
{
    public id?: string;
    public cardSerialNo?: string;
    public bindTime?: string;
    public isTeacher?: boolean;
    public parentRelationSchoolInfoId?: string;
    public ownerType?: ATTENDANCECARDOWNERTYPE;

    public constructor(init?: Partial<SchoolAttendanceBindItem>) { (Object as any).assign(this, init); }
}

export class AttendanceTeacherTemplateItem
{
    public id?: string;
    public schoolId?: string;
    public name?: string;
    public followSchoolCalendar?: boolean;
    public timeConfigs?: AttendanceTimeConfigDTO[];
    public createOn?: string;
    public lastModifyOn?: string;

    public constructor(init?: Partial<AttendanceTeacherTemplateItem>) { (Object as any).assign(this, init); }
}

export enum ATTENDANCE_HEALTH_FACEMASK_STATUS
{
    UNKNOW = 'UNKNOW',
    WARE = 'WARE',
    NOWARE = 'NOWARE',
}

export enum ATTENDANCE_HEALTH_CODE_STATUS
{
    UNKNOW = 'UNKNOW',
    OK = 'OK',
    NOTOK = 'NOTOK',
}

export enum ATTENDANCE_HEALTH_CODE_COLOR
{
    UNKNOW = 'UNKNOW',
    GREEN = 'GREEN',
    YELLOW = 'YELLOW',
    RED = 'RED',
}

export enum ATTENDANCE_HEALTH_HSJC_STATUS
{
    UNKNOW = 'UNKNOW',
    NEGATIVE = 'NEGATIVE',
    POSITIVE = 'POSITIVE',
}

export class AttendanceTeacherDTO
{
    public id?: string;
    public schoolId?: string;
    public dateOn?: string;
    public teacherName?: string;
    public teacherUserName?: string;
    public teacherUserInfoId?: string;
    public teacherAvatarUrl?: string;
    public checkInTime?: string;
    public checkOutTime?: string;
    public checkInState?: AttendanceCheckState;
    public checkOutState?: AttendanceCheckState;
    public lateMinutes?: number;
    public earlyMinutes?: number;
    public lastModifyOn?: string;
    public ruleCheckInTime?: string;
    public ruleCheckOutTime?: string;
    public healthTemperatureCheckIn?: string;
    public healthTemperatureStatusCheckIn?: ATTENDANCE_HEALTH_TEMPERATURE_STATUS;
    public healthTemperatureCheckOut?: string;
    public healthTemperatureStatusCheckOut?: ATTENDANCE_HEALTH_TEMPERATURE_STATUS;
    public healthFaceMaskResult?: ATTENDANCE_HEALTH_FACEMASK_STATUS;
    public healthCodeResult?: ATTENDANCE_HEALTH_CODE_STATUS;
    public healthCodeColor?: ATTENDANCE_HEALTH_CODE_COLOR;
    public healthAddr?: string;
    public healthName?: string;
    public healthIdCard?: string;
    public healthHSJCResult?: ATTENDANCE_HEALTH_HSJC_STATUS;
    public healthHSJCDate?: string;
    public healthHSJCAddr?: string;

    public constructor(init?: Partial<AttendanceTeacherDTO>) { (Object as any).assign(this, init); }
}

export class BaseKidInfoDTO
{
    public id?: string;
    public name?: string;
    public nickName?: string;
    public gender?: GENDERTYPE;
    public birthDate?: string;
    public kidMonth?: number;
    public avatarUrl?: string;
    public schoolId?: string;
    public classIds?: string[];
    public classesStatus?: { [index: string]: STUDENT_STATUS; };
    public createOn?: string;
    public state?: KIDACCOUNTSTATE;
    public primaryContact?: ParentInfoDTO;
    public secondaryContact?: ParentInfoDTO;
    public lastLoginOn?: string;
    public lastModifyOn?: string;
    public studentNumber?: string;
    public hobby?: string;
    public kidEntityId?: string;
    public kidEntityUserAuthMapId?: string;
    public studentStatus?: STUDENT_STATUS;
    public branchId?: string;
    public remark?: string;
    public allergies?: KID_ALLERGY[];
    public followUpTeacherUserInfoId?: string;
    public accountBalanceAmount?: number;
    public accountBalanceGiftAmount?: number;

    public constructor(init?: Partial<BaseKidInfoDTO>) { (Object as any).assign(this, init); }
}

export class KidMyLeaveRequestItem
{
    public id?: string;
    public type?: LEAVE_REQUEST_TYPE;
    public isTeacher?: boolean;
    public classId?: string;
    public schoolId?: string;
    public leaveEntityId?: string;
    public leaveRequesterId?: string;
    public createOn?: string;
    public timeBegin?: string;
    public timeEnd?: string;
    public hours?: string;
    public userIPAddr?: string;
    public state?: LEAVESTATE;
    public auditOn?: string;
    public auditMsg?: string;
    public cancelOn?: string;
    public auditorId?: string;
    public auditUserIPAddr?: string;
    public lastModifyOn?: string;
    public leaveSubject?: string;
    public leaveDescribe?: string;
    public attachment?: EventAttachDTO;

    public constructor(init?: Partial<KidMyLeaveRequestItem>) { (Object as any).assign(this, init); }
}

export enum ATTENDANCETYPE
{
    FULL_DAY = 'FULL_DAY',
    FORENOON = 'FORENOON',
    AFTERNOON = 'AFTERNOON',
}

export class AttendanceKidDTO
{
    public kidId?: string;
    public attendanceType?: ATTENDANCETYPE;
    public attendanceMethod?: ATTENDANCEMETHOD;
    public parentRelationSchoolInfoId?: string;
    public isCheckIn?: boolean;
    public checkUUID?: string;
    public createOn?: string;
    public inOn?: string;
    public attendanceDeviceId?: string;
    public attendanceUserMapId?: string;
    public healthTemperature?: string;
    public healthTemperatureStatus?: ATTENDANCE_HEALTH_TEMPERATURE_STATUS;

    public constructor(init?: Partial<AttendanceKidDTO>) { (Object as any).assign(this, init); }
}

export class ClassAttendanceDailyReport
{
    public dateOn?: string;
    public classId?: string;
    public branchId?: string;
    public kidsCount?: number;
    public checkInCount?: number;
    public checkOutCount?: number;
    public leaveCount?: number;

    public constructor(init?: Partial<ClassAttendanceDailyReport>) { (Object as any).assign(this, init); }
}

export class KidAttendance
{
    public kidId?: string;
    public dateOn?: string;
    public hasCheckIn?: boolean;
    public hasCheckOut?: boolean;
    public hasLeaveRequest?: boolean;
    public checkIn?: AttendanceKidDTO;
    public checkOut?: AttendanceKidDTO;
    public lastCheck?: AttendanceKidDTO;

    public constructor(init?: Partial<KidAttendance>) { (Object as any).assign(this, init); }
}

export class ClassAttendanceMonthReport
{
    public dateOn?: string;
    public classId?: string;
    public branchId?: string;
    public workDaysCount?: number;
    public allCheckInDays?: number;
    public allCheckOutDays?: number;
    public hasLeaveDays?: number;

    public constructor(init?: Partial<ClassAttendanceMonthReport>) { (Object as any).assign(this, init); }
}

export class KidAttendanceMonthReport
{
    public kidId?: string;
    public workDaysCount?: number;
    public checkInCount?: number;
    public checkOutCount?: number;
    public leaveCount?: number;

    public constructor(init?: Partial<KidAttendanceMonthReport>) { (Object as any).assign(this, init); }
}

export class AttendanceTeacherLogDTO
{
    public id?: string;
    public schoolId?: string;
    public teacherUserInfoId?: string;
    public checkTime?: string;
    public checkUUID?: string;
    public attendanceDeviceId?: string;
    public isCheckIn?: boolean;
    public ruleCheckTime?: string;
    public checkState?: AttendanceCheckState;
    public ruleOverMinutes?: number;
    public healthTemperature?: string;
    public healthTemperatureStatus?: ATTENDANCE_HEALTH_TEMPERATURE_STATUS;
    public createOn?: string;

    public constructor(init?: Partial<AttendanceTeacherLogDTO>) { (Object as any).assign(this, init); }
}

export class TeacherAttendanceMonthReportItem
{
    public teacherUserInfoId?: string;
    public teacherName?: string;
    public teacherUserName?: string;
    public teacherAvatarUrl?: string;
    public noWorkDayCount?: number;
    public noWorkDayAttendanceCount?: number;
    public totalCount?: number;
    public attendanceCount?: number;
    public noDataCount?: number;
    public lateInCount?: number;
    public earlyOutCount?: number;
    public notCheckInCount?: number;
    public notCheckOutCount?: number;

    public constructor(init?: Partial<TeacherAttendanceMonthReportItem>) { (Object as any).assign(this, init); }
}

export class TeacherAttendanceMonthReport
{
    public reportDate?: string;
    public data?: TeacherAttendanceMonthReportItem[];

    public constructor(init?: Partial<TeacherAttendanceMonthReport>) { (Object as any).assign(this, init); }
}

export class TeacherAttendanceDailyReportItem
{
    public reportDate?: string;
    public totalCount?: number;
    public attendanceCount?: number;
    public lateInCount?: number;
    public earlyOutCount?: number;
    public noDataCount?: number;
    public teacherdata?: AttendanceTeacherDTO[];

    public constructor(init?: Partial<TeacherAttendanceDailyReportItem>) { (Object as any).assign(this, init); }
}

export enum VACATION_TYPE
{
    WEEKEND = 'WEEKEND',
    HOLIDAY = 'HOLIDAY',
    SUMMER = 'SUMMER',
    WINTER = 'WINTER',
    SCHOOLDEFINE = 'SCHOOLDEFINE',
}

export class VacationItemDTO
{
    public date?: string;
    public vacationType?: VACATION_TYPE;
    public holidayName?: string;
    public vDate?: string;

    public constructor(init?: Partial<VacationItemDTO>) { (Object as any).assign(this, init); }
}

export class SchoolYearCalendarDTO
{
    public schoolId?: string;
    public year?: number;
    public vacationList?: VacationItemDTO[];

    public constructor(init?: Partial<SchoolYearCalendarDTO>) { (Object as any).assign(this, init); }
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

export class ClassInfoDTO
{
    public classId?: string;
    public gradeType?: CLASSGRADETYPE;
    public isGraduation?: boolean;
    public gradeTypeOnCreate?: CLASSGRADETYPE;
    public createOn?: string;
    public currentTermId?: number;
    public currentSemesterType?: SEMESTERTYPE;
    public name?: string;
    public originalClassName?: string;
    public schoolId?: string;
    public branchId?: string;
    public logoUrl?: string;
    public teacherList?: string[];
    public teacherIdClassRoles?: { [index: string]: TEACHER_CLASS_ROLE; };
    public kidList?: string[];
    public colorId?: number;
    public courseSubject?: string[];
    public courseId?: string;
    public classRoomId?: string;
    public capacity?: number;
    public mustCapacity?: boolean;
    public courseHour?: number;
    public remark?: string;
    public liveChannelIds?: string[];
    public classStatus?: CLASS_STATUS;
    public classType?: CLASS_TYPE;

    public constructor(init?: Partial<ClassInfoDTO>) { (Object as any).assign(this, init); }
}

export enum CLASSBILL_TYPE
{
    CLASSBILL_TYPE_PER_FIXED = 'CLASSBILL_TYPE_PER_FIXED',
    CLASSBILL_TYPE_FREE = 'CLASSBILL_TYPE_FREE',
}

export enum CLASSBILL_ITEM_STATUS
{
    CLASSBILL_INIT = 'CLASSBILL_INIT',
    CLASSBILL_PAYING = 'CLASSBILL_PAYING',
    CLASSBILL_CANCELED = 'CLASSBILL_CANCELED',
    CLASSBILL_FINISHED = 'CLASSBILL_FINISHED',
    CLASSBILL_TERMINATED = 'CLASSBILL_TERMINATED',
}

export class ClassBillItemDTO
{
    public id?: string;
    public schoolId?: string;
    public classId?: string;
    public name?: string;
    public teacherId?: string;
    public billType?: CLASSBILL_TYPE;
    public billAmount?: number;
    public totalBillAmount?: number;
    public currentTotalBillAmount?: number;
    public kidIds?: string[];
    public paidKidIds?: string[];
    public status?: CLASSBILL_ITEM_STATUS;
    public createOn?: string;
    public lastModifyOn?: string;

    public constructor(init?: Partial<ClassBillItemDTO>) { (Object as any).assign(this, init); }
}

export enum CLASSBILL_PAY_STATUS
{
    WAIT_PAY = 'WAIT_PAY',
    PAID = 'PAID',
    WAIT_REFUND = 'WAIT_REFUND',
    REFUND = 'REFUND',
    DUPLICATE_REFUND = 'DUPLICATE_REFUND',
    WAIT_DUPLICATE_REFUND = 'WAIT_DUPLICATE_REFUND',
}

export class ClassBillLogDTO
{
    public id?: string;
    public schoolId?: string;
    public classId?: string;
    public classBillItemId?: string;
    public kidId?: string;
    public parentRelationSchoolInfoId?: string;
    public userIPAddr?: string;
    public paidAmount?: number;
    public payStatus?: CLASSBILL_PAY_STATUS;
    public orderId?: string;
    public orderNo?: string;
    public createdOn?: string;
    public paidOn?: string;
    public refundOn?: string;
    public lastModifyOn?: string;

    public constructor(init?: Partial<ClassBillLogDTO>) { (Object as any).assign(this, init); }
}

export class StudentInfoDTO
{
    public id?: string;
    public schoolId?: string;
    public parentKidId?: string;
    public createOn?: string;
    public lastModifyOn?: string;

    public constructor(init?: Partial<StudentInfoDTO>) { (Object as any).assign(this, init); }
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

export class ParentRelationSchoolInfoDTO
{
    public id?: string;
    public kidEntityUserAuthMapId?: string;
    public userId?: number;
    public schoolId?: string;
    public userProfileId?: string;
    public createOn?: string;
    public createIPAddr?: string;
    public kidId?: string;
    public lastModifyOn?: string;
    public isDelete?: boolean;
    public parentRole?: string;

    public constructor(init?: Partial<ParentRelationSchoolInfoDTO>) { (Object as any).assign(this, init); }
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

export class RoleItemDTO
{
    public id?: string;
    public roleCode?: string;
    public name?: string;
    public isDefault?: boolean;
    public memo?: string;
    public permissionIds?: string[];
    public usageArea?: string;
    public schoolId?: string;

    public constructor(init?: Partial<RoleItemDTO>) { (Object as any).assign(this, init); }
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

export class LiveVideoVisitSummaryDTO
{
    public schoolId?: string;
    public kidId?: string;
    public parentRelationSchoolInfoId?: string;
    public timeSeconds?: number;
    public timeTitle?: string;

    public constructor(init?: Partial<LiveVideoVisitSummaryDTO>) { (Object as any).assign(this, init); }
}

export class LiveVideoVisitHistoryDTO
{
    public id?: string;
    public classId?: string;
    public kidId?: string;
    public kidName?: string;
    public visitorParentRole?: string;
    public createOn?: string;

    public constructor(init?: Partial<LiveVideoVisitHistoryDTO>) { (Object as any).assign(this, init); }
}

export class DartStringList extends Array<Object>
{

    public constructor(init?: Partial<DartStringList>) { super(); (Object as any).assign(this, init); }
}

export class TopicTestInterceptGroupByKeyWordItem
{
    public keyWordType?: TOPIC_TEST_KEYWORD_TYPE;
    public allCount?: number;
    public count?: number;

    public constructor(init?: Partial<TopicTestInterceptGroupByKeyWordItem>) { (Object as any).assign(this, init); }
}

export class TopicTestInterceptGroupByKeyWordTypeDTO
{
    public keyWordType?: TOPIC_TEST_KEYWORD_TYPE;
    public allCount?: number;
    public count?: number;

    public constructor(init?: Partial<TopicTestInterceptGroupByKeyWordTypeDTO>) { (Object as any).assign(this, init); }
}

export class TopicTestResultItem
{
    public start?: number;
    public end?: number;
    public keyWordType?: TOPIC_TEST_KEYWORD_TYPE;
    public keyWord?: string;

    public constructor(init?: Partial<TopicTestResultItem>) { (Object as any).assign(this, init); }
}

export class TopicTestResult
{
    public content?: string;
    public result?: TopicTestResultItem[];

    public constructor(init?: Partial<TopicTestResult>) { (Object as any).assign(this, init); }
}

export class TopicTestInterceptLogDTO
{
    public id?: string;
    public schoolId?: string;
    public source?: TOPIC_TEST_SOURCE_TYPE;
    public createByUId?: number;
    public createByName?: string;
    public isCreateByTeacher?: boolean;
    public createByTeacherId?: string;
    public createByParentId?: string;
    public createByKidId?: string;
    public keyWordType?: TOPIC_TEST_KEYWORD_TYPE;
    public keyWords?: TopicTestResult[];
    public createOn?: string;
    public auditState?: EVENTAUDITSTATE;
    public publishState?: EVENTPUBLISHSTATE;
    public auditByTeacherId?: string;
    public auditOn?: string;
    public eventId?: string;
    public eventType?: string;
    public eventIds?: string[];
    public liveClassRoomId?: string;
    public eventCommentId?: string;
    public taskItemId?: string;
    public clockInGroupId?: string;
    public clockInItemId?: string;

    public constructor(init?: Partial<TopicTestInterceptLogDTO>) { (Object as any).assign(this, init); }
}

export class TeacherInSchoolRoleType
{
    public schoolId?: string;
    public schoolName?: string;
    public schoolEName?: string;
    public teacherUserInfoId?: string;
    public roleCodes?: string[];
    public permissionCodes?: string[];
    public schoolTeacherFullName?: string;
    public schoolTeacherRemark?: string;
    public rongCloudToken?: string;
    public rongCloudUserId?: string;
    public easeMobUserId?: string;
    public easeMobToken?: string;
    public branchRole?: { [index: string]: string; };
    public systemLicenseType?: SYSTEM_LICENSE_TYPE;

    public constructor(init?: Partial<TeacherInSchoolRoleType>) { (Object as any).assign(this, init); }
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

export class ClassEventTrendParent
{
    public parentId?: string;
    public roleName?: string;
    public isDefault?: boolean;
    public createOn?: string;

    public constructor(init?: Partial<ClassEventTrendParent>) { (Object as any).assign(this, init); }
}

export class ClassEventTrendItemView
{
    public kidId?: string;
    public kidName?: string;
    public kidLogoUrl?: string;
    public parents?: ClassEventTrendParent[];
    public firstCreateOn?: string;

    public constructor(init?: Partial<ClassEventTrendItemView>) { (Object as any).assign(this, init); }
}

export class ClassEventTrendInfo
{
    public trendView?: ClassEventTrendItemView[];
    public trendBook?: ClassEventTrendItemView[];
    public trendTask?: ClassEventTrendItemView[];
    public trendNotifyAck?: ClassEventTrendItemView[];
    public trendShareVisit?: ClassEventTrendItemView[];
    public trendVoteAck?: ClassEventTrendItemView[];

    public constructor(init?: Partial<ClassEventTrendInfo>) { (Object as any).assign(this, init); }
}

export class ClassEventItemForTeacher extends ClassEventItem
{
    public publishState?: EVENTPUBLISHSTATE;
    public isCanPublish?: boolean;
    public isCanUpdate?: boolean;
    public trendData?: ClassEventTrendInfo;

    public constructor(init?: Partial<ClassEventItemForTeacher>) { super(init); (Object as any).assign(this, init); }
}

export class ClassEventTrendItemViewV2
{
    public studentId?: string;
    public firstCreateOn?: string;

    public constructor(init?: Partial<ClassEventTrendItemViewV2>) { (Object as any).assign(this, init); }
}

export class ClassEventTrendInfoV2
{
    public trendView?: ClassEventTrendItemViewV2[];
    public trendBook?: ClassEventTrendItemViewV2[];
    public trendTask?: ClassEventTrendItemViewV2[];
    public trendNotifyAck?: ClassEventTrendItemViewV2[];
    public trendShareVisit?: ClassEventTrendItemViewV2[];
    public trendVoteAck?: ClassEventTrendItemViewV2[];

    public constructor(init?: Partial<ClassEventTrendInfoV2>) { (Object as any).assign(this, init); }
}

export class GrowBookSummaryItem
{
    public kidId?: string;
    public kidName?: string;
    public isOk?: boolean;
    public totalAmount?: number;
    public teacherAmount?: number;
    public parentAmount?: number;
    public bookQueryString?: string;

    public constructor(init?: Partial<GrowBookSummaryItem>) { (Object as any).assign(this, init); }
}

export class GrowBookSummaryDTO
{
    public classId?: string;
    public className?: string;
    public originalClassName?: string;
    public schoolId?: string;
    public schoolName?: string;
    public frontPageUrl?: string;
    public semesterType?: SEMESTERTYPE;
    public termId?: number;
    public items?: GrowBookSummaryItem[];

    public constructor(init?: Partial<GrowBookSummaryDTO>) { (Object as any).assign(this, init); }
}

export enum KidDailyHealthState
{
    NOT_CHECK_IN = 'NOT_CHECK_IN',
    CHECK_IN = 'CHECK_IN',
    CHECK_HEALTHY = 'CHECK_HEALTHY',
    LEAVE = 'LEAVE',
}

export class TeacherAppMenuDTO
{
    public id?: string;
    public permissionCode?: string;
    public name?: string;
    public eName?: string;
    public moduleName?: string;
    public moduleCode?: string;
    public appH5Url?: string;
    public appH5FullScreen?: boolean;
    public appRoute?: string;
    public appMinVersion?: string;
    public appIconUrl?: string;
    public showInAppArea?: string[];
    public appMPEnabled?: boolean;
    public appMPAppId?: string;
    public appMPPath?: string;
    public appMPVersionCode?: string;
    public appMPDownloadUrl?: string;

    public constructor(init?: Partial<TeacherAppMenuDTO>) { (Object as any).assign(this, init); }
}

export class AttendanceHeartbeatDataDTO
{
    public appVersion?: string;
    public teacherDataCount?: number;
    public parentDataCount?: number;
    public studentDataCount?: number;
    public offlineDataCount?: number;
    public aiFaceCount?: number;
    public lastTeacherDataSyncOn?: string;
    public lastParentDataSyncOn?: string;
    public lastStudentDataSyncOn?: string;
    public lastOfflineDataSyncOn?: string;
    public lastHeartbeatOn?: string;
    public ftInitState?: number;
    public ftLastErr?: string;
    public timeDiff?: number;

    public constructor(init?: Partial<AttendanceHeartbeatDataDTO>) { (Object as any).assign(this, init); }
}

export class AttendanceDeviceDTO
{
    public id?: string;
    public branchId?: string;
    public serialNo?: string;
    public deviceType?: AttendanceDevice_Type;
    public attendanceDoorId?: string;
    public direction?: AttendanceDoor_Direction;
    public macAddr?: string;
    public registOn?: string;
    public lastHeartbeatOn?: string;
    public lastModifyOn?: string;
    public schoolId?: string;
    public images?: string[];
    public notices?: string[];
    public remark?: string;
    public arcfaceLicense?: string;
    public audioTemplates?: { [index: string]: string; };
    public healthyTimeout?: number;
    public healthyTimeoutSubmit?: boolean;
    public lastHeartbeatData?: AttendanceHeartbeatDataDTO;
    public isSendDailyHealthy?: boolean;
    public isSendDailyHealthyNoonCheck?: boolean;
    public noonCheckBeginMinute?: number;
    public noonCheckEndMinute?: number;
    public isSendDailyHealthyNightCheck?: boolean;
    public isSyncTeacherFace?: boolean;
    public isSyncStudentFace?: boolean;
    public isSyncParentFace?: boolean;
    public isParentAsKidAttendance?: boolean;
    public totalSyncCount?: number;
    public totalUserCount?: number;
    public totalFinishSyncCount?: number;
    public totalWaitSyncCount?: number;
    public uniqueUserCount?: number;
    public disableAttendance?: boolean;
    public cloudUrl?: string;
    public cloudToken?: string;
    public registPassword?: string;
    public salt?: string;
    public deviceSeconds?: number;
    public deviceTime?: string;
    public reBootOn?: number[];

    public constructor(init?: Partial<AttendanceDeviceDTO>) { (Object as any).assign(this, init); }
}

export class LiveChannelDTO
{
    public id?: string;
    public schoolId?: string;
    public branchId?: string;
    public name?: string;
    public sourceMediaAddr?: string;
    public targetMediaAddr?: string;
    public pullMediaAddr?: string;
    public pullHDMediaAddr?: string;
    public pullHLSMediaAddr?: string;
    public pullHLSHDMediaAddr?: string;
    public liveNodeId?: string;
    public createOn?: string;
    public lastModifyOn?: string;
    public isRunning?: boolean;
    public isStreaming?: boolean;
    public lastStartOn?: string;
    public lastStopOn?: string;
    public lastStreamingStart?: string;
    public lastStreamingStop?: string;
    public isDelete?: boolean;
    public deleteOn?: string;
    public dvrType?: DVR_DEVICE_TYPE;
    public channelNumber?: number;
    public vCodec?: string;
    public dvrIPAddress?: string;
    public dvrManagePort?: number;
    public dvrUserName?: string;
    public dvrPassword?: string;
    public remark?: string;
    public gbChannelId?: string;
    public gbStreamName?: string;
    public cloudId?: string;
    public ysCloud_IpcSerial?: string;
    public ysCloud_DeviceSerial?: string;
    public ysCloud_DevType?: string;
    public ysCloud_DeviceName?: string;
    public ysCloud_LocalName?: string;
    public ysCloud_VerifyCode?: string;
    public ysCloud_AccessToken?: string;
    public ysCloud_NormalUrl?: string;
    public ysCloud_NormalHLSUrl?: string;
    public ysCloud_HDHLSUrl?: string;
    public ysCloud_NormalFlvUrl?: string;
    public ysCloud_HDFlvUrl?: string;
    public ysCloud_HDUrl?: string;
    public snapshotUrl?: string;

    public constructor(init?: Partial<LiveChannelDTO>) { (Object as any).assign(this, init); }
}

export class AppToDoItemDTO
{
    public type?: string;
    public title?: string;
    public module?: string;
    public appRoute?: string;
    public mpRoute?: string;
    public webRoute?: string;
    public description?: string;
    public tmpl?: string;
    public helpUrl?: string;
    public extra?: { [index: string]: string; };
    public isEnabled?: boolean;

    public constructor(init?: Partial<AppToDoItemDTO>) { (Object as any).assign(this, init); }
}

export class AliyunOssSignItem
{
    public originalKey?: string;
    public key?: string;
    public policy?: string;
    public signature?: string;

    public constructor(init?: Partial<AliyunOssSignItem>) { (Object as any).assign(this, init); }
}

export class SchoolOrgInfoItemDTO
{
    public id?: string;
    public name?: string;
    public deptType?: SCHOOL_DEPT_TYPE;

    public constructor(init?: Partial<SchoolOrgInfoItemDTO>) { (Object as any).assign(this, init); }
}

export class CommonReturn
{
    public ret?: boolean;
    public responseStatus?: ResponseStatus;
    public message?: string;
    public classId?: string;
    public kidId?: string;

    public constructor(init?: Partial<CommonReturn>) { (Object as any).assign(this, init); }
}

export class BaseResponse
{
    public code?: number;
    public message?: string;

    public constructor(init?: Partial<BaseResponse>) { (Object as any).assign(this, init); }
}

export class GetAliyunStsTokenV2Res
{
    public statusCode?: number;
    public accessKeyId?: string;
    public bucketName?: string;
    public uploadHost?: string;
    public expires?: string;
    public dir?: string;
    public callback?: string;
    public signItems?: AliyunOssSignItem[];

    public constructor(init?: Partial<GetAliyunStsTokenV2Res>) { (Object as any).assign(this, init); }
}

// @Route("/system/ststoken", "POST, OPTIONS")
export class GetAliyunStsTokenV2Req extends CommonRequest implements IReturn<GetAliyunStsTokenV2Res>
{
    public schoolId?: string;
    /** @description Keys */
    // @ApiMember(DataType="array", Description="Keys", IsRequired=true, Name="Keys", ParameterType="query")
    public keys?: string[];

    public constructor(init?: Partial<GetAliyunStsTokenV2Req>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetAliyunStsTokenV2Req'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetAliyunStsTokenV2Res(); }
}

