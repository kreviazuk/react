/* Options:
Date: 2025-10-14 14:25:54
Version: 8.0
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://apigwtest.yban.co/api/educrm

//GlobalNamespace: 
MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
IncludeTypes: AddEventVoteReq,AddEventTaskReq,AddEventShareReq,AddEventNotifyReq,AddEventClockInReq,GetTeachingThemeReq,AddEventKGTimeReq,GetClassEventsFeedByTeacherReq,EventFeedDTO,GetMultiClassEventsForTeacherV2Req,EventBaseDTO,KidBaseInfoDTO,GetKidEventShareDataReq,ClassEventItem,EventAttachItem,AttachImageItem,AttachVideoItem,AttachVoiceItem,AttachFileItem,AttachLinkItem,AttachTingItem,EventItemCommentItemDTO,EventLikeUserDTO,TASKATTACHTYPE,TeachingThemeDTO,TeachingThemeItemDTO,EVENT_HOMETIME_SCOPE,KIDACCOUNTSTATE,KidEntityUserAuthMapDTO,EVENTPUBLISHSTATE,EVENTAUDITSTATE,EventAttachDTO,EventAttachImageItemDTO,EventAttachVideoItemDTO,EventAttachAudioItemDTO,EventAttachFileItemDTO,EventAttachLinkItemDTO,EventAttachTingItemDTO,AddEventKGTimeLikeTeacherReq,AddEventKGTimeCommentTeacherReq,AddEventClockInItemLikeReq,AddEventHomeTimeLikeTeacherReq,ClassEventKGTimeDTO,AddEventNotifyFeedbackReq,NOTIFY_FEEDBACK_STATUS,UpdateGrowBookItemOrderIndexReq,UpdateGrowBookItemRotateReq,GetKidGrowBookReq,GrowBookDTO,OrderedObjectIdDTO,GetEventKidRemarkByIdReq,KidRemarkDTO,KID_REMARK_TYPE,KidRemarkItemDTO,EVALUATESTATE,KidRemarkItemCommentDTO,AddKidRemarkCommentReq,GetEventEvaluateByIdReq,EvaluateDTO,EVALUATETYPE,EvaluateItemDTO,EvaluateItemBaseDTO,EvaluateItemKidScoreDTO,GetEventVoteByIdReq,ClassEventVoteItem,VoteItemSerial,AnswerEventVoteReq,GetEventTaskByIdReq,ClassEventTaskItem,EventTaskItemDTO,AddEventTaskItemReq,UpdateEventTaskItemReq,AddEventClockInItemReq,AddEventTaskItemLikeReq,GetEventClockInByIdReq,ClassEventClockInItem,EVENTCLOCKINSTATE,EventClockInFrequency,EventClockInGroupDTO,GetEventClockInGroupByIdReq,EventClockInItemDTO,CLOCKIN_FREQUENCY,AddEventClockInItemLikeReq,AddEventHomeTimeReq,UpdateEventHomeTimeReq
ExcludeTypes: BaseResponse,IReturn,CommonReturn
DefaultImports: ClassEventTrendInfoV2:./base.dtos,ParentRelationSchoolInfoDTO:./base.dtos,ClassEventItemForTeacher:./base.dtos,TargetClassAndMember:./base.dtos,BaseResponse:./base.dtos,type IReturn:./base.dtos,CommonReturn:./base.dtos,GENDERTYPE:./base.dtos,KID_ALLERGY:./base.dtos,STUDENT_STATUS:./base.dtos,OssInfoDTO:./base.dtos,TeacherBaseInfoDTO:./base.dtos,StudentBaseInfoDTO:./base.dtos,KidInfoDTO:./base.dtos,KidClassInfoDTO:./base.dtos,SEMESTERTYPE:./base.dtos
*/

import { ClassEventTrendInfoV2 } from "./base.dtos";
import { ParentRelationSchoolInfoDTO } from "./base.dtos";
import { ClassEventItemForTeacher } from "./base.dtos";
import { TargetClassAndMember } from "./base.dtos";
import { BaseResponse } from "./base.dtos";
import { type IReturn } from "./base.dtos";
import { CommonReturn } from "./base.dtos";
import { GENDERTYPE } from "./base.dtos";
import { KID_ALLERGY } from "./base.dtos";
import { STUDENT_STATUS } from "./base.dtos";
import { OssInfoDTO } from "./base.dtos";
import { TeacherBaseInfoDTO } from "./base.dtos";
import { StudentBaseInfoDTO } from "./base.dtos";
import { KidInfoDTO } from "./base.dtos";
import { KidClassInfoDTO } from "./base.dtos";
import { SEMESTERTYPE } from "./base.dtos";

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

export enum KIDACCOUNTSTATE
{
    STATE_WAITAPPROVE = 'STATE_WAITAPPROVE',
    STATE_WAITLOGIN = 'STATE_WAITLOGIN',
    STATE_NORMAL = 'STATE_NORMAL',
}

export enum KID_REMARK_TYPE
{
    SEMESTER_REMARK = 'SEMESTER_REMARK',
    DAILY_REMARK = 'DAILY_REMARK',
}

export class KidRemarkItemCommentDTO
{
    public parentId?: string;
    public parentRole?: string;
    public content?: string;
    public createOn?: string;

    public constructor(init?: Partial<KidRemarkItemCommentDTO>) { (Object as any).assign(this, init); }
}

export class KidRemarkItemDTO
{
    public kidId?: string;
    public kidInfo?: KidInfoDTO;
    public content?: string;
    public comments?: KidRemarkItemCommentDTO[];
    public createOn?: string;
    public modifyOn?: string;

    public constructor(init?: Partial<KidRemarkItemDTO>) { (Object as any).assign(this, init); }
}

export enum TASKATTACHTYPE
{
    ALL = 'ALL',
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
    AUDIO = 'AUDIO',
}

export enum CLOCKIN_FREQUENCY
{
    ONEDAY = 'ONEDAY',
    TWODAY = 'TWODAY',
    WORKDAY = 'WORKDAY',
    WEEKEND = 'WEEKEND',
    CUSTOM = 'CUSTOM',
}

export class EventClockInFrequency
{
    public frequency?: CLOCKIN_FREQUENCY;
    public customWeekday?: number[];
    public needRemind?: boolean;
    public remindAt?: string;

    public constructor(init?: Partial<EventClockInFrequency>) { (Object as any).assign(this, init); }
}

