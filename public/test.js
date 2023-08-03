const Intent = require('./model/intent');
const ExcelLoader = require('./model/excel-loader');
const IntentManager = require('./model/intent-manager');


require('dotenv').config({path: '../.env'});
require('dotenv').config();

IntentExcelLoader = new ExcelLoader();
const data = IntentExcelLoader.loadExcelSheet('../public/intent-definition.xlsx', 'intents');

const manager = new IntentManager(JSON.parse(process.env.CREDENTIALS));

// Build Intent Object
const intent = new Intent(data[0], null, manager.getProjectAgentSessionContextPathTemplate());

// Build Create Intent Request
console.log(intent.buildIntentRequest('123').intent.events);

// console.log(IntentExcelLoader.loadExcelSheet('../../public/intent-definition.xlsx', 'introduction'));


// ChatIntentManager.createIntent(new Intent(1, 1, 1, 1, 1, 1, 1, 1));
// ChatIntentManager.createIntent(123);


/*








    Hello there, I am Steven!

    Is there a problem?

    ,.:()!-_/""|||||

    | ? 

    Intent time symptom

    I have been {@symptom:coughing} for a while now


*/