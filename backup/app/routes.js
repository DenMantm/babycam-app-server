"use strict";
var _404_component_1 = require('./errors/404.component');
//one import combined in barel
var index_1 = require('./home/index');
var index_2 = require('./pictures/index');
var index_3 = require('./landing-page/index');
var index_4 = require('./common/index');
//canDeactivate:['canDeactivateCreateEvent'],
exports.appRoutes = [
    { path: 'home', component: index_1.HomeComponent, canActivate: [index_4.LoggedInGuard] },
    { path: 'pictures', component: index_2.PicturesComponent, canActivate: [index_4.LoggedInGuard] },
    { path: 'landingPage', component: index_3.LandingPageComponent, canActivate: [index_4.FirstPageGuard] },
    { path: '404', component: _404_component_1.Error404Component },
    { path: '', redirectTo: '/landingPage', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map