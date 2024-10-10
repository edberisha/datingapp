import { Box, Text, Stack, Image, Input, Button, Flex } from '@chakra-ui/react';
import { useState, useEffect, useRef } from 'react';
import guyphoto from '../assets/guyphoto.jpeg';
import { AiOutlineLeft } from 'react-icons/ai'; // Left arrow icon
import { useRouter } from 'next/router';



const ChatAlerts = () => {

  const router = useRouter();

  const handleProfileClick = () => {
    router.push('/profile'); // Navigate to the messages page
  };

  const [messages, setMessages] = useState([

   

                          {text:"September 15, 2024 | 4:37pm", type:"timestamp" },  


    {  text: 'Nice collar.', color: '#e8340c' },
    {  text: 'Thanks. ;', color: '#ff944c' },
    {  text: 'I’m assuming this is the dog’s owner speaking?', color: '#e8340c' },
    {  text: 'Guilty. What gave me away?', color: '#ff944c' },
    {  text: 'I don’t think Fido’s figured out how to type yet. As smart-looking as his collar is.', color: '#e8340c' },
    {  text: 'Well, I’ve got quite the collection of collars myself. I’m sure one of them makes me look smarter too.', color: '#ff944c' },
    {  text: 'Finally, someone who understands me.', color: '#e8340c' },
    {  text: 'I think we might understand each other more than you know.', color: '#ff944c' },
    {  text: 'Oh really? I’m intrigued.', color: '#e8340c' },
    {  text: 'Good. I have a good feeling about you, Sarah.', color: '#ff944c' },
    {  text: 'Gosh, I hate it when men on this app type out my full name. It feels so formal.', color: '#e8340c' },
    {  text: 'Noted. I’m taking suggestions for alternate things to call you then.', color: '#ff944c' },
    {  text: 'Try me.', color: '#e8340c' },
    {  text: 'What feels like “you”? ', color: '#ff944c' },
    {  text: 'Let me think about it. I used to get called by my middle name sometimes when I was a kid. I think that’s when I felt most connected to myself. I don’t know if I’ve ever really felt that free since…', color: '#e8340c' },
    {  text: 'Sorry, is that a lot?', color: '#e8340c' },
    {  text: 'You’re proving my point, Not-Sarah. Apparently we do understand each other more than you know.', color: '#ff944c' },
    {  text: 'Really? You don’t think it’s weird that I’m spilling all of this in a first conversation?', color: '#e8340c' },
    {  text: 'Not at all. What are these things for? I want to get to know you, Not-Sarah.', color: '#ff944c' },
    {  text: 'Stop, you’re making me laugh.', color: '#e8340c' },
    {  text: 'I’m serious. I want to know you. The real you.', color: '#ff944c' },
    {  text: 'Curtis… Wow.', color: '#e8340c' },
    {  text: 'Too much?', color: '#ff944c' },
    {  text: 'Not at all.', color: '#e8340c' },
    {  text: 'Thank god. I was hoping I hadn’t messed this up by being all intense.', color: '#ff944c' },
    {  text: 'No, really. I’m touched. I want to know you too.', color: '#e8340c' },
    {  text: 'Oh really?', color: '#ff944c' },
    {  text: 'Yes. First order of business: when is your birthday?', color: '#e8340c' },


                          {text:"September 16, 2024 | 7:13am", type:"timestamp" },  

    {  text: 'November 19th. The year will cost you extra.', color: '#ff944c' },
    {  text: 'A Scorpio.', color: '#e8340c' },
    {  text: 'A Scorpio. I understand if you just want to be friends.', color: '#ff944c' },
    {  text: 'Come on. Scorpios are fascinating. Dark, sexy, mysterious.', color: '#e8340c' },
    {  text: 'Intense haha.', color: '#e8340c' },
    {  text: 'Intense, haha.', color: '#ff944c' },
    {  text: '…Sexy?', color: '#ff944c' },
    {  text: 'Sexy.', color: '#e8340c' },
    {  text: 'Now I’m flattered.', color: '#ff944c' },
    {  text: 'Well, now that I think about it… I haven’t seen your face yet.', color: '#e8340c' },
    {  text: 'Just your hand, if Fido’s profile picture is to be believed.', color: '#e8340c' },
    {  text: 'Sorry about that. I’m a bit reserved when it comes to having photos of myself up on the Internet. You know how everything is with stealing your data nowadays.', color: '#ff944c' },
    {  text: 'Remember when we didn’t have to worry about that?', color: '#e8340c' },
    {  text: 'Don’t remind me. It’s too painful!', color: '#ff944c' },
    {  text: 'Yearning for simpler times?', color: '#e8340c' },
    {  text: 'Aren’t we all?', color: '#ff944c' },
    {  text: 'I think we understand each other more than you know, Curtis.', color: '#e8340c' },
    {  text: 'You’re starting to sound like me.', color: '#ff944c' },
    {  text: 'Now I’m flattered.', color: '#e8340c' },
    {  text: 'You’re copying me.', color: '#ff944c' },
    {  text: 'Nuh-uh. You’re copying me.', color: '#e8340c' },
    {  text: 'You’re cute.', color: '#ff944c' },
    {  text: 'You’re cute. I think. I might need proof.', color: '#e8340c' },
    {  text: 'Alright, Not-Sarah. You win.', color: '#ff944c' },


                            {text:"September 16, 2024 | 7:56pm", type:"timestamp" },  
                            {text:"[video call] | 4:37pm", type:"timestamp" },  
                            {text:"September 16, 2024 | 9:23pm", type:"timestamp" },  


    {  text: 'Alright, it’s decided. You’re cute.', color: '#e8340c' },
    {  text: 'Phew. Glad we’ve reached a consensus.', color: '#ff944c' },


                              {text:"September 17, 2024 | 9:48am", type:"timestamp" },  


    {  text: 'So, back to that “getting to know you” thing…', color: '#e8340c' },
    {  text: 'Right. Tell me about you.', color: '#ff944c' },
    {  text: 'Well, I’m 48', color: '#e8340c' },
    {  text: 'I know right?', color: '#e8340c' },
    {  text: 'Kidding!', color: '#e8340c' },
    {  text: 'You’re funny.', color: '#ff944c' },
    {  text: 'I live in West Virginia, obviously, but I’m originally from Sacramento. That’s where I grew up.', color: '#e8340c' },
    {  text: 'What was that like?', color: '#ff944c' },
    {  text: 'Oh, amazing.', color: '#e8340c' },
    {  text: 'Sacramento or growing up?', color: '#ff944c' },
    {  text: 'Sacramento. Growing up was… growing up. Everything has its challenges.', color: '#e8340c' },
    {  text: 'That’s what I like to say too. The world will present you with an obstacle, and it’s your job to decide how you’ll face it.', color: '#ff944c' },
    {  text: 'I love that.', color: '#e8340c' },
    {  text: 'Thank you. What’s after Sacramento?', color: '#ff944c' },
    {  text: 'College. Nothing special. I didn’t study particularly hard, but that’s fine. A few years after I graduated, I met Brian and we had Olivia.', color: '#e8340c' },
    {  text: 'What’s that thing Ferris Bueller says?', color: '#e8340c' },
    {  text: 'Live moves pretty fast.', color: '#ff944c' },
    {  text: 'Exactly', color: '#e8340c' },
    {  text: 'I’m assuming Brian isn’t in the picture? Or am I sworn to secrecy if I ever see him at the grocery store?', color: '#ff944c' },
    {  text: 'Oh, you don’t have to worry about that.', color: '#e8340c' },
    {  text: 'Why is that?', color: '#ff944c' },
    {  text: 'He died a few years ago.', color: '#e8340c' },
    {  text: 'Oh, god. Sarah, I’m so sorry.', color: '#ff944c' },
    {  text: 'What did I say about that?', color: '#e8340c' },
    {  text: 'Sorry. I thought levity would’ve been insensitive.', color: '#ff944c' },
    {  text: 'Think again. It’s okay. The world will present you with an obstacle, right? It’s my job to decide how I’m facing it.', color: '#e8340c' },
    {  text: 'Fast learner.', color: '#ff944c' },
    {  text: 'Like minds.', color: '#e8340c' },
    {  text: 'And Olivia?', color: '#ff944c' },
    {  text: 'She didn’t take it well, of course. She’s been grieving pretty hard. Sometimes I don’t know how to reach her.', color: '#e8340c' },
    {  text: 'You didn’t match with me to hear all of this.', color: '#e8340c' },
    {  text: 'I most certainly did. I want to know you, remember?', color: '#ff944c' },
    {  text: 'Right. Okay. Thank you.', color: '#e8340c' },
    {  text: 'It feels good to talk about this with someone actually.', color: '#e8340c' },
    {  text: 'I’m happy that I can be that someone.', color: '#ff944c' },
    {  text: 'Me too.', color: '#e8340c' },
    {  text: 'Go on, I’m listening.', color: '#ff944c' },
    {  text: 'Oh, shut up. Anyway, it feels pretty impossible to get through to her. Everything I do is the wrong thing, apparently.', color: '#e8340c' },
    {  text: 'Grief can be a particularly dark tunnel. There’s often very little light and it can be almost impossible to see it.', color: '#ff944c' },
    {  text: 'Sometimes the only way out is through.', color: '#ff944c' },
    {  text: 'You know the feeling?', color: '#e8340c' },
    {  text: 'I’ve gotten pretty well-acquainted with grief over the years. I’m a grief counselor of sorts.', color: '#ff944c' },
    {  text: 'Of sorts?', color: '#e8340c' },
    {  text: 'Among other things.', color: '#ff944c' },
    {  text: 'Tell me more', color: '#e8340c' },
    {  text: 'Life-coaching, empowerment and self-help seminars… therapy and other kinds of psychological assistance included.', color: '#ff944c' },
    {  text: 'That’s incredible. Curtis, you must really help people.', color: '#e8340c' },
    {  text: 'I try.', color: '#ff944c' },
    {  text: 'That’s so noble of you.', color: '#e8340c' },
    {  text: 'What good is the world if we aren’t bringing our best selves to it?', color: '#ff944c' },
    {  text: 'I completely agree.', color: '#e8340c' },
    {  text: 'Olivia will reach the end of that tunnel. Sometimes all it takes is a little push. Or a guiding light through that darkness.', color: '#ff944c' },
    {  text: 'I keep trying to be that for her… she just doesn’t understand. She won’t listen to a word I say when it comes to him. It’s like I’m talking to a wall.', color: '#e8340c' },
    {  text: 'Maybe I can help.', color: '#ff944c' },


                                {text:"September 18, 2024 | 8:03am", type:"timestamp" },  


    {  text: 'I think that might be a great idea. She might need to hear it from someone who isn’t me. Someone who’s closer to that kind of “father figure” image.', color: '#e8340c' },
    {  text: 'I would be happy to help. Grief is comprised of someone’s unimaginable pain. If I can ease some of the burden of that pain, I would consider myself lucky to do so.', color: '#ff944c' },
    {  text: 'I can’t tell you how much that would mean to me.', color: '#e8340c' },
    {  text: 'Not too intense?', color: '#ff944c' },
    {  text: 'Not at all. I’m prepared now. You being a Scorpio and all.', color: '#e8340c' },
    {  text: 'Right. You’ve got me all figured out.', color: '#ff944c' },
    {  text: 'I do, don’t I?', color: '#e8340c' },
    {  text: 'You do.', color: '#ff944c' },



                    {text:"September 18, 2024 | 2:45pm", type:"timestamp" },  
                    {text:"[ video call ]", type:"timestamp" },  
                    {text:"September 18, 2024 | 5:54pm", type:"timestamp" },  


    {  text: 'Wow.', color: '#e8340c' },
    {  text: 'Wow is right.', color: '#ff944c' },
    {  text: 'When do we get to do that again?', color: '#ff944c' },
    {  text: 'I have some time tomorrow. I’ll set it aside for you.', color: '#e8340c' },
    {  text: 'Not-Sarah, I think I’ve been waiting for you my whole life.', color: '#ff944c' },
    {  text: 'Likewise, Mr. Curtis Clark.', color: '#e8340c' },



                      {text:"September 19, 2024 | 10:34am", type:"timestamp" },  
                      {text:"[ video call ]", type:"timestamp" },  
                      {text:"September 19, 2024 | 5:34pm", type:"timestamp" },  

    {  text: 'I had a fun day with you today.', color: '#ff944c' },
    {  text: 'Me too. I haven’t laughed that hard in a while.', color: '#e8340c' },
    {  text: 'Sweet dreams, Ms. Not-Sarah.', color: '#ff944c' },



                  {text:"September 20, 2024 | 9:34am", type:"timestamp" },  


    {  text: 'Good morning.', color: '#ff944c' },
    {  text: 'Careful, I’m starting to look forward to these every morning.', color: '#e8340c' },
    {  text: 'Good. I don’t intend to stop sending them.', color: '#ff944c' },
    {  text: 'When do I get to hear it in person?', color: '#e8340c' },
    {  text: 'As soon as I can get some time off work.', color: '#ff944c' },
    {  text: 'Oh really?', color: '#e8340c' },
    {  text: 'Oh really. You, me, and a whole lot of “good mornings.”', color: '#ff944c' },
    {  text: 'Curtis… don’t make me blush.', color: '#e8340c' },



                      {text:"September 20, 2024 | 2:13pm", type:"timestamp" },  
                      {text:"[ video call ]", type:"timestamp" },  
                      {text:"September 21, 2024 | 8:10am", type:"timestamp" },  

    {  text: 'Tell me about you.', color: '#ff944c' },
    {  text: 'Anything! What your life was like 2 weeks ago. Who is Curtis Clark when he’s not on this app?', color: '#e8340c' },
    {  text: 'Well, you know about my profession. That takes up a great deal of my time.', color: '#ff944c' },
    {  text: 'When I’m not devoting my time to helping others for money, I can usually be found doing it for free by rescuing kittens from trees and helping little old ladies cross the street.', color: '#ff944c' },
    {  text: 'I’m serious!', color: '#e8340c' },
    {  text: 'I am too!', color: '#ff944c' },
    {  text: 'Do you have any family? Are you an only child?', color: '#e8340c' },
    {  text: 'What were your parents like?', color: '#e8340c' },
    {  text: 'I do! I am not an only child, but my siblings have all grown up and moved away, as siblings often do.', color: '#ff944c' },
    {  text: 'My parents were firm, but kind. We were really lucky to grow up the way we did.', color: '#ff944c' },
    {  text: 'I lost my wife quite a few years back… and I have a daughter.', color: '#ff944c' },
    {  text: 'A daughter?', color: '#e8340c' },
    {  text: 'Sophie. She’s probably about the same age as Olivia, actually.', color: '#ff944c' },
    {  text: 'We should get them in touch! It would be nice for Olivia to have a friend. Especially now.', color: '#e8340c' },
    {  text: 'I think that’s a fantastic idea.', color: '#ff944c' },



                        {text:"September 21, 2024 | 2:30pm", type:"timestamp" },  
                        {text:"[ video call ]", type:"timestamp" },  
                        {text:"September 22, 2024 | 8:12am", type:"timestamp" },  
    
    {  text: 'We should go somewhere. Rent a cabin or something. What do you think?', color: '#ff944c' },
    {  text: 'I’d have to make sure I can take the time off work.', color: '#e8340c' },
    {  text: 'What’s that you taught me about being a Sagittarius?', color: '#ff944c' },
    {  text: 'Sexy?', color: '#e8340c' },
    {  text: 'Spontaneous. …And Sexy.', color: '#e8340c' },
    {  text: 'Spontaneous (and sexy) is right. Pick the dates and I’ll let them know I’m not coming in.', color: '#ff944c' },
    {  text: 'That’s the spirit.', color: '#ff944c' },


                        {text:"September 23, 2024 | 11:24am", type:"timestamp" },  
                        {text:"[ video call ]", type:"timestamp" },  
                        {text:"September 23, 2024 | 2:47pm", type:"timestamp" },  
                        {text:"[ video call ]", type:"timestamp" },  
                        {text:"September 23, 2024 | 5:30pm", type:"timestamp" },  
                        {text:"[ video call ]", type:"timestamp" },  
                        {text:"September 24, 2024 | 7:02am", type:"timestamp" },  
                        {text:"[ video call ]", type:"timestamp" },  
                        {text:"September 24, 2024 | 2:38pm", type:"timestamp" },  

    {  text: 'As long as you don’t mention the H-word…', color: '#ff944c' },
    {  text: 'Who mentioned HIPAA?', color: '#e8340c' },
    {  text: 'Exactly.', color: '#ff944c' },



                        {text:"September 24, 2024 | 3:02am", type:"timestamp" },  
                        {text:"[ video call ]", type:"timestamp" },  
                        {text:"September 24, 2024 | 5:43pm", type:"timestamp" },  

    {  text: 'I can’t believe this is all online. I want to meet them.', color: '#e8340c' },
    {  text: 'You can! I’d love for you to meet them, actually. I’m looking at setting up a retreat for a number of them soon. I really want you there.', color: '#ff944c' },
    {  text: 'Then I’ll be there.', color: '#e8340c' },


                        {text:"September 26, 2024 | 9:38am", type:"timestamp" },  
                        {text:"[ video call ]", type:"timestamp" },  
                        {text:"September 26, 2024 | 4:27pm", type:"timestamp" },  

    {  text: 'So, where’s the cabin we’re renting?', color: '#e8340c' },
    {  text: 'You’ll love it. https://www.zillow.com/homedetails/6215-Painters-Ct-Hunterville-VW-02751/0247630981_zpid/', color: '#ff944c' },
    {  text: 'You were right, Curtis. I love it.', color: '#e8340c' },
    {  text: 'I knew you would.', color: '#ff944c' },

                      {text:"September 27, 2024 | 8:14am", type:"timestamp" },  


    {  text: 'Curtis, this is not an Airbnb.', color: '#e8340c' },
    {  text: '?', color: '#ff944c' },
    {  text: 'This house is for sale.', color: '#e8340c' },
    {  text: 'Oh! Look at that, it is.', color: '#ff944c' },
    {  text: 'Good luck finding another one that perfect.', color: '#e8340c' },
    {  text: 'We could always just buy it…', color: '#ff944c' },
    {  text: 'Don’t tempt me.', color: '#e8340c' },

                    {text:"September 27, 2024 | 9:04pm", type:"timestamp" },  


    {  text: 'I’m serious, Rebecca.', color: '#ff944c' },

                    {text:"September 28, 2024 | 8:06am", type:"timestamp" },  


    {  text: 'You really aren’t kidding.', color: '#e8340c' },
    {  text: 'Really. What if we did it?', color: '#ff944c' },
    {  text: 'What if we bought that house?', color: '#e8340c' },
    {  text: 'Yes. Remember you… and me… and all those “good mornings?”', color: '#ff944c' },
    {  text: 'I do.', color: '#e8340c' },
    {  text: '…And what is it they say about being a Sagittarius?', color: '#ff944c' },

                  {text:"September 28, 2024 | 11:34am", type:"timestamp" },  

    {  text: 'Sexy.', color: '#e8340c' },
    {  text: 'And?', color: '#ff944c' },
    {  text: 'And spontaneous.', color: '#e8340c' },
    {  text: 'And spontaneous.', color: '#ff944c' },
    {  text: 'I’m feeling a little spontaneous right now…', color: '#e8340c' },



                        {text:"September 28, 2024 | 4:36pm", type:"timestamp" },  
                        {text:"[ video call ]", type:"timestamp" },  
                        {text:"September 28, 2024 | 8:15pm", type:"timestamp" },  

    {  text: 'Good night, Rebecca.', color: '#ff944c' },
    {  text: 'Good night.', color: '#e8340c' },

                      {text:"September 29, 2024 | 9:12am", type:"timestamp" },  


    {  text: 'Good morning.', color: '#ff944c' },
    {  text: 'I’m looking forward to saying this to you in our new house.', color: '#ff944c' },
    {  text: 'I said I’d think about it!', color: '#e8340c' },
    {  text: 'That’s good enough for me.', color: '#ff944c' },
    {  text: 'Though you are getting good at convincing me.', color: '#e8340c' },
    {  text: 'Good. My degree is useless otherwise.', color: '#ff944c' },
    {  text: 'Oh, shut up haha', color: '#e8340c' },
    {  text: 'Kidding.', color: '#ff944c' },
    {  text: '😄', color: '#e8340c' },


                             {text:"September 29, 2024 | 9:39pm", type:"timestamp" },  


    {  text: 'Think about it. Remember that sense of freedom? That simplicity? That’s what we get with that house.', color: '#ff944c' },

                                   {text:"September 30, 2024 | 10:37am", type:"timestamp" },  


    {  text: 'You make it sound so easy.', color: '#e8340c' },
    {  text: 'It can be. I think we could really build something together, Rebecca.', color: '#ff944c' },
    {  text: 'I feel the same way.', color: '#e8340c' },
    {  text: 'That’s what this house is. An investment.', color: '#ff944c' },
    {  text: 'Into?', color: '#e8340c' },
    {  text: 'That freedom. That simplicity. Us. An investment into our future.', color: '#ff944c' },
    {  text: 'You really think we could do this? Start over like this? Together?', color: '#e8340c' },
    {  text: 'Of course I do.', color: '#ff944c' },
    {  text: 'Then I believe it too. ❤️', color: '#e8340c' },
    {  text: 'It’s you and me, Rebecca.', color: '#ff944c' },

                        {text:"October 1, 2024 | 10:23am", type:"timestamp" },  


    {  text: 'Bad news. The money I had set aside for this is tied up right now. I can’t put it towards our house.', color: '#ff944c' },


                            {text:"[ video call ]", type:"timestamp" },  
                            {text:"October 2, 2024 | 8:37am", type:"timestamp" },  

    {  text: 'Good morning.', color: '#ff944c' },
    {  text: 'Good morning, Mr. Curtis Clark.', color: '#e8340c' },
    {  text: 'Good morning, Mrs. Curtis Clark.', color: '#ff944c' },
    {  text: 'So, I was thinking about how we can afford that house.', color: '#e8340c' },
    {  text: 'Oh? Our cabin?', color: '#ff944c' },
    {  text: 'Yes. I still have Brian’s life insurance payout.', color: '#e8340c' },
    {  text: 'That has to be enough to cover the down payment…', color: '#ff944c' },
    {  text: 'It is. And enough for any renovations we might need to do before we move in.', color: '#e8340c' },
    {  text: 'Rebecca, that’s perfect. You’re perfect.', color: '#ff944c' },
    {  text: 'Oh, I know.', color: '#e8340c' },
    {  text: 'I love you.', color: '#ff944c' },
    {  text: 'I love you too.', color: '#e8340c' },

                            {text:"October 3, 2024 | 7:13am", type:"timestamp" },  


    {  text: 'We can finally start our life together.', color: '#ff944c' },
    {  text: 'I can’t wait. I just want to move in now. With you. ❤️', color: '#e8340c' },
    {  text: 'I can let the realtor know we’re ready to buy it. I’ll just need proof of funds.', color: '#ff944c' },
    {  text: 'That’s easy. I can wire it to you.', color: '#e8340c' },



                        {text:"October 4, 2024 | 9:03am", type:"timestamp" },  
                        {text:"[ video call ]", type:"timestamp" },  
                        {text:"October 4, 2024 | 3:45pm", type:"timestamp" },  

    {  text: 'OK, let’s get this sorted and I’ll reach out to the realtor right away.', color: '#ff944c' },
    {  text: 'Perfect. Give me a second to get the information right.', color: '#e8340c' },



                        {text:"October 4, 2024 | 6:34pm", type:"timestamp" },  
                        {text:"[ video call ]", type:"timestamp" },  
                        {text:"October 4, 2024 | 8:14pm", type:"timestamp" },  

    {  text: 'OK. I sent the wire.', color: '#e8340c' },

                    {text:"October 5, 2024 | 12:13am", type:"timestamp" },  


    {  text: 'Our future begins!', color: '#ff944c' },

                        {text:"October 5, 2024 | 6:45am", type:"timestamp" },  


    {  text: 'I’m so happy. I love you.', color: '#e8340c' },
    {  text: 'I love you too, Mrs. Clark.', color: '#ff944c' },



                        {text:"October 5, 2024 | 11:24am", type:"timestamp" },  
                        {text:"[ video call ]", type:"timestamp" },  
                        {text:"October 6, 2024 | 9:32am", type:"timestamp" },  

    {  text: 'I can’t wait until it’s official.', color: '#e8340c' },
    {  text: 'We could do it at the house.', color: '#ff944c' },
    {  text: 'Have the ceremony there?', color: '#e8340c' },
    {  text: 'Yes. If you’d like that.', color: '#ff944c' },

                            {text:"October 7, 2024 | 10:34am", type:"timestamp" },  


    {  text: 'I would. I know Olivia would too.', color: '#e8340c' },
    {  text: 'Good. Then that’s what we’ll do.', color: '#ff944c' },
    {  text: 'I can’t wait.', color: '#e8340c' },


                        {text:"October 7, 2024 | 2:12pm", type:"timestamp" },  
                        {text:"[ video call ]", type:"timestamp" },  
                        {text:"October 8, 2024 | 10:34am", type:"timestamp" },  

    {  text: 'I believe we have a wedding to start planning.', color: '#ff944c' },
    {  text: 'It appears we do. I’ll need your ring size.', color: '#ff944c' },



                        {text:"October 8, 2024 | 2:15pm", type:"timestamp" },  
                        {text:"[ video call ]", type:"timestamp" },  
                        {text:"October 9, 2024 | 9:14am", type:"timestamp" },  

    {  text: 'Good morning, Mrs. Clark.', color: '#ff944c' },
    {  text: 'Good morning, Mr. Clark.', color: '#e8340c' },


                        {text:"October 9, 2024 | 12:11pm", type:"timestamp" },  
                        {text:"[ video call ]", type:"timestamp" },  
                        {text:"October 10, 2024 | 9:02am", type:"timestamp" },  

    {  text: 'Good morning, Mr. Clark.', color: '#e8340c' },
    {  text: 'Good morning, Mrs. Clark.', color: '#ff944c' },
    {  text: 'Today’s the day.', color: '#ff944c' },
    {  text: 'I can’t wait to see you.❤️', color: '#e8340c' },



                    {text:"October 10, 2024 | 11:43am", type:"timestamp" },  
                    {text:"[ video call ]", type:"timestamp" },  
                    {text:"October 10, 2024 | 4:24pm", type:"timestamp" },  


    {  text: 'Just packed the last of my things! Picking the dress up from alterations and then I’ll be ready to go.', color: '#e8340c' },
    {  text: 'Onto the rest of our lives! See you at 5.', color: '#ff944c' },
]);


  const [newMessage, setNewMessage] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages, 
        {  text: newMessage, color: '#e8340c' }
      ]);
      setNewMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Box
      borderWidth={1}
      borderRadius="lg"
      overflow="hidden"
      p={5}
      bg="#ffffff"
      boxShadow="lg"
      mx="auto"
      display="flex"
      flexDirection="column"
    >
      <Box>
        <AiOutlineLeft 
          size="25"
          cursor="pointer"
          onClick={handleProfileClick}
        />
      </Box>
  
      <Text textAlign="center" fontSize="lg" fontWeight="bold" mb={3}>
        Curtis
      </Text>
      <Image
        src={guyphoto.src}
        alt="Guy"
        borderRadius="full"
        boxSize="100px"
        mx="auto"
        mb={4}
      />
      <Box
        ref={chatRef}
        overflowY="auto"
        flex="1" // Allow it to grow and fill the available space
        maxH="60vh" // Set a max height for the chat area
      >
        <Stack spacing={3}>
          {messages.map((message, index) => (
            <Box
              key={index}
              style={{
                padding: '1rem',
                borderWidth: '1px',
                borderRadius: '0.375rem',
                backgroundColor: message.color,
                marginLeft: message.color === '#e8340c' ? 'auto' : '0',
                maxWidth: '75%',
                display: message.type === 'timestamp' ? 'block' : 'inline-block', // Centering for timestamp
                textAlign: message.type === 'timestamp' ? 'center' : 'left', // Center text for timestamp
                alignSelf: message.type === 'timestamp' ? 'center' : (message.color === '#e8340c' ? 'flex-end' : 'flex-start'),
              }}
            >
              <Text color={message.color === '#e8340c' ? 'white' : 'black'}>
                {message.text}
              </Text>
            </Box>
          ))}
        </Stack>
      </Box>
      <Flex mt={4}>
        <Input
          value={newMessage}
          onKeyDown={handleKeyDown}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          mr={2}
        />
        <Button onClick={handleSend} colorScheme="teal">Send</Button>
      </Flex>
    </Box>
  );
}

export default ChatAlerts;
