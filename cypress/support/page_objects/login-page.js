class LoginPage {

	navLogin() {
		cy.visit('https://tconnecttestgreen.apos.tandemdiabetes.com/')
	}

	login(email, password) {
		cy.get('#txtLoginEmailAddress')
			.type('sftestaccount001@tandem-diabetes.com', email)

		cy.get('#txtLoginPassword')
			.type('tconnect', password)

		cy.get('#linkLogin > div').click()
	}

	logOut() {
		cy.get('#linkLogout').click()
	}
}

export default new LoginPage();