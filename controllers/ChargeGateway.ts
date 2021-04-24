/**
 * Kplian Ltda 2020
 *
 * MIT
 *
 * Label Controller
 *
 * @summary Account Status Type Controller
 * @author 
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
 
 
 @Model('trading-nd/ChargeGateway')
 class ChargeGateway extends Controller {
 
 }
 
 export default ChargeGateway;
 