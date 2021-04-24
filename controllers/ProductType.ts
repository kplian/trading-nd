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

import ProductTypeModel from '../entity/ProductType';

@Model('trading-nd/ProductType')
class ProductType extends Controller {

}

export default ProductType;
