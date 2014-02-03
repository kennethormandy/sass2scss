var getTestData = function(testName) {
  var testElement = document.getElementsByClassName(testName)[0];
  var expectedElement = testElement.getElementsByClassName('expected')[0];
  var fixtureElement = testElement.getElementsByClassName('fixture')[0];

  return {
    expected: expectedElement.innerText,
    fixture: fixtureElement.innerText
  };
}

var testFixtureAgainstExpected = function(testName){
  var testData = getTestData(testName);
  var convertedContent = sass2scss(testData.fixture);
  equal(convertedContent, testData.expected);
}

test("the base function exists", function() {
  ok(sass2scss);
});


test("very basic convertion", function() {
  testFixtureAgainstExpected("basic");
});

test("converts sass mixin and include aliases", function() {
  testFixtureAgainstExpected("sass-aliases");
});

test("ignore comments on block last line", function() {
  testFixtureAgainstExpected("block-last-line-comment");
});

test("handle selectors not containing alphanumeric characters", function() {
  testFixtureAgainstExpected("no-char-selector");
});

test("ignore scss @content", function() {
  testFixtureAgainstExpected("at-content-out");
});

test("ignore scss @extends", function() {
  testFixtureAgainstExpected("at-extends");
});

test("ignore scss @mixin", function() {
  testFixtureAgainstExpected("at-mixin");
});

test("ignore colors", function() {
  testFixtureAgainstExpected("colors");
});

test("covert sass indented comments", function() {
  testFixtureAgainstExpected("comments");
});

test("convert sass mixins with arguments", function() {
  testFixtureAgainstExpected("mixin-with-arguments");
});

test("convert sass property nesting", function() {
  testFixtureAgainstExpected("property-nesting");
});

test("convert very basic sasss property syntax", function() {
  testFixtureAgainstExpected("property-syntax");
});
