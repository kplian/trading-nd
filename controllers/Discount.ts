import { Controller } from '@pxp-nd/core';
import {
  Get,
  Route,
  Post,
  Patch,
  Delete,
  StoredProcedure,
  DbSettings,
  ReadOnly,
  Model
} from '@pxp-nd/core';

@Model('trading-nd/Item')
class Discount extends Controller {
}

export default Discount;
