/**
 * Kplian Ltda 2020
 *
 * MIT
 *
 * Label Controller
 *
 * @summary Account Status Type Controller
 * @author Rensi Arteaga Copari
 *
 * Created at     : 2021-04-24
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

import ProductTypeModel from '../entity/ProductType';

@Model('trading-nd/Label')
class Label extends Controller {

}

export default Label;
