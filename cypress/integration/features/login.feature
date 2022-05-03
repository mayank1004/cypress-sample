Feature: Logging in to tConnect

  Scenario: User has valid personal account to login
	  Given the user signs into "https://tconnecttestgreen.apos.tandemdiabetes.com/"
		When the user logs in with username "sftestaccount001@tandem-diabetes.com" and password "tconnect"
    Then the user is directed to dashboard page