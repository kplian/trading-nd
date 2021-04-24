/**
 * Kplian Ltda 2020
 *
 * MIT
 *
 * Person Controller
 *
 * @summary Account Status Type Controller
 * @author Favio Figueroa
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

import ItemTypeModel from '../entity/ItemType';

@Model('trading-nd/ItemType')
class ItemType extends Controller {

}

export default ItemType;
