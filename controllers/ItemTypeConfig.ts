/**
 * Kplian Ltda 2020
 *
 * MIT
 *
 * Person Controller
 *
 * @summary Account Status Type Controller
 * @author Bellido Hilarion
 *
 * Created at     : 2021-03-10 18:55:38
 * Last modified  :
 */
import { EntityManager } from 'typeorm';

import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Patch,
    Route,
    StoredProcedure,
    DbSettings,
    ReadOnly,
    Authentication,
    Permission,
    Model, __, Log
} from '../../../lib/pxp';
@Model('trading-nd/ItemTypeConfig')
class ItemTypeConfig extends Controller {

}

export default ItemTypeConfig;