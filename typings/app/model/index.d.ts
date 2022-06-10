// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDataTable from '../../../app/model/dataTable';
import ExportTableColumn from '../../../app/model/tableColumn';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    DataTable: ReturnType<typeof ExportDataTable>;
    TableColumn: ReturnType<typeof ExportTableColumn>;
    User: ReturnType<typeof ExportUser>;
  }
}
