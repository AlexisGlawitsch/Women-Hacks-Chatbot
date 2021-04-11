import java.util.ArrayList;

package com.example.springboot;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController


public class ChatBotInterface extends ChatBot {
	@RequestMapping("/")

	public static int main(String[] args) {


		int option = 0;
		String end = "";
		Emotions mood = new Emotions();
		
			
		//Menu below controls which path the bot will take
		
		int moodChoice = mood.emotionList(input, option);
		
		while (end != "Goodbye") {
			if(moodChoice == 1) {
				return Sad.sad(option, input);
			}else if (moodChoice == 2) {
				return Tired.tired(option, input);
			}else if (moodChoice == 3) {
				return Happy.happy(option, input);
			}else if (moodChoice == 4) {
				return Mad.mad(option, input);
			}else if (moodChoice == 5) {
				return Calm.calm(option, input);
			}else if (moodChoice == 6) {
				return Energetic.energetic(option, input);
			}else if (moodChoice == 7) {
				return Anxiety.anxious(option, input);
			}
		}

		return moodChoice;
	}
	//Springboot (Java framework)
	//JSF/JSP
	

}