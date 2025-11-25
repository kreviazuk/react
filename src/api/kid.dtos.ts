/* Options:
Date: 2025-06-09 14:04:36
Version: 8.0
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://apigwtest.yban.co/api/educrm

//GlobalNamespace: 
MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
IncludeTypes: AddKidToClassReq,GetSchoolKidsV2Req,GetSchoolKidReq,ORDER_DIRECTION
ExcludeTypes: CommonReturn,BaseResponse
DefaultImports: CommonReturn:./base.dtos,BaseResponse:./base.dtos,type IReturn:./base.dtos,GENDERTYPE:./base.dtos,ParentInfoDTO:./base.dtos,KID_ALLERGY:./base.dtos,BaseKidInfoDTO:./base.dtos,ParentRelationClassInfoDTO:./base.dtos,KIDACCOUNTSTATE:./base.dtos,STUDENT_STATUS:./base.dtos,KidInfoDTO:./base.dtos,StudentInfoDTO:./base.dtos
*/

import { CommonReturn } from "./base.dtos";
import { BaseResponse } from "./base.dtos";
import { type IReturn } from "./base.dtos";
import { GENDERTYPE } from "./base.dtos";
import { ParentInfoDTO } from "./base.dtos";
import { KID_ALLERGY } from "./base.dtos";
import { BaseKidInfoDTO } from "./base.dtos";
import { ParentRelationClassInfoDTO } from "./base.dtos";
import { KIDACCOUNTSTATE } from "./base.dtos";
import { STUDENT_STATUS } from "./base.dtos";
import { KidInfoDTO } from "./base.dtos";
import { StudentInfoDTO } from "./base.dtos";

export enum ORDER_DIRECTION
{
    ascend = 'ascend',
    descend = 'descend',
}

export class GetSchoolKidRes extends BaseResponse
{
    public data?: KidInfoDTO;
    public studentdata?: StudentInfoDTO;

    public constructor(init?: Partial<GetSchoolKidRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchoolKidsV2Res extends BaseResponse
{
    public totalCount?: number;
    public data?: BaseKidInfoDTO[];
    public parentData?: { [index: string]: ParentRelationClassInfoDTO[]; };

    public constructor(init?: Partial<GetSchoolKidsV2Res>) { super(init); (Object as any).assign(this, init); }
}

/** @description 获取学校的单个学生基本信息 */
// @Route("/school/{SchoolId}/kid/{KidId}", "GET, OPTIONS")
// @Api(Description="获取学校的单个学生基本信息")
export class GetSchoolKidReq implements IReturn<GetSchoolKidRes>
{
    public schoolId?: string;
    public kidId?: string;

    public constructor(init?: Partial<GetSchoolKidReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolKidReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSchoolKidRes(); }
}

/** @description 搜索学校的学生 */
// @Route("/v2/school/{SchoolId}/kids", "POST, OPTIONS")
// @Api(Description="搜索学校的学生")
export class GetSchoolKidsV2Req implements IReturn<GetSchoolKidsV2Res>
{
    public schoolId?: string;
    public branchIds?: string[];
    public classId?: string;
    public kidId?: string;
    public name?: string;
    public nickName?: string;
    public gender?: GENDERTYPE;
    public state?: KIDACCOUNTSTATE;
    public phoneNumber?: string;
    public birthDate?: string[];
    public createOn?: string[];
    public lastLoginOn?: string[];
    public lastModifyOn?: string[];
    public studentNumber?: string;
    public hobby?: string;
    public studentStatus?: STUDENT_STATUS;
    public onlyShowData?: boolean;
    public birthMonth?: number;
    public followUpTeacherUserInfoId?: string;
    public memberExpireOn?: string[];
    public accountBalanceAmount?: number[];
    public accountBalanceGiftAmount?: number[];
    public sort?: { [index: string]: ORDER_DIRECTION; };
    public pageSize?: number;
    public pageIndex?: number;

    public constructor(init?: Partial<GetSchoolKidsV2Req>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchoolKidsV2Req'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetSchoolKidsV2Res(); }
}

/** @description 添加学生到班级 */
// @Route("/school/{SchoolId}/kid", "POST, OPTIONS")
// @Api(Description="添加学生到班级")
export class AddKidToClassReq implements IReturn<CommonReturn>
{
    /** @description 学校id */
    // @ApiMember(DataType="string", Description="学校id", IsRequired=true, Name="SchoolId", ParameterType="path")
    public schoolId?: string;

    public branchId?: string;
    /** @description 班级id */
    // @ApiMember(DataType="string", Description="班级id", Name="ClassId", ParameterType="query")
    public classId?: string;

    /** @description 学生姓名 */
    // @ApiMember(DataType="string", Description="学生姓名", IsRequired=true, Name="Name", ParameterType="query")
    public name?: string;

    public nickName?: string;
    /** @description 出生日期 */
    // @ApiMember(DataType="string", Description="出生日期", IsRequired=true, Name="BirthDate", ParameterType="query")
    public birthDate?: string;

    public gender?: GENDERTYPE;
    public primaryContact?: ParentInfoDTO;
    public secondaryContact?: ParentInfoDTO;
    public allergies?: KID_ALLERGY[];
    public remark?: string;
    public partnerKidInfoId?: string;
    public teacherUserInfoId?: string;

    public constructor(init?: Partial<AddKidToClassReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddKidToClassReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CommonReturn(); }
}

