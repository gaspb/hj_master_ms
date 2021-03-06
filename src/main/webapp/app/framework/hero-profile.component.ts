import {Component, Input} from "@angular/core";

import {MSTemplateComponent} from "./mstemplate.component";

@Component({
    template: `
        <div class="hero-profile">
            <h3>Featured Hero Profile</h3>
            <h4>{{data.name}}</h4>

            <p>{{data.bio}}</p>

            <strong>Hire this hero today!</strong>
        </div>
    `
})
export class HeroProfileComponent implements MSTemplateComponent {
    @Input() data: any;
}

/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
