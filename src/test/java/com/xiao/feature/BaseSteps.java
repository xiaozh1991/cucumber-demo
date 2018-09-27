package com.xiao.feature;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import java.util.List;

/**
 * @author Zhang Xiao
 * @date 9/21/2018 17:28
 */
public class BaseSteps {

    private String today;
    private String actualAnswer;

    @Given("^today is Sunday$")
    public void today_is_Sunday(){
        this.today = "Sunday";
    }

    @Given("the following animals:")
    public void the_following_animals(List<String> animals) {
    }

    @Given("^today is Friday$")
    public void today_is_Friday() {
        this.today = "Friday";
    }


    @When("^I ask whether it's Friday yet$")
    public void i_ask_whether_is_Friday_yet(){
        this.actualAnswer = IsItFriday.isItFriday(today);
    }

    @Then("^I should be told \"([^\"]*)\"$")
    public void i_should_be_told(String expectedAnswer) {
        assertEquals(expectedAnswer, actualAnswer);
    }
}

class IsItFriday{
    static String isItFriday(String today){
        if (today.equals("Friday")) {
            return "TGIF";
        }
        return "Nope";
    }
}
