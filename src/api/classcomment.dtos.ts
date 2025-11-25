/* Options:
Date: 2023-02-02 16:11:46
Version: 6.10
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://localhost:5000/api/educrm

//GlobalNamespace: 
MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
IncludeTypes: GetClassTimeCommentsReq,AddClassTimeCommentTeacherReq,ClassTimeCommentTeacherDTO,ClassTimeCommentKidDTO,ClassTimeDTO,ClassTimeState,ClassTimeSignInfoDTO,ClassTimeSignState,ClassTimeStudentType
ExcludeTypes: BaseResponse,IReturn
DefaultImports: BaseResponse:./base.dtos,IReturn:./base.dtos,ClassBaseInfoDTO:./base.dtos,CommonRequest:./base.dtos,EventAttachDTO:./event.dtos,ClassTimeTeacherInfoMapDTO:./base.dtos
*/

import { BaseResponse } from "./base.dtos";
import { IReturn } from "./base.dtos";
import { ClassBaseInfoDTO } from "./base.dtos";
import { CommonRequest } from "./base.dtos";
import { EventAttachDTO } from "./event.dtos";
import { ClassTimeTeacherInfoMapDTO } from "./base.dtos";

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

/**
* 获取课后点评的课时列表
*/
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

/**
* 添加或修改教师的课后点评
*/
// @Route("/eduaffair/{SchoolId}/classtimecommentteacher/add", "POST, OPTIONS")
// @Api(Description="添加或修改教师的课后点评")
export class AddClassTimeCommentTeacherReq implements IReturn<BaseResponse>
{
    // @Validate(Validator="NotEmpty", Message="SchoolId不可为空")
    public schoolId?: string;

    public data?: ClassTimeCommentTeacherDTO;

    public constructor(init?: Partial<AddClassTimeCommentTeacherReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddClassTimeCommentTeacherReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

