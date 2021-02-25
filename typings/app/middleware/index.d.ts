// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportVite from '../../../app/middleware/vite';

declare module 'egg' {
  interface IMiddleware {
    vite: typeof ExportVite;
  }
}
