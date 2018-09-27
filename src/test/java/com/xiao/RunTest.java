package com.xiao;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * @author Zhang Xiao
 * @date 9/21/2018 17:47
 */
@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resources/hellocucumber"},//specify feature file to run
        plugin = {"pretty", "html:target/cucumber"}//produce test report
)
public class RunTest {

}
