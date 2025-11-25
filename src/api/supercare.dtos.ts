/* Options:
Date: 2025-10-28 14:35:36
Version: 8.0
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://apigwtest.yban.co/api/educrm

//GlobalNamespace:
MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion:
//AddDescriptionAsComments: True
IncludeTypes: {babycare},IngredientItemDTO,IngredientType,GetClassDailyMenuReq,SetKidsDailyCareBasesReq,SetKidsDailyCareBaseReq,GetKidsSummaryDailyCareBasesReq,SYSTEM_LICENSE_TYPE,SCHOOL_STATE,SetKidDailyCareBasesReq,GetKidSummaryDailyCareBasesReq,GetBabyCareClassInfosReq,SetKidDailyHealthyReq,GetSchoolSettingReq,AttachTingItem,SCHOOL_LICENSE_TYPE,AttachLinkItem,AttachFileItem,AttachVoiceItem,AttachVideoItem,AttachImageItem,CLASS_STATUS,SchoolInfoDTO,GetBabyWeekReportClassRes,GetIotDevicesReq,GetIotDevicesRes,IotDeviceAllocateByTeacherReq,IotDeviceAllocateByTeacherRes,USERROLE,IotDeviceAllowcateDTO,IotDeviceDTO,GENDERTYPE,ParentInfoDTO,PARENT_ROLE_TYPE,GeoCoordinates,DAILYCARE_DEVICE_TYPE,OSTYPE,MyDayOfWeek,GetTeacherClassesV2Req,GetTeacherClassesV2Res,ClassInfoDTO,TeacherInfoDTO,CLASSGRADETYPE,SEMESTERTYPE,TeacherClassInfoDTO,STUDENT_MEMBER_BUY_TYPE,GetVersionCodeReq,GetVersionCodeRes,GetVersionCodeData,SCHOOL_TYPE,DAILYCARE_DVR_STATUS,MedicCareLogDTO,MEDICSTAT,FILETYPE
ExcludeTypes: GetBabyDailyReportReq,GetBabyDailyReportRes,GetBabyWeekReportClassReq,BaseResponse,TeacherBaseInfoDTO,SchoolSettingDTO
//DefaultImports:
*/


export interface IReturn<T>
{
    createResponse(): T;
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

export enum DAILYCARE_DEVICE_TYPE
{
    MODEL_ONE = 'MODEL_ONE',
    CLASS_BOARD = 'CLASS_BOARD',
}

export class DailyCareDeviceSleepConfig
{
    public beginMinute?: number;
    public endMinute?: number;
    public screenSecond?: number;

    public constructor(init?: Partial<DailyCareDeviceSleepConfig>) { (Object as any).assign(this, init); }
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

export class CurriculumWeeklyDTO
{
    public id?: string;
    public schoolPartnerInfoId?: string;
    public schoolId?: string;
    public dateOn?: string;
    public weekCatalogId?: string;
    public curriculumId?: string;
    public startMinute?: number;
    public endMinute?: number;
    public createOn?: string;
    public lastModifyOn?: string;
    public isDelete?: boolean;
    public deleteOn?: string;
    public deleteBy?: string;
    public deleteIPAddress?: string;

    public constructor(init?: Partial<CurriculumWeeklyDTO>) { (Object as any).assign(this, init); }
}

export class SchoolPartnerOpenEndDTO
{
    public schoolId?: string;
    public openOn?: string;
    public closeOn?: string;

    public constructor(init?: Partial<SchoolPartnerOpenEndDTO>) { (Object as any).assign(this, init); }
}

export class CurriculumCatalogDTO
{
    public id?: string;
    public schoolPartnerInfoId?: string;
    public openEnds?: SchoolPartnerOpenEndDTO[];
    public schoolId?: string;
    public name?: string;
    public orderIndex?: number;
    public createOn?: string;
    public lastModifyOn?: string;
    public isDelete?: boolean;
    public deleteOn?: string;
    public deleteBy?: string;
    public deleteIPAddress?: string;

    public constructor(init?: Partial<CurriculumCatalogDTO>) { (Object as any).assign(this, init); }
}

export class CurriculumWeekCatalogDTO
{
    public id?: string;
    public schoolPartnerInfoId?: string;
    public openEnds?: SchoolPartnerOpenEndDTO[];
    public schoolId?: string;
    public name?: string;
    public allocatedClassIds?: string[];
    public orderIndex?: number;
    public createOn?: string;
    public lastModifyOn?: string;
    public isDelete?: boolean;
    public deleteOn?: string;
    public deleteBy?: string;
    public deleteIPAddress?: string;

    public constructor(init?: Partial<CurriculumWeekCatalogDTO>) { (Object as any).assign(this, init); }
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

export enum DAILYCARE_WORK_STATUS
{
    INCOMPLETE = 'INCOMPLETE',
    COMPLETED = 'COMPLETED',
    WAIT_INSPECT = 'WAIT_INSPECT',
    INSPECTED = 'INSPECTED',
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

export class BabyCareTaskFlowDTO
{
    public id?: string;
    public schoolId?: string;
    public babyCareTaskId?: string;
    public timeBegin?: string;
    public timeEnd?: string;
    public weekDayOn?: MyDayOfWeek[];
    public flowName?: string;
    public teacherRoles?: string[];
    public needVideoRecord?: boolean;
    public isEnabled?: boolean;
    public createOn?: string;
    public lastModifyOn?: string;
    public studyId?: string;
    public coverUrl?: string;
    public coverRotateY?: boolean;

    public constructor(init?: Partial<BabyCareTaskFlowDTO>) { (Object as any).assign(this, init); }
}

export enum STUDENT_STATUS
{
    NORMAL = 'NORMAL',
    TRANSFEROUT = 'TRANSFEROUT',
    WAIT = 'WAIT',
    GRADUATION = 'GRADUATION',
    FREEZE = 'FREEZE',
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

export enum CLASS_STATUS
{
    NORMAL = 'NORMAL',
    GRADUATION = 'GRADUATION',
    TRANSFEROUT = 'TRANSFEROUT',
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

export enum DishType
{
    OTHER = 'OTHER',
    STAPLE = 'STAPLE',
    CANDY = 'CANDY',
    NOODLE = 'NOODLE',
    GRUEL = 'GRUEL',
    COLD_DISH = 'COLD_DISH',
    VEGETABLE = 'VEGETABLE',
    MEAT = 'MEAT',
    SOUP = 'SOUP',
    DRINK = 'DRINK',
    FRUIT = 'FRUIT',
    STAPLE_BABY = 'STAPLE_BABY',
    CANDY_BABY = 'CANDY_BABY',
    NOODLE_BABY = 'NOODLE_BABY',
    COLD_DISH_BABY = 'COLD_DISH_BABY',
    GRUEL_BABY = 'GRUEL_BABY',
    VEGETABLE_BABY = 'VEGETABLE_BABY',
    MEAT_BABY = 'MEAT_BABY',
    SOUP_BABY = 'SOUP_BABY',
    DRINK_BABY = 'DRINK_BABY',
    FRUIT_BABY = 'FRUIT_BABY',
    WESTERN_FOOD = 'WESTERN_FOOD',
    QINGZHEN = 'QINGZHEN',
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

export class DishItemDTO
{
    public id?: string;
    public dishName?: string;
    public nutritions?: Nutrition;
    public dishType?: DishType;
    public ingredientAmount?: { [index: string]: number; };
    public isDelete?: boolean;
    public schoolId?: string;
    public createByTeacherId?: string;
    public createOn?: string;

    public constructor(init?: Partial<DishItemDTO>) { (Object as any).assign(this, init); }
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

export class AttachTingItem
{
    public albumId?: string;
    public trackId?: string;
    public albumTitle?: string;
    public albumDesc?: string;
    public albumImageUrl?: string;

    public constructor(init?: Partial<AttachTingItem>) { (Object as any).assign(this, init); }
}

export enum MEDICSTAT
{
    WAIT = 'WAIT',
    FINISH = 'FINISH',
    CANCEL = 'CANCEL',
}

export class MedicCareLogDTO
{
    public id?: string;
    public createOn?: string;
    public logContent?: string;

    public constructor(init?: Partial<MedicCareLogDTO>) { (Object as any).assign(this, init); }
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

export class DailyCareSchoolConfigDTO
{
    public id?: string;
    public schoolId?: string;
    public sleepOn?: string;
    public wakeupOn?: string;
    public disableDailyCareDrinkWater?: boolean;
    public disableDailyCareBreakfast?: boolean;
    public disableDailyCareLunch?: boolean;
    public disableDailyCareSnack?: boolean;
    public disableDailyCareToilet?: boolean;
    public disableDailyCareDiaper?: boolean;
    public disableDailyCareSleep?: boolean;
    public disableDailyCareMilk?: boolean;
    public disableDailyCareTemperature?: boolean;
    public disableDailyCareNote?: boolean;
    public remindDrinkWater?: boolean;
    public remindDrinkWaterPeriod?: number;
    public remindDiaper?: boolean;
    public remindDiaperPeriod?: number;
    public remindToilet?: boolean;
    public remindToiletPeriod?: number;
    public createOn?: string;
    public lastModifyOn?: string;

    public constructor(init?: Partial<DailyCareSchoolConfigDTO>) { (Object as any).assign(this, init); }
}

export class DailyCareBatchLogDTO
{
    public id?: string;
    public schoolId?: string;
    public classId?: string;
    public kidIds?: string[];
    public dailyCareIds?: string[];
    public type?: string;
    public subType?: string;
    public teacherUserInfoId?: string;
    public recordDateOn?: string;
    public createOn?: string;
    public isDelete?: boolean;
    public deleteOn?: string;

