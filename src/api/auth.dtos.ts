/* Options:
Date: 2025-09-26 17:14:48
Version: 8.0
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://apigwtest.yban.co/api/educrm

//GlobalNamespace: 
MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
IncludeTypes: AuthenticateResponse,GetTeacherMyUserInfoReq,Authenticate,IPost
//ExcludeTypes: 
DefaultImports: IReturn:./base.dtos,CommonRequest:./base.dtos,TermInfoItem:./base.dtos,TeacherMyUserInfo:./base.dtos,IHasBearerToken:./base.dtos,IHasSessionId:./base.dtos,ResponseStatus:./base.dtos
*/

import { IReturn } from "./base.dtos";
import { CommonRequest } from "./base.dtos";
import { TermInfoItem } from "./base.dtos";
import { TeacherMyUserInfo } from "./base.dtos";
import { IHasBearerToken } from "./base.dtos";
import { IHasSessionId } from "./base.dtos";
import { ResponseStatus } from "./base.dtos";

export interface IPost
{
}

export class GetTeacherMyUserInfoRes
{
    public ret?: boolean;
    public data?: TeacherMyUserInfo;
    public termInfos?: TermInfoItem[];
    public schoolConfigs?: { [index: string]: Object; };

    public constructor(init?: Partial<GetTeacherMyUserInfoRes>) { (Object as any).assign(this, init); }
}

// @DataContract
export class AuthenticateResponse implements IHasSessionId, IHasBearerToken
{
    // @DataMember(Order=1)
    public userId?: string;

    // @DataMember(Order=2)
    public sessionId?: string;

    // @DataMember(Order=3)
    public userName?: string;

    // @DataMember(Order=4)
    public displayName?: string;

    // @DataMember(Order=5)
    public referrerUrl?: string;

    // @DataMember(Order=6)
    public bearerToken?: string;

    // @DataMember(Order=7)
    public refreshToken?: string;

    // @DataMember(Order=8)
    public profileUrl?: string;

    // @DataMember(Order=9)
    public roles?: string[];

    // @DataMember(Order=10)
    public permissions?: string[];

    // @DataMember(Order=11)
    public responseStatus?: ResponseStatus;

    // @DataMember(Order=12)
    public meta?: { [index: string]: string; };

    public constructor(init?: Partial<AuthenticateResponse>) { (Object as any).assign(this, init); }
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

/** @description Sign In */
// @Route("/auth", "OPTIONS,GET,POST,DELETE")
// @Route("/auth/{provider}", "OPTIONS,GET,POST,DELETE")
// @Api(Description="Sign In")
// @DataContract
export class Authenticate implements IReturn<AuthenticateResponse>, IPost
{
    /** @description AuthProvider, e.g. credentials */
    // @DataMember(Order=1)
    public provider?: string;

    // @DataMember(Order=2)
    public state?: string;

    // @DataMember(Order=3)
    public oauth_token?: string;

    // @DataMember(Order=4)
    public oauth_verifier?: string;

    // @DataMember(Order=5)
    public userName?: string;

    // @DataMember(Order=6)
    public password?: string;

    // @DataMember(Order=7)
    public rememberMe?: boolean;

    // @DataMember(Order=9)
    public errorView?: string;

    // @DataMember(Order=10)
    public nonce?: string;

    // @DataMember(Order=11)
    public uri?: string;

    // @DataMember(Order=12)
    public response?: string;

    // @DataMember(Order=13)
    public qop?: string;

    // @DataMember(Order=14)
    public nc?: string;

    // @DataMember(Order=15)
    public cnonce?: string;

    // @DataMember(Order=17)
    public accessToken?: string;

    // @DataMember(Order=18)
    public accessTokenSecret?: string;

    // @DataMember(Order=19)
    public scope?: string;

    // @DataMember(Order=20)
    public returnUrl?: string;

    // @DataMember(Order=21)
    public meta?: { [index: string]: string; };

    public constructor(init?: Partial<Authenticate>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'Authenticate'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AuthenticateResponse(); }
}

