$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "This fetaure talks about the positive and negative login scenarios",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Tag1"
    }
  ]
});
formatter.before({
  "duration": 213485,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am able to access magento webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.i_am_able_to_access_magento_web_page()"
});
formatter.result({
  "duration": 114948918078,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Successful login scenario",
  "description": "",
  "id": "login-test;successful-login-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Tag2"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I update the username as \"natarajan.ramanathan93@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I update the password as \"Welcome123\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should find the magento id as \"ID: MAG003417822\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "natarajan.ramanathan93@gmail.com",
      "offset": 26
    }
  ],
  "location": "Steps.i_update_the_username_as(String)"
});
formatter.result({
  "duration": 15327792304,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome123",
      "offset": 26
    }
  ],
  "location": "Steps.i_update_the_password_as(String)"
});
formatter.result({
  "duration": 115243904,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_click_on_the_login_button()"
});
formatter.result({
  "duration": 110919807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ID: MAG003417822",
      "offset": 33
    }
  ],
  "location": "Steps.i_should_fin_the_magento_id_as(String)"
});
formatter.result({
  "duration": 17773504772,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Invalid Login",
  "description": "",
  "id": "login-test;invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Tag3"
    },
    {
      "line": 15,
      "name": "@Tag4"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I update the username as \"\u003cuser\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I update the password as \"\u003cpwd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see error as \"Invalid login or password.\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "login-test;invalid-login;",
  "rows": [
    {
      "cells": [
        "user",
        "pwd"
      ],
      "line": 22,
      "id": "login-test;invalid-login;;1"
    },
    {
      "cells": [
        "test1.user1@gmail.com",
        "password1"
      ],
      "line": 23,
      "id": "login-test;invalid-login;;2"
    },
    {
      "cells": [
        "test.user@gmail.com",
        "password2"
      ],
      "line": 24,
      "id": "login-test;invalid-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 82109,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am able to access magento webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.i_am_able_to_access_magento_web_page()"
});
formatter.result({
  "duration": 34354756070,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Invalid Login",
  "description": "",
  "id": "login-test;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Tag3"
    },
    {
      "line": 15,
      "name": "@Tag4"
    },
    {
      "line": 1,
      "name": "@Tag1"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I update the username as \"test1.user1@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I update the password as \"password1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see error as \"Invalid login or password.\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test1.user1@gmail.com",
      "offset": 26
    }
  ],
  "location": "Steps.i_update_the_username_as(String)"
});
formatter.result({
  "duration": 52527227287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password1",
      "offset": 26
    }
  ],
  "location": "Steps.i_update_the_password_as(String)"
});
formatter.result({
  "duration": 150583363,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_click_on_the_login_button()"
});
formatter.result({
  "duration": 135553200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid login or password.",
      "offset": 23
    }
  ],
  "location": "Steps.error_msg(String)"
});
formatter.result({
  "duration": 17783483653,
  "status": "passed"
});
formatter.before({
  "duration": 98019,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am able to access magento webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.i_am_able_to_access_magento_web_page()"
});
formatter.result({
  "duration": 22799196352,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Invalid Login",
  "description": "",
  "id": "login-test;invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Tag3"
    },
    {
      "line": 15,
      "name": "@Tag4"
    },
    {
      "line": 1,
      "name": "@Tag1"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I update the username as \"test.user@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I update the password as \"password2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see error as \"Invalid login or password.\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test.user@gmail.com",
      "offset": 26
    }
  ],
  "location": "Steps.i_update_the_username_as(String)"
});
formatter.result({
  "duration": 8264114255,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password2",
      "offset": 26
    }
  ],
  "location": "Steps.i_update_the_password_as(String)"
});
formatter.result({
  "duration": 103948702,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_click_on_the_login_button()"
});
formatter.result({
  "duration": 107967967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid login or password.",
      "offset": 23
    }
  ],
  "location": "Steps.error_msg(String)"
});
formatter.result({
  "duration": 6168155844,
  "status": "passed"
});
formatter.before({
  "duration": 138047,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am able to access magento webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.i_am_able_to_access_magento_web_page()"
});
formatter.result({
  "duration": 16434163239,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Add customer",
  "description": "",
  "id": "login-test;add-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "I am able to access the webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I update the user name as \"xyz\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I update the password as \"abc\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I update the customer detail",
  "rows": [
    {
      "cells": [
        "name1",
        "address1",
        "number1"
      ],
      "line": 31
    },
    {
      "cells": [
        "name2",
        "address2",
        "number2"
      ],
      "line": 32
    },
    {
      "cells": [
        "name3",
        "address3",
        "number3"
      ],
      "line": 33
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 26
    }
  ],
  "location": "Steps.i_update_the_password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});