/* Options:
Date: 2025-11-06 15:44:31
Version: 8.0
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://apigwtest.yban.co/api/educrm

//GlobalNamespace: 
MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
IncludeTypes: TEACHER_CLASS_ROLE,ClassTimeStudentType,ClassTimeSignState,ClassTimeState,ClassTimeTeacherInfoMapDTO,ClassTimeSignInfoDTO,EventAttachDTO,ClassBaseInfoDTO,ClassTimeCommentTeacherDTO,ClassTimeCommentKidDTO,ClassTimeDTO,GetClassTimeCommentsReq,GetClassTimeCommentKidsReq,AddClassTimeCommentKidReq,GetClassTimeCommentTeachersReq,GetClassTimeCommentScoreTemplatesReq,ClassTimeCommentScoreTemplateDTO
ExcludeTypes: BaseResponse
DefaultImports: CommonRequest:./base.dtos,ParentRelationSchoolInfoDTO:./base.dtos,StudentBaseInfoDTO:./base.dtos,OssInfoDTO:./base.dtos,TeacherBaseInfoDTO:./base.dtos,EventAttachTingItemDTO:./base.dtos,EventAttachLinkItemDTO:./base.dtos,EventAttachFileItemDTO:./base.dtos,EventAttachAudioItemDTO:./base.dtos,EventAttachVideoItemDTO:./base.dtos,EventAttachImageItemDTO:./base.dtos,BaseResponse:./base.dtos,type IReturn:./base.dtos
*/

import { CommonRequest } from "./base.dtos";
import { ParentRelationSchoolInfoDTO } from "./base.dtos";
import { StudentBaseInfoDTO } from "./base.dtos";
import { OssInfoDTO } from "./base.dtos";
import { TeacherBaseInfoDTO } from "./base.dtos";
import { EventAttachTingItemDTO } from "./base.dtos";
import { EventAttachLinkItemDTO } from "./base.dtos";
import { EventAttachFileItemDTO } from "./base.dtos";
import { EventAttachAudioItemDTO } from "./base.dtos";
import { EventAttachVideoItemDTO } from "./base.dtos";
import { EventAttachImageItemDTO } from "./base.dtos";
import { BaseResponse } from "./base.dtos";
import { type IReturn } from "./base.dtos";

export enum TEACHER_CLASS_ROLE
{
    MASTER_TEACHER = 'MASTER_TEACHER',
    ASSISTANT_TEACHER = 'ASSISTANT_TEACHER',
    CARE_TEACHER = 'CARE_TEACHER',
    OTHER_TEACHER = 'OTHER_TEACHER',
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

export class ClassTimeCommentScoreTemplateDTO
{
    public id?: string;
    public schoolId?: string;
    public name?: string;
    public dimension?: string[];
    public courseIds?: string[];
    public isEnabled?: boolean;
    public isDelete?: boolean;
    public createOn?: string;
    public lastModifyOn?: string;

    public constructor(init?: Partial<ClassTimeCommentScoreTemplateDTO>) { (Object as any).assign(this, init); }
}

export class ClassTimeCommentKidDTO
{
    public id?: string;
    public schoolId?: string;
    public classId?: string;
    public classTimeId?: string;
    public kidId?: string;
    public scores?: { [index: string]: number; };
    public content?: string;
    public attachment?: EventAttachDTO;
    public createByTeacherId?: string;
    public ipAddr?: string;
    public isDelete?: boolean;
    public deleteByTeacherId?: string;
    public deleteOn?: string;
    public createOn?: string;
    public lastModifyOn?: string;

    public constructor(init?: Partial<ClassTimeCommentKidDTO>) { (Object as any).assign(this, init); }
}

export class ClassTimeCommentTeacherDTO
{
    public id?: string;
    public schoolId?: string;
    public classId?: string;
    public classTimeId?: string;
    public scores?: { [index: string]: number; };
    public content?: string;
    public kidId?: string;
    public createByParentId?: string;
    public ipAddr?: string;
    public createOn?: string;
    public lastModifyOn?: string;

    public constructor(init?: Partial<ClassTimeCommentTeacherDTO>) { (Object as any).assign(this, init); }
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

export class GetClassTimeCommentScoreTemplatesRes extends BaseResponse
{
    public data?: ClassTimeCommentScoreTemplateDTO[];