export enum EVALUATESTATE
{
    WAIT_EDIT = 'WAIT_EDIT',
    WAIT_FILL = 'WAIT_FILL',
    FILLING = 'FILLING',
    FILLED = 'FILLED',
    PUBLISHED = 'PUBLISHED',
}

export enum EVENTAUDITSTATE
{
    NONEED_AUDIT = 'NONEED_AUDIT',
    WAIT_AUDIT = 'WAIT_AUDIT',
    FINISH_AUDITED = 'FINISH_AUDITED',
}

export enum EVENTPUBLISHSTATE
{
    STATE_ALLSEE = 'STATE_ALLSEE',
    STATE_INIT = 'STATE_INIT',
    STATE_OWNERSEE = 'STATE_OWNERSEE',
    STATE_WAITAUDIT = 'STATE_WAITAUDIT',
    STATE_DELETE = 'STATE_DELETE',
}

export class VoteItemSerial
{
    public typeName?: string;
    public jsonString?: string;

    public constructor(init?: Partial<VoteItemSerial>) { (Object as any).assign(this, init); }
}

export enum EVALUATETYPE
{
    DAILY_EVALUATE = 'DAILY_EVALUATE',
    SEMESTER_EVALUATE = 'SEMESTER_EVALUATE',
}

export class EvaluateItemKidScoreDTO
{
    public kidId?: string;
    public kidInfo?: KidInfoDTO;
    public score?: number;

    public constructor(init?: Partial<EvaluateItemKidScoreDTO>) { (Object as any).assign(this, init); }
}

export class EvaluateItemBaseDTO
{
    public id?: string;
    public title?: string;
    public subTitle?: string;
    public desc?: string;
    public orderIndex?: number;
    public createBy?: number;
    public createByUserName?: string;
    public createOn?: string;
    public isGlobal?: boolean;

    public constructor(init?: Partial<EvaluateItemBaseDTO>) { (Object as any).assign(this, init); }
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

export enum NOTIFY_FEEDBACK_STATUS
{
    FEEDBACK_YUE = 'FEEDBACK_YUE',
    FEEDBACK_ZAN = 'FEEDBACK_ZAN',
    FEEDBACK_YIHUO = 'FEEDBACK_YIHUO',
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

export enum EVENTCLOCKINSTATE
{
    UNBEGIN = 'UNBEGIN',
    BEGINING = 'BEGINING',
    FINISHED = 'FINISHED',
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

export class EventTaskItemDTO
{
    public id?: string;
    public content?: string;
    public createOn?: string;
    public createIPAddr?: string;
    public attachment?: EventAttachItem;
    public likeUids?: number[];
    public kidName?: string;
    public kidId?: string;
    public parentRole?: string;
    public parentId?: string;
    public kidAvatarUrl?: string;
    public commentItems?: EventItemCommentItemDTO[];

    public constructor(init?: Partial<EventTaskItemDTO>) { (Object as any).assign(this, init); }
}

export class EvaluateItemDTO extends EvaluateItemBaseDTO
{
    public isFinish?: boolean;
    public kidScores?: EvaluateItemKidScoreDTO[];

    public constructor(init?: Partial<EvaluateItemDTO>) { super(init); (Object as any).assign(this, init); }
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

export class EventClockInGroupDTO
{
    public id?: string;
    public clockInDate?: string;
    public timestamp?: number;
    public canSubmit?: boolean;
    public isToday?: number;
    public dakaCount?: number;

    public constructor(init?: Partial<EventClockInGroupDTO>) { (Object as any).assign(this, init); }
}

export class ClassEventClockInItem extends ClassEventItem
{
    public canSeeOther?: boolean;
    public beginTime?: string;
    public endTime?: string;
    public state?: EVENTCLOCKINSTATE;
    public tags?: string[];
    public targetTotalNum?: number;
    public frequencyConfig?: EventClockInFrequency;
    public eventClockInGroups?: EventClockInGroupDTO[];

    public constructor(init?: Partial<ClassEventClockInItem>) { super(init); (Object as any).assign(this, init); }
}

export class KidRemarkDTO
{
    public id?: string;
    public classId?: string;
    public schoolId?: string;
    public title?: string;
    public remarkType?: KID_REMARK_TYPE;
    public semesterType?: SEMESTERTYPE;
    public authorName?: string;
    public remarks?: KidRemarkItemDTO[];
    public createOn?: string;
    public lastModifyOn?: string;
    public state?: EVALUATESTATE;

    public constructor(init?: Partial<KidRemarkDTO>) { (Object as any).assign(this, init); }
}

export class ClassEventTaskItem extends ClassEventItem
{
    public taskItems?: EventTaskItemDTO[];
    public canSeeOther?: boolean;

    public constructor(init?: Partial<ClassEventTaskItem>) { super(init); (Object as any).assign(this, init); }
}

export class EventClockInItemDTO
{
    public id?: string;
    public clockInGroupId?: string;
    public kidName?: string;
    public kidId?: string;
    public parentRole?: string;
    public parentId?: string;
    public kidAvatarUrl?: string;
    public content?: string;
    public createOn?: string;
    public isDelete?: boolean;
    public createBy?: number;
    public createIPAddr?: string;
    public deleteBy?: number;
    public deleteOn?: string;
    public deleteIPAddr?: string;
    public attachment?: EventAttachItem;
    public likeUids?: number[];
    public commentItems?: EventItemCommentItemDTO[];
    public clockInCount?: number;

    public constructor(init?: Partial<EventClockInItemDTO>) { (Object as any).assign(this, init); }
}

export class EventBaseDTO
{
    public id?: string;
    public schoolId?: string;
    public classId?: string;
    public createOn?: string;
    public updatedOn?: string;
    public timeStamp?: number;
    public lastModifyOn?: string;
    public isDelete?: boolean;
    public createBy?: number;
    public createIPAddr?: string;
    public deleteBy?: number;
    public deleteOn?: string;
    public deleteIPAddr?: string;
    public showOn?: string;
    public showBeforeTimestamp?: number;
    public title?: string;
    public content?: string;
    public attachment?: EventAttachDTO;
    public targetKids?: string[];
    public isPartialPublish?: boolean;
    public syncAttach?: boolean;
    public publishState?: EVENTPUBLISHSTATE;
    public auditState?: EVENTAUDITSTATE;
    public auditByUId?: number;
    public teachingThemeId?: string;
    public commentType?: TASKATTACHTYPE;
    public termId?: number;
    public contentTime?: string;
    public needPayment?: boolean;
    public paymentCourseId?: string;
    public paymentPrice?: number;
    public isVisited?: boolean;
    public isAcked?: boolean;
    public eventType?: string;
    public kidId?: string;
    public parentRelationSchoolInfoId?: string;
    public teacherUserInfoId?: string;
    public extraFields?: { [index: string]: Object; };
    public studentTotalCount?: number;
    public isCanPublish?: boolean;
    public isCanUpdate?: boolean;
    public privacyMode?: boolean;
    public privacyAttachments?: { [index: string]: EventAttachDTO; };

