/* Options:
Date: 2025-11-05 18:26:27
Version: 8.0
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://apigwtest.yban.co/api/educrm

//GlobalNamespace: 
MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
IncludeTypes: GetSchoolTeachersReq,GetSchoolKidsCourseBalanceReq,KidCourseBalanceItem,GetClassTimeReq,ClassTimeSignReq,ClassRoomItem,ClassTimeState,TEACHER_CLASS_ROLE,ClassTimeStudentType,ClassTimeTeacherInfoMapDTO,ClassTimeSignState,ClassTimeSignInfoDTO,ClassTimeDTO,SetClassTimeAppointmentReq,GetClassTimesReq,GetClassRoomsReq,AddCourseReq,CourseSaleItemDTO,CourseSignType,GetClassSchedulesReq,ClassScheduleItem,MyDayOfWeek,ClassTimeScheduleStepType,ClassTimeScheduleType,AddClassScheduleReq,GetCoursesReq,CourseItem,CourseSaleItemType
ExcludeTypes: BaseResponse,IReturn,StudentBaseInfoDTO,ClassInfoDTO,TeacherBaseInfoDTO
DefaultImports: BaseResponse:./base.dtos,type IReturn:./base.dtos,StudentBaseInfoDTO:./base.dtos,ClassInfoDTO:./base.dtos,TeacherBaseInfoDTO:./base.dtos,AttachTingItem:./base.dtos
*/

import { BaseResponse } from "./base.dtos";
import { type IReturn } from "./base.dtos";
import { StudentBaseInfoDTO } from "./base.dtos";
import { ClassInfoDTO } from "./base.dtos";
import { TeacherBaseInfoDTO } from "./base.dtos";
import { AttachTingItem } from "./base.dtos";

export enum TEACHER_CLASS_ROLE
{
    MASTER_TEACHER = 'MASTER_TEACHER',
    ASSISTANT_TEACHER = 'ASSISTANT_TEACHER',
    CARE_TEACHER = 'CARE_TEACHER',
    OTHER_TEACHER = 'OTHER_TEACHER',
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

export enum ClassTimeScheduleStepType
{
    EVERY_WEEK = 7,
    EVERY_OTHER_WEEK = 14,
}

export enum ClassTimeScheduleType
{
    FIXED_DATE = 'FIXED_DATE',
    PERIOD_DATE = 'PERIOD_DATE',
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

export class ClassRoomItem
{
    public id?: string;
    public branchId?: string;
    public name?: string;

    public constructor(init?: Partial<ClassRoomItem>) { (Object as any).assign(this, init); }
}

export class ClassScheduleItem
{
    public id?: string;
    public schoolId?: string;
    public classId?: string;
    public beginTime?: string;
    public endTime?: string;
    public startMinutes?: number;
    public endMinutes?: number;
    public weekDay?: MyDayOfWeek;
    public step?: ClassTimeScheduleStepType;
    public scheduleType?: ClassTimeScheduleType;

    public constructor(init?: Partial<ClassScheduleItem>) { (Object as any).assign(this, init); }
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
    public saleAddAmount?: number;
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
    public balancePrice?: number;
    public createOn?: string;
    public expireOn?: string;
    public beginDate?: string;
    public endDate?: string;
    public debitAccount?: string;

    public constructor(init?: Partial<KidCourseBalanceItem>) { (Object as any).assign(this, init); }
}

export class GetClassRoomsRes extends BaseResponse
{
    public data?: ClassRoomItem[];

    public constructor(init?: Partial<GetClassRoomsRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetCoursesRes extends BaseResponse
{
    public data?: CourseItem[];

    public constructor(init?: Partial<GetCoursesRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetClassSchedulesRes extends BaseResponse
{
    public data?: ClassScheduleItem[];

    public constructor(init?: Partial<GetClassSchedulesRes>) { super(init); (Object as any).assign(this, init); }
}

export class AddClassScheduleRes extends BaseResponse
{
    public scheduleIds?: string[];

    public constructor(init?: Partial<AddClassScheduleRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetClassTimeRes extends BaseResponse
{
    public data?: ClassTimeDTO;
    public studentData?: { [index: string]: StudentBaseInfoDTO; };
    public courseBalance?: { [index: string]: KidCourseBalanceItem; };

    public constructor(init?: Partial<GetClassTimeRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetClassTimesRes extends BaseResponse
{
    public data?: ClassTimeDTO[];
    public studentData?: { [index: string]: StudentBaseInfoDTO; };
    public teacherData?: { [index: string]: TeacherBaseInfoDTO; };
    public classData?: { [index: string]: ClassInfoDTO; };

    public constructor(init?: Partial<GetClassTimesRes>) { super(init); (Object as any).assign(this, init); }
}

export class ClassTimeSignRes extends BaseResponse
{

    public constructor(init?: Partial<ClassTimeSignRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchoolKidsCourseBalanceRes extends BaseResponse
{
    public sets?: { [index: string]: KidCourseBalanceItem; };

    public constructor(init?: Partial<GetSchoolKidsCourseBalanceRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchoolTeachersRes
{
    public data?: TeacherInfoDTO[];

    public constructor(init?: Partial<GetSchoolTeachersRes>) { (Object as any).assign(this, init); }
}

/** @description 获取所有班级 */
// @Route("/eduaffair/{SchoolId}/classrooms", "GET, OPTIONS")
// @Api(Description="获取所有班级")
export class GetClassRoomsReq implements IReturn<GetClassRoomsRes>
{
    public schoolId?: string;
    public branchIds?: string[];

    public constructor(init?: Partial<GetClassRoomsReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetClassRoomsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetClassRoomsRes(); }
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
    public includeMonthWorkDay?: boolean;

    public constructor(init?: Partial<GetCoursesReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetCoursesReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetCoursesRes(); }
}

/** @description 添加修改课程 */
// @Route("/eduaffair/{SchoolId}/course", "POST, OPTIONS")
// @Api(Description="添加修改课程")
export class AddCourseReq implements IReturn<BaseResponse>
{
    public id?: string;
    public schoolId?: string;
    public name?: string;
    public colorId?: number;
    public deductionWhenAbsence?: boolean;
    public deductionWhenLeave?: boolean;
    public isOneToOne?: boolean;
    public remark?: string;
    public signType?: CourseSignType;
    public saleItemsByCount?: CourseSaleItemDTO[];
    public saleItemsByMonth?: CourseSaleItemDTO[];
    public autoSign?: boolean;
    public signByClassTime?: boolean;
    public branchIds?: string[];
    public courseCategory?: string;

    public constructor(init?: Partial<AddCourseReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddCourseReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取所有排课 */
// @Route("/eduaffair/{SchoolId}/classschedules/{ClassId}", "GET, OPTIONS")
// @Api(Description="获取所有排课")
export class GetClassSchedulesReq implements IReturn<GetClassSchedulesRes>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId不可为空")
    public schoolId?: string;

    public classId?: string;

    public constructor(init?: Partial<GetClassSchedulesReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetClassSchedulesReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetClassSchedulesRes(); }
}

/** @description 添加排课 */
// @Route("/eduaffair/{SchoolId}/classschedules/{ClassId}", "POST, OPTIONS")
// @Api(Description="添加排课")
export class AddClassScheduleReq implements IReturn<AddClassScheduleRes>
{
    public schoolId?: string;
    public classId?: string;
    public beginTime?: string;
    public endTime?: string;
    public startMinutes?: number;
    public endMinutes?: number;
    public weekDays?: MyDayOfWeek[];
    public step?: ClassTimeScheduleStepType;
    public scheduleType?: ClassTimeScheduleType;

    public constructor(init?: Partial<AddClassScheduleReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddClassScheduleReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AddClassScheduleRes(); }
}

/** @description 获取指定的课时信息 */
// @Route("/eduaffair/{SchoolId}/classtime", "POST, OPTIONS")
// @Api(Description="获取指定的课时信息")
export class GetClassTimeReq implements IReturn<GetClassTimeRes>
{
    public schoolId?: string;
    public classId?: string;
    public scheduleId?: string;
    public index?: number;
    public dateOn?: string;

    public constructor(init?: Partial<GetClassTimeReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetClassTimeReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetClassTimeRes(); }
}

/** @description 获取所有课时 */
// @Route("/eduaffair/{SchoolId}/classtimes", "POST, OPTIONS")
// @Api(Description="获取所有课时")
export class GetClassTimesReq implements IReturn<GetClassTimesRes>
{
    public schoolId?: string;
    public branchIds?: string[];
    public classId?: string;
    public startTime?: string;
    public endTime?: string;

    public constructor(init?: Partial<GetClassTimesReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetClassTimesReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetClassTimesRes(); }
}

/** @description 设置指定课时是否可约课 */
// @Route("/eduaffair/{SchoolId}/classtime/appointment", "POST")
// @Api(Description="设置指定课时是否可约课")
export class SetClassTimeAppointmentReq implements IReturn<BaseResponse>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId 不可为空")
    public schoolId?: string;

    // @Validate(Validator="NotEmpty", Message="ScheduleId 不可为空")
    public scheduleId?: string;

    public index?: number;
    public canAppointment?: boolean;
    public appointmentCount?: number;

    public constructor(init?: Partial<SetClassTimeAppointmentReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SetClassTimeAppointmentReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 上课签到 */
// @Route("/eduaffair/{SchoolId}/classtime/updatetime", "POST, OPTIONS")
// @Api(Description="上课签到")
export class ClassTimeSignReq implements IReturn<ClassTimeSignRes>
{
    public schoolId?: string;
    public scheduleId?: string;
    public index?: number;
    public signInfos?: ClassTimeSignInfoDTO[];
    public classTimeTeacherMaps?: ClassTimeTeacherInfoMapDTO[];
    public courseSubject?: string[];

    public constructor(init?: Partial<ClassTimeSignReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'ClassTimeSignReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new ClassTimeSignRes(); }
}

/** @description 获取学校的学生某个课程的课时剩余信息 */
// @Route("/school/{SchoolId}/kidscoursebalance", "GET, OPTIONS")
// @Api(Description="获取学校的学生某个课程的课时剩余信息")
export class GetSchoolKidsCourseBalanceReq implements IReturn<GetSchoolKidsCourseBalanceRes>
{
    public schoolId?: string;
    public courseId?: string;
    public studentIds?: string[];
    public beginDate?: string;

    public constructor(init?: Partial<GetSchoolKidsCourseBalanceReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolKidsCourseBalanceReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSchoolKidsCourseBalanceRes(); }
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

