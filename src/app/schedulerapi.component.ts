import { Component, enableProdMode } from '@angular/core';

import {DxSchedulerModule} from 'devextreme-angular';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';

@Component({
    styleUrls: ['./schedulerapi.component.css'],
    selector: 'app-schedulerapi',
    templateUrl: './schedulerapi.component.html',
    preserveWhitespaces: true
})
export class SchedulerApiComponent {

    appointmentsData: any;
    currentDate: Date = new Date(2017, 4, 23);

    constructor() {
        const url = 'https://js.devexpress.com/Demos/Mvc/api/SchedulerData';

        this.appointmentsData = AspNetData.createStore({
            key: 'AppointmentId',
            loadUrl: url + '/Get',
            insertUrl: url + '/Post',
            updateUrl: url + '/Put',
            deleteUrl: url + '/Delete',
            onBeforeSend: function (method, ajaxOptions) {
                ajaxOptions.xhrFields = { withCredentials: true };
            }
        });
    }
}
