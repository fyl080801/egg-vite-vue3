// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDynamic from '../../../app/controller/dynamic';
import ExportHome from '../../../app/controller/home';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    dynamic: ExportDynamic;
    home: ExportHome;
    user: ExportUser;
  }
}
