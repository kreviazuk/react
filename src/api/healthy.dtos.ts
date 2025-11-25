/* Options:
Date: 2025-09-15 16:39:11
Version: 8.0
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://apigwtest.yban.co/api/educrm

//GlobalNamespace: 
MakePropertiesOptional: True
AddServiceStackTypes: False
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
IncludeTypes: CreateDailyMenuReq,CreateDailyMenuV2Req,GetSchoolDailyMenusWeeklyReq,GetSchoolClassInfosByPermissionReq,GetDailyMenusFromTeacherReq,GetBabyWeekReportClassBySignReq,GetBabyDailyReportClassBySignReq,DailyCareExtraType,DailyCareHealthyType,DAILYCARE_EAT_STATUS,DAILYCARE_TOILET_TYPE,DailyCareExtraData,GetHealthyPartnerCommentReq,DailyCareExtraDTO,DailyCareItem,HealthyPartnerDailyHealthyDTO,GetBabyReportWeekReq,DailyCareDailySummaryDTO,BabyDailySummaryItem,GetBabyDailyReportV2Req,BabyDailyReportItem,Nutrition,DailyMenuDTO,DishItemDTO,NutritionBase,DishType,DishMenuContentDTO,DishMenuDishDTO
//ExcludeTypes: 
DefaultImports: PERMISSION_TYPE:./base.dtos,DishMenuWeeklyDTO:./base.dtos,IngredientItemDTO:./base.dtos,ClassInfoDTO:./base.dtos,TeacherBaseInfoDTO:./base.dtos,BaseResponse:./base.dtos,type IReturn:./base.dtos,DailyHealthyDTO:./parent.dtos,StudentBaseInfoDTO:./base.dtos,OssInfoDTO:./base.dtos,EventAttachDTO:./event.dtos,EventAttachItem:./event.dtos
*/

import { PERMISSION_TYPE } from "./base.dtos";
import { DishMenuWeeklyDTO } from "./base.dtos";
import { IngredientItemDTO } from "./base.dtos";
import { ClassInfoDTO } from "./base.dtos";
import { TeacherBaseInfoDTO } from "./base.dtos";
import { BaseResponse } from "./base.dtos";
import { type IReturn } from "./base.dtos";
import { DailyHealthyDTO } from "./teacher.dtos";
import { StudentBaseInfoDTO } from "./base.dtos";
import { OssInfoDTO } from "./base.dtos";
import { EventAttachDTO } from "./event.dtos";
import { EventAttachItem } from "./event.dtos";

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

export class HealthyPartnerDailyHealthyDTO
{
    public id?: string;
    public schoolId?: string;
    public kidId?: string;
    public dateOn?: string;
    public healthyPartnerId?: string;
    public comment?: { [index: string]: string; };
    public remark?: string;
    public createBy?: number;
    public createIPAddr?: string;
    public createOn?: string;
    public lastModifyOn?: string;
    public isDelete?: boolean;
    public deleteBy?: number;
    public deleteOn?: string;

    public constructor(init?: Partial<HealthyPartnerDailyHealthyDTO>) { (Object as any).assign(this, init); }
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

export class GetHealthyPartnerCommentRes extends BaseResponse
{
    public data?: DailyHealthyDTO;
    public kidInfo?: StudentBaseInfoDTO;
    public commentInfo?: HealthyPartnerDailyHealthyDTO;
    public ossInfo?: { [index: string]: OssInfoDTO; };
    public wechatAccountId?: string;

