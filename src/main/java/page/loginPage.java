package page;

import java.io.File;
import java.io.IOException;

import org.codehaus.plexus.util.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class loginPage {
	WebDriver driver;

	public loginPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.ID, using = "username")
	WebElement Username_locator;
	@FindBy(how = How.ID, using = "password")
	WebElement Password_locator;
	@FindBy(how = How.NAME, using = "login")
	WebElement click_login_button;

	public void username(String username) {
		Username_locator.sendKeys(username);
	}

	public void password(String password) {
		Password_locator.sendKeys(password);
	}
	
	public void click_login_button() {
		click_login_button.click();
	}
	
	public void login(String username, String password) {
		click_login_button.click();
	}
	
	public String get_page_title() {
		return driver.getTitle();
	}
	public void take_screen_shoot(WebDriver driver) throws IOException {
		TakesScreenshot ts = ((TakesScreenshot) driver);
		File sourceFile = ts.getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(sourceFile, new File ("user", "/screenshots/"+ System.currentTimeMillis()+".png"));
	}
}
