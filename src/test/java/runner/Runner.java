package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features={"src/test/resources"},
				 glue="glue",
				 dryRun=false,
				 monochrome=true,
				 tags= {"@Tag1, @Tag2"},
				 format= {"pretty","html:reports","junit:reports/junit.xml","json:reports/output.json"})
public class Runner {
	
}
