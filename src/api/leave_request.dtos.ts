/* Options:
Date: 2025-10-20 14:11:10
Version: 8.0
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://apigwtest.yban.co/api/educrm

//GlobalNamespace: 
MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
IncludeTypes: COMMISSIONSTATUS,CommissionPickupDTO,GetCommissionPickupByTeacherReq,CreateCommissionPickupReq,ConfirmCommissionPickupReq,MedicCareLogDTO,MEDICSTAT,MedicCareDTO,GetLeaveRequestDetailReq,GetMediccareDetailReq,AuditLeaveRequestReq,CancelTeacherLeaveRequestReq,CreateKidLeaveRequestReq,GetLeaveRequestByTeacherReq,GetTeacherMyLeaveRequestReq,GetTeacherLeaveRequestConfigReq,CreateTeacherLeaveRequestReq,AcceptMedicCardReq,GetClassMediccaresReq,CreateKidLeaveRequestReq,CancelKidLeaveRequestReq,GetKidLeaveRequestConfigReq,GetKidMyLeaveRequestReq,KidMyLeaveRequestItem,LEAVE_REQUEST_TYPE,LEAVESTATE
ExcludeTypes: BaseResponse,IReturn
DefaultImports: CommonRequest:./base.dtos,ClassBaseInfoDTO:./base.dtos,EventAttachImageItemDTO:./base.dtos,OssInfoDTO:./base.dtos,EventAttachDTO:./base.dtos,BaseResponse:./base.dtos,StudentBaseInfoDTO:./base.dtos,IReturn:./base.dtos,TeacherBaseInfoDTO:./base.dtos,BaseKidInfoDTO:./base.dtos
*/

import { CommonRequest } from "./base.dtos";
import { ClassBaseInfoDTO } from "./base.dtos";
import { EventAttachImageItemDTO } from "./base.dtos";
import { OssInfoDTO } from "./base.dtos";
import { EventAttachDTO } from "./base.dtos";
import { BaseResponse } from "./base.dtos";
import { StudentBaseInfoDTO } from "./base.dtos";
import { IReturn } from "./base.dtos";
import { TeacherBaseInfoDTO } from "./base.dtos";
import { BaseKidInfoDTO } from "./base.dtos";

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

export enum COMMISSIONSTATUS
{
    WAIT_CONFIRM = 'WAIT_CONFIRM',
    CONFIRMED = 'CONFIRMED',
    CANCELED = 'CANCELED',
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

export class CommissionPickupDTO
{
    public id?: string;
    public schoolId?: string;
    public classId?: string;
    public studentId?: string;
    public pickuperRelationName?: string;
    public pickuperRealName?: string;
    public pickuperPhotoOssId?: string;
    public pickuperPhotoUrl?: string;
    public teacherUserInfoId?: string;
    public createBy?: string;
    public byParent?: boolean;
    public createUserIPAddr?: string;
    public createOn?: string;
    public lastModifyOn?: string;
    public status?: COMMISSIONSTATUS;
    public confirmedOn?: string;
    public comfirmedBy?: string;
    public comfirmedByParentRelationSchoolInfoId?: string;
    public confirmedUserIPAddr?: string;
    public canceledOn?: string;

    public constructor(init?: Partial<CommissionPickupDTO>) { (Object as any).assign(this, init); }
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

export class GetCommissionPickupRes extends BaseResponse
{
    public data?: CommissionPickupDTO[];
    public studentInfo?: { [index: string]: StudentBaseInfoDTO; };
    public teacherInfoData?: { [index: string]: TeacherBaseInfoDTO; };
    public classData?: { [index: string]: ClassBaseInfoDTO; };
    public parentRole?: { [index: string]: string; };

    public constructor(init?: Partial<GetCommissionPickupRes>) { super(init); (Object as any).assign(this, init); }
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

export class LeaveRequestConfigRes extends BaseResponse
{
    public subjects?: string[];
    public auditors?: { [index: string]: string; };
    public kidInfo?: BaseKidInfoDTO;

