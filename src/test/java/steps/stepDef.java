package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.loginPage;
import util.BrowserFactory;

public class stepDef {

	WebDriver driver;
	loginPage login;
	
	@Before
	public void beforeRun() throws InterruptedException {
		driver = BrowserFactory.startBrowser();
		login = PageFactory.initElements(driver, loginPage.class);
		Thread.sleep(2000);
	}
	
	@Given("^user is on the techfios site$")
	public void Given_user_is_on_the_techfios_site() {
		driver.get("https://www.techfios.com/billing/?ng=admin/");
		
	}
	
	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username) throws Throwable {
		login.username(username);

	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) throws Throwable {
		login.password(password);
	}

	@When("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password) throws Throwable {
		login.username(username);
		login.password(password);
	}
	@When("^User click on login button$")
	public void user_click_on_login_button() throws Throwable {
	login.click_login_button();
	
	Thread.sleep(2000);
		
	}

	@Then("^User should not be able to see the dashboard page$")
	public void user_should_not_be_able_to_see_the_dashboard_page() throws Throwable {

		System.out.println("worog username or password!");
	}
	
	@Then("^User should be able to see the dashboard page$")
	public void user_should_be_able_to_see_the_dashboard_page() throws Throwable {
		
		String expectedTitle = "Dashboard- iBilling";
		String actualTitle = login.get_page_title();
		Assert.assertEquals("wrong page!", expectedTitle, actualTitle);
		login.take_screen_shoot(driver);
	}
	
	@After
	public void afterRun() {
		BrowserFactory.tearDown();
	}
	
	
}
