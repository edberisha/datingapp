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
    { sender: 'S', text: 'Nice collar.', color: '#e8340c' },
    { sender: 'C', text: 'Thanks. ;', color: '#f0f0f0' },
    { sender: 'S', text: 'I’m assuming this is the dog’s owner speaking?', color: '#e8340c' },
    { sender: 'C', text: 'Guilty. What gave me away?', color: '#f0f0f0' },
    { sender: 'S', text: 'I don’t think Fido’s figured out how to type yet. As smart-looking as his collar is.', color: '#e8340c' },
    { sender: 'C', text: 'Well, I’ve got quite the collection of collars myself. I’m sure one of them makes me look smarter too.', color: '#f0f0f0' },
    { sender: 'S', text: 'Finally, someone who understands me.', color: '#e8340c' },
    { sender: 'C', text: 'I think we might understand each other more than you know.', color: '#f0f0f0' },
    { sender: 'S', text: 'Oh really? I’m intrigued.', color: '#e8340c' },
    { sender: 'C', text: 'Good. I have a good feeling about you, Sarah.', color: '#f0f0f0' },
    { sender: 'S', text: 'Gosh, I hate it when men on this app type out my full name. It feels so formal.', color: '#e8340c' },
    { sender: 'C', text: 'Noted. I’m taking suggestions for alternate things to call you then.', color: '#f0f0f0' },
    { sender: 'S', text: 'Try me.', color: '#e8340c' },
    { sender: 'C', text: 'What feels like “you”? ', color: '#f0f0f0' },
    { sender: 'S', text: 'Let me think about it. I used to get called by my middle name sometimes when I was a kid. I think that’s when I felt most connected to myself. I don’t know if I’ve ever really felt that free since…', color: '#e8340c' },
    { sender: 'S', text: 'Sorry, is that a lot?', color: '#e8340c' },
    { sender: 'C', text: 'You’re proving my point, Not-Sarah. Apparently we do understand each other more than you know.', color: '#f0f0f0' },
    { sender: 'S', text: 'Really? You don’t think it’s weird that I’m spilling all of this in a first conversation?', color: '#e8340c' },
    { sender: 'C', text: 'Not at all. What are these things for? I want to get to know you, Not-Sarah.', color: '#f0f0f0' },
    { sender: 'S', text: 'Stop, you’re making me laugh.', color: '#e8340c' },
    { sender: 'C', text: 'I’m serious. I want to know you. The real you.', color: '#f0f0f0' },
    { sender: 'S', text: 'Curtis… Wow.', color: '#e8340c' },
    { sender: 'C', text: 'Too much?', color: '#f0f0f0' },
    { sender: 'S', text: 'Not at all.', color: '#e8340c' },
    { sender: 'C', text: 'Thank god. I was hoping I hadn’t messed this up by being all intense.', color: '#f0f0f0' },
    { sender: 'S', text: 'No, really. I’m touched. I want to know you too.', color: '#e8340c' },
    { sender: 'C', text: 'Oh really?', color: '#f0f0f0' },
    { sender: 'S', text: 'Yes. First order of business: when is your birthday?', color: '#e8340c' },
    { sender: 'C', text: 'November 19th. The year will cost you extra.', color: '#f0f0f0' },
    { sender: 'S', text: 'A Scorpio.', color: '#e8340c' },
    { sender: 'C', text: 'A Scorpio. I understand if you just want to be friends.', color: '#f0f0f0' },
    { sender: 'S', text: 'Come on. Scorpios are fascinating. Dark, sexy, mysterious.', color: '#e8340c' },
    { sender: 'S', text: 'Intense haha.', color: '#e8340c' },
    { sender: 'C', text: 'Intense, haha.', color: '#f0f0f0' },
    { sender: 'C', text: '…Sexy?', color: '#f0f0f0' },
    { sender: 'S', text: 'Sexy.', color: '#e8340c' },
    { sender: 'C', text: 'Now I’m flattered.', color: '#f0f0f0' },
    { sender: 'S', text: 'Well, now that I think about it… I haven’t seen your face yet.', color: '#e8340c' },
    { sender: 'S', text: 'Just your hand, if Fido’s profile picture is to be believed.', color: '#e8340c' },
    { sender: 'C', text: 'Sorry about that. I’m a bit reserved when it comes to having photos of myself up on the Internet. You know how everything is with stealing your data nowadays.', color: '#f0f0f0' },
    { sender: 'S', text: 'Remember when we didn’t have to worry about that?', color: '#e8340c' },
    { sender: 'C', text: 'Don’t remind me. It’s too painful!', color: '#f0f0f0' },
    { sender: 'S', text: 'Yearning for simpler times?', color: '#e8340c' },
    { sender: 'C', text: 'Aren’t we all?', color: '#f0f0f0' },
    { sender: 'S', text: 'I think we understand each other more than you know, Curtis.', color: '#e8340c' },
    { sender: 'C', text: 'You’re starting to sound like me.', color: '#f0f0f0' },
    { sender: 'S', text: 'Now I’m flattered.', color: '#e8340c' },
    { sender: 'C', text: 'You’re copying me.', color: '#f0f0f0' },
    { sender: 'S', text: 'Nuh-uh. You’re copying me.', color: '#e8340c' },
    { sender: 'C', text: 'You’re cute.', color: '#f0f0f0' },
    { sender: 'S', text: 'You’re cute. I think. I might need proof.', color: '#e8340c' },
    { sender: 'C', text: 'Alright, Not-Sarah. You win.', color: '#f0f0f0' },
    // New Transcript
    { sender: 'S', text: 'Alright, it’s decided. You’re cute.', color: '#e8340c' },
    { sender: 'C', text: 'Phew. Glad we’ve reached a consensus.', color: '#f0f0f0' },
    { sender: 'S', text: 'So, back to that “getting to know you” thing…', color: '#e8340c' },
    { sender: 'C', text: 'Right. Tell me about you.', color: '#f0f0f0' },
    { sender: 'S', text: 'Well, I’m 48', color: '#e8340c' },
    { sender: 'S', text: 'I know right?', color: '#e8340c' },
    { sender: 'S', text: 'Kidding!', color: '#e8340c' },
    { sender: 'C', text: 'You’re funny.', color: '#f0f0f0' },
    { sender: 'S', text: 'I live in West Virginia, obviously, but I’m originally from Sacramento. That’s where I grew up.', color: '#f0f0f0' },
    { sender: 'C', text: 'What was that like?', color: '#f0f0f0' },
    { sender: 'S', text: 'Oh, amazing.', color: '#e8340c' },
    { sender: 'C', text: 'Sacramento or growing up?', color: '#f0f0f0' },
    { sender: 'S', text: 'Sacramento. Growing up was… growing up. Everything has its challenges.', color: '#e8340c' },
    { sender: 'C', text: 'That’s what I like to say too. The world will present you with an obstacle, and it’s your job to decide how you’ll face it.', color: '#f0f0f0' },
    { sender: 'S', text: 'I love that.', color: '#e8340c' },
    { sender: 'C', text: 'Thank you. What’s after Sacramento?', color: '#f0f0f0' },
    { sender: 'S', text: 'College. Nothing special. I didn’t study particularly hard, but that’s fine. A few years after I graduated, I met Brian and we had Olivia.', color: '#e8340c' },
    { sender: 'S', text: 'What’s that thing Ferris Bueller says?', color: '#e8340c' },
    { sender: 'C', text: 'Live moves pretty fast.', color: '#f0f0f0' },
    { sender: 'S', text: 'Exactly', color: '#e8340c' },
    { sender: 'C', text: 'I’m assuming Brian isn’t in the picture? Or am I sworn to secrecy if I ever see him at the grocery store?', color: '#f0f0f0' },
    { sender: 'S', text: 'Oh, you don’t have to worry about that.', color: '#e8340c' },
    { sender: 'C', text: 'Why is that?', color: '#f0f0f0' },
    { sender: 'S', text: 'He died a few years ago.', color: '#e8340c' },
    { sender: 'C', text: 'Oh, god. Sarah, I’m so sorry.', color: '#f0f0f0' },
    { sender: 'S', text: 'What did I say about that?', color: '#e8340c' },
    { sender: 'C', text: 'Sorry. I thought levity would’ve been insensitive.', color: '#f0f0f0' },
    { sender: 'S', text: 'Think again. It’s okay. The world will present you with an obstacle, right? It’s my job to decide how I’m facing it.', color: '#e8340c' },
    { sender: 'C', text: 'Fast learner.', color: '#f0f0f0' },
    { sender: 'S', text: 'Like minds.', color: '#e8340c' },
    { sender: 'C', text: 'And Olivia?', color: '#f0f0f0' },
    { sender: 'S', text: 'She didn’t take it well, of course. She’s been grieving pretty hard. Sometimes I don’t know how to reach her.', color: '#e8340c' },
    { sender: 'S', text: 'You didn’t match with me to hear all of this.', color: '#e8340c' },
    { sender: 'C', text: 'I most certainly did. I want to know you, remember?', color: '#f0f0f0' },
    { sender: 'S', text: 'Right. Okay. Thank you.', color: '#e8340c' },
    { sender: 'S', text: 'It feels good to talk about this with someone actually.', color: '#e8340c' },
    { sender: 'C', text: 'I’m happy that I can be that someone.', color: '#f0f0f0' },
    { sender: 'S', text: 'Me too.', color: '#e8340c' },
    { sender: 'C', text: 'Go on, I’m listening.', color: '#f0f0f0' },
    { sender: 'S', text: 'Oh, shut up. Anyway, it feels pretty impossible to get through to her. Everything I do is the wrong thing, apparently.', color: '#e8340c' },
    { sender: 'C', text: 'Grief can be a particularly dark tunnel. There’s often very little light and it can be almost impossible to see it.', color: '#f0f0f0' },
    { sender: 'C', text: 'Sometimes the only way out is through.', color: '#f0f0f0' },
    { sender: 'S', text: 'You know the feeling?', color: '#e8340c' },
    { sender: 'C', text: 'I’ve gotten pretty well-acquainted with grief over the years. I’m a grief counselor of sorts.', color: '#f0f0f0' },
    { sender: 'S', text: 'Of sorts?', color: '#e8340c' },
    { sender: 'C', text: 'Among other things.', color: '#f0f0f0' },
    { sender: 'S', text: 'Tell me more', color: '#e8340c' },
    { sender: 'C', text: 'Life-coaching, empowerment and self-help seminars… therapy and other kinds of psychological assistance included.', color: '#f0f0f0' },
    { sender: 'S', text: 'That’s incredible. Curtis, you must really help people.', color: '#e8340c' },
    { sender: 'C', text: 'I try.', color: '#f0f0f0' },
    { sender: 'S', text: 'That’s so noble of you.', color: '#e8340c' },
    { sender: 'C', text: 'What good is the world if we aren’t bringing our best selves to it?', color: '#f0f0f0' },
    { sender: 'S', text: 'I completely agree.', color: '#e8340c' },
    { sender: 'C', text: 'Olivia will reach the end of that tunnel. Sometimes all it takes is a little push. Or a guiding light through that darkness.', color: '#f0f0f0' },
    { sender: 'S', text: 'I keep trying to be that for her… she just doesn’t understand. She won’t listen to a word I say when it comes to him. It’s like I’m talking to a wall.', color: '#e8340c' },
    { sender: 'C', text: 'Maybe I can help.', color: '#f0f0f0' },
    { sender: 'S', text: 'I think that might be a great idea. She might need to hear it from someone who isn’t me. Someone who’s closer to that kind of “father figure” image.', color: '#e8340c' },
    { sender: 'C', text: 'I would be happy to help. Grief is comprised of someone’s unimaginable pain. If I can ease some of the burden of that pain, I would consider myself lucky to do so.', color: '#f0f0f0' },
    { sender: 'S', text: 'I can’t tell you how much that would mean to me.', color: '#e8340c' },
    { sender: 'C', text: 'Not too intense?', color: '#f0f0f0' },
    { sender: 'S', text: 'Not at all. I’m prepared now. You being a Scorpio and all.', color: '#e8340c' },
    { sender: 'C', text: 'Right. You’ve got me all figured out.', color: '#f0f0f0' },
    { sender: 'S', text: 'I do, don’t I?', color: '#e8340c' },
    { sender: 'C', text: 'You do.', color: '#f0f0f0' },
    { sender: 'C', text: 'When do we get to do that again?', color: '#f0f0f0' },
    { sender: 'S', text: 'I have some time tomorrow. I’ll set it aside for you.', color: '#e8340c' },
    { sender: 'C', text: 'Not-Sarah, I think I’ve been waiting for you my whole life.', color: '#f0f0f0' },
    { sender: 'S', text: 'Likewise, Mr. Curtis Clark.', color: '#e8340c' },
    { sender: 'C', text: 'I had a fun day with you today.', color: '#f0f0f0' },
    { sender: 'S', text: 'Me too. I haven’t laughed that hard in a while.', color: '#e8340c' },
    { sender: 'C', text: 'Sweet dreams, Ms. Not-Sarah.', color: '#f0f0f0' },
    { sender: 'C', text: 'Good morning.', color: '#f0f0f0' },
    { sender: 'S', text: 'Careful, I’m starting to look forward to these every morning.', color: '#e8340c' },
    { sender: 'C', text: 'Good. I don’t intend to stop sending them.', color: '#f0f0f0' },
    { sender: 'S', text: 'When do I get to hear it in person?', color: '#e8340c' },
    { sender: 'C', text: 'As soon as I can get some time off work.', color: '#f0f0f0' },
    { sender: 'S', text: 'Oh really?', color: '#e8340c' },
    { sender: 'C', text: 'Oh really. You, me, and a whole lot of “good mornings.”', color: '#f0f0f0' },
    { sender: 'S', text: 'Curtis… don’t make me blush.', color: '#e8340c' },
    { sender: 'C', text: 'Tell me about you.', color: '#f0f0f0' },
    { sender: 'S', text: 'Anything! What your life was like 2 weeks ago. Who is Curtis Clark when he’s not on this app?', color: '#e8340c' },
    { sender: 'C', text: 'Well, you know about my profession. That takes up a great deal of my time.', color: '#f0f0f0' },
    { sender: 'C', text: 'When I’m not devoting my time to helping others for money, I can usually be found doing it for free by rescuing kittens from trees and helping little old ladies cross the street.', color: '#f0f0f0' },
    { sender: 'S', text: 'I’m serious!', color: '#e8340c' },
    { sender: 'C', text: 'I am too!', color: '#f0f0f0' },
    { sender: 'S', text: 'Do you have any family? Are you an only child?', color: '#e8340c' },
    { sender: 'S', text: 'What were your parents like?', color: '#e8340c' },
    { sender: 'C', text: 'I do! I am not an only child, but my siblings have all grown up and moved away, as siblings often do.', color: '#f0f0f0' },
    { sender: 'C', text: 'My parents were firm, but kind. We were really lucky to grow up the way we did.', color: '#f0f0f0' },
    { sender: 'C', text: 'I lost my wife quite a few years back… and I have a daughter.', color: '#f0f0f0' },
    { sender: 'S', text: 'A daughter?', color: '#e8340c' },
    { sender: 'C', text: 'Sophie. She’s probably about the same age as Olivia, actually.', color: '#f0f0f0' },
    { sender: 'S', text: 'We should get them in touch! It would be nice for Olivia to have a friend. Especially now.', color: '#e8340c' },
    { sender: 'C', text: 'I think that’s a fantastic idea.', color: '#f0f0f0' },
    { sender: 'C', text: 'We should go somewhere. Rent a cabin or something. What do you think?', color: '#f0f0f0' },
    { sender: 'S', text: 'I’d have to make sure I can take the time off work.', color: '#e8340c' },
    { sender: 'C', text: 'What’s that you taught me about being a Sagittarius?', color: '#f0f0f0' },
    { sender: 'S', text: 'Sexy?', color: '#e8340c' },
    { sender: 'C', text: 'Spontaneous. …And Sexy.', color: '#f0f0f0' },
    { sender: 'S', text: 'Spontaneous (and sexy) is right. Pick the dates and I’ll let them know I’m not coming in.', color: '#f0f0f0' },
    { sender: 'C', text: 'That’s the spirit.', color: '#f0f0f0' },
    { sender: 'C', text: 'As long as you don’t mention the H-word…', color: '#f0f0f0' },
    { sender: 'S', text: 'Who mentioned HIPAA?', color: '#e8340c' },
    { sender: 'C', text: 'Exactly.', color: '#f0f0f0' },
    { sender: 'S', text: 'I can’t believe this is all online. I want to meet them.', color: '#e8340c' },
    { sender: 'C', text: 'You can! I’d love for you to meet them, actually. I’m looking at setting up a retreat for a number of them soon. I really want you there.', color: '#f0f0f0' },
    { sender: 'S', text: 'Then I’ll be there.', color: '#e8340c' },
    { sender: 'S', text: 'So, where’s the cabin we’re renting?', color: '#e8340c' },
    { sender: 'C', text: 'You’ll love it. https://www.zillow.com/homedetails/6215-Painters-Ct-Hunterville-VW-02751/0247630981_zpid/', color: '#f0f0f0' },
    { sender: 'S', text: 'You were right, Curtis. I love it.', color: '#e8340c' },
    { sender: 'C', text: 'I knew you would.', color: '#f0f0f0' },
    { sender: 'S', text: 'Curtis, this is not an Airbnb.', color: '#e8340c' },
    { sender: 'C', text: '?', color: '#f0f0f0' },
    { sender: 'S', text: 'This house is for sale.', color: '#e8340c' },
    { sender: 'C', text: 'Oh! Look at that, it is.', color: '#f0f0f0' },
    { sender: 'S', text: 'Good luck finding another one that perfect.', color: '#e8340c' },
    { sender: 'C', text: 'We could always just buy it…', color: '#f0f0f0' },
    { sender: 'S', text: 'Don’t tempt me.', color: '#e8340c' },
    { sender: 'C', text: 'I’m serious, Rebecca.', color: '#f0f0f0' },
    { sender: 'S', text: 'You really aren’t kidding.', color: '#e8340c' },
    { sender: 'C', text: 'Really. What if we did it?', color: '#f0f0f0' },
    { sender: 'S', text: 'What if we bought that house?', color: '#e8340c' },
    { sender: 'C', text: 'Yes. Remember you… and me… and all those “good mornings?”', color: '#f0f0f0' },
    { sender: 'S', text: 'I do.', color: '#e8340c' },
    { sender: 'C', text: '…And what is it they say about being a Sagittarius?', color: '#f0f0f0' },
    { sender: 'S', text: 'Sexy.', color: '#e8340c' },
    { sender: 'C', text: 'And?', color: '#f0f0f0' },
    { sender: 'S', text: 'And spontaneous.', color: '#e8340c' },
    { sender: 'C', text: 'And spontaneous.', color: '#f0f0f0' },
    { sender: 'S', text: 'I’m feeling a little spontaneous right now…', color: '#e8340c' },
    { sender: 'C', text: 'Good night, Rebecca.', color: '#f0f0f0' },
    { sender: 'S', text: 'Good night.', color: '#e8340c' },
    { sender: 'C', text: 'Good morning.', color: '#f0f0f0' },
    { sender: 'C', text: 'I’m looking forward to saying this to you in our new house.', color: '#f0f0f0' },
    { sender: 'S', text: 'I said I’d think about it!', color: '#e8340c' },
    { sender: 'C', text: 'That’s good enough for me.', color: '#f0f0f0' },
    { sender: 'S', text: 'Though you are getting good at convincing me.', color: '#e8340c' },
    { sender: 'C', text: 'Good. My degree is useless otherwise.', color: '#f0f0f0' },
    { sender: 'S', text: 'Oh, shut up haha', color: '#e8340c' },
    { sender: 'C', text: 'Kidding.', color: '#f0f0f0' },
    { sender: 'S', text: '😄', color: '#e8340c' },
    { sender: 'C', text: 'Think about it. Remember that sense of freedom? That simplicity? That’s what we get with that house.', color: '#f0f0f0' },
    { sender: 'S', text: 'You make it sound so easy.', color: '#e8340c' },
    { sender: 'C', text: 'It can be. I think we could really build something together, Rebecca.', color: '#f0f0f0' },
    { sender: 'S', text: 'I feel the same way.', color: '#e8340c' },
    { sender: 'C', text: 'That’s what this house is. An investment.', color: '#f0f0f0' },
    { sender: 'S', text: 'Into?', color: '#e8340c' },
    { sender: 'C', text: 'That freedom. That simplicity. Us. An investment into our future.', color: '#f0f0f0' },
    { sender: 'S', text: 'You really think we could do this? Start over like this? Together?', color: '#e8340c' },
    { sender: 'C', text: 'Of course I do.', color: '#f0f0f0' },
    { sender: 'S', text: 'Then I believe it too. ❤️', color: '#e8340c' },
    { sender: 'C', text: 'It’s you and me, Rebecca.', color: '#f0f0f0' },
    { sender: 'C', text: 'Bad news. The money I had set aside for this is tied up right now. I can’t put it towards our house.', color: '#f0f0f0' },
    { sender: 'C', text: 'Good morning.', color: '#f0f0f0' },
    { sender: 'S', text: 'Good morning, Mr. Curtis Clark.', color: '#e8340c' },
    { sender: 'C', text: 'Good morning, Mrs. Curtis Clark.', color: '#f0f0f0' },
    { sender: 'S', text: 'So, I was thinking about how we can afford that house.', color: '#e8340c' },
    { sender: 'C', text: 'Oh? Our cabin?', color: '#f0f0f0' },
    { sender: 'S', text: 'Yes. I still have Brian’s life insurance payout.', color: '#e8340c' },
    { sender: 'C', text: 'That has to be enough to cover the down payment…', color: '#f0f0f0' },
    { sender: 'S', text: 'It is. And enough for any renovations we might need to do before we move in.', color: '#f0f0f0' },
    { sender: 'C', text: 'Rebecca, that’s perfect. You’re perfect.', color: '#f0f0f0' },
    { sender: 'S', text: 'Oh, I know.', color: '#e8340c' },
    { sender: 'C', text: 'I love you.', color: '#f0f0f0' },
    { sender: 'S', text: 'I love you too.', color: '#e8340c' },
    { sender: 'C', text: 'We can finally start our life together.', color: '#f0f0f0' },
    { sender: 'S', text: 'I can’t wait. I just want to move in now. With you. ❤️', color: '#e8340c' },
    { sender: 'C', text: 'I can let the realtor know we’re ready to buy it. I’ll just need proof of funds.', color: '#f0f0f0' },
    { sender: 'C', text: 'OK, let’s get this sorted and I’ll reach out to the realtor right away.', color: '#f0f0f0' },
    { sender: 'S', text: 'Perfect. Give me a second to get the information right.', color: '#e8340c' },
    { sender: 'S', text: 'OK. I sent the wire.', color: '#e8340c' },
    { sender: 'C', text: 'Our future begins!', color: '#f0f0f0' },
    { sender: 'S', text: 'I’m so happy. I love you.', color: '#e8340c' },
    { sender: 'C', text: 'I love you too, Mrs. Clark.', color: '#f0f0f0' },
    { sender: 'S', text: 'I can’t wait until it’s official.', color: '#e8340c' },
    { sender: 'C', text: 'We could do it at the house.', color: '#f0f0f0' },
    { sender: 'S', text: 'Have the ceremony there?', color: '#e8340c' },
    { sender: 'C', text: 'Yes. If you’d like that.', color: '#f0f0f0' },
    { sender: 'S', text: 'I would. I know Olivia would too.', color: '#e8340c' },
    { sender: 'C', text: 'Good. Then that’s what we’ll do.', color: '#f0f0f0' },
    { sender: 'S', text: 'I can’t wait.', color: '#e8340c' },
    { sender: 'C', text: 'I believe we have a wedding to start planning.', color: '#f0f0f0' },
    { sender: 'C', text: 'It appears we do. I’ll need your ring size.', color: '#f0f0f0' },
    { sender: 'S', text: 'Good morning, Mr. Clark.', color: '#e8340c' },
    { sender: 'C', text: 'Good morning, Mrs. Clark.', color: '#f0f0f0' },
    { sender: 'C', text: 'Today’s the day.', color: '#f0f0f0' },
    { sender: 'S', text: 'I can’t wait to see you.❤️', color: '#e8340c' },
    { sender: 'S', text: 'Just packed the last of my things! Picking the dress up from alterations and then I’ll be ready to go.', color: '#e8340c' },
    { sender: 'C', text: 'Onto the rest of our lives! See you at 5.', color: '#f0f0f0' },
]);


  const [newMessage, setNewMessage] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages, 
        { sender: 'S', text: newMessage, color: '#e8340c' }
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
      // border="2px solid purple"
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
                marginLeft: message.sender === 'S' ? 'auto' : '0',
                maxWidth: '75%',
                display: 'inline-block',
                alignSelf: message.sender === 'S' ? 'flex-end' : 'flex-start',
              }}
            >
              <Text color={message.sender === 'S' ? '#ffffff' : 'black'}>
                <strong>{message.sender}:</strong> {message.text}
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
};

export default ChatAlerts;
