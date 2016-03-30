import {Component, Input} from "angular2/core";
import {EventItem} from "../models/EventItem";
import {DatePipe} from "../common/pipes/datetime.pipe";

@Component({
    selector: 'event-item',
    template: `
<ion-card>
    <img src="{{event.landing}}"/>
    <ion-card-content>
        <ion-card-title>{{event.name}}</ion-card-title>
        <h3>{{event.start | date}}, {{event.address.city}}</h3>
        <p class="lines3">{{event.description}}</p>
    </ion-card-content>
</ion-card>
`,
    pipes: [DatePipe]
})
export class EventItemComponent {
    @Input() event: EventItem
}