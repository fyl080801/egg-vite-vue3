// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAccount from '../../../app/controller/account';
import ExportDynamic from '../../../app/controller/dynamic';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    account: ExportAccount;
    dynamic: ExportDynamic;
    home: ExportHome;
  }
}
