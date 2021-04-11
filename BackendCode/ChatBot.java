import java.util.ArrayList;
import java.util.Scanner;

public class ChatBot {
	String emotion;
	String function;
	
	public ChatBot() {
		emotion = null;
		function = null;
	}
	
	public ChatBot(String emotion, String function) {
		this.emotion = emotion;
		this.function = function;
	}
	
	public String getEmotion() {
		return emotion;
	}
	
	public void setEmotion(String emotion) {
		this.emotion = emotion;
	}
	
	public String getFunction() {
		return function;
	}
	
	public void setFunction(String function) {
		this.function = function;
	}
	
	
	//User Responses
	
	public static void functions() {
		String [] functionsList = new String [3];
		functionsList[0] = "Find a resource for me!";
		functionsList[1] = "Let's talk!";
		functionsList[2] = "I want a distraction";
		for (int i = 0; i < functionsList.length; i++) {
			System.out.println(functionsList[i]);
		}
	}
		
	//ChatBot Randomized Responses
	public static String intro() {
		String [] introResponse = new String [5];
		double randomNum = Math.random() * 5;
		int randomInt = (int)randomNum;

		introResponse[0] = "Hi there! I'm your friendly bot for the day!";
		introResponse[1] = "Hello! I'll be your friendly bot for the day!";
		introResponse[2] = "Welcome! I'll be here to help you with any problems you may have today!";
		introResponse[3] = "Hello there! I'm *Insert name*";
		introResponse[4] = "Welcome to *App name*! I'm your *name* and can help with any problems you may have!";
		
		return introResponse[randomInt];
	}
	
	public static String negResponses(String mood) { //Generates a random response from a list of responses
		String [] negResponse = new String [5];
		double randomNum = Math.random() * 5;
		int randomInt = (int)randomNum;
		
		negResponse[0] = "I'm sorry you feel " + mood + "! Is there anything I can do for you?";
		negResponse[1] = "Oh no! Feeling " + mood + " is never a pleasent feeling. Would you like me to help you with something?";
		negResponse[2] = "I'm sorry, I know things can be tough at times but you are doing great! What can I help you with?";
		negResponse[3] = "I'm so sorry to hear that. Can I help you with anything?";
		negResponse[4] = "I'm sorry, but I am here to help! What would you like me to help you with?";
		
		return negResponse[randomInt];

	}
	
	public static String posResponses(String mood) { //Generates a random response from a list of responses
		String [] posResponse = new String [5];
		double randomNum = Math.random() * 5;
		int randomInt = (int)randomNum;
		
		posResponse[0] = "That's so great to hear! Is there anything I can do for you?";
		posResponse[1] = "Amazing! Would you like me to help you with something?";
		posResponse[2] = "Big yay for you!! What can I help you with?";
		posResponse[3] = "*Audible gasp* Can't believe how great you're doing! Can I help you with anything?";
		posResponse[4] = "*Single tear* This bot is so proud! Is there anything you would like me to help you with?";
		
		return posResponse[randomInt];

	}

}