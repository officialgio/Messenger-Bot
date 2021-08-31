function getBotResponse(input) {


   
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    //hello
    if (input == "hi") {
        return "Hi there!";
    }

    //name
    if (input == "what's your name?") {
        return "I'm Giovanny, nice to meet you! :)";
    }
    
    //school
    if (input == "what school do you attend?") {
        return "I'm currently attending Northeastern Illinois University and I'm a freshman majoring in Computer Science.";
    }

    //age
    if (input == "how old are you?") {
        return "I'm currently 18 years old.";
    }
    
    //music
    if (input == "what type of music do you listen to?") {
        return "My music taste is diverse. I listen to anything, although my favorite music group is the Arctic Monkeys.";
    }
    
    //Why do you like CS?
    if (input == "why do you like CS?") {
        return "I love that is possible to built such innovative technologies that makes an impact to the world. With that said, I want to be part of the Tech Industry and bring my ideas to the table.";
    }

    //tech
    if (input == "what career do you have on mind?") {
        return "I would love to become a Software Engineer or a Software Developer because I would love to work with web development! I also have quite an interest in IOS development.";
    }

     //passion
     if (input == "what are one of your passions?") {
        return "Soccer is one of my highest passions. Quick fact: I've been playing soccer since I was 3 years old.";
    }
    
    //learning
    if (input == "what do you like learning?") {
        return "I like learning Computer Science and Astronomy. Not mention, both are my favorite topics:)";
    }
    //what is your favorite drink?
    if (input == "what is your favorite drink?") {
        return "I love water and orange juice!";
    }

    //hello
    if (input == "who is your best friend?") {
        return "My best friend is my dog. He's a Yorkshire. :)";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}