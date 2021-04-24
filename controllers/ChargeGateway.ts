/**
 * Kplian Ltda 2020
 *
 * MIT
 *
 * User Controller
 *
 * @summary User Controller
 * @author Jaime Rivera
 *
 * Created at     : 2020-09-17 18:55:38
 * Last modified  : 2020-09-17 19:04:30
 */
 import { EntityManager, } from 'typeorm';
 import { getManager } from 'typeorm';
 import {
   Controller,
   Get,
   Post,
   Route,
   StoredProcedure,
   DbSettings,
   ReadOnly,
   Model,
   __
 } from '../../../lib/pxp';
 import ChargeGatewayModel from '../entity/ChargeGateway';
 import VendorModel from '../entity/Vendor';
 
 
 class ChargeGateway extends Controller {
   
 
 
 }
 
 export default ChargeGateway;
 