    public constructor(init?: Partial<GetClassTimeCommentScoreTemplatesRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetClassTimeCommentsRes extends BaseResponse
{
    public total?: number;
    public data?: ClassTimeDTO[];
    public commentKid?: { [index: string]: ClassTimeCommentKidDTO; };
    public commentTeacher?: { [index: string]: ClassTimeCommentTeacherDTO; };
    public commentCount?: { [index: string]: number; };
    public className?: { [index: string]: string; };
    public teacherName?: { [index: string]: string; };
    public classData?: { [index: string]: ClassBaseInfoDTO; };

    public constructor(init?: Partial<GetClassTimeCommentsRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetClassTimeCommentKidsRes extends BaseResponse
{
    public total?: number;
    public data?: ClassTimeCommentKidDTO[];
    public classTime?: { [index: string]: ClassTimeDTO; };
    public classInfo?: { [index: string]: ClassBaseInfoDTO; };
    public teacherInfos?: { [index: string]: TeacherBaseInfoDTO; };
    public ossInfos?: { [index: string]: OssInfoDTO; };
    public studentData?: { [index: string]: StudentBaseInfoDTO; };

    public constructor(init?: Partial<GetClassTimeCommentKidsRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetClassTimeCommentTeachersRes extends BaseResponse
{
    public total?: number;
    public data?: ClassTimeCommentTeacherDTO[];
    public classTime?: { [index: string]: ClassTimeDTO; };
    public className?: { [index: string]: string; };
    public classData?: { [index: string]: ClassBaseInfoDTO; };
    public teacherInfos?: { [index: string]: TeacherBaseInfoDTO; };
    public studentData?: { [index: string]: StudentBaseInfoDTO; };
    public parentInfo?: { [index: string]: ParentRelationSchoolInfoDTO; };

    public constructor(init?: Partial<GetClassTimeCommentTeachersRes>) { super(init); (Object as any).assign(this, init); }
}

/** @description 获取课后点评模板 */
// @Route("/eduaffair/{SchoolId}/classtimecommentscoretemplates", "GET, OPTIONS")
// @Api(Description="获取课后点评模板")
export class GetClassTimeCommentScoreTemplatesReq implements IReturn<GetClassTimeCommentScoreTemplatesRes>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId不可为空")
    public schoolId?: string;

    public constructor(init?: Partial<GetClassTimeCommentScoreTemplatesReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetClassTimeCommentScoreTemplatesReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetClassTimeCommentScoreTemplatesRes(); }
}

/** @description 获取课后点评的课时列表 */
// @Route("/eduaffair/{SchoolId}/classtimecomments", "GET, OPTIONS")
// @Api(Description="获取课后点评的课时列表")
export class GetClassTimeCommentsReq extends CommonRequest implements IReturn<GetClassTimeCommentsRes>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId不可为空")
    public schoolId?: string;

    public branchIds?: string[];
    public classId?: string;
    public kidId?: string;
    public kidCommentState?: number;
    public filterClassTimeId?: string;
    public beginTime?: string[];
    public lastId?: string;
    public pageSize?: number;
    public pageIndex?: number;

    public constructor(init?: Partial<GetClassTimeCommentsReq>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetClassTimeCommentsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetClassTimeCommentsRes(); }
}

/** @description 获取学生的课后点评列表 */
// @Route("/eduaffair/{SchoolId}/classtimecommentkids", "GET, OPTIONS")
// @Api(Description="获取学生的课后点评列表")
export class GetClassTimeCommentKidsReq extends CommonRequest implements IReturn<GetClassTimeCommentKidsRes>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId不可为空")
    public schoolId?: string;

    public branchIds?: string[];
    public classId?: string;
    public classTimeId?: string;
    public kidName?: string;
    public kidId?: string;
    public createByTeacherId?: string;
    public beginTime?: string[];
    public createOn?: string[];
    public lastId?: string;
    public pageSize?: number;
    public pageIndex?: number;

    public constructor(init?: Partial<GetClassTimeCommentKidsReq>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetClassTimeCommentKidsReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetClassTimeCommentKidsRes(); }
}

/** @description 添加或修改学生的课后点评 */
// @Route("/eduaffair/{SchoolId}/classtimecommentkid/add", "POST, OPTIONS")
// @Api(Description="添加或修改学生的课后点评")
export class AddClassTimeCommentKidReq implements IReturn<BaseResponse>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId不可为空")
    public schoolId?: string;

    public data?: ClassTimeCommentKidDTO;

    public constructor(init?: Partial<AddClassTimeCommentKidReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddClassTimeCommentKidReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 获取教师的课后点评列表 */
// @Route("/eduaffair/{SchoolId}/classtimecommentteachers", "GET, OPTIONS")
// @Api(Description="获取教师的课后点评列表")
export class GetClassTimeCommentTeachersReq extends CommonRequest implements IReturn<GetClassTimeCommentTeachersRes>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId不可为空")
    public schoolId?: string;

    public branchIds?: string[];
    public classId?: string;
    public classTimeId?: string;
    public teacherId?: string;
    public kidName?: string;
    public kidId?: string;
    public beginTime?: string[];
    public createOn?: string[];
    public lastId?: string;
    public pageSize?: number;
    public pageIndex?: number;

    public constructor(init?: Partial<GetClassTimeCommentTeachersReq>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetClassTimeCommentTeachersReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetClassTimeCommentTeachersRes(); }
}

