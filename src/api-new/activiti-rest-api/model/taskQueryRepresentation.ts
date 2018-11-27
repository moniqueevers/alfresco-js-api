/*!
* @license
* Copyright 2018 Alfresco Software, Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

export class TaskQueryRepresentation {
    appDefinitionId?: number;
    assignment?: string;
    dueAfter?: Date;
    dueBefore?: Date;
    includeProcessInstance?: boolean;
    page?: number;
    processDefinitionId?: string;
    processInstanceId?: string;
    size?: number;
    sort?: TaskQueryRepresentation.SortEnum;
    start?: number;
    state?: TaskQueryRepresentation.StateEnum;
    taskId?: string;
    text?: string;
}

export namespace TaskQueryRepresentation {
    export enum SortEnum {
        CreatedDesc = 'created-desc',
        CreatedAsc = 'created-asc',
        DueDesc = 'due-desc',
        DueAsc = 'due-asc'
    }

    export enum StateEnum {
        Active = 'active',
        Completed = 'completed',
        All = 'all'
    }
}