    public constructor(init?: Partial<DailyCareBatchLogDTO>) { (Object as any).assign(this, init); }
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

export class DailayCareNoticeItem
{
    public kidId?: string;
    public careType?: string;
    public noticeMsg?: string;
    public showOnTimestamp?: number;

    public constructor(init?: Partial<DailayCareNoticeItem>) { (Object as any).assign(this, init); }
}

export class ClassInfoWithTeacherRoleDTO
{
    public classId?: string;
    public className?: string;
    public myTeacherRole?: string;

    public constructor(init?: Partial<ClassInfoWithTeacherRoleDTO>) { (Object as any).assign(this, init); }
}

export class DailyCareDeviceDTO
{
    public id?: string;
    public schoolId?: string;
    public classId?: string;
    public serialNo?: string;
    public deviceType?: DAILYCARE_DEVICE_TYPE;
    public macAddr?: string;
    public registOn?: string;
    public lastHeartbeatOn?: string;
    public lastIPAddr?: string;
    public remark?: string;
    public lastModifyOn?: string;
    public liveChannelIds?: string[];
    public dailyCareDeviceSleepConfigs?: DailyCareDeviceSleepConfig[];
    public isBYOD?: boolean;
    public expireOn?: string;
    public osType?: OSTYPE;

    public constructor(init?: Partial<DailyCareDeviceDTO>) { (Object as any).assign(this, init); }
}

export class BabyCareBYODDeviceLicenseItem
{
    public id?: string;
    public schoolId?: string;
    public dailyCareDeviceId?: string;
    public createOn?: string;
    public dayCount?: number;
    public activeOn?: string;
    public expiredOn?: string;
    public lastModifyOn?: string;

    public constructor(init?: Partial<BabyCareBYODDeviceLicenseItem>) { (Object as any).assign(this, init); }
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

export class BabyCareTaskDTO
{
    public id?: string;
    public schoolId?: string;
    public allocatedClassIds?: string[];
    public taskName?: string;
    public timeBegin?: string;
    public timeEnd?: string;
    public isEnabled?: boolean;
    public createOn?: string;
    public lastModifyOn?: string;
    public studyId?: string;
    public flows?: BabyCareTaskFlowDTO[];
    public coverUrl?: string;
    public orderIndex?: number;
    public isDelete?: boolean;
    public deleteOn?: string;
    public deleteBy?: string;

    public constructor(init?: Partial<BabyCareTaskDTO>) { (Object as any).assign(this, init); }
}

export enum DAILYCARE_DVR_STATUS
{
    NONE = 'NONE',
    INIT = 'INIT',
    PROCESSING = 'PROCESSING',
    FINISH = 'FINISH',
    FAILED = 'FAILED',
    RETRYING = 'RETRYING',
}

export class BabyCareTaskWorkDTO
{
    public id?: string;
    public schoolId?: string;
    public classId?: string;
    public dailyCareDeviceId?: string;
    public babyCareTaskId?: string;
    public babyCareTaskFlowId?: string;
    public teacherUserInfoId?: string;
    public dateOn?: string;
    public createOn?: string;
    public isInspected?: boolean;
    public status?: DAILYCARE_WORK_STATUS;
    public inspectedOn?: string;
    public videoOssId?: string;
    public videoUrl?: string;
    public videoDuration?: number;
    public dvrStatus?: DAILYCARE_DVR_STATUS;

    public constructor(init?: Partial<BabyCareTaskWorkDTO>) { (Object as any).assign(this, init); }
}

export class BabyReportItem
{
    public recordDateOn?: string;
    public title?: string;
    public url?: string;

    public constructor(init?: Partial<BabyReportItem>) { (Object as any).assign(this, init); }
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

export class DailyMenuDTO
{
    public id?: string;
    public schoolId?: string;
    public dateOn?: string;
    public title?: string;
    public content1?: string;
    public attachment1?: EventAttachDTO;
    public attachs1?: EventAttachItem;
    public content2?: string;
    public attachment2?: EventAttachDTO;
    public attachs2?: EventAttachItem;
    public content3?: string;
    public attachment3?: EventAttachDTO;
    public attachs3?: EventAttachItem;
    public isPublished?: boolean;
    public createOn?: string;
    public lastModifyOn?: string;
    public publishedEventIds?: string[];
    public contents?: DishMenuContentDTO[];
    public nutritions?: Nutrition;
    public createByTeacherId?: string;

    public constructor(init?: Partial<DailyMenuDTO>) { (Object as any).assign(this, init); }
}

export class BabyDailySummaryItem
{
    public icon?: string;
    public name?: string;
    public maxValue?: number;
    public avgValue?: number;
    public value?: number;

    public constructor(init?: Partial<BabyDailySummaryItem>) { (Object as any).assign(this, init); }
}

export class DailyCareDailySummaryDTO
{
    public recordDateOn?: string;
    public dailyCareBreakfast?: number;
    public dailyCareBrunch?: number;
    public dailyCareLunch?: number;
    public dailyCareSnack?: number;
    public dailyCareDinner?: number;
    public dailyCareDrinkWater?: number;
    public dailyCareMilk?: number;
    public dailyCareSleep?: number;
    public pee?: number;
    public poo?: number;
    public morningCheck?: string;
    public mindset?: string;
    public mouth?: string;
    public noonCheck?: string;
    public nightCheck?: string;
    public jingShen?: string;
    public qingXu?: string;
    public dailyCareClean?: number;

    public constructor(init?: Partial<DailyCareDailySummaryDTO>) { (Object as any).assign(this, init); }
}

export class DailyCareSchoolDailySummaryDTO
{
    public reportDate?: string;
    public schoolId?: string;
    public classId?: string;
    public classCount?: number;
    public kidCount?: number;
    public count?: number;

    public constructor(init?: Partial<DailyCareSchoolDailySummaryDTO>) { (Object as any).assign(this, init); }
}

export class BabyCareTaskWorkSchoolDailySummaryDTO
{
    public reportDate?: string;
    public schoolId?: string;
    public classId?: string;
    public classCount?: number;
    public onTimeCount?: number;
    public workCount?: number;
    public flowCount?: number;

    public constructor(init?: Partial<BabyCareTaskWorkSchoolDailySummaryDTO>) { (Object as any).assign(this, init); }
}

export class ChildcareInstitutionDTO
{
    public id?: string;
    public zoning_name?: string;
    public zoning_code?: string;
    public address?: string;
    public institution_type?: string;
    public credit_code?: string;
    public institution_other_name?: string;
    public institution_name?: string;
    public finished_time?: string;
    public lastModifyOn?: string;

    public constructor(init?: Partial<ChildcareInstitutionDTO>) { (Object as any).assign(this, init); }
}

export class IotDeviceAllowcateDTO
{
    public schoolId?: string;
    public userRole?: USERROLE;
    public entityId?: string;
    public userId?: number;
    public fullName?: string;

    public constructor(init?: Partial<IotDeviceAllowcateDTO>) { (Object as any).assign(this, init); }
}

export class IotDeviceDTO
{
    public id?: string;
    public schoolId?: string;
    public catalogId?: string;
    public catalogName?: string;
    public catalogCode?: string;
    public serialNo?: string;
    public deviceId?: string;
    public deviceConfig?: string;
    public createOn?: string;
    public updateOn?: string;
    public lastModifyOn?: string;
    public allocates?: IotDeviceAllowcateDTO[];

    public constructor(init?: Partial<IotDeviceDTO>) { (Object as any).assign(this, init); }
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

export class AliyunOssSignItem
{
    public originalKey?: string;
    public key?: string;
    public policy?: string;
    public signature?: string;

    public constructor(init?: Partial<AliyunOssSignItem>) { (Object as any).assign(this, init); }
}

export class GetVersionCodeData
{
    public os?: OSTYPE;
    public versionName?: string;
    public versionCode?: string;
    public releaseNote?: string;
    public isDefault?: boolean;
    public isApk?: boolean;
    public downloadUrl?: string;
    public packageSize?: string;
    public releaseOn?: string;

    public constructor(init?: Partial<GetVersionCodeData>) { (Object as any).assign(this, init); }
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

export class BabyDailyReportItem
{
    public icon?: string;
    public name?: string;
    public value?: string;
    public color?: number;
    public contents?: BabyDailyReportItem[];
    public memo?: string;
    public attachments?: { [index: string]: EventAttachDTO; };

    public constructor(init?: Partial<BabyDailyReportItem>) { (Object as any).assign(this, init); }
}

export class SchoolBabyCareConfigRes extends BaseResponse
{
    public data?: DailyCareSchoolConfigDTO;
    public schoolConfigs?: SchoolSettingDTO;

