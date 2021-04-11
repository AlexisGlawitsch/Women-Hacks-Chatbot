import java.util.ArrayList;
import java.util.Scanner;

public class Emotions extends ChatBot{
	String mood;
	String color;
	ChatBot emotions;
	
	public Emotions() {
		mood = null;
		color = null;
	}
	
	public Emotions(String mood, String color) {
		this.mood = mood;
		this.color = color;
	}
	
	public String getMood() {
		return mood;
	}
	
	public void setMood(String mood) {
		this.mood = mood;
	}
	
	public String getColor() {
		return color;
	}
	
	public void setColor(String color) {
		this.color = color;
	}
	
	public static int emotionList(Scanner input, int option) { //Creating a list of emotions and assigning an option variable to a numerical value
		ArrayList<Emotions> emotionList = new ArrayList<Emotions>();
		Emotions mood = new Emotions();
		mood.setColor("Blue");
		mood.setMood("Sad");
		emotionList.add(mood);
		Emotions mood2 = new Emotions();
		mood2.setColor("Grey");
		mood2.setMood("Tired");
		emotionList.add(mood2);
		Emotions mood3 = new Emotions();
		mood3.setColor("Yellow");
		mood3.setMood("Happy");
		emotionList.add(mood3);
		Emotions mood4 = new Emotions();
		mood4.setColor("Red");
		mood4.setMood("Mad");
		emotionList.add(mood4);
		Emotions mood5 = new Emotions();
		mood5.setColor("Green");
		mood5.setMood("Calm");
		emotionList.add(mood5);
		Emotions mood6 = new Emotions();
		mood6.setColor("Purple");
		mood6.setMood("Energetic");
		emotionList.add(mood6);
		Emotions mood7 = new Emotions();
		mood7.setColor("Orange");
		mood7.setMood("Anxious");
		emotionList.add(mood7);
		
		option = input.nextInt();
		
		return option;
	}		

}