    public constructor(init?: Partial<GetHealthyPartnerCommentRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchoolClassInfosByPermissionRes extends BaseResponse
{
    public data?: ClassInfoDTO[];
    public studentData?: { [index: string]: StudentBaseInfoDTO; };

    public constructor(init?: Partial<GetSchoolClassInfosByPermissionRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetDailyMenusRes extends BaseResponse
{
    public data?: DailyMenuDTO[];
    public ossInfos?: { [index: string]: OssInfoDTO; };
    public dishs?: { [index: string]: DishItemDTO; };
    public foods?: { [index: string]: IngredientItemDTO; };
    public className?: { [index: string]: string; };

    public constructor(init?: Partial<GetDailyMenusRes>) { super(init); (Object as any).assign(this, init); }
}

export class CreateDailyMenuRes extends BaseResponse
{
    public dailyMenuId?: string;

    public constructor(init?: Partial<CreateDailyMenuRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchoolDailyMenusWeeklyRes extends BaseResponse
{
    public data?: DishMenuWeeklyDTO[];
    public nutritions?: Nutrition;
    public teacherInfos?: { [index: string]: TeacherBaseInfoDTO; };
    public ossInfos?: { [index: string]: OssInfoDTO; };
    public dishs?: { [index: string]: DishItemDTO; };
    public foods?: { [index: string]: IngredientItemDTO; };

    public constructor(init?: Partial<GetSchoolDailyMenusWeeklyRes>) { super(init); (Object as any).assign(this, init); }
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

// @Route("/healthypartner/{SchoolId}/comment/{KidId}/{DateOn}", "GET")
export class GetHealthyPartnerCommentReq implements IReturn<GetHealthyPartnerCommentRes>
{
    public schoolId?: string;
    public kidId?: string;
    public dateOn?: string;
    public nonce?: string;
    public sign?: string;

    public constructor(init?: Partial<GetHealthyPartnerCommentReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetHealthyPartnerCommentReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetHealthyPartnerCommentRes(); }
}

/** @description 通过指定权限获取班级列表V2 */
// @Route("/v2/school/{SchoolId}/classesbypermission", "GET, OPTIONS")
// @Api(Description="通过指定权限获取班级列表V2")
export class GetSchoolClassInfosByPermissionReq implements IReturn<GetSchoolClassInfosByPermissionRes>
{
    /** @description 园所id */
    // @ApiMember(DataType="string", Description="园所id", IsRequired=true, Name="SchoolId", ParameterType="path")
    public schoolId?: string;

    public permission?: PERMISSION_TYPE;

    public constructor(init?: Partial<GetSchoolClassInfosByPermissionReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolClassInfosByPermissionReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSchoolClassInfosByPermissionRes(); }
}

/** @description 教师读取食谱列表 */
// @Route("/school/{SchoolId}/dailymenusteacher", "GET, OPTIONS")
// @Api(Description="教师读取食谱列表")
export class GetDailyMenusFromTeacherReq implements IReturn<GetDailyMenusRes>
{
    public schoolId?: string;
    public classId?: string;
    public lastReadId?: string;
    public dateOn?: string;
    public isPublished?: boolean;
    public pageSize?: number;

    public constructor(init?: Partial<GetDailyMenusFromTeacherReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetDailyMenusFromTeacherReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetDailyMenusRes(); }
}

/** @description 创建食谱 */
// @Route("/school/{SchoolId}/dailymenu", "POST, OPTIONS")
// @Api(Description="创建食谱")
export class CreateDailyMenuReq implements IReturn<CreateDailyMenuRes>
{
    public schoolId?: string;
    public title?: string;
    public content1?: string;
    public attach1?: EventAttachItem;
    public content2?: string;
    public attach2?: EventAttachItem;
    public content3?: string;
    public attach3?: EventAttachItem;
    public dateOn?: string;
    public classIds?: string[];

    public constructor(init?: Partial<CreateDailyMenuReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateDailyMenuReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CreateDailyMenuRes(); }
}

/** @description 创建食谱 */
// @Route("/school/{SchoolId}/dailymenuv2", "POST")
// @Api(Description="创建食谱")
export class CreateDailyMenuV2Req implements IReturn<CreateDailyMenuRes>
{
    public schoolId?: string;
    public title?: string;
    public dateOn?: string;
    public todayNutritions?: Nutrition;
    public contents?: DishMenuContentDTO[];
    public classIds?: string[];

    public constructor(init?: Partial<CreateDailyMenuV2Req>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateDailyMenuV2Req'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CreateDailyMenuRes(); }
}

/** @description 获取周的食谱列表 */
// @Route("/school/{SchoolId}/dailymenu/weekly", "GET")
// @Api(Description="获取周的食谱列表")
export class GetSchoolDailyMenusWeeklyReq implements IReturn<GetSchoolDailyMenusWeeklyRes>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId 不可为空")
    public schoolId?: string;

    public branchIds?: string[];
    public beginDate?: string;
    public endDate?: string;

    public constructor(init?: Partial<GetSchoolDailyMenusWeeklyReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolDailyMenusWeeklyReq'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetSchoolDailyMenusWeeklyRes(); }
}