    public constructor(init?: Partial<EventBaseDTO>) { (Object as any).assign(this, init); }
}

export class KidEntityUserAuthMapDTO
{
    public id?: string;
    public userId?: number;
    public kidEntityId?: string;
    public isDefault?: boolean;
    public parentRole?: string;
    public isDelete?: boolean;
    public createOn?: string;
    public lastModifyOn?: string;
    public rongCloudUserId?: string;
    public easeMobUserId?: string;
    public phoneNumber?: string;
    public isActive?: boolean;

    public constructor(init?: Partial<KidEntityUserAuthMapDTO>) { (Object as any).assign(this, init); }
}

export class TeachingThemeDTO
{
    public id?: string;
    public title?: string;
    public content?: string;
    public createBy?: number;
    public createOn?: string;
    public semesterType?: SEMESTERTYPE;
    public orderIndex?: number;
    public classId?: string;
    public schoolId?: string;
    public lastModifyOn?: string;

    public constructor(init?: Partial<TeachingThemeDTO>) { (Object as any).assign(this, init); }
}

export class ClassEventKGTimeDTO extends ClassEventItem
{

    public constructor(init?: Partial<ClassEventKGTimeDTO>) { super(init); (Object as any).assign(this, init); }
}

export class EventFeedDTO
{
    public eventId?: string;
    public kidId?: string;
    public classId?: string;
    public schoolId?: string;
    public eventType?: string;
    public timestamp?: number;
    public isViewed?: boolean;
    public isAcked?: boolean;

    public constructor(init?: Partial<EventFeedDTO>) { (Object as any).assign(this, init); }
}

export class EvaluateDTO
{
    public id?: string;
    public classId?: string;
    public schoolId?: string;
    public title?: string;
    public evaluateType?: EVALUATETYPE;
    public semesterType?: SEMESTERTYPE;
    public finishTime?: string;
    public createBy?: number;
    public createByUserName?: string;
    public createOn?: string;
    public evaluateState?: EVALUATESTATE;
    public publishOn?: string;
    public items?: EvaluateItemDTO[];
    public targetKids?: string[];

    public constructor(init?: Partial<EvaluateDTO>) { (Object as any).assign(this, init); }
}

export class KidBaseInfoDTO
{
    public parentRelationId?: string;
    public kidId?: string;
    public kidName?: string;
    public nickName?: string;
    public classInfos?: KidClassInfoDTO[];
    public schoolName?: string;
    public schoolId?: string;
    public avatarUrl?: string;
    public gender?: GENDERTYPE;
    public hobby?: string;
    public allergies?: KID_ALLERGY[];
    public followUpTeacherUserInfoId?: string;
    public birthDate?: string;
    public parentRole?: string;
    public kidEntityId?: string;
    public kidEntityName?: string;
    public state?: KIDACCOUNTSTATE;
    public studentStatus?: STUDENT_STATUS;
    public isAppMember?: boolean;
    public hideMemberCenter?: boolean;
    public appMemberExpiredOn?: string;

    public constructor(init?: Partial<KidBaseInfoDTO>) { (Object as any).assign(this, init); }
}

export class OrderedObjectIdDTO
{
    public id?: string;
    public orderIndex?: number;
    public rotate?: number;

    public constructor(init?: Partial<OrderedObjectIdDTO>) { (Object as any).assign(this, init); }
}

export class GrowBookDTO
{
    public id?: string;
    public kidId?: string;
    public termId?: number;
    public eventId?: string;
    public eventType?: string;
    public lastModifyOn?: string;
    public createOn?: string;
    public playerUrl?: string;
    public hasVideo?: boolean;
    public hasAudio?: boolean;
    public childItems?: OrderedObjectIdDTO[];
    public contentTime?: string;

    public constructor(init?: Partial<GrowBookDTO>) { (Object as any).assign(this, init); }
}

export class ClassEventVoteItem extends ClassEventItem
{
    public questions?: VoteItemSerial[];
    public isAnonymous?: boolean;
    public canSeeResult?: boolean;
    public endTime?: string;

    public constructor(init?: Partial<ClassEventVoteItem>) { super(init); (Object as any).assign(this, init); }
}

export class GetClassEventForTeacherRes
{
    public ret?: boolean;
    public message?: string;
    public data?: ClassEventItemForTeacher;

    public constructor(init?: Partial<GetClassEventForTeacherRes>) { (Object as any).assign(this, init); }
}

export class GetMultiClassEventsForTeacherV2Res extends BaseResponse
{
    public data?: EventBaseDTO[];
    public ossinfos?: { [index: string]: OssInfoDTO; };
    public classinfos?: { [index: string]: KidClassInfoDTO; };
    public teacherinfos?: { [index: string]: TeacherBaseInfoDTO; };
    public parentinfos?: { [index: string]: ParentRelationSchoolInfoDTO; };
    public studentinfos?: { [index: string]: StudentBaseInfoDTO; };
    public kidusermaps?: { [index: string]: KidEntityUserAuthMapDTO; };
    public likeinfos?: { [index: string]: EventLikeUserDTO[]; };
    public commentinfos?: { [index: string]: EventItemCommentItemDTO[]; };
    public themeinfos?: { [index: string]: TeachingThemeDTO; };
    public trendInfos?: { [index: string]: ClassEventTrendInfoV2; };
    public classSemesterTypes?: { [index: string]: { [index:number]: SEMESTERTYPE; }; };

    public constructor(init?: Partial<GetMultiClassEventsForTeacherV2Res>) { super(init); (Object as any).assign(this, init); }
}

export class GetClassEventsFeedRes
{
    public ret?: boolean;
    public message?: string;
    public data?: EventFeedDTO[];

