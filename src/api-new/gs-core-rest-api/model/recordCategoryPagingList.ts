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

import { FilePlan } from './filePlan';
import { Pagination } from '../../content-rest-api/model/pagination';
import { RecordCategoryEntry } from './recordCategoryEntry';

export class RecordCategoryPagingList {
    pagination?: Pagination;
    entries?: Array<RecordCategoryEntry>;
    source?: FilePlan;

    constructor(input?: any) {

        Object.assign(this, input);
        this.pagination = new Pagination(input.pagination);
        this.entries = input.entries.map((item: any) => {
            return new Array<RecordCategoryEntry>(item);
        });
        this.source = new FilePlan(input.source);
    }

}
