package org.voluntrack.voluntrack;

import java.util.regex.Pattern;
import java.util.concurrent.TimeUnit;
import org.junit.*;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.Select;
import org.apache.commons.io.FileUtils;
import java.io.File;
import java.time.Duration;
import java.util.concurrent.TimeUnit;

public class OrganizationLogin {
  private WebDriver driver;
  private String baseUrl;
  private boolean acceptNextAlert = true;
  private StringBuffer verificationErrors = new StringBuffer();
  JavascriptExecutor js;
  @Before
  public void setUp() throws Exception {
    System.setProperty("webdriver.chrome.driver", "src\\test\\java\\org\\voluntrack\\voluntrack\\chromedriver.exe");
    ChromeOptions options = new ChromeOptions();
    options.addArguments("--remote-allow-origins=*");
    driver = new ChromeDriver(options);
    baseUrl = "https://www.google.com/";
    driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(60));
    js = (JavascriptExecutor) driver;
  }
  @Test
  public void testOrganizationLogin() throws Exception {
    driver.get("http://localhost:4200/");
    driver.findElement(By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Click Here'])[2]/following::span[2]")).click();
    driver.findElement(By.id("password")).click();
    driver.findElement(By.id("password")).clear();
    driver.findElement(By.id("password")).sendKeys("test");
    driver.findElement(By.id("username")).click();
    Thread.sleep(500);
    driver.findElement(By.id("username")).clear();
    driver.findElement(By.id("username")).sendKeys("test");
    
    driver.findElement(By.id("testingId")).click();
    driver.findElement(By.id("info")).click();
  }

  @After
  public void tearDown() throws Exception {
    driver.quit();
    String verificationErrorString = verificationErrors.toString();
    if (!"".equals(verificationErrorString)) {
      fail(verificationErrorString);
    }
  }

  
}
