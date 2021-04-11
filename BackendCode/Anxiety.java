import java.util.Scanner;

public class Anxiety extends ChatBot{
	String mood;
	
	public Anxiety() {
		mood = null;
	}
	
	public Anxiety(String mood) {
		mood = "anxious";
	}
	
	public static int anxious(int option, Scanner input) {
		System.out.println(ChatBot.intro());
		System.out.println(ChatBot.negResponses("anxious"));
		ChatBot.functions();
		option = input.nextInt();
		return option;
	}
	
	public static void anxietyResources() {
		String [] anxietySources = new String [5];
		anxietySources[0] = "Calm App";

	}
	
	public static void anxietyLetsChat(int option) {
		
	}
	
	public static void anxietyDistractions(int option) {
		
	}
	
//JSON
}
