$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/login.feature");
formatter.feature({
  "line": 2,
  "name": "User should be able to login in techfios site",
  "description": "",
  "id": "user-should-be-able-to-login-in-techfios-site",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@End2End"
    }
  ]
});
formatter.before({
  "duration": 7710457258,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on the techfios site",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.Given_user_is_on_the_techfios_site()"
});
formatter.result({
  "duration": 512649950,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "",
  "description": "",
  "id": "user-should-be-able-to-login-in-techfios-site;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to see the dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "stepDef.user_enters_username_as(String)"
});
formatter.result({
  "duration": 82633364,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "stepDef.user_enters_password_as(String)"
});
formatter.result({
  "duration": 67717647,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_click_on_login_button()"
});
formatter.result({
  "duration": 3371875591,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_should_be_able_to_see_the_dashboard_page()"
});
formatter.result({
  "duration": 448846795,
  "status": "passed"
});
formatter.after({
  "duration": 688933090,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "user-should-be-able-to-login-in-techfios-site;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should be able to see the dashboard page",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "user-should-be-able-to-login-in-techfios-site;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 20,
      "id": "user-should-be-able-to-login-in-techfios-site;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123"
      ],
      "line": 21,
      "id": "user-should-be-able-to-login-in-techfios-site;user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6922224138,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on the techfios site",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.Given_user_is_on_the_techfios_site()"
});
formatter.result({
  "duration": 508356118,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "user-should-be-able-to-login-in-techfios-site;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@End2End"
    },
    {
      "line": 14,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User enters \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should be able to see the dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 37
    }
  ],
  "location": "stepDef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 138570995,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_click_on_login_button()"
});
formatter.result({
  "duration": 3336717410,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_should_be_able_to_see_the_dashboard_page()"
});
formatter.result({
  "duration": 417353910,
  "status": "passed"
});
formatter.after({
  "duration": 603232998,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "user with invalid credencials",
  "description": "",
  "id": "user-should-be-able-to-login-in-techfios-site;user-with-invalid-credencials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should not be able to see the dashboard page",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "user-should-be-able-to-login-in-techfios-site;user-with-invalid-credencials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 29,
      "id": "user-should-be-able-to-login-in-techfios-site;user-with-invalid-credencials;;1"
    },
    {
      "cells": [
        "demo@techfios2.com",
        "abc124"
      ],
      "line": 30,
      "id": "user-should-be-able-to-login-in-techfios-site;user-with-invalid-credencials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6679903688,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on the techfios site",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.Given_user_is_on_the_techfios_site()"
});
formatter.result({
  "duration": 435530540,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "user with invalid credencials",
  "description": "",
  "id": "user-should-be-able-to-login-in-techfios-site;user-with-invalid-credencials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@End2End"
    },
    {
      "line": 23,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User enters \"demo@techfios2.com\" and \"abc124\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should not be able to see the dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios2.com",
      "offset": 13
    },
    {
      "val": "abc124",
      "offset": 38
    }
  ],
  "location": "stepDef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 137010945,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_click_on_login_button()"
});
formatter.result({
  "duration": 2991996125,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_should_not_be_able_to_see_the_dashboard_page()"
});
formatter.result({
  "duration": 285325,
  "status": "passed"
});
formatter.after({
  "duration": 618408995,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "",
  "description": "",
  "id": "user-should-be-able-to-login-in-techfios-site;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@Scenario4"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User should be able to see the dashboard page",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "user-should-be-able-to-login-in-techfios-site;;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 38,
      "id": "user-should-be-able-to-login-in-techfios-site;;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123"
      ],
      "line": 39,
      "id": "user-should-be-able-to-login-in-techfios-site;;;2"
    },
    {
      "cells": [
        "demo@techfios2.com",
        "abc124"
      ],
      "line": 40,
      "id": "user-should-be-able-to-login-in-techfios-site;;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6829831433,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on the techfios site",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.Given_user_is_on_the_techfios_site()"
});
formatter.result({
  "duration": 459040077,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "",
  "description": "",
  "id": "user-should-be-able-to-login-in-techfios-site;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@End2End"
    },
    {
      "line": 32,
      "name": "@Scenario4"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User enters \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User should be able to see the dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 37
    }
  ],
  "location": "stepDef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 130349122,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_click_on_login_button()"
});
formatter.result({
  "duration": 3399407591,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_should_be_able_to_see_the_dashboard_page()"
});
formatter.result({
  "duration": 410729857,
  "status": "passed"
});
formatter.after({
  "duration": 682938805,
  "status": "passed"
});
formatter.before({
  "duration": 6732144411,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on the techfios site",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.Given_user_is_on_the_techfios_site()"
});
formatter.result({
  "duration": 532722861,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "",
  "description": "",
  "id": "user-should-be-able-to-login-in-techfios-site;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@End2End"
    },
    {
      "line": 32,
      "name": "@Scenario4"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User enters \"demo@techfios2.com\" and \"abc124\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User should be able to see the dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios2.com",
      "offset": 13
    },
    {
      "val": "abc124",
      "offset": 38
    }
  ],
  "location": "stepDef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 133227414,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_click_on_login_button()"
});
formatter.result({
  "duration": 3092080285,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.user_should_be_able_to_see_the_dashboard_page()"
});
formatter.result({
  "duration": 15582022,
  "error_message": "junit.framework.ComparisonFailure: wrong page! expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat steps.stepDef.user_should_be_able_to_see_the_dashboard_page(stepDef.java:68)\r\n\tat ✽.Then User should be able to see the dashboard page(features/login.feature:36)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 598305704,
  "status": "passed"
});
});