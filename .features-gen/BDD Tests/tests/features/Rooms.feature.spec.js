// Generated from: tests/features/Rooms.feature
import { test } from "../../../../tests/fixtures/fixtures";

test.describe('User Verifies if Room has TV', () => {

  test.beforeEach('Background', async ({ Given, roomsPage }, testInfo) => { if (testInfo.error) return;
    await Given('user launches the B&B page', null, { roomsPage }); 
  });
  
  test.describe('User checks with room has TV', () => {

    test('Example #1', { tag: ['@Rooms'] }, async ({ When, Then, roomsPage }) => { 
      await When('user navigates to Our Rooms', null, { roomsPage }); 
      await Then('user verifies TV Icon for room "Single"', null, { roomsPage }); 
    });

    test('Example #2', { tag: ['@Rooms'] }, async ({ When, Then, roomsPage }) => { 
      await When('user navigates to Our Rooms', null, { roomsPage }); 
      await Then('user verifies TV Icon for room "Double"', null, { roomsPage }); 
    });

    test('Example #3', { tag: ['@Rooms'] }, async ({ When, Then, roomsPage }) => { 
      await When('user navigates to Our Rooms', null, { roomsPage }); 
      await Then('user verifies TV Icon for room "Suite"', null, { roomsPage }); 
    });

  });

  test.describe('User checks Availability and verifies error', () => {

    test('Example #1', { tag: ['@Rooms'] }, async ({ When, Then, And, roomsPage }) => { 
      await When('user clicks Book Now', null, { roomsPage }); 
      await And('user enters check in and check out date for \'2\' and \'Single\'', null, { roomsPage }); 
      await And('user checks Availability', null, { roomsPage }); 
      await And('user books \'Single\' room', null, { roomsPage }); 
      await And('user clicks on reserve now', null, { roomsPage }); 
      await And('user fills booking form for error', null, { roomsPage }); 
      await And('user clicks on reserve now', null, { roomsPage }); 
      await Then('user verifies error message', null, { roomsPage }); 
    });

  });

  test.describe('User reserves and verifies success message', () => {

    test('Example #1', { tag: ['@Rooms'] }, async ({ When, Then, And, roomsPage }) => { 
      await When('user clicks Book Now', null, { roomsPage }); 
      await And('user enters check in and check out date for \'2\' and \'Suite\'', null, { roomsPage }); 
      await And('user checks Availability', null, { roomsPage }); 
      await When('user books \'Suite\' room', null, { roomsPage }); 
      await And('user clicks on reserve now', null, { roomsPage }); 
      await And('user fills booking form', null, { roomsPage }); 
      await And('user clicks on reserve now', null, { roomsPage }); 
      await Then('user verifies success message for "Suite"', null, { roomsPage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests/features/Rooms.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":13,"tags":["@Rooms"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user launches the B&B page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When user navigates to Our Rooms","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then user verifies TV Icon for room \"Single\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Single\"","children":[{"start":32,"value":"Single","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":17,"pickleLine":14,"tags":["@Rooms"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user launches the B&B page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When user navigates to Our Rooms","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then user verifies TV Icon for room \"Double\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Double\"","children":[{"start":32,"value":"Double","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":15,"tags":["@Rooms"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user launches the B&B page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When user navigates to Our Rooms","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then user verifies TV Icon for room \"Suite\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Suite\"","children":[{"start":32,"value":"Suite","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":31,"pickleLine":29,"tags":["@Rooms"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user launches the B&B page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When user clicks Book Now","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"And user enters check in and check out date for '2' and 'Single'","stepMatchArguments":[{"group":{"start":44,"value":"'2'","children":[{"children":[{"children":[]}]},{"start":45,"value":"2","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":52,"value":"'Single'","children":[{"children":[{"children":[]}]},{"start":53,"value":"Single","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"And user checks Availability","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And user books 'Single' room","stepMatchArguments":[{"group":{"start":11,"value":"'Single'","children":[{"children":[{"children":[]}]},{"start":12,"value":"Single","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"And user clicks on reserve now","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"And user fills booking form for error","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And user clicks on reserve now","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then user verifies error message","stepMatchArguments":[]}]},
  {"pwTestLine":46,"pickleLine":44,"tags":["@Rooms"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user launches the B&B page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When user clicks Book Now","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"And user enters check in and check out date for '2' and 'Suite'","stepMatchArguments":[{"group":{"start":44,"value":"'2'","children":[{"children":[{"children":[]}]},{"start":45,"value":"2","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":52,"value":"'Suite'","children":[{"children":[{"children":[]}]},{"start":53,"value":"Suite","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":49,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"And user checks Availability","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When user books 'Suite' room","stepMatchArguments":[{"group":{"start":11,"value":"'Suite'","children":[{"children":[{"children":[]}]},{"start":12,"value":"Suite","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":51,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"And user clicks on reserve now","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"And user fills booking form","stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"And user clicks on reserve now","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then user verifies success message for \"Suite\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Suite\"","children":[{"start":35,"value":"Suite","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end