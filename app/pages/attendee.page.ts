import {OnInit} from "angular2/core";
import {Page} from 'ionic-angular';
import {NavController, NavParams} from "ionic-angular/index";
import {AttendeeFull} from "../models/AttendeeFull";
import {AttendeeItem} from "../models/AttendeeItem";
import {SessionItem} from "../models/SessionItem";
import {ExponentItem} from "../models/ExponentItem";
import {EventService} from "../common/event.service";
import {SessionPage} from "./session.page";
import {ExponentPage} from "./exponent.page";

@Page({
    template: `
<ion-navbar *navbar>
    <ion-title>Participant</ion-title>
</ion-navbar>
<ion-content class="attendee-page">
    <div padding>
        <h1>{{attendeeItem.name}}</h1>
        <h4>{{attendeeItem.company}}</h4>
        <p>{{attendeeItem.description}}</p>
    </div>
    <ion-list *ngIf="attendeeFull && attendeeFull.exponents.length > 0">
        <ion-list-header>Exposants</ion-list-header>
        <ion-item *ngFor="#exponent of attendeeFull.exponents" (click)="goToExponent(exponent)">
            <h2>{{exponent.name}}</h2>
            <p class="nowrap lines2">{{exponent.description}}</p>
        </ion-item>
    </ion-list>
    <ion-list *ngIf="attendeeFull && attendeeFull.sessions.length > 0">
        <ion-list-header>Sessions</ion-list-header>
        <ion-item *ngFor="#session of attendeeFull.sessions" (click)="goToSession(session)">
            <h2>{{session.name}}</h2>
            <p class="nowrap lines2">{{session.description}}</p>
        </ion-item>
    </ion-list>
</ion-content>
`
})
export class AttendeePage implements OnInit {
    attendeeItem: AttendeeItem;
    attendeeFull: AttendeeFull;
    constructor(private _eventService: EventService,
                private _nav: NavController,
                private _navParams: NavParams) {}

    ngOnInit() {
        this.attendeeItem = <AttendeeItem> this._navParams.get('attendeeItem');
        this.attendeeFull = this._eventService.getAttendeeFromCurrent(this.attendeeItem.uuid);
    }

    goToExponent(exponentItem: ExponentItem) {
        this._nav.push(ExponentPage, {
            exponentItem: exponentItem
        });
    }

    goToSession(sessionItem: SessionItem) {
        this._nav.push(SessionPage, {
            sessionItem: sessionItem
        });
    }
}
