package glue;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps {
WebDriver driver;
Scenario s;
//WebDriverWait wait;
@Before("@Tag1")
public void before() {
	
}
	@Given("^I am able to access magento webpage$")
	public void i_am_able_to_access_magento_web_page(){
	    // Write code here that turns the phrase above into concrete actions
	    System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get("http://magento.com");
		driver.findElement(By.className("fa-user")).click();
	}

	@When("^I update the username as \"([^\"]*)\"$")
	public void i_update_the_username_as(String arg1){
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.id("email")).sendKeys(arg1);
	}

	@When("^I update the password as \"([^\"]*)\"$")
	public void i_update_the_password_as(String arg1){
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.id("pass")).sendKeys(arg1);
	}

	@When("^I click on the login button$")
	public void i_click_on_the_login_button(){
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.id("send2")).click();
	}

	@Then("^I should find the magento id as \"([^\"]*)\"$")
	public void i_should_fin_the_magento_id_as(String arg1){
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertEquals(arg1, driver.
				findElement(By.xpath("//div[@class='account-help']/span")).
				getText());
		driver.quit();
	}
	
	@Then("^I should see error as \"([^\"]*)\"$")
	public void error_msg(String arg1) {
		Assert.assertEquals(arg1,
				driver.findElement(By.className("error-msg")).getText());
		driver.quit();
	}
	
	@Given("^I am able to access gmail page$")
	public void i_am_able_to_access_gmail_page(){
	    // Write code here that turns the phrase above into concrete actions
	    System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get("http://maps.google.com");
		//wait = new WebDriverWait(driver,60);
	}

	@Given("^I click on Directions$")
	public void i_click_on_Directions(){
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("searchbox-directions")).click();
	}

	@When("^I update the destinations as$")
	public void i_update_the_destinations_as(DataTable arg1){
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	    // E,K,V must be a scalar (String, Integer, Date, enum etc)
	    driver.findElement(By.xpath("//div[@id='sb_ifc51']/input")).sendKeys(arg1.raw().get(0).get(0)+Keys.ENTER);
	    driver.findElement(By.xpath("//div[@id='sb_ifc52']/input")).sendKeys(arg1.raw().get(1).get(0)+Keys.ENTER);
		List<List<String>> locations = arg1.raw();
	    for(int i=2;i<locations.size();i++)
	    {
	    	driver.findElement(By.className("waypoint-add")).click();
	    	driver.findElement(By.xpath("//div[@id='sb_ifc5"+(i+1)+"']/input")).sendKeys(locations.get(i).get(0)+Keys.ENTER);
	    }
	}

	@Then("^I should get the total distance as (\\d+) km$")
	public void i_should_get_the_total_distance_as_km(int arg1){
	    // Write code here that turns the phrase above into concrete actions
	    driver.quit();
	}
	
}
