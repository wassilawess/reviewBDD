package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:features", 
		glue = "steps", 
		dryRun = false,
		monochrome = true,
//		tags= "@Scenario3",
		tags="@End2End",
		plugin = {
		"pretty",
		"html:target/cucumber", 
		"json:target/cucumber.json"

})
public class loginRunner {

}
