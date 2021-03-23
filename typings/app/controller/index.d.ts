// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDynamic from '../../../app/controller/dynamic';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    dynamic: ExportDynamic;
    home: ExportHome;
  }
}
