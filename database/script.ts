/**
 * Kplian Ltda 2020
 *
 * MIT
 *
 * This files contains data to be added to database for pxp module
 *
 * @summary DML should be added here
 * @author Jaime Rivera
 *
 * Created at     : 2020-10-15 16:31:21
 * Last modified  : 2021-04-24 15:35:45
 */


import { ScriptInterface } from '../../../lib/pxp/utils/Security';


import Subsystem from '../../pxp/entity/Subsystem';
import Ui from '../../pxp/entity/Ui';

const scriptsArray: ScriptInterface[] = [];

/***************************
 * ADD YOUR SCRIPTS HERE
 ***************************/

scriptsArray.push({
  scriptCode: 'JRR-TR-20210424-001', scriptFunction: async (em) => {

    const subsystem = new Subsystem();
    subsystem.name = 'Trading';
    subsystem.code = 'TR';
    subsystem.folderName = 'trading-nd';
    subsystem.prefix = 'TR';
    subsystem.createdBy = 'admin';
    await em.save(subsystem);

    const rootUi = await Ui.findOne({ code: 'PXP' });

    const uiTrading = new Ui();
    uiTrading.code = 'TR';
    uiTrading.name = 'Trading';
    uiTrading.description = 'This is main menu for trading system';
    uiTrading.subsystem = subsystem;
    uiTrading.parent = rootUi as Ui;
    uiTrading.createdBy = 'admin';
    await em.save(uiTrading);

    const uiLabel = new Ui();
    uiLabel.code = 'TR_LABEL';
    uiLabel.name = 'Label';
    uiLabel.description = 'Label';
    uiLabel.subsystem = subsystem;
    uiLabel.parent = uiTrading as Ui;
    uiLabel.createdBy = 'admin';
    uiLabel.route = 'TR_Label';
    await em.save(uiLabel);


  }

});

// ROOT MENU FOR EXAMPLES


export default scriptsArray;




