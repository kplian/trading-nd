/**
 * Kplian Ltda 2020
 *
 * MIT
 *
 * Vendor Controller
 *
 * @summary Vendor Controller
 * @author Rodrigo Chumacero
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

import VendorModel from '../entity/Vendor';

@Model('trading-nd/Vendor')
class Vendor extends Controller {

}

export default Vendor;