    public constructor(init?: Partial<SchoolBabyCareConfigRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetDailyCareBatchLogsRes extends BaseResponse
{
    public data?: DailyCareBatchLogDTO[];

    public constructor(init?: Partial<GetDailyCareBatchLogsRes>) { super(init); (Object as any).assign(this, init); }
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

export class GetKidsSummaryDailyCareBasesRes extends BaseResponse
{
    public data?: { [index: string]: DailyCareItem[]; };
    public lasModifyOn?: { [index: string]: number; };
    public kidInfos?: { [index: string]: StudentBaseInfoDTO; };
    public ossInfos?: { [index: string]: OssInfoDTO; };

    public constructor(init?: Partial<GetKidsSummaryDailyCareBasesRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetDailyCareNoticeRes extends BaseResponse
{
    public data?: DailayCareNoticeItem[];

    public constructor(init?: Partial<GetDailyCareNoticeRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetBabyCareDeviceLoginInfoRes extends BaseResponse
{
    public teacherUserInfoId?: string;
    public userName?: string;
    public userId?: number;
    public fullName?: string;
    public avatarUrl?: string;
    public schoolId?: string;
    public schoolLogoUrl?: string;
    public schoolName?: string;
    public classInfos?: ClassInfoWithTeacherRoleDTO[];

    public constructor(init?: Partial<GetBabyCareDeviceLoginInfoRes>) { super(init); (Object as any).assign(this, init); }
}

export class BabyCareDeviceLoginByFaceRes extends BaseResponse
{
    public token?: string;
    public refreshToken?: string;
    public userName?: string;
    public userId?: number;
    public fullName?: string;
    public avatarUrl?: string;
    public schoolId?: string;
    public schoolLogoUrl?: string;
    public schoolName?: string;
    public classInfos?: ClassInfoWithTeacherRoleDTO[];
    public otpKey?: string;

    public constructor(init?: Partial<BabyCareDeviceLoginByFaceRes>) { super(init); (Object as any).assign(this, init); }
}

export class BabyCareDeviceLoginByTeacherRes extends BaseResponse
{

    public constructor(init?: Partial<BabyCareDeviceLoginByTeacherRes>) { super(init); (Object as any).assign(this, init); }
}

export class BabyCareGetLoginCodeRes extends BaseResponse
{
    public qrCode?: string;
    public ticket?: string;

    public constructor(init?: Partial<BabyCareGetLoginCodeRes>) { super(init); (Object as any).assign(this, init); }
}

export class BabyCareCheckLoginTicketRes extends BaseResponse
{
    public status?: number;
    public isConfirm?: boolean;
    public userName?: string;
    public userId?: number;
    public fullName?: string;
    public avatarUrl?: string;
    public token?: string;
    public refreshToken?: string;
    public schoolLogoUrl?: string;
    public schoolId?: string;
    public schoolName?: string;
    public classInfos?: ClassInfoWithTeacherRoleDTO[];
    public otpKey?: string;

    public constructor(init?: Partial<BabyCareCheckLoginTicketRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetBabyCareDeviceInfoRes extends BaseResponse
{
    public isExpired?: boolean;
    public data?: DailyCareDeviceDTO;

    public constructor(init?: Partial<GetBabyCareDeviceInfoRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetBabyCareBYODDeviceLicenseRes extends BaseResponse
{
    public data?: BabyCareBYODDeviceLicenseItem[];
    public deviceImage?: string;
    public totalAmount?: number;
    public avaliableAmount?: number;
    public usedAmount?: number;

    public constructor(init?: Partial<GetBabyCareBYODDeviceLicenseRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetBabyCareDevicesRes extends BaseResponse
{
    public total?: number;
    public data?: DailyCareDeviceDTO[];
    public liveChannel?: { [index: string]: string; };
    public licenses?: BabyCareBYODDeviceLicenseItem[];

    public constructor(init?: Partial<GetBabyCareDevicesRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetBabyCareClassInfosRes extends BaseResponse
{
    public data?: ClassInfoDTO[];

    public constructor(init?: Partial<GetBabyCareClassInfosRes>) { super(init); (Object as any).assign(this, init); }
}

export class AddCurriculumCatalogRes extends BaseResponse
{
    public docId?: string;

    public constructor(init?: Partial<AddCurriculumCatalogRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetCurriculumCatalogsRes extends BaseResponse
{
    public data?: CurriculumCatalogDTO[];

    public constructor(init?: Partial<GetCurriculumCatalogsRes>) { super(init); (Object as any).assign(this, init); }
}

export class AddCurriculumWeekCatalogRes extends BaseResponse
{
    public docId?: string;

    public constructor(init?: Partial<AddCurriculumWeekCatalogRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetCurriculumWeekCatalogsRes extends BaseResponse
{
    public data?: CurriculumWeekCatalogDTO[];

    public constructor(init?: Partial<GetCurriculumWeekCatalogsRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetCurriculumsRes extends BaseResponse
{
    public total?: number;
    public data?: CurriculumDTO[];
    public ossInfos?: { [index: string]: OssInfoDTO; };

    public constructor(init?: Partial<GetCurriculumsRes>) { super(init); (Object as any).assign(this, init); }
}

export class AddBabyCareDailyTaskRes extends BaseResponse
{
    public docId?: string;

    public constructor(init?: Partial<AddBabyCareDailyTaskRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetCurriculumWeekliesRes extends BaseResponse
{
    public total?: number;
    public data?: CurriculumWeeklyDTO[];
    public curriculumData?: { [index: string]: CurriculumDTO; };

    public constructor(init?: Partial<GetCurriculumWeekliesRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetBabyCareDailyTaskRes extends BaseResponse
{
    public data?: BabyCareDailyTaskDTO;
    public curriculumData?: { [index: string]: CurriculumDTO; };
    public ossInfos?: { [index: string]: OssInfoDTO; };

    public constructor(init?: Partial<GetBabyCareDailyTaskRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetBabyCareDailyTasksRes extends BaseResponse
{
    public total?: number;
    public data?: BabyCareDailyTaskDTO[];

    public constructor(init?: Partial<GetBabyCareDailyTasksRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetBabyCareTasksRes extends BaseResponse
{
    public data?: BabyCareTaskDTO[];
    public todayWorkHistory?: { [index: string]: BabyCareTaskWorkDTO; };
    public studyInfos?: { [index: string]: string; };

    public constructor(init?: Partial<GetBabyCareTasksRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetBabyCareTaskWorksRes extends BaseResponse
{
    public total?: number;
    public data?: BabyCareTaskWorkDTO[];
    public teacherInfoData?: { [index: string]: TeacherBaseInfoDTO; };
    public taskData?: { [index: string]: BabyCareTaskDTO; };

    public constructor(init?: Partial<GetBabyCareTaskWorksRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetBabyDailyReportClassRes extends BaseResponse
{
    public schoolName?: string;
    public schoolIcon?: string;
    public className?: string;
    public reportDate?: string;
    public data?: { [index:string]: Object; }[];
    public kidInfos?: { [index: string]: StudentBaseInfoDTO; };
    public logs?: DailyCareItem[];
    public teacherInfo?: { [index: string]: TeacherBaseInfoDTO; };
    public ossInfos?: { [index: string]: OssInfoDTO; };
    public dishs?: { [index: string]: DishItemDTO; };

    public constructor(init?: Partial<GetBabyDailyReportClassRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetBabyReportsForParentRes extends BaseResponse
{
    public dailyReport?: BabyReportItem[];
    public weeklyReport?: BabyReportItem[];

    public constructor(init?: Partial<GetBabyReportsForParentRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetBabyWeekReportClassRes extends BaseResponse
{
    public schoolName?: string;
    public schoolIcon?: string;
    public className?: string;
    public reportDate?: string;
    public data?: { [index:string]: Object; }[];
    public kidInfos?: { [index: string]: StudentBaseInfoDTO; };

    public constructor(init?: Partial<GetBabyWeekReportClassRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetBabyDailyReportV2Res extends BaseResponse
{
    public reportDate?: string;
    public schoolName?: string;
    public schoolIcon?: string;
    public kidName?: string;
    public kidAge?: string;
    public kidLogoUrl?: string;
    public reportItems?: BabyDailyReportItem[];
    public todayNote?: string;
    public todayNoteAttachment?: EventAttachDTO;
    public nutritions?: Nutrition;
    public daliyMenu?: DailyMenuDTO;
    public ossInfos?: { [index: string]: OssInfoDTO; };
    public dishs?: { [index: string]: DishItemDTO; };

    public constructor(init?: Partial<GetBabyDailyReportV2Res>) { super(init); (Object as any).assign(this, init); }
}

export class GetBabyReportWeekRes extends BaseResponse
{
    public schoolName?: string;
    public schoolIcon?: string;
    public reportDate?: string;
    public kidName?: string;
    public kidAge?: string;
    public kidLogoUrl?: string;
    public summaryItems?: BabyDailySummaryItem[];
    public reportItems?: BabyDailyReportItem[];
    public weekLogs?: DailyCareDailySummaryDTO[];
    public weekNote?: string;
    public weekNoteAttachment?: EventAttachDTO;
    public nutritions?: Nutrition;
    public weekNutritions?: Nutrition;
    public ossInfos?: { [index: string]: OssInfoDTO; };

    public constructor(init?: Partial<GetBabyReportWeekRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetDailyCareSchoolDailySummaryRes extends BaseResponse
{
    public data?: DailyCareSchoolDailySummaryDTO[];
    public schoolNames?: { [index: string]: string; };
    public classNames?: { [index: string]: string; };

    public constructor(init?: Partial<GetDailyCareSchoolDailySummaryRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetBabyCareTaskWorkSchoolDailySummaryRes extends BaseResponse
{
    public data?: BabyCareTaskWorkSchoolDailySummaryDTO[];
    public schoolNames?: { [index: string]: string; };
    public classNames?: { [index: string]: string; };

    public constructor(init?: Partial<GetBabyCareTaskWorkSchoolDailySummaryRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetChildcareInstitutionsRes extends BaseResponse
{
    public total?: number;
    public data?: ChildcareInstitutionDTO[];

    public constructor(init?: Partial<GetChildcareInstitutionsRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetIotDevicesRes extends BaseResponse
{
    public data?: IotDeviceDTO[];

    public constructor(init?: Partial<GetIotDevicesRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetLeaveRequestDetailRes extends BaseResponse
{
    public data?: KidMyLeaveRequestItem;
    public parentRoles?: { [index: string]: string; };
    public studentInfos?: { [index: string]: StudentBaseInfoDTO; };
    public teacherInfos?: { [index: string]: TeacherBaseInfoDTO; };
    public ossInfos?: { [index: string]: OssInfoDTO; };

    public constructor(init?: Partial<GetLeaveRequestDetailRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetLeaveRequestByTeacherRes extends BaseResponse
{
    public total?: number;
    public data?: KidMyLeaveRequestItem[];
    public parentRoles?: { [index: string]: string; };
    public studentInfos?: { [index: string]: StudentBaseInfoDTO; };
    public teacherInfos?: { [index: string]: TeacherBaseInfoDTO; };
    public ossInfos?: { [index: string]: OssInfoDTO; };

    public constructor(init?: Partial<GetLeaveRequestByTeacherRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetMediccareDetailRes extends BaseResponse
{
    public data?: MedicCareDTO;
    public ossInfo?: { [index: string]: OssInfoDTO; };
    public kidInfo?: { [index: string]: StudentBaseInfoDTO; };
    public classInfo?: { [index: string]: ClassBaseInfoDTO; };
    public parentRole?: { [index: string]: string; };
    public teacherInfo?: { [index: string]: TeacherBaseInfoDTO; };

    public constructor(init?: Partial<GetMediccareDetailRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchoolMedicCaresRes extends BaseResponse
{
    public data?: MedicCareDTO[];
    public ossInfo?: { [index: string]: OssInfoDTO; };
    public kidInfo?: { [index: string]: StudentBaseInfoDTO; };
    public classInfo?: { [index: string]: ClassBaseInfoDTO; };
    public parentRole?: { [index: string]: string; };
    public teacherInfo?: { [index: string]: TeacherBaseInfoDTO; };

    public constructor(init?: Partial<GetSchoolMedicCaresRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetTeacherClassesV2Res extends BaseResponse
{
    public data?: ClassInfoDTO[];
    public schoolInfos?: { [index: string]: SchoolInfoDTO; };
    public studentData?: { [index: string]: StudentBaseInfoDTO; };
    public teacherData?: { [index: string]: TeacherInfoDTO; };

    public constructor(init?: Partial<GetTeacherClassesV2Res>) { super(init); (Object as any).assign(this, init); }
}

export class SetKidDailyHealthyRes extends BaseResponse
{

    public constructor(init?: Partial<SetKidDailyHealthyRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetDailyMenuRes extends BaseResponse
{
    public data?: DailyMenuDTO;
    public nutritions?: Nutrition;
    public ossInfos?: { [index: string]: OssInfoDTO; };
    public dishs?: { [index: string]: DishItemDTO; };
    public foods?: { [index: string]: IngredientItemDTO; };

    public constructor(init?: Partial<GetDailyMenuRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchoolSettingRes extends BaseResponse
{
    public data?: SchoolSettingDTO;

    public constructor(init?: Partial<GetSchoolSettingRes>) { super(init); (Object as any).assign(this, init); }
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

export class GetVersionCodeRes
{
    public needUpgrade?: boolean;
    public isForce?: boolean;
    public gotoMarket?: boolean;
    public data?: GetVersionCodeData;

    public constructor(init?: Partial<GetVersionCodeRes>) { (Object as any).assign(this, init); }
}

/** @description 添加babycare配置 */
// @Route("/babycare/{SchoolId}/setconfig", "POST, OPTIONS")
// @Api(Description="添加babycare配置")
export class SetBabyCareConfigReq implements IReturn<SchoolBabyCareConfigRes>
{
    public schoolId?: string;
    public configKey?: string;
    public configValue?: string;

    public constructor(init?: Partial<SetBabyCareConfigReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SetBabyCareConfigReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new SchoolBabyCareConfigRes(); }
}

/** @description 获取学校babycare配置 */
// @Route("/babycare/{SchoolId}/config", "GET, OPTIONS")
// @Api(Description="获取学校babycare配置")
export class GetBabyCareConfigReq implements IReturn<SchoolBabyCareConfigRes>
{
    public schoolId?: string;

    public constructor(init?: Partial<GetBabyCareConfigReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetBabyCareConfigReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new SchoolBabyCareConfigRes(); }
}

/** @description 获取批量操作日志 */
// @Route("/babycare/{SchoolId}/batchlogs", "GET, OPTIONS")
// @Api(Description="获取批量操作日志")
export class GetDailyCareBatchLogsReq implements IReturn<GetDailyCareBatchLogsRes>
{
    public schoolId?: string;
    public classId?: string;

    public constructor(init?: Partial<GetDailyCareBatchLogsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetDailyCareBatchLogsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetDailyCareBatchLogsRes(); }
}

/** @description 删除批量操作 */
// @Route("/babycare/{SchoolId}/batchlog/delete", "POST, OPTIONS")
// @Api(Description="删除批量操作")
export class DeleteDailyCareBatchLogReq implements IReturn<BaseResponse>
{
    public batchLogId?: string;
    public schoolId?: string;
    public classId?: string;

    public constructor(init?: Partial<DeleteDailyCareBatchLogReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteDailyCareBatchLogReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 添加babycare喝水 */
// @Route("/babycare/{SchoolId}/watercares", "POST, OPTIONS")
// @Api(Description="添加babycare喝水")
export class AddBabyCareWaterReq implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public classId?: string;
    public kidId?: string;
    public kidIds?: string[];
    public checkTime?: string;
    public volumn?: number;
    public teacherUserInfoId?: string;
    public waterContent?: string;
    public memo?: string;
    public attachment?: EventAttachDTO;
    public extraData?: { [index: string]: DailyCareExtraData; };

    public constructor(init?: Partial<AddBabyCareWaterReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddBabyCareWaterReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 添加babycare厕所 */
// @Route("/babycare/{SchoolId}/toiletcares", "POST, OPTIONS")
// @Api(Description="添加babycare厕所")
export class AddBabyCareToiletReq implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public classId?: string;
    public kidId?: string;
    public kidIds?: string[];
    public checkTime?: string;
    public toiletType?: DAILYCARE_TOILET_TYPE;
    public teacherUserInfoId?: string;
    public memo?: string;
    public attachment?: EventAttachDTO;
    public extraData?: { [index: string]: DailyCareExtraData; };

    public constructor(init?: Partial<AddBabyCareToiletReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddBabyCareToiletReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 添加babycare尿布 */
// @Route("/babycare/{SchoolId}/diapercares", "POST, OPTIONS")
// @Api(Description="添加babycare尿布")
export class AddBabyCareDiaperReq implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public classId?: string;
    public kidId?: string;
    public kidIds?: string[];
    public checkTime?: string;
    public toiletType?: DAILYCARE_TOILET_TYPE;
    public teacherUserInfoId?: string;
    public memo?: string;
    public attachment?: EventAttachDTO;
    public extraData?: { [index: string]: DailyCareExtraData; };

    public constructor(init?: Partial<AddBabyCareDiaperReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddBabyCareDiaperReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 添加babycare喝奶 */
// @Route("/babycare/{SchoolId}/milkcares", "POST, OPTIONS")
// @Api(Description="添加babycare喝奶")
export class AddBabyCareMilkReq implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public classId?: string;
    public kidId?: string;
    public kidIds?: string[];
    public checkTime?: string;
    public milkVol?: number;
    public attachment?: EventAttachDTO;
    public extraData?: { [index: string]: DailyCareExtraData; };
    public teacherUserInfoId?: string;

    public constructor(init?: Partial<AddBabyCareMilkReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddBabyCareMilkReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 添加babycare体温 */
// @Route("/babycare/{SchoolId}/tempcares", "POST, OPTIONS")
// @Api(Description="添加babycare体温")
export class AddBabyCareTempReq implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public classId?: string;
    public kidId?: string;
    public kidIds?: string[];
    public checkTime?: string;
    public temp?: string;
    public memo?: string;
    public attachment?: EventAttachDTO;
    public extraData?: { [index: string]: DailyCareExtraData; };
    public healthyType?: DailyCareHealthyType;
    public teacherUserInfoId?: string;

    public constructor(init?: Partial<AddBabyCareTempReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddBabyCareTempReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 添加babycare早点 */
// @Route("/babycare/{SchoolId}/breakfastcares", "POST, OPTIONS")
// @Api(Description="添加babycare早点")
export class SetBabyCareBreakfast implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public classId?: string;
    public kidId?: string;
    public kidIds?: string[];
    public eatStatus?: DAILYCARE_EAT_STATUS;
    public memo?: string;
    public attachment?: EventAttachDTO;
    public extraData?: { [index: string]: DailyCareExtraData; };
    public teacherUserInfoId?: string;

    public constructor(init?: Partial<SetBabyCareBreakfast>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SetBabyCareBreakfast'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 添加babycare早餐 */
// @Route("/babycare/{SchoolId}/brunch", "POST, OPTIONS")
// @Api(Description="添加babycare早餐")
export class SetBabyCareBrunch implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public classId?: string;
    public kidId?: string;
    public kidIds?: string[];
    public eatStatus?: DAILYCARE_EAT_STATUS;
    public memo?: string;
    public attachment?: EventAttachDTO;
    public extraData?: { [index: string]: DailyCareExtraData; };
    public teacherUserInfoId?: string;

    public constructor(init?: Partial<SetBabyCareBrunch>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SetBabyCareBrunch'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 添加babycare午餐 */
// @Route("/babycare/{SchoolId}/lunchcares", "POST, OPTIONS")
// @Api(Description="添加babycare午餐")
export class SetBabyCareLunch implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public classId?: string;
    public kidId?: string;
    public kidIds?: string[];
    public eatStatus?: DAILYCARE_EAT_STATUS;
    public memo?: string;
    public attachment?: EventAttachDTO;
    public extraData?: { [index: string]: DailyCareExtraData; };
    public teacherUserInfoId?: string;

    public constructor(init?: Partial<SetBabyCareLunch>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SetBabyCareLunch'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 添加babycare晚餐 */
// @Route("/babycare/{SchoolId}/dinnercares", "POST, OPTIONS")
// @Api(Description="添加babycare晚餐")
export class SetBabyCareDinner implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public classId?: string;
    public kidId?: string;
    public kidIds?: string[];
    public eatStatus?: DAILYCARE_EAT_STATUS;
    public memo?: string;
    public attachment?: EventAttachDTO;
    public extraData?: { [index: string]: DailyCareExtraData; };
    public teacherUserInfoId?: string;

    public constructor(init?: Partial<SetBabyCareDinner>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SetBabyCareDinner'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 添加babycare午点 */
// @Route("/babycare/{SchoolId}/snackcares", "POST, OPTIONS")
// @Api(Description="添加babycare午点")
export class SetBabyCareSnack implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public classId?: string;
    public kidId?: string;
    public kidIds?: string[];
    public eatStatus?: DAILYCARE_EAT_STATUS;
    public memo?: string;
    public attachment?: EventAttachDTO;
    public extraData?: { [index: string]: DailyCareExtraData; };
    public teacherUserInfoId?: string;

    public constructor(init?: Partial<SetBabyCareSnack>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SetBabyCareSnack'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 添加babycare午睡 */
// @Route("/babycare/{SchoolId}/sleepcares", "POST, OPTIONS")
// @Api(Description="添加babycare午睡")
export class SetBabyCareSleep implements IReturn<BaseResponse>
{
    public id?: string;
    public schoolId?: string;
    public classId?: string;
    public kidId?: string;
    public sleepOn?: string;
    public wakeupOn?: string;
    public attachment?: EventAttachDTO;
    public extraData?: { [index: string]: DailyCareExtraData; };
    public teacherUserInfoId?: string;

    public constructor(init?: Partial<SetBabyCareSleep>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SetBabyCareSleep'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 添加babycare 日点评 */
// @Route("/babycare/{SchoolId}/notecares", "POST, OPTIONS")
// @Api(Description="添加babycare 日点评")
export class SetBabyCareNote implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public classId?: string;
    public kidId?: string;
    public note?: string;
    public teacherUserInfoId?: string;
    public dateOn?: string;
    public attachment?: EventAttachDTO;
    public extraData?: { [index: string]: DailyCareExtraData; };

    public constructor(init?: Partial<SetBabyCareNote>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SetBabyCareNote'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 添加babycare 周点评 */
// @Route("/babycare/{SchoolId}/weeknotecares", "POST, OPTIONS")
// @Api(Description="添加babycare 周点评")
export class SetBabyCareNoteWeek implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public classId?: string;
    public kidId?: string;
    public note?: string;
    public teacherUserInfoId?: string;
    public dateOn?: string;
    public attachment?: EventAttachDTO;
    public extraData?: { [index: string]: DailyCareExtraData; };

    public constructor(init?: Partial<SetBabyCareNoteWeek>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SetBabyCareNoteWeek'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 设置学校babycare单人合计数据 */
// @Route("/babycare/{SchoolId}/kidcares/batch", "POST")
// @Api(Description="设置学校babycare单人合计数据")
export class SetKidDailyCareBasesReq implements IReturn<BaseResponse>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId 不可为空")
    public schoolId?: string;

    // @Validate(Validator="NotEmpty", Message="ClassId 不可为空")
    public classId?: string;

    // @Validate(Validator="NotEmpty", Message="RecordDateOn 不可为空")
    public recordDateOn?: string;

    // @Validate(Validator="NotEmpty", Message="KidId 不可为空")
    public kidId?: string;

    // @Validate(Validator="NotEmpty", Message="Data 不可为空")
    public data?: DailyCareExtraDTO[];

    public teacherUserInfoId?: string;

    public constructor(init?: Partial<SetKidDailyCareBasesReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SetKidDailyCareBasesReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 设置学校babycare多人合计数据 */
// @Route("/babycare/{SchoolId}/kidscares/batch", "POST")
// @Api(Description="设置学校babycare多人合计数据")
export class SetKidsDailyCareBasesReq implements IReturn<BaseResponse>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId 不可为空")
    public schoolId?: string;

    // @Validate(Validator="NotEmpty", Message="ClassId 不可为空")
    public classId?: string;

    // @Validate(Validator="NotEmpty", Message="RecordDateOn 不可为空")
    public recordDateOn?: string;

    public teacherUserInfoId?: string;
    // @Validate(Validator="NotEmpty", Message="Data 不可为空")
    public data?: { [index: string]: DailyCareExtraDTO[]; };

    public constructor(init?: Partial<SetKidsDailyCareBasesReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SetKidsDailyCareBasesReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 设置学校babycare多人单条数据 */
// @Route("/babycare/{SchoolId}/kidscare/batch", "POST")
// @Api(Description="设置学校babycare多人单条数据")
export class SetKidsDailyCareBaseReq implements IReturn<BaseResponse>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId 不可为空")
    public schoolId?: string;

    // @Validate(Validator="NotEmpty", Message="ClassId 不可为空")
    public classId?: string;

    // @Validate(Validator="NotEmpty", Message="RecordDateOn 不可为空")
    public recordDateOn?: string;

    public teacherUserInfoId?: string;
    // @Validate(Validator="NotEmpty", Message="Data 不可为空")
    public data?: { [index: string]: DailyCareExtraDTO; };

    public constructor(init?: Partial<SetKidsDailyCareBaseReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SetKidsDailyCareBaseReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取学校babycare单人每日合计数据 */
// @Route("/babycare/{SchoolId}/kidcares", "GET, OPTIONS")
// @Api(Description="获取学校babycare单人每日合计数据")
export class GetKidSummaryDailyCareBasesReq implements IReturn<GetDailyCareBasesRes>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId 不可为空")
    public schoolId?: string;

    // @Validate(Validator="NotEmpty", Message="ClassId 不可为空")
    public classId?: string;

    // @Validate(Validator="NotEmpty", Message="KidId 不可为空")
    public kidId?: string;

    public recordDateOn?: string;

    public constructor(init?: Partial<GetKidSummaryDailyCareBasesReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetKidSummaryDailyCareBasesReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetDailyCareBasesRes(); }
}

/** @description 获取学校babycare多人每日合计数据 */
// @Route("/babycare/{SchoolId}/kidcares", "GET, OPTIONS")
// @Api(Description="获取学校babycare多人每日合计数据")
export class GetKidsSummaryDailyCareBasesReq implements IReturn<GetKidsSummaryDailyCareBasesRes>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId 不可为空")
    public schoolId?: string;

    // @Validate(Validator="NotEmpty", Message="ClassId 不可为空")
    public classId?: string;

    public recordDateOn?: string;

    public constructor(init?: Partial<GetKidsSummaryDailyCareBasesReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetKidsSummaryDailyCareBasesReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetKidsSummaryDailyCareBasesRes(); }
}

/** @description 获取学校babycare单人数据 */
// @Route("/babycare/{SchoolId}/kidcares", "GET, OPTIONS")
// @Api(Description="获取学校babycare单人数据")
export class GetKidDailyCareBasesReq implements IReturn<GetDailyCareBasesRes>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId 不可为空")
    public schoolId?: string;

    public classId?: string;
    public recordDateOn?: string;
    // @Validate(Validator="NotEmpty", Message="KidId 不可为空")
    public kidId?: string;

    public constructor(init?: Partial<GetKidDailyCareBasesReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetKidDailyCareBasesReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetDailyCareBasesRes(); }
}

/** @description 设置学校babycare检查状态 */
// @Route("/babycare/{SchoolId}/cares/inspected", "POST, OPTIONS")
// @Api(Description="设置学校babycare检查状态")
export class SetDailyCareInspectedReq implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public classId?: string;
    public ids?: string[];
    public isInspected?: boolean;

    public constructor(init?: Partial<SetDailyCareInspectedReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SetDailyCareInspectedReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 设置学校BabyCareTaskWork检查状态 */
// @Route("/babycare/{SchoolId}/careworks/inspected", "POST, OPTIONS")
// @Api(Description="设置学校BabyCareTaskWork检查状态")
export class SetBabyCareTaskWorksInspectedReq implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public ids?: string[];
    public isInspected?: boolean;

    public constructor(init?: Partial<SetBabyCareTaskWorksInspectedReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SetBabyCareTaskWorksInspectedReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
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

/** @description 获取学校babycare定时提示信息 */
// @Route("/babycare/{SchoolId}/carenotice", "GET, OPTIONS")
// @Api(Description="获取学校babycare定时提示信息")
export class GetDailyCareNoticeReq implements IReturn<GetDailyCareNoticeRes>
{
    public schoolId?: string;
    public classId?: string;

    public constructor(init?: Partial<GetDailyCareNoticeReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetDailyCareNoticeReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetDailyCareNoticeRes(); }
}

/** @description 获取信息 */
// @Route("/babycare/{SchoolId}/logininfo", "POST, OPTIONS")
// @Api(Description="获取信息")
export class GetBabyCareDeviceLoginInfoReq implements IReturn<GetBabyCareDeviceLoginInfoRes>
{
    public serialNo?: string;

    public constructor(init?: Partial<GetBabyCareDeviceLoginInfoReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetBabyCareDeviceLoginInfoReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetBabyCareDeviceLoginInfoRes(); }
}

/** @description 人脸识别登录 */
// @Route("/babycare/{SchoolId}/loginbyface", "POST, OPTIONS")
// @Api(Description="人脸识别登录")
export class BabyCareDeviceLoginByFaceReq implements IReturn<BabyCareDeviceLoginByFaceRes>
{
    public serialNo?: string;
    public featureData?: string;

    public constructor(init?: Partial<BabyCareDeviceLoginByFaceReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'BabyCareDeviceLoginByFaceReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BabyCareDeviceLoginByFaceRes(); }
}

/** @description 教师在移动端授权登录care */
// @Route("/babycare/loginbymanager", "POST, OPTIONS")
// @Api(Description="教师在移动端授权登录care")
export class BabyCareDeviceLoginByTeacherReq implements IReturn<BabyCareDeviceLoginByTeacherRes>
{
    public schoolId?: string;
    public serialNo?: string;
    public ticket?: string;
    public act?: number;

    public constructor(init?: Partial<BabyCareDeviceLoginByTeacherReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'BabyCareDeviceLoginByTeacherReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BabyCareDeviceLoginByTeacherRes(); }
}

/** @description 获取Babycare登录二维码 */
// @Route("/babycare/getloginqrcode", "POST, OPTIONS")
// @Api(Description="获取Babycare登录二维码")
export class BabyCareGetLoginCodeReq implements IReturn<BabyCareGetLoginCodeRes>
{
    public serialNo?: string;

    public constructor(init?: Partial<BabyCareGetLoginCodeReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'BabyCareGetLoginCodeReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BabyCareGetLoginCodeRes(); }
}

/** @description 刷新babycare登录二维码的状态 */
// @Route("/babycare/getloginqrcodestatus", "POST, OPTIONS")
// @Api(Description="刷新babycare登录二维码的状态")
export class BabyCareCheckLoginTicketReq implements IReturn<BabyCareCheckLoginTicketRes>
{
    public serialNo?: string;
    public ticket?: string;

    public constructor(init?: Partial<BabyCareCheckLoginTicketReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'BabyCareCheckLoginTicketReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BabyCareCheckLoginTicketRes(); }
}

/** @description 获取学校babycare设备信息 */
// @Route("/babycare/{SchoolId}/device/{SerialNo}", "GET, OPTIONS")
// @Api(Description="获取学校babycare设备信息")
export class GetBabyCareDeviceInfoReq implements IReturn<GetBabyCareDeviceInfoRes>
{
    public schoolId?: string;
    public serialNo?: string;

    public constructor(init?: Partial<GetBabyCareDeviceInfoReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetBabyCareDeviceInfoReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetBabyCareDeviceInfoRes(); }
}

/** @description 获取学校babycare设备BYOD授权信息 */
// @Route("/babycare/{SchoolId}/byodlicenses", "GET, OPTIONS")
// @Api(Description="获取学校babycare设备BYOD授权信息")
export class GetBabyCareBYODDeviceLicenseReq implements IReturn<GetBabyCareBYODDeviceLicenseRes>
{
    public schoolId?: string;
    public serialNo?: string;

    public constructor(init?: Partial<GetBabyCareBYODDeviceLicenseReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetBabyCareBYODDeviceLicenseReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetBabyCareBYODDeviceLicenseRes(); }
}

/** @description 添加babycare设备BYOD授权 */
// @Route("/babycare/{SchoolId}/byodlicenses", "POST, OPTIONS")
// @Api(Description="添加babycare设备BYOD授权")
export class AddBabyCareBYODDeviceLicenseReq implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public deviceCount?: number;
    public dayCount?: number;

    public constructor(init?: Partial<AddBabyCareBYODDeviceLicenseReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddBabyCareBYODDeviceLicenseReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 绑定babycare设备BYOD授权 */
// @Route("/babycare/{SchoolId}/byoddevices", "POST, OPTIONS")
// @Api(Description="绑定babycare设备BYOD授权")
export class AddBabyCareBYODDeviceReq implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public licenseId?: string;
    public serialNo?: string;
    public macAddr?: string;

    public constructor(init?: Partial<AddBabyCareBYODDeviceReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddBabyCareBYODDeviceReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 添加babycare设备 */
// @Route("/babycare/{SchoolId}/devices", "POST, OPTIONS")
// @Api(Description="添加babycare设备")
export class AddBabyCareDeviceReq implements IReturn<BaseResponse>
{
    public id?: string;
    public schoolId?: string;
    public serialNo?: string;
    public macAddr?: string;
    public remark?: string;
    public liveChannelIds?: string[];
    public deviceType?: DAILYCARE_DEVICE_TYPE;
    public dailyCareDeviceSleepConfigs?: DailyCareDeviceSleepConfig[];
    public isBYOD?: boolean;
    public isDelete?: boolean;

    public constructor(init?: Partial<AddBabyCareDeviceReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddBabyCareDeviceReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取已注册的babycare设备 */
// @Route("/babycare/devices", "GET, OPTIONS")
// @Api(Description="获取已注册的babycare设备")
export class GetBabyCareDevicesReq implements IReturn<GetBabyCareDevicesRes>
{
    public schoolId?: string;
    public serialNo?: string;
    public macAddr?: string;
    public remark?: string;
    public isBYOD?: boolean;
    public osType?: OSTYPE;
    public pageIndex?: number;
    public pageSize?: number;

    public constructor(init?: Partial<GetBabyCareDevicesReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetBabyCareDevicesReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetBabyCareDevicesRes(); }
}

/** @description 导入学校babycare任务列表 */
// @Route("/babycare/{SchoolId}/tasks/import", "POST, OPTIONS")
// @Api(Description="导入学校babycare任务列表")
export class ImportBabyCareTasksReq implements IReturn<BaseResponse>
{
    public schoolId?: string;

    public constructor(init?: Partial<ImportBabyCareTasksReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'ImportBabyCareTasksReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取教师可见的平板班级列表 */
// @Route("/babycare/{SchoolId}/classinfos", "GET, OPTIONS")
// @Api(Description="获取教师可见的平板班级列表")
export class GetBabyCareClassInfosReq implements IReturn<GetBabyCareClassInfosRes>
{
    public schoolId?: string;

    public constructor(init?: Partial<GetBabyCareClassInfosReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetBabyCareClassInfosReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetBabyCareClassInfosRes(); }
}

/** @description 添加学校课程 */
// @Route("/babycare/{SchoolId}/curriculum/add", "POST")
// @Api(Description="添加学校课程")
export class AddCurriculumReq implements IReturn<BaseResponse>
{
    public schoolPartnerInfoId?: string;
    public schoolId?: string;
    public data?: CurriculumDTO;

    public constructor(init?: Partial<AddCurriculumReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddCurriculumReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 添加学校一周课程体系 */
// @Route("/babycare/{SchoolId}/curriculumweekly/add", "POST")
// @Api(Description="添加学校一周课程体系")
export class AddCurriculumWeeklyReq implements IReturn<BaseResponse>
{
    public schoolPartnerInfoId?: string;
    public schoolId?: string;
    public data?: CurriculumWeeklyDTO;

    public constructor(init?: Partial<AddCurriculumWeeklyReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddCurriculumWeeklyReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取学校课程体系 */
// @Route("/babycare/{SchoolId}/curriculum/catalog", "POST")
// @Api(Description="获取学校课程体系")
export class AddCurriculumCatalogReq implements IReturn<AddCurriculumCatalogRes>
{
    public schoolPartnerInfoId?: string;
    public schoolId?: string;
    public data?: CurriculumCatalogDTO;

    public constructor(init?: Partial<AddCurriculumCatalogReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddCurriculumCatalogReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AddCurriculumCatalogRes(); }
}

/** @description 获取学校课程体系列表 */
// @Route("/babycare/{SchoolId}/curriculum/catalogs", "GET")
// @Api(Description="获取学校课程体系列表")
export class GetCurriculumCatalogsReq implements IReturn<GetCurriculumCatalogsRes>
{
    public schoolPartnerInfoId?: string;
    public schoolId?: string;

    public constructor(init?: Partial<GetCurriculumCatalogsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetCurriculumCatalogsReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetCurriculumCatalogsRes(); }
}

/** @description 分配学校课程编排到班级 */
// @Route("/babycare/{SchoolId}/curriculumweek/catalog/allocate", "POST")
// @Api(Description="分配学校课程编排到班级")
export class UpdateCurriculumCatalogAllocatedClassIdsReq implements IReturn<BaseResponse>
{
    public id?: string;
    public schoolId?: string;
    public allocatedClassIds?: string[];

    public constructor(init?: Partial<UpdateCurriculumCatalogAllocatedClassIdsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateCurriculumCatalogAllocatedClassIdsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 添加学校课程编排 */
// @Route("/babycare/{SchoolId}/curriculumweek/catalog", "POST")
// @Api(Description="添加学校课程编排")
export class AddCurriculumWeekCatalogReq implements IReturn<AddCurriculumWeekCatalogRes>
{
    public schoolPartnerInfoId?: string;
    public schoolId?: string;
    public data?: CurriculumWeekCatalogDTO;

    public constructor(init?: Partial<AddCurriculumWeekCatalogReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddCurriculumWeekCatalogReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AddCurriculumWeekCatalogRes(); }
}

/** @description 获取学校课程编排列表 */
// @Route("/babycare/{SchoolId}/curriculumweek/catalogs", "GET")
// @Api(Description="获取学校课程编排列表")
export class GetCurriculumWeekCatalogsReq implements IReturn<GetCurriculumWeekCatalogsRes>
{
    public schoolPartnerInfoId?: string;
    public schoolId?: string;

    public constructor(init?: Partial<GetCurriculumWeekCatalogsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetCurriculumWeekCatalogsReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetCurriculumWeekCatalogsRes(); }
}

/** @description 获取学校课程列表 */
// @Route("/babycare/{SchoolId}/curriculums", "POST")
// @Api(Description="获取学校课程列表")
export class GetCurriculumsReq extends ProTableRequest implements IReturn<GetCurriculumsRes>
{
    public schoolPartnerInfoId?: string;
    public schoolId?: string;
    public catalogId?: string;
    public name?: string;
    public tags?: string[];
    public createOn?: string[];
    public lastModifyOn?: string[];

    public constructor(init?: Partial<GetCurriculumsReq>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetCurriculumsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetCurriculumsRes(); }
}

/** @description 添加学校一日流程 */
// @Route("/babycare/{SchoolId}/dailytask/add", "POST")
// @Api(Description="添加学校一日流程")
export class AddBabyCareDailyTaskReq implements IReturn<AddBabyCareDailyTaskRes>
{
    public schoolPartnerInfoId?: string;
    public schoolId?: string;
    public data?: BabyCareDailyTaskDTO;

    public constructor(init?: Partial<AddBabyCareDailyTaskReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddBabyCareDailyTaskReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AddBabyCareDailyTaskRes(); }
}

/** @description 分配学校一日流程到班级 */
// @Route("/babycare/{SchoolId}/dailytask/allocate", "POST")
// @Api(Description="分配学校一日流程到班级")
export class UpdateBabyCareDailyTaskAllocatedClassIdsReq implements IReturn<BaseResponse>
{
    public id?: string;
    public schoolId?: string;
    public allocatedClassIds?: string[];

    public constructor(init?: Partial<UpdateBabyCareDailyTaskAllocatedClassIdsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateBabyCareDailyTaskAllocatedClassIdsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取学校一周课程体系列表 */
// @Route("/babycare/{SchoolId}/dailytasks", "POST")
// @Api(Description="获取学校一周课程体系列表")
export class GetCurriculumWeekliesReq extends ProTableRequest implements IReturn<GetCurriculumWeekliesRes>
{
    public schoolPartnerInfoId?: string;
    public schoolId?: string;
    public curriculumName?: string;
    public curriculumTags?: string[];
    public curriculumCatalogId?: string;
    public weekCatalogId?: string;
    public dateOn?: string[];
    public createOn?: string[];
    public lastModifyOn?: string[];

    public constructor(init?: Partial<GetCurriculumWeekliesReq>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetCurriculumWeekliesReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetCurriculumWeekliesRes(); }
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

/** @description 获取学校一日流程列表 */
// @Route("/babycare/{SchoolId}/dailytasks", "POST")
// @Api(Description="获取学校一日流程列表")
export class GetBabyCareDailyTasksReq extends ProTableRequest implements IReturn<GetBabyCareDailyTasksRes>
{
    public schoolPartnerInfoId?: string;
    public schoolId?: string;
    public taskName?: string;
    public createOn?: string[];
    public lastModifyOn?: string[];

    public constructor(init?: Partial<GetBabyCareDailyTasksReq>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetBabyCareDailyTasksReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetBabyCareDailyTasksRes(); }
}

/** @description 获取学校babycare任务列表 */
// @Route("/babycare/{SchoolId}/tasks", "GET, OPTIONS")
// @Api(Description="获取学校babycare任务列表")
export class GetBabyCareTasksReq implements IReturn<GetBabyCareTasksRes>
{
    public schoolId?: string;
    public classId?: string;
    public showTodayHistory?: boolean;
    public dateOn?: string;
    public taskName?: string;
    public isEnabled?: boolean;

    public constructor(init?: Partial<GetBabyCareTasksReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetBabyCareTasksReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetBabyCareTasksRes(); }
}

/** @description 导出学校babycare任务结果 */
// @Route("/babycare/{SchoolId}/tasks/excel", "GET, OPTIONS")
// @Api(Description="导出学校babycare任务结果")
export class ExportBabyCareTasksReq implements IReturn<Blob>
{
    public schoolId?: string;
    public beginDate?: string;
    public endDate?: string;

    public constructor(init?: Partial<ExportBabyCareTasksReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'ExportBabyCareTasksReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new Blob(); }
}

/** @description 获取学校BabyCareTaskWork数据 */
// @Route("/babycare/{SchoolId}/caretaskworks", "GET, OPTIONS")
// @Api(Description="获取学校BabyCareTaskWork数据")
export class GetBabyCareTaskWorksReq implements IReturn<GetBabyCareTaskWorksRes>
{
    public schoolId?: string;
    public classId?: string;
    public status?: DAILYCARE_WORK_STATUS;
    public dailyCareDeviceId?: string;
    public babyCareTaskId?: string;
    public babyCareTaskFlowId?: string;
    public babyCareTaskFlowIds?: string[];
    public teacherUserInfoId?: string;
    public dateOn?: string[];
    public pageIndex?: number;
    public pageSize?: number;

    public constructor(init?: Partial<GetBabyCareTaskWorksReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetBabyCareTaskWorksReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetBabyCareTaskWorksRes(); }
}

/** @description 添加学校babycare任务 */
// @Route("/babycare/{SchoolId}/tasks", "POST, OPTIONS")
// @Api(Description="添加学校babycare任务")
export class AddBabyCareTaskReq implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public babyCareTaskId?: string;
    public isEnabled?: boolean;
    public classIds?: string[];
    public studyId?: string;
    public flows?: BabyCareTaskFlowDTO[];
    public taskName?: string;
    public timeBegin?: string;
    public timeEnd?: string;
    public coverUrl?: string;
    public orderIndex?: number;

    public constructor(init?: Partial<AddBabyCareTaskReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddBabyCareTaskReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 删除学校babycare任务 */
// @Route("/babycare/{SchoolId}/task/delete", "POST")
// @Api(Description="删除学校babycare任务")
export class DeleteBabyCareTaskReq implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public babyCareTaskId?: string;
    public isDelete?: boolean;

    public constructor(init?: Partial<DeleteBabyCareTaskReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteBabyCareTaskReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 添加学校babycare任务子流程 */
// @Route("/babycare/{SchoolId}/task/{BabyCareTaskId}/flows", "POST, OPTIONS")
// @Api(Description="添加学校babycare任务子流程")
export class AddBabyCareFlowReq extends BaseResponse
{
    public schoolId?: string;
    public babyCareTaskId?: string;
    public flow?: BabyCareTaskFlowDTO;

    public constructor(init?: Partial<AddBabyCareFlowReq>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'AddBabyCareFlowReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

/** @description 重试dvr录像任务 */
// @Route("/babycare/{SchoolId}/task/{BabyCareTaskWorkId}/dvrretry", "POST, OPTIONS")
// @Api(Description="重试dvr录像任务")
export class RetryBabyCareDvrJobReq extends BaseResponse
{
    public schoolId?: string;
    public babyCareTaskWorkId?: string;

    public constructor(init?: Partial<RetryBabyCareDvrJobReq>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'RetryBabyCareDvrJobReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

/** @description 执行学校babycare任务子流程 */
// @Route("/babycare/{SchoolId}/task/{BabyCareTaskId}/dowork", "POST, OPTIONS")
// @Api(Description="执行学校babycare任务子流程")
export class AddBabyCareTaskWorkReq extends BaseResponse
{
    public schoolId?: string;
    public classId?: string;
    public babyCareTaskId?: string;
    public babyCareFlowId?: string;
    public dailyCareDeviceId?: string;
    public teacherUserInfoId?: string;

    public constructor(init?: Partial<AddBabyCareTaskWorkReq>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'AddBabyCareTaskWorkReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

/** @description 删除某项babycare */
// @Route("/babycare/{SchoolId}/care/delete", "DELETE, OPTIONS")
// @Api(Description="删除某项babycare")
export class DeleteBabyCareReq extends BaseResponse
{
    public schoolId?: string;
    public classId?: string;
    public babyCareId?: string;

    public constructor(init?: Partial<DeleteBabyCareReq>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteBabyCareReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

/** @description 获取学校班级日报数据 */
// @Route("/babycare/report/daily/class", "GET, OPTIONS")
// @Api(Description="获取学校班级日报数据")
export class GetBabyDailyReportClassReq implements IReturn<GetBabyDailyReportClassRes>
{
    public schoolId?: string;
    public classId?: string;
    public recordDateOn?: string;
    public includeDelete?: boolean;

    public constructor(init?: Partial<GetBabyDailyReportClassReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetBabyDailyReportClassReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetBabyDailyReportClassRes(); }
}

/** @description 获取学校班级日报数据 */
// @Route("/babycare/report/daily/class/bysign", "GET, OPTIONS")
// @Api(Description="获取学校班级日报数据")
export class GetBabyDailyReportClassBySignReq implements IReturn<GetBabyDailyReportClassRes>
{
    public schoolId?: string;
    public classId?: string;
    public dateOn?: string;
    public nonce?: string;
    public sign?: string;

    public constructor(init?: Partial<GetBabyDailyReportClassBySignReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetBabyDailyReportClassBySignReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetBabyDailyReportClassRes(); }
}

/** @description 家长端获取学员日周报列表 */
// @Route("/babycare/report/week/class", "GET")
// @Api(Description="家长端获取学员日周报列表")
export class GetBabyReportsForParentReq implements IReturn<GetBabyReportsForParentRes>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId 不可为空")
    public schoolId?: string;

    // @Validate(Validator="NotEmpty", Message="KidId 不可为空")
    public kidId?: string;

    // @Validate(Validator="NotEmpty", Message="BeginDate 不可为空")
    public beginDate?: string;

    // @Validate(Validator="NotEmpty", Message="EndDate 不可为空")
    public endDate?: string;

    public constructor(init?: Partial<GetBabyReportsForParentReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetBabyReportsForParentReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetBabyReportsForParentRes(); }
}

/** @description 获取学校班级周报数据 */
// @Route("/babycare/report/week/class/bysign", "GET, OPTIONS")
// @Api(Description="获取学校班级周报数据")
export class GetBabyWeekReportClassBySignReq implements IReturn<GetBabyWeekReportClassRes>
{
    public schoolId?: string;
    public classId?: string;
    public dateOn?: string;
    public nonce?: string;
    public sign?: string;

    public constructor(init?: Partial<GetBabyWeekReportClassBySignReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetBabyWeekReportClassBySignReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetBabyWeekReportClassRes(); }
}

/** @description 获取宝贝日报数据 */
// @Route("/babycare/report/dailyv2", "GET, OPTIONS")
// @Api(Description="获取宝贝日报数据")
export class GetBabyDailyReportV2Req implements IReturn<GetBabyDailyReportV2Res>
{
    public schoolId?: string;
    public classId?: string;
    public kidId?: string;
    public dateOn?: string;
    public nonce?: string;
    public sign?: string;

    public constructor(init?: Partial<GetBabyDailyReportV2Req>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetBabyDailyReportV2Req'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetBabyDailyReportV2Res(); }
}

/** @description 获取宝贝周报数据 */
// @Route("/babycare/report/week", "GET, OPTIONS")
// @Api(Description="获取宝贝周报数据")
export class GetBabyReportWeekReq implements IReturn<GetBabyReportWeekRes>
{
    public schoolId?: string;
    public classId?: string;
    public kidId?: string;
    public dateOn?: string;
    public nonce?: string;
    public sign?: string;

    public constructor(init?: Partial<GetBabyReportWeekReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetBabyReportWeekReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetBabyReportWeekRes(); }
}

/** @description 获取学校每日照顾报表 */
// @Route("/babycare/report/cares/daily", "GET")
// @Api(Description="获取学校每日照顾报表")
export class GetDailyCareSchoolDailySummaryReq implements IReturn<GetDailyCareSchoolDailySummaryRes>
{
    public schoolPartnerInfoId?: string;
    public schoolId?: string;
    public schoolIds?: string[];
    public beginDate?: string;
    public endDate?: string;

    public constructor(init?: Partial<GetDailyCareSchoolDailySummaryReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetDailyCareSchoolDailySummaryReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetDailyCareSchoolDailySummaryRes(); }
}

/** @description 获取学校每日流程报表 */
// @Route("/babycare/report/flows/daily", "GET")
// @Api(Description="获取学校每日流程报表")
export class GetBabyCareTaskWorkSchoolDailySummaryReq implements IReturn<GetBabyCareTaskWorkSchoolDailySummaryRes>
{
    public schoolPartnerInfoId?: string;
    public schoolId?: string;
    public schoolIds?: string[];
    public beginDate?: string;
    public endDate?: string;

    public constructor(init?: Partial<GetBabyCareTaskWorkSchoolDailySummaryReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetBabyCareTaskWorkSchoolDailySummaryReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetBabyCareTaskWorkSchoolDailySummaryRes(); }
}

/** @description 获取托育机构列表 */
// @Route("/babycare/childcareinstitution/list", "POST")
// @Api(Description="获取托育机构列表")
export class GetChildcareInstitutionsReq implements IReturn<GetChildcareInstitutionsRes>
{
    public zoning_name?: string;
    public zoning_code?: string;
    public address?: string;
    public institution_type?: string;
    public credit_code?: string;
    public province_code?: string;
    public city_code?: string;
    public institution_other_name?: string;
    public institution_name?: string;
    public finished_time?: string[];
    public lastModifyOn?: string[];
    public sort?: { [index: string]: ORDER_DIRECTION; };
    public pageIndex?: number;
    public pageSize?: number;

    public constructor(init?: Partial<GetChildcareInstitutionsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetChildcareInstitutionsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetChildcareInstitutionsRes(); }
}

/** @description 获取托育机构列表 */
// @Route("/babycare/childcareinstitution/sync", "POST")
// @Api(Description="获取托育机构列表")
export class SyncChildcareInstitutionsReq implements IReturn<BaseResponse>
{
    public pageIndex?: number;

    public constructor(init?: Partial<SyncChildcareInstitutionsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SyncChildcareInstitutionsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取iot设备列表 */
// @Route("/iot/iotdevices", "GET, OPTIONS")
// @Api(Description="获取iot设备列表")
export class GetIotDevicesReq implements IReturn<GetIotDevicesRes>
{
    public schoolId?: string;

    public constructor(init?: Partial<GetIotDevicesReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetIotDevicesReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetIotDevicesRes(); }
}

/** @description 绑定iot设备到教师 */
// @Route("/iot/iotdeviceallocatetoteacher", "POST, OPTIONS")
// @Api(Description="绑定iot设备到教师")
export class IotDeviceAllocateByTeacherReq implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public deviceId?: string;
    public isAllowcate?: boolean;

    public constructor(init?: Partial<IotDeviceAllocateByTeacherReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'IotDeviceAllocateByTeacherReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 教师审核请假 */
// @Route("/leaverequest/audit", "POST, OPTIONS")
// @Api(Description="教师审核请假")
export class AuditLeaveRequestReq implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public leaveRequestId?: string;
    public teacherUserInfoId?: string;
    public auditMsg?: string;
    public isApprove?: boolean;

    public constructor(init?: Partial<AuditLeaveRequestReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AuditLeaveRequestReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取请假详情 */
// @Route("/leaverequest/request/{SchoolId}/{Id}", "GET")
// @Api(Description="获取请假详情")
export class GetLeaveRequestDetailReq extends CommonRequest implements IReturn<GetLeaveRequestDetailRes>
{
    public schoolId?: string;
    public id?: string;

    public constructor(init?: Partial<GetLeaveRequestDetailReq>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetLeaveRequestDetailReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetLeaveRequestDetailRes(); }
}

/** @description 教师获取请假列表 */
// @Route("/leaverequest/teacherrequests", "GET, OPTIONS")
// @Api(Description="教师获取请假列表")
export class GetLeaveRequestByTeacherReq implements IReturn<GetLeaveRequestByTeacherRes>
{
    public schoolId?: string;
    public classId?: string;
    public auditorId?: string;
    public kidName?: string;
    public leaveEntityId?: string;
    public isTeacher?: boolean;
    public requestDate?: string;
    public type?: LEAVE_REQUEST_TYPE;
    public state?: LEAVESTATE;
    public createOn?: string[];
    public pageIndex?: number;
    public pageSize?: number;

    public constructor(init?: Partial<GetLeaveRequestByTeacherReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetLeaveRequestByTeacherReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetLeaveRequestByTeacherRes(); }
}

/** @description 教师确认用药申请 */
// @Route("/school/{SchoolId}/healthy/mediccare/{MedicCareId}/accept", "POST, OPTIONS")
// @Api(Description="教师确认用药申请")
export class AcceptMedicCardReq implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public teacherUserInfoId?: string;
    public medicCareId?: string;
    public studentId?: string;
    public actualTime?: string;
    public teacherMemo?: string;
    public teacherImageItems?: EventAttachImageItemDTO[];

    public constructor(init?: Partial<AcceptMedicCardReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AcceptMedicCardReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
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

/** @description 教师列取本班用药申请 */
// @Route("/school/{SchoolId}/healthy/mediccare", "GET")
// @Api(Description="教师列取本班用药申请")
export class GetMediccareDetailReq extends CommonRequest implements IReturn<GetMediccareDetailRes>
{
    public schoolId?: string;
    public id?: string;

    public constructor(init?: Partial<GetMediccareDetailReq>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMediccareDetailReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetMediccareDetailRes(); }
}

/** @description 教师列取本班用药申请 */
// @Route("/school/{SchoolId}/healthy/mediccares/class", "GET, OPTIONS")
// @Api(Description="教师列取本班用药申请")
export class GetClassMediccaresReq implements IReturn<GetSchoolMedicCaresRes>
{
    public schoolId?: string;
    public classId?: string;
    public pageSize?: number;
    public lastId?: string;

    public constructor(init?: Partial<GetClassMediccaresReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetClassMediccaresReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSchoolMedicCaresRes(); }
}

/** @description 获取教师的所有班级的信息V2 */
// @Route("/v2/teacher/classes", "GET, OPTIONS")
// @Api(Description="获取教师的所有班级的信息V2")
export class GetTeacherClassesV2Req implements IReturn<GetTeacherClassesV2Res>
{
    public schoolId?: string;
    public classId?: string;
    public branchIds?: string[];

    public constructor(init?: Partial<GetTeacherClassesV2Req>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetTeacherClassesV2Req'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetTeacherClassesV2Res(); }
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

/** @description 获取班级的食谱 */
// @Route("/school/{SchoolId}/dailymenu/{ClassId}", "GET, OPTIONS")
// @Api(Description="获取班级的食谱")
export class GetClassDailyMenuReq implements IReturn<GetDailyMenuRes>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId 不可为空")
    public schoolId?: string;

    // @Validate(Validator="NotEmpty", Message="ClassId 不可为空")
    public classId?: string;

    public dateOn?: string;

    public constructor(init?: Partial<GetClassDailyMenuReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetClassDailyMenuReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetDailyMenuRes(); }
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

// @Route("/system/versioninfo", "GET, OPTIONS")
export class GetVersionCodeReq implements IReturn<GetVersionCodeRes>
{
    public appid?: number;
    public os?: string;
    public versionname?: string;
    public versioncode?: string;
    public channelname?: string;

    public constructor(init?: Partial<GetVersionCodeReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetVersionCodeReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetVersionCodeRes(); }
}