    public constructor(init?: Partial<GetClassEventsFeedRes>) { (Object as any).assign(this, init); }
}

export class TeachingThemeItemDTO
{
    public id?: string;
    public classId?: string;
    public schoolId?: string;
    public title?: string;
    public content?: string;
    public createUserName?: string;
    public createOn?: string;
    public eventsCount?: number;
    public semesterType?: SEMESTERTYPE;
    public semesterStr?: string;

    public constructor(init?: Partial<TeachingThemeItemDTO>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'TeachingThemeItemDTO'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class GetTeachingThemeRes
{
    public data?: TeachingThemeItemDTO[];

    public constructor(init?: Partial<GetTeachingThemeRes>) { (Object as any).assign(this, init); }
}

export class AddKidRemarkCommentRes extends CommonReturn
{
    public data?: KidRemarkDTO;

    public constructor(init?: Partial<AddKidRemarkCommentRes>) { super(init); (Object as any).assign(this, init); }
}

export class UpdateEventCommonRes extends CommonReturn
{
    public data?: ClassEventItem;

    public constructor(init?: Partial<UpdateEventCommonRes>) { super(init); (Object as any).assign(this, init); }
}

export class AnswerEventVoteRes extends CommonReturn
{
    public data?: ClassEventItem;

    public constructor(init?: Partial<AnswerEventVoteRes>) { super(init); (Object as any).assign(this, init); }
}

export class AddEventNotifyFeedbackRes extends CommonReturn
{
    public data?: ClassEventItem;

    public constructor(init?: Partial<AddEventNotifyFeedbackRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetEventTaskByIdRes
{
    public ret?: boolean;
    public message?: string;
    public eventitem?: ClassEventTaskItem;

    public constructor(init?: Partial<GetEventTaskByIdRes>) { (Object as any).assign(this, init); }
}

export class GetEventClockInByIdRes extends CommonReturn
{
    public data?: ClassEventClockInItem;

    public constructor(init?: Partial<GetEventClockInByIdRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetEventClockInGroupItemsByIdRes extends CommonReturn
{
    public data?: EventClockInItemDTO[];

    public constructor(init?: Partial<GetEventClockInGroupItemsByIdRes>) { super(init); (Object as any).assign(this, init); }
}

export class ClassEventShareRes
{
    public code?: number;
    public message?: string;
    public qrUrl?: string;
    public data?: ClassEventItem;

    public constructor(init?: Partial<ClassEventShareRes>) { (Object as any).assign(this, init); }
}

export class GetKidGrowBookRes extends BaseResponse
{
    public data?: GrowBookDTO;

    public constructor(init?: Partial<GetKidGrowBookRes>) { super(init); (Object as any).assign(this, init); }
}

export class AddEventTaskItemRes extends CommonReturn
{
    public data?: ClassEventTaskItem;

    public constructor(init?: Partial<AddEventTaskItemRes>) { super(init); (Object as any).assign(this, init); }
}

export class GetEventEvaluateByIdRes
{
    public ret?: boolean;
    public message?: string;
    public evaluateDTO?: EvaluateDTO;

    public constructor(init?: Partial<GetEventEvaluateByIdRes>) { (Object as any).assign(this, init); }
}

export class GetEventKidRemarkByIdRes
{
    public ret?: boolean;
    public message?: string;
    public kidremarkDTO?: KidRemarkDTO;

    public constructor(init?: Partial<GetEventKidRemarkByIdRes>) { (Object as any).assign(this, init); }
}

export class GetEventVoteByIdRes
{
    public ret?: boolean;
    public message?: string;
    public eventitem?: ClassEventVoteItem;

    public constructor(init?: Partial<GetEventVoteByIdRes>) { (Object as any).assign(this, init); }
}

/** @description 发布成长任务 */
// @Route("/class/event/tasks", "POST, OPTIONS")
// @Api(Description="发布成长任务")
export class AddEventTaskReq implements IReturn<CommonReturn>
{
    public targets?: TargetClassAndMember[];
    /** @description 学校Id */
    // @ApiMember(DataType="string", Description="学校Id", IsRequired=true, Name="SchoolId", ParameterType="query")
    public schoolId?: string;

    /** @description 标题 */
    // @ApiMember(DataType="string", Description="标题", IsRequired=true, Name="Title", ParameterType="query")
    public title?: string;

    /** @description 内容 */
    // @ApiMember(DataType="string", Description="内容", IsRequired=true, Name="Content", ParameterType="query")
    public content?: string;

    public attachItem?: EventAttachItem;
    /** @description 发布时间 */
    // @ApiMember(DataType="string", Description="发布时间", Name="PublishTime", ParameterType="query")
    public publishTime?: string;

    /** @description 家长是否相互可见 */
    // @ApiMember(DataType="boolean", Description="家长是否相互可见", Name="CanSeeOther", ParameterType="query")
    public canSeeOther?: boolean;

    public endTime?: string;
    /** @description 主题Id */
    // @ApiMember(DataType="string", Description="主题Id", Name="ThemeId", ParameterType="query")
    public themeId?: string;

    /** @description 家长可回复的形式 */
    // @ApiMember(DataType="string", Description="家长可回复的形式", Name="CommentType", ParameterType="query")
    public commentType?: TASKATTACHTYPE;

    public isPartialPublish?: boolean;
    /** @description NeedPayment */
    // @ApiMember(DataType="boolean", Description="NeedPayment", Name="NeedPayment", ParameterType="query")
    public needPayment?: boolean;

    /** @description PaymentPrice */
    // @ApiMember(DataType="integer", Description="PaymentPrice", Name="PaymentPrice", ParameterType="query")
    public paymentPrice?: number;

    public constructor(init?: Partial<AddEventTaskReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddEventTaskReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CommonReturn(); }
}

/** @description 发布打卡任务 */
// @Route("/class/event/clockin", "POST, OPTIONS")
// @Api(Description="发布打卡任务")
export class AddEventClockInReq implements IReturn<CommonReturn>
{
    public targets?: TargetClassAndMember[];
    public title?: string;
    public desc?: string;
    public canSeeOther?: boolean;
    public tags?: string[];
    public beginTime?: string;
    public endTime?: string;
    public frequencyConfig?: EventClockInFrequency;
    public attachItem?: EventAttachItem;
    public enableSyncAttach?: boolean;
    public publishTime?: string;
    public isPartialPublish?: boolean;

    public constructor(init?: Partial<AddEventClockInReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddEventClockInReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CommonReturn(); }
}

/** @description 教师在园时光添加评论 */
// @Route("/class/event/kgtime/{EventId}/tcomment", "POST, OPTIONS")
// @Api(Description="教师在园时光添加评论")
export class AddEventKGTimeCommentTeacherReq implements IReturn<GetClassEventForTeacherRes>
{
    /** @description SchoolId */
    // @ApiMember(DataType="string", Description="SchoolId", Name="SchoolId", ParameterType="query")
    public schoolId?: string;

    /** @description 消息id */
    // @ApiMember(DataType="string", Description="消息id", IsRequired=true, Name="EventId", ParameterType="path")
    public eventId?: string;

    /** @description 回复哪个用户id，非回复留空 */
    // @ApiMember(DataType="string", Description="回复哪个用户id，非回复留空", IsRequired=true, Name="ReplyTo", ParameterType="query")
    public replyTo?: string;

    /** @description 是否是语音回复 */
    // @ApiMember(DataType="boolean", Description="是否是语音回复", IsRequired=true, Name="IsAudio", ParameterType="query")
    public isAudio?: boolean;

    /** @description 文字回复内容 */
    // @ApiMember(DataType="string", Description="文字回复内容", Name="Content", ParameterType="query")
    public content?: string;

    public attachItem?: EventAttachItem;

    public constructor(init?: Partial<AddEventKGTimeCommentTeacherReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddEventKGTimeCommentTeacherReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetClassEventForTeacherRes(); }
}

/** @description 教师家庭时光点赞 */
// @Route("/class/event/hometime/{EventId}/tlike", "POST, OPTIONS")
// @Api(Description="教师家庭时光点赞")
export class AddEventHomeTimeLikeTeacherReq implements IReturn<GetClassEventForTeacherRes>
{
    /** @description SchoolId */
    // @ApiMember(DataType="string", Description="SchoolId", Name="SchoolId", ParameterType="query")
    public schoolId?: string;

    /** @description 消息id */
    // @ApiMember(DataType="string", Description="消息id", IsRequired=true, Name="EventId", ParameterType="path")
    public eventId?: string;

    /** @description 是点赞还是取消点赞 */
    // @ApiMember(DataType="boolean", Description="是点赞还是取消点赞", IsRequired=true, Name="IsLike", ParameterType="query")
    public isLike?: boolean;

    public constructor(init?: Partial<AddEventHomeTimeLikeTeacherReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddEventHomeTimeLikeTeacherReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetClassEventForTeacherRes(); }
}

/** @description 教师在园时光点赞 */
// @Route("/class/event/kgtime/{EventId}/tlike", "POST, OPTIONS")
// @Api(Description="教师在园时光点赞")
export class AddEventKGTimeLikeTeacherReq implements IReturn<GetClassEventForTeacherRes>
{
    /** @description SchoolId */
    // @ApiMember(DataType="string", Description="SchoolId", Name="SchoolId", ParameterType="query")
    public schoolId?: string;

    /** @description 消息id */
    // @ApiMember(DataType="string", Description="消息id", IsRequired=true, Name="EventId", ParameterType="path")
    public eventId?: string;

    /** @description 是点赞还是取消点赞 */
    // @ApiMember(DataType="boolean", Description="是点赞还是取消点赞", IsRequired=true, Name="IsLike", ParameterType="query")
    public isLike?: boolean;

    public constructor(init?: Partial<AddEventKGTimeLikeTeacherReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddEventKGTimeLikeTeacherReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetClassEventForTeacherRes(); }
}

/** @description 获取教师多条消息接口V2 */
// @Route("/v2/teacher/events", "POST, OPTIONS")
// @Api(Description="获取教师多条消息接口V2")
export class GetMultiClassEventsForTeacherV2Req implements IReturn<GetMultiClassEventsForTeacherV2Res>
{
    /** @description EventId列表 */
    // @ApiMember(DataType="array", Description="EventId列表", IsRequired=true, Name="EventIds", ParameterType="query")
    public eventIds?: string[];

    /** @description SchoolId */
    // @ApiMember(DataType="string", Description="SchoolId", IsRequired=true, Name="SchoolId", ParameterType="query")
    public schoolId?: string;

    public constructor(init?: Partial<GetMultiClassEventsForTeacherV2Req>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMultiClassEventsForTeacherV2Req'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetMultiClassEventsForTeacherV2Res(); }
}

/** @description 发布通知 */
// @Route("/class/event/notifys", "POST, OPTIONS")
// @Api(Description="发布通知")
export class AddEventNotifyReq implements IReturn<CommonReturn>
{
    public targets?: TargetClassAndMember[];
    /** @description 学校Id */
    // @ApiMember(DataType="string", Description="学校Id", IsRequired=true, Name="SchoolId", ParameterType="query")
    public schoolId?: string;

    /** @description 标题 */
    // @ApiMember(DataType="string", Description="标题", IsRequired=true, Name="Title", ParameterType="query")
    public title?: string;

    /** @description 内容 */
    // @ApiMember(DataType="string", Description="内容", IsRequired=true, Name="Content", ParameterType="query")
    public content?: string;

    public attachItem?: EventAttachItem;
    public publishTime?: string;
    public isPartialPublish?: boolean;

    public constructor(init?: Partial<AddEventNotifyReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddEventNotifyReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CommonReturn(); }
}

/** @description 发布分享消息 */
// @Route("/class/event/shares", "POST, OPTIONS")
// @Api(Description="发布分享消息")
export class AddEventShareReq implements IReturn<CommonReturn>
{
    public targets?: TargetClassAndMember[];
    /** @description 学校Id */
    // @ApiMember(DataType="string", Description="学校Id", IsRequired=true, Name="SchoolId", ParameterType="query")
    public schoolId?: string;

    /** @description 标题 */
    // @ApiMember(DataType="string", Description="标题", IsRequired=true, Name="Title", ParameterType="query")
    public title?: string;

    /** @description 内容 */
    // @ApiMember(DataType="string", Description="内容", IsRequired=true, Name="Content", ParameterType="query")
    public content?: string;

    public attachItem?: EventAttachItem;
    /** @description 发布时间 */
    // @ApiMember(DataType="string", Description="发布时间", Name="PublishTime", ParameterType="query")
    public publishTime?: string;

    public isPartialPublish?: boolean;

    public constructor(init?: Partial<AddEventShareReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddEventShareReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CommonReturn(); }
}

/** @description 发布在园时光 */
// @Route("/class/event/kgtimes", "POST, OPTIONS")
// @Api(Description="发布在园时光")
export class AddEventKGTimeReq implements IReturn<CommonReturn>
{
    public targets?: TargetClassAndMember[];
    /** @description 学校Id */
    // @ApiMember(DataType="string", Description="学校Id", IsRequired=true, Name="SchoolId", ParameterType="query")
    public schoolId?: string;

    /** @description 标题 */
    // @ApiMember(DataType="string", Description="标题", IsRequired=true, Name="Title", ParameterType="query")
    public title?: string;

    /** @description 内容 */
    // @ApiMember(DataType="string", Description="内容", IsRequired=true, Name="Content", ParameterType="query")
    public content?: string;

    public attachItem?: EventAttachItem;
    /** @description 发布时间 */
    // @ApiMember(DataType="string", Description="发布时间", Name="PublishTime", ParameterType="query")
    public publishTime?: string;

    /** @description 主题Id */
    // @ApiMember(DataType="string", Description="主题Id", Name="ThemeId", ParameterType="query")
    public themeId?: string;

    /** @description IsOnlySave */
    // @ApiMember(DataType="boolean", Description="IsOnlySave", Name="IsOnlySave", ParameterType="query")
    public isOnlySave?: boolean;

    /** @description IsPartialPublish */
    // @ApiMember(DataType="boolean", Description="IsPartialPublish", Name="IsPartialPublish", ParameterType="query")
    public isPartialPublish?: boolean;

    /** @description NeedPayment */
    // @ApiMember(DataType="boolean", Description="NeedPayment", Name="NeedPayment", ParameterType="query")
    public needPayment?: boolean;

    /** @description PaymentPrice */
    // @ApiMember(DataType="integer", Description="PaymentPrice", Name="PaymentPrice", ParameterType="query")
    public paymentPrice?: number;

    /** @description 隐私模式 */
    // @ApiMember(DataType="boolean", Description="隐私模式", Name="PrivacyMode", ParameterType="query")
    public privacyMode?: boolean;

    public privacyAttachments?: { [index: string]: EventAttachItem; };

    public constructor(init?: Partial<AddEventKGTimeReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddEventKGTimeReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CommonReturn(); }
}

/** @description 发布投票类消息 */
// @Route("/class/event/vote", "POST, OPTIONS")
// @Api(Description="发布投票类消息")
export class AddEventVoteReq implements IReturn<CommonReturn>
{
    public targets?: TargetClassAndMember[];
    /** @description 学校Id */
    // @ApiMember(DataType="string", Description="学校Id", IsRequired=true, Name="SchoolId", ParameterType="query")
    public schoolId?: string;

    public title?: string;
    public content?: string;
    public enableSyncAttach?: boolean;
    public publishTime?: string;
    public isAnonymous?: boolean;
    public canSeeResult?: boolean;
    public endTime?: string;
    public questions?: VoteItemSerial[];
    public isPartialPublish?: boolean;

    public constructor(init?: Partial<AddEventVoteReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddEventVoteReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CommonReturn(); }
}

/** @description 获取教师动态feed列表 */
// @Route("/feeds/teacherevent", "GET, OPTIONS")
// @Api(Description="获取教师动态feed列表")
export class GetClassEventsFeedByTeacherReq implements IReturn<GetClassEventsFeedRes>
{
    /** @description 班级id */
    // @ApiMember(DataType="string", Description="班级id", IsRequired=true, Name="ClassId", ParameterType="query")
    public classId?: string;

    public isHeadMode?: boolean;
    public classIds?: string[];

    public constructor(init?: Partial<GetClassEventsFeedByTeacherReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetClassEventsFeedByTeacherReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetClassEventsFeedRes(); }
}

/** @description 获取所有主题列表 */
// @Route("/class/teachingthemes", "GET, OPTIONS")
// @Api(Description="获取所有主题列表")
export class GetTeachingThemeReq implements IReturn<GetTeachingThemeRes>
{
    public classId?: string;
    public isHeadMode?: boolean;

    public constructor(init?: Partial<GetTeachingThemeReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetTeachingThemeReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetTeachingThemeRes(); }
}

/** @description 家长填写评语的评论 */
// @Route("/class/{ClassId}/kidremark/{KidRemarkId}/comment", "POST, OPTIONS")
// @Api(Description="家长填写评语的评论")
export class AddKidRemarkCommentReq implements IReturn<AddKidRemarkCommentRes>
{
    /** @description 班级id */
    // @ApiMember(DataType="string", Description="班级id", IsRequired=true, Name="ClassId", ParameterType="path")
    public classId?: string;

    /** @description 评语id */
    // @ApiMember(DataType="string", Description="评语id", IsRequired=true, Name="KidRemarkId", ParameterType="path")
    public kidRemarkId?: string;

    /** @description kidid */
    // @ApiMember(DataType="string", Description="kidid", IsRequired=true, Name="KidId", ParameterType="query")
    public kidId?: string;

    /** @description 评论内容 */
    // @ApiMember(DataType="string", Description="评论内容", IsRequired=true, Name="Content", ParameterType="query")
    public content?: string;

    public constructor(init?: Partial<AddKidRemarkCommentReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddKidRemarkCommentReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AddKidRemarkCommentRes(); }
}

/** @description 更新家庭时光 */
// @Route("/class/event/hometimes/{EventId}", "PUT, OPTIONS")
// @Api(Description="更新家庭时光")
export class UpdateEventHomeTimeReq implements IReturn<UpdateEventCommonRes>
{
    /** @description 消息id */
    // @ApiMember(DataType="string", Description="消息id", IsRequired=true, Name="EventId", ParameterType="path")
    public eventId?: string;

    /** @description 标题 */
    // @ApiMember(DataType="string", Description="标题", IsRequired=true, Name="Title", ParameterType="query")
    public title?: string;

    /** @description 内容 */
    // @ApiMember(DataType="string", Description="内容", IsRequired=true, Name="Content", ParameterType="query")
    public content?: string;

    /** @description 发布时间 */
    // @ApiMember(DataType="string", Description="发布时间", Name="PublishTime", ParameterType="query")
    public publishTime?: string;

    public attachItem?: EventAttachItem;

    public constructor(init?: Partial<UpdateEventHomeTimeReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateEventHomeTimeReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new UpdateEventCommonRes(); }
}

/** @description 发布家庭时光 */
// @Route("/class/event/hometimes", "POST, OPTIONS")
// @Api(Description="发布家庭时光")
export class AddEventHomeTimeReq implements IReturn<CommonReturn>
{
    /** @description KidId */
    // @ApiMember(DataType="string", Description="KidId", IsRequired=true, Name="KidId", ParameterType="query")
    public kidId?: string;

    /** @description 班级Id,如果为空则为全园广播消息 */
    // @ApiMember(DataType="string", Description="班级Id,如果为空则为全园广播消息", Name="ClassId", ParameterType="query")
    public classId?: string;

    /** @description 学校Id */
    // @ApiMember(DataType="string", Description="学校Id", IsRequired=true, Name="SchoolId", ParameterType="query")
    public schoolId?: string;

    /** @description 标题 */
    // @ApiMember(DataType="string", Description="标题", IsRequired=true, Name="Title", ParameterType="query")
    public title?: string;

    /** @description 内容 */
    // @ApiMember(DataType="string", Description="内容", IsRequired=true, Name="Content", ParameterType="query")
    public content?: string;

    /** @description 发布时间 */
    // @ApiMember(DataType="string", Description="发布时间", Name="PublishTime", ParameterType="query")
    public publishTime?: string;

    public attachItem?: EventAttachItem;
    /** @description 可见范围 */
    // @ApiMember(DataType="string", Description="可见范围", IsRequired=true, Name="Scope", ParameterType="query")
    public scope?: EVENT_HOMETIME_SCOPE;

    public constructor(init?: Partial<AddEventHomeTimeReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddEventHomeTimeReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CommonReturn(); }
}

/** @description 投票消息家长投票 */
// @Route("/class/event/vote/{eventid}", "POST, OPTIONS")
// @Api(Description="投票消息家长投票")
export class AnswerEventVoteReq implements IReturn<AnswerEventVoteRes>
{
    /** @description 消息id */
    // @ApiMember(DataType="string", Description="消息id", IsRequired=true, Name="eventid", ParameterType="path")
    public eventid?: string;

    /** @description KidId */
    // @ApiMember(DataType="string", Description="KidId", IsRequired=true, Name="KidId", ParameterType="query")
    public kidId?: string;

    public userVoteAnswer?: { [index: string]: string; };
    public userAttachAnswer?: { [index: string]: EventAttachDTO; };

    public constructor(init?: Partial<AnswerEventVoteReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AnswerEventVoteReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AnswerEventVoteRes(); }
}

/** @description 通知消息家长确认已阅 */
// @Route("/class/event/notify/{eventid}/feedback", "POST, OPTIONS")
// @Api(Description="通知消息家长确认已阅")
export class AddEventNotifyFeedbackReq implements IReturn<AddEventNotifyFeedbackRes>
{
    /** @description 消息id */
    // @ApiMember(DataType="string", Description="消息id", IsRequired=true, Name="eventid", ParameterType="path")
    public eventid?: string;

    public kidId?: string;
    public status?: NOTIFY_FEEDBACK_STATUS;

    public constructor(init?: Partial<AddEventNotifyFeedbackReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddEventNotifyFeedbackReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AddEventNotifyFeedbackRes(); }
}

/** @description 获取一条成长任务 */
// @Route("/class/{classId}/event/task/{eventid}", "GET, OPTIONS")
// @Api(Description="获取一条成长任务")
export class GetEventTaskByIdReq implements IReturn<GetEventTaskByIdRes>
{
    /** @description 班级id */
    // @ApiMember(DataType="string", Description="班级id", IsRequired=true, Name="classId", ParameterType="path")
    public classId?: string;

    /** @description 消息id */
    // @ApiMember(DataType="string", Description="消息id", IsRequired=true, Name="eventid", ParameterType="path")
    public eventid?: string;

    /** @description 学生id */
    // @ApiMember(DataType="string", Description="学生id", IsRequired=true, Name="kidId", ParameterType="query")
    public kidId?: string;

    public constructor(init?: Partial<GetEventTaskByIdReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetEventTaskByIdReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetEventTaskByIdRes(); }
}

/** @description 在打卡任务中添加一条打卡记录 */
// @Route("/class/event/clockin/{ClockInId}", "POST, OPTIONS")
// @Api(Description="在打卡任务中添加一条打卡记录")
export class AddEventClockInItemReq implements IReturn<CommonReturn>
{
    public eventId?: string;
    public classId?: string;
    public kidId?: string;
    public content?: string;
    public attachItem?: EventAttachItem;

    public constructor(init?: Partial<AddEventClockInItemReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddEventClockInItemReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CommonReturn(); }
}

/** @description 读取一条打卡消息 */
// @Route("/class/event/clockin/{eventid}", "GET, OPTIONS")
// @Api(Description="读取一条打卡消息")
export class GetEventClockInByIdReq implements IReturn<GetEventClockInByIdRes>
{
    public classId?: string;
    public eventId?: string;
    public kidId?: string;

    public constructor(init?: Partial<GetEventClockInByIdReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetEventClockInByIdReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetEventClockInByIdRes(); }
}

/** @description 读取某次打卡消息 */
// @Route("/class/event/clockin/{eventid}/{groupid}", "GET, OPTIONS")
// @Api(Description="读取某次打卡消息")
export class GetEventClockInGroupByIdReq implements IReturn<GetEventClockInGroupItemsByIdRes>
{
    public classId?: string;
    public eventId?: string;
    public groupId?: string;
    public kidId?: string;

    public constructor(init?: Partial<GetEventClockInGroupByIdReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetEventClockInGroupByIdReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetEventClockInGroupItemsByIdRes(); }
}

/** @description 家长修改资源的角度 */
// @Route("/growbook/KidId/{KidId}/EventId/{EventId}/Rotate", "POST, OPTIONS")
// @Api(Description="家长修改资源的角度")
export class UpdateGrowBookItemRotateReq implements IReturn<CommonReturn>
{
    public kidId?: string;
    public eventId?: string;
    public ossId?: string;
    public rotate?: number;

    public constructor(init?: Partial<UpdateGrowBookItemRotateReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateGrowBookItemRotateReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CommonReturn(); }
}

/** @description 家长修改资源的排序 */
// @Route("/growbook/KidId/{KidId}/EventId/{EventId}/OrderIndex", "POST, OPTIONS")
// @Api(Description="家长修改资源的排序")
export class UpdateGrowBookItemOrderIndexReq implements IReturn<CommonReturn>
{
    public kidId?: string;
    public eventId?: string;
    public ossId?: string;
    public newPosition?: number;

    public constructor(init?: Partial<UpdateGrowBookItemOrderIndexReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateGrowBookItemOrderIndexReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CommonReturn(); }
}

/** @description 获取用户分享的数据 */
// @Route("/event/sharedata/{EventId}/{KidId}", "GET, OPTIONS")
// @Api(Description="获取用户分享的数据")
export class GetKidEventShareDataReq implements IReturn<ClassEventShareRes>
{
    /** @description KidId */
    // @ApiMember(DataType="string", Description="KidId", IsRequired=true, Name="KidId", ParameterType="path")
    public kidId?: string;

    /** @description EventId */
    // @ApiMember(DataType="string", Description="EventId", IsRequired=true, Name="EventId", ParameterType="path")
    public eventId?: string;

    /** @description ItemId */
    // @ApiMember(DataType="string", Description="ItemId", Name="ItemId", ParameterType="query")
    public itemId?: string;

    /** @description sign */
    // @ApiMember(DataType="string", Description="sign", IsRequired=true, Name="sign", ParameterType="query")
    public sign?: string;

    /** @description nonce */
    // @ApiMember(DataType="string", Description="nonce", IsRequired=true, Name="nonce", ParameterType="query")
    public nonce?: string;

    public constructor(init?: Partial<GetKidEventShareDataReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetKidEventShareDataReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new ClassEventShareRes(); }
}

/** @description 获取某个学生成长册详情 */
// @Route("/growbook/KidId/{KidId}", "GET, OPTIONS")
// @Api(Description="获取某个学生成长册详情")
export class GetKidGrowBookReq implements IReturn<GetKidGrowBookRes>
{
    public schoolId?: string;
    public kidId?: string;
    public eventId?: string;

    public constructor(init?: Partial<GetKidGrowBookReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetKidGrowBookReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetKidGrowBookRes(); }
}

/** @description 成长任务中更新一个任务 */
// @Route("/class/event/task/{TaskId}/{ItemId}", "POST, OPTIONS")
// @Api(Description="成长任务中更新一个任务")
export class UpdateEventTaskItemReq implements IReturn<AddEventTaskItemRes>
{
    public kidId?: string;
    public taskId?: string;
    public itemId?: string;
    public content?: string;
    public attachItem?: EventAttachItem;

    public constructor(init?: Partial<UpdateEventTaskItemReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateEventTaskItemReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AddEventTaskItemRes(); }
}

/** @description 成长任务中发布一个任务 */
// @Route("/class/event/task/{TaskId}", "POST, OPTIONS")
// @Api(Description="成长任务中发布一个任务")
export class AddEventTaskItemReq implements IReturn<AddEventTaskItemRes>
{
    public kidId?: string;
    public taskId?: string;
    public content?: string;
    public attachItem?: EventAttachItem;

    public constructor(init?: Partial<AddEventTaskItemReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddEventTaskItemReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AddEventTaskItemRes(); }
}

/** @description 给成长任务中的某个任务点赞 */
// @Route("/class/event/task/{TaskId}/{TaskItemId}/like", "POST, OPTIONS")
// @Api(Description="给成长任务中的某个任务点赞")
export class AddEventTaskItemLikeReq implements IReturn<AddEventTaskItemRes>
{
    public kidId?: string;
    public taskId?: string;
    public taskItemId?: string;
    public isLike?: boolean;

    public constructor(init?: Partial<AddEventTaskItemLikeReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddEventTaskItemLikeReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AddEventTaskItemRes(); }
}

/** @description 获取发展评估单条详情 */
// @Route("/class/{ClassId}/event/evaluate/{eventid}", "GET, OPTIONS")
// @Api(Description="获取发展评估单条详情")
export class GetEventEvaluateByIdReq implements IReturn<GetEventEvaluateByIdRes>
{
    /** @description 班级id */
    // @ApiMember(DataType="string", Description="班级id", IsRequired=true, Name="ClassId", ParameterType="path")
    public classId?: string;

    /** @description 消息id */
    // @ApiMember(DataType="string", Description="消息id", IsRequired=true, Name="eventid", ParameterType="path")
    public eventid?: string;

    public kidId?: string;

    public constructor(init?: Partial<GetEventEvaluateByIdReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetEventEvaluateByIdReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetEventEvaluateByIdRes(); }
}

/** @description 获取学生评语单条详情 */
// @Route("/class/{ClassId}/event/kidremark/{eventid}", "GET, OPTIONS")
// @Api(Description="获取学生评语单条详情")
export class GetEventKidRemarkByIdReq implements IReturn<GetEventKidRemarkByIdRes>
{
    /** @description 班级id */
    // @ApiMember(DataType="string", Description="班级id", IsRequired=true, Name="ClassId", ParameterType="path")
    public classId?: string;

    /** @description 消息id */
    // @ApiMember(DataType="string", Description="消息id", IsRequired=true, Name="eventid", ParameterType="path")
    public eventid?: string;

    /** @description KidId */
    // @ApiMember(DataType="string", Description="KidId", IsRequired=true, Name="KidId", ParameterType="query")
    public kidId?: string;

    public constructor(init?: Partial<GetEventKidRemarkByIdReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetEventKidRemarkByIdReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetEventKidRemarkByIdRes(); }
}

/** @description 读取一条投票消息 */
// @Route("/class/event/vote/{eventid}", "GET, OPTIONS")
// @Api(Description="读取一条投票消息")
export class GetEventVoteByIdReq implements IReturn<GetEventVoteByIdRes>
{
    public eventid?: string;
    public kidId?: string;

    public constructor(init?: Partial<GetEventVoteByIdReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetEventVoteByIdReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetEventVoteByIdRes(); }
}

/** @description 给打卡任务中某个打卡点赞 */
// @Route("/class/event/clockin/{ClockInId}/{ClockInItemId}/like", "POST, OPTIONS")
// @Api(Description="给打卡任务中某个打卡点赞")
export class AddEventClockInItemLikeReq implements IReturn<CommonReturn>
{
    public kidId?: string;
    public clockInId?: string;
    public groupId?: string;
    public clockInItemId?: string;
    public isLike?: boolean;

    public constructor(init?: Partial<AddEventClockInItemLikeReq>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AddEventClockInItemLikeReq'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CommonReturn(); }
}