    public constructor(init?: Partial<LeaveRequestConfigRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetKidMyLeaveRequestRes extends BaseResponse
{
    public data?: KidMyLeaveRequestItem[];
    public parentRoles?: { [index: string]: string; };
    public studentInfos?: { [index: string]: StudentBaseInfoDTO; };
    public teacherInfos?: { [index: string]: TeacherBaseInfoDTO; };
    public classNames?: { [index: string]: string; };
    public ossInfos?: { [index: string]: OssInfoDTO; };

    public constructor(init?: Partial<GetKidMyLeaveRequestRes>) { super(init); (Object as any).assign(this, init); }
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

/** @description 教师获取代接送列表 */
// @Route("/attendance/school/{SchoolId}/teacher/commissionpickups", "GET, OPTIONS")
// @Api(Description="教师获取代接送列表")
export class GetCommissionPickupByTeacherReq implements IReturn<GetCommissionPickupRes>
{
    public schoolId?: string;
    public classId?: string;
    public byParent?: boolean;
    public lastId?: string;

    public constructor(init?: Partial<GetCommissionPickupByTeacherReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetCommissionPickupByTeacherReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetCommissionPickupRes(); }
}

/** @description 教师创建代接送 */
// @Route("/attendance/school/{SchoolId}/teacher/commissionpickups", "POST, OPTIONS")
// @Api(Description="教师创建代接送")
export class CreateCommissionPickupReq implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public classId?: string;
    public studentId?: string;
    public pickuperRelationName?: string;
    public pickuperRealName?: string;
    public pickuperPhotoOssId?: string;
    public byParent?: boolean;

    public constructor(init?: Partial<CreateCommissionPickupReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateCommissionPickupReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 新增教师请假/补卡 */
// @Route("/leaverequest/teachercreate", "POST, OPTIONS")
// @Api(Description="新增教师请假/补卡")
export class CreateTeacherLeaveRequestReq implements IReturn<BaseResponse>
{
    public type?: LEAVE_REQUEST_TYPE;
    public isCheckIn?: boolean;
    public schoolId?: string;
    public subject?: string;
    public desc?: string;
    public timeBegin?: string;
    public timeEnd?: string;
    public leaveHours?: string;
    public auditorId?: string;

    public constructor(init?: Partial<CreateTeacherLeaveRequestReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateTeacherLeaveRequestReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 取消教师请假 */
// @Route("/leaverequest/teachercancel", "POST, OPTIONS")
// @Api(Description="取消教师请假")
export class CancelTeacherLeaveRequestReq implements IReturn<BaseResponse>
{
    public leaveRequestId?: string;
    public schoolId?: string;

    public constructor(init?: Partial<CancelTeacherLeaveRequestReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CancelTeacherLeaveRequestReq'; }
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

/** @description 教师获取请假配置 */
// @Route("/leaverequest/teacherconfig", "GET, OPTIONS")
// @Api(Description="教师获取请假配置")
export class GetTeacherLeaveRequestConfigReq implements IReturn<LeaveRequestConfigRes>
{
    public schoolId?: string;

    public constructor(init?: Partial<GetTeacherLeaveRequestConfigReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetTeacherLeaveRequestConfigReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new LeaveRequestConfigRes(); }
}

/** @description 教师获取自己发起的请假列表 */
// @Route("/leaverequest/teacherrequests", "GET, OPTIONS")
// @Api(Description="教师获取自己发起的请假列表")
export class GetTeacherMyLeaveRequestReq implements IReturn<GetKidMyLeaveRequestRes>
{
    public schoolId?: string;

    public constructor(init?: Partial<GetTeacherMyLeaveRequestReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetTeacherMyLeaveRequestReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetKidMyLeaveRequestRes(); }
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

/** @description 新增学生请假/补卡 */
// @Route("/leaverequest/kidcreate", "POST, OPTIONS")
// @Api(Description="新增学生请假/补卡")
export class CreateKidLeaveRequestReq implements IReturn<BaseResponse>
{
    public type?: LEAVE_REQUEST_TYPE;
    public schoolId?: string;
    public classId?: string;
    public kidId?: string;
    public subject?: string;
    public desc?: string;
    public timeBegin?: string;
    public timeEnd?: string;
    public leaveHours?: string;
    public auditorId?: string;
    public byTeacher?: boolean;
    public attachment?: EventAttachDTO;

    public constructor(init?: Partial<CreateKidLeaveRequestReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateKidLeaveRequestReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 取消学生请假 */
// @Route("/leaverequest/kidcancel", "POST, OPTIONS")
// @Api(Description="取消学生请假")
export class CancelKidLeaveRequestReq implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public leaveRequestId?: string;
    public kidId?: string;
    public byTeacher?: boolean;

    public constructor(init?: Partial<CancelKidLeaveRequestReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CancelKidLeaveRequestReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

/** @description 学生获取请假配置 */
// @Route("/leaverequest/kidconfig", "GET, OPTIONS")
// @Api(Description="学生获取请假配置")
export class GetKidLeaveRequestConfigReq implements IReturn<LeaveRequestConfigRes>
{
    public schoolId?: string;
    public kidId?: string;

    public constructor(init?: Partial<GetKidLeaveRequestConfigReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetKidLeaveRequestConfigReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new LeaveRequestConfigRes(); }
}

/** @description 学生获取请假列表 */
// @Route("/leaverequest/kidrequests", "GET, OPTIONS")
// @Api(Description="学生获取请假列表")
export class GetKidMyLeaveRequestReq implements IReturn<GetKidMyLeaveRequestRes>
{
    public kidId?: string;
    public schoolId?: string;
    public beginDate?: string;
    public endDate?: string;
    public type?: LEAVE_REQUEST_TYPE;
    public state?: LEAVESTATE;

    public constructor(init?: Partial<GetKidMyLeaveRequestReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetKidMyLeaveRequestReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetKidMyLeaveRequestRes(); }
}

/** @description 确认代接送 */
// @Route("/attendance/school/{SchoolId}/parent/confirmcommissionpickup", "POST, OPTIONS")
// @Api(Description="确认代接送")
export class ConfirmCommissionPickupReq implements IReturn<BaseResponse>
{
    public schoolId?: string;
    public studentId?: string;
    public pickupId?: string;

    public constructor(init?: Partial<ConfirmCommissionPickupReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'ConfirmCommissionPickupReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new BaseResponse(); }
}

