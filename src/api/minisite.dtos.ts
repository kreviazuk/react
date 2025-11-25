/* Options:
Date: 2023-01-22 22:31:08
Version: 6.10
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://localhost:5000/api/educrm

//GlobalNamespace:
MakePropertiesOptional: True
AddServiceStackTypes: False
//AddResponseStatus: False
//AddImplicitVersion:
//AddDescriptionAsComments: True
IncludeTypes: GetSchoolMiniSiteReq,GetSchoolNameByParentReq,CommonReturn,GeoCoordinates,SchoolNameDTO,SchoolSiteDTO,SchoolSiteContentItemDTO,SchoolSiteTitle
//ExcludeTypes:
DefaultImports: ResponseStatus:./base.dtos,BaseResponse:./base.dtos,IReturn:./base.dtos,TeacherBaseInfoDTO:./base.dtos,ProTableRequest:./base.dtos
*/

import { ResponseStatus } from "./base.dtos";
import { BaseResponse } from "./base.dtos";
import { type IReturn } from "./base.dtos";
import { TeacherBaseInfoDTO } from "./base.dtos";
import { ProTableRequest } from "./base.dtos";

// @DataContract
export class GeoCoordinates {
  // @DataMember(Order=1)
  public lng?: number;

  // @DataMember(Order=2)
  public lat?: number;

  public constructor(init?: Partial<GeoCoordinates>) {
    (Object as any).assign(this, init);
  }
}

export class SchoolSiteContentItemDTO {
  public id?: string;
  public title?: string;
  public content?: string;
  public imageUrl?: string;
  public sortIndex?: number;

  public constructor(init?: Partial<SchoolSiteContentItemDTO>) {
    (Object as any).assign(this, init);
  }
}

export class SchoolSiteTitle {
  public schoolTitle?: string;
  public teacherTitle?: string;
  public studentTitle?: string;
  public honorTitle?: string;
  public schoolEnvTitle?: string;
  public classTitle?: string;
  public activityTitle?: string;
  public newsTitle?: string;
  public footerButtonTitle?: string;

  public constructor(init?: Partial<SchoolSiteTitle>) {
    (Object as any).assign(this, init);
  }
}

export class SchoolSiteDTO {
  public id?: string;
  public honorDesc?: string;
  public honorItems?: SchoolSiteContentItemDTO[];
  public schoolEnvDesc?: string;
  public schoolEnvImageUrls?: string[];
  public classItems?: SchoolSiteContentItemDTO[];
  public teacherDesc?: string;
  public title?: SchoolSiteTitle;
  public teacherItems?: SchoolSiteContentItemDTO[];
  public studentItems?: SchoolSiteContentItemDTO[];
  public newsItems?: SchoolSiteContentItemDTO[];
  public activityItems?: SchoolSiteContentItemDTO[];

  public constructor(init?: Partial<SchoolSiteDTO>) {
    (Object as any).assign(this, init);
  }
}

export class SchoolNameDTO {
  public id?: string;
  public name?: string;
  public eName?: string;
  public logoUrl?: string;
  public schoolImageUrl?: string;
  public desc?: string;
  public schoolType?: string;
  public province?: string;
  public city?: string;
  public district?: string;
  public phoneNumber?: string;
  public address?: string;
  public location?: GeoCoordinates;

  public constructor(init?: Partial<SchoolNameDTO>) {
    (Object as any).assign(this, init);
  }
}

export class CommonReturn {
  public ret?: boolean;
  public responseStatus?: ResponseStatus;
  public message?: string;
  public classId?: string;

  public constructor(init?: Partial<CommonReturn>) {
    (Object as any).assign(this, init);
  }
}

export class GetSchoolNameRes extends CommonReturn {
  public data?: SchoolNameDTO;

  public constructor(init?: Partial<GetSchoolNameRes>) {
    super(init);
    (Object as any).assign(this, init);
  }
}

export class GetSchoolMiniSiteRes extends BaseResponse {
  public data?: SchoolSiteDTO;

  public constructor(init?: Partial<GetSchoolMiniSiteRes>) {
    super(init);
    (Object as any).assign(this, init);
  }
}

/**
 * 获取园所信息
 */
// @Route("/schoolname/{SchoolId}", "GET, OPTIONS")
// @Api(Description="获取园所信息")
export class GetSchoolNameByParentReq implements IReturn<GetSchoolNameRes> {
  public schoolId?: string;

  public constructor(init?: Partial<GetSchoolNameByParentReq>) {
    (Object as any).assign(this, init);
  }
  public getTypeName() {
    return "GetSchoolNameByParentReq";
  }
  public getMethod() {
    return "POST";
  }
  public createResponse() {
    return new GetSchoolNameRes();
  }
}

/**
 * 获得学校微官网数据
 */
// @Route("/minisite/{SchoolId}", "GET, OPTIONS")
// @Api(Description="获得学校微官网数据")
export class GetSchoolMiniSiteReq implements IReturn<GetSchoolMiniSiteRes> {
  public schoolId?: string;

  public constructor(init?: Partial<GetSchoolMiniSiteReq>) {
    (Object as any).assign(this, init);
  }
  public getTypeName() {
    return "GetSchoolMiniSiteReq";
  }
  public getMethod() {
    return "POST";
  }
  public createResponse() {
    return new GetSchoolMiniSiteRes();
  }
}
