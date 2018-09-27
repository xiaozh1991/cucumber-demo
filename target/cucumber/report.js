$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/hellocucumber/is_it_friday_yet.feature");
formatter.feature({
  "name": "Is it Friday yet?",
  "description": "  Everybody wants to know when it\u0027s Friday",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Sunday isn\u0027t Friday",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "today is Sunday",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.today_is_Sunday()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "BaseSteps.i_ask_whether_is_Friday_yet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Nope\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.i_should_be_told(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Friday is Friday",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "today is Friday",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.today_is_Friday()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "BaseSteps.i_ask_whether_is_Friday_yet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"TGIF\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.i_should_be_told(String)"
});
formatter.result({
  "status": "passed"
});
});