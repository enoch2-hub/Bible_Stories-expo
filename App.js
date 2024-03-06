import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
// import { useNavigation } from '@react-navigation/native/lib/typescript/src';
import { useNavigation } from '@react-navigation/native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens (e.g., HomeScreen, StoryPageScreen)
import HomeScreen from './screens/HomeScreen';
import StoryPageScreen from './screens/StoryPageScreen';
import ReadStory from './screens/ReadStory';

const Stack = createStackNavigator();


const StoryData = [{
  id: 1,
  title: `Daniel in the Lion's den`,
  intro: 'Introduction to the Story',
  content: `Once upon a time in the ancient kingdom of Babylon, there lived a wise and faithful man named Daniel. He was known for his integrity, wisdom, and devotion to God. King Darius recognized Daniel's exceptional qualities and appointed him as one of the top administrators in the kingdom.

  Jealous of Daniel's rising influence, some officials conspired to bring him down. They persuaded King Darius to sign a decree forbidding anyone from praying to any god or man except the king for thirty days. Violating this decree would result in being thrown into a den of hungry lions.
  
  Despite the decree, Daniel continued his daily practice of praying to God with the windows open. The conspirators caught him in the act and reported to the king. Realizing the trap he had fallen into, King Darius was distressed but had no choice but to enforce his own decree.
  
  With great sorrow, King Darius ordered Daniel to be thrown into the den of lions. Before being lowered into the pit, Daniel declared his innocence and trust in God. The king, hoping against hope, sealed the den with a stone and spent a sleepless night in anxiety.
  
  At dawn, King Darius rushed to the lion's den, fearing the worst. To his amazement and joy, he found Daniel unharmed. God had sent an angel to shut the mouths of the hungry lions, sparing Daniel's life. Overwhelmed with gratitude and awe, King Darius praised the God of Daniel and issued a new decree, commanding all people in his kingdom to fear and reverence Daniel's God.
  
  Daniel's faithfulness and unwavering trust in God had not only saved him from the lion's den but also brought glory to God in the eyes of the king and the entire kingdom.`,
  imageUrl: require('./Assets/Stories/Slide1.jpg'),
  bckgimg: require('./Assets/Stories/003.jpg'),

},
{
  id: 2,
  title: 'The Prodigal Son',
  intro: 'A Story of Redemption and Unconditional Love',
  content: `Once, in a distant land, a wealthy man had two sons. The younger son, restless and eager for independence, approached his father, asking for his share of the inheritance. Despite the unconventional request, the father divided his property between his two sons.

  The younger son, now free from the constraints of home, embarked on a journey to a faraway country. There, he squandered his wealth in extravagant living, indulging in wild and reckless behavior. Soon, a severe famine struck the land, and the young man found himself destitute and hungry.
  
  In desperation, he took a job feeding pigs—a task that was both lowly and degrading. Starving and humiliated, the prodigal son finally came to his senses. He realized the abundance and generosity he had forsaken in his pursuit of pleasure. With a repentant heart, he decided to return to his father, even if only as a servant.
  
  As the wayward son approached his father's estate, he was met with an unexpected sight. The father, who had been watching and waiting, saw his lost son from a distance. Filled with compassion and love, he ran to embrace him. Overwhelmed with remorse, the prodigal son confessed his wrongdoing and pleaded for forgiveness.
  
  Instead of condemnation, the father celebrated the return of his lost son. He ordered a feast, symbolizing joy and reconciliation. The elder son, who had remained faithful and dutiful, was initially resentful at the extravagant welcome given to his wayward brother. Yet, the father, in his wisdom, reminded the elder son of the importance of forgiveness and compassion.
  
  The parable of the Prodigal Son illustrates the boundless mercy of God and the transformative power of repentance. It serves as a poignant reminder that, no matter how far we stray, the love of a compassionate Father awaits our return with open arms.`,
  imageUrl: require('./Assets/004.jpg'),
  bckgimg: require('./Assets/Stories/003.jpg'),

},
{
  id: 3,
  title: `Joseph and the coat of many colours`,
  intro: 'A Journey from Betrayal to Redemption',
  content: `In the land of Canaan, a young man named Joseph was favored by his father, Jacob. To show his love, Jacob gave Joseph a beautiful coat of many colors, symbolizing his special status among his brothers. However, this act of favoritism fueled jealousy among Joseph's siblings.

  Joseph began to have dreams that seemed to foretell his future greatness. These dreams only intensified his brothers' resentment. In a fit of jealousy and spite, they plotted against him. One day, they seized Joseph and threw him into a pit, later selling him as a slave to passing traders.
  
  Joseph found himself in Egypt, far from his family and the comfort of his father's house. Yet, even in slavery, he displayed remarkable qualities. His integrity and reliance on God caught the attention of his master, Potiphar, who entrusted him with great responsibilities.
  
  However, Joseph faced another trial when Potiphar's wife falsely accused him of wrongdoing. Despite his innocence, Joseph was thrown into prison. Even in this dire situation, he remained steadfast in his faith.
  
  Joseph's ability to interpret dreams soon reached the ears of Pharaoh, the ruler of Egypt. Summoned to interpret Pharaoh's troubling dreams, Joseph foretold a severe famine. Impressed by his wisdom, Pharaoh appointed Joseph as second in command, giving him the authority to manage the resources of Egypt.
  
  As predicted, a famine struck the land, affecting not only Egypt but also Joseph's homeland. Joseph's brothers, desperate for food, came to Egypt seeking help. Unbeknownst to them, the high-ranking official they sought assistance from was their long-lost brother.
  
  In a moment of revelation and reconciliation, Joseph forgave his brothers, recognizing that God had orchestrated events for a greater purpose. The family was reunited, and Joseph's journey from betrayal to redemption became a testament to the power of forgiveness and God's sovereign plan.`,

  imageUrl: require('./Assets/005.jpg'),
  bckgimg: require('./Assets/Stories/003.jpg'),

},
{
  id: 4,
  title: 'Blind Bartimaeus',
  intro: 'A Story of Faith and Healing',
  content: `In the bustling streets of Jericho, a blind beggar named Bartimaeus sat by the roadside. Unable to see, he relied on the sounds and voices around him to navigate his world. One day, he heard that Jesus of Nazareth was passing by.

  Bartimaeus, seizing the opportunity, began to cry out, "Jesus, Son of David, have mercy on me!" The crowd tried to silence him, but Bartimaeus persisted even more fervently. His desperate plea caught the attention of Jesus.
  
  Jesus, moved by the blind man's faith, called him forward. Bartimaeus, casting aside his cloak, sprang to his feet and approached Jesus. With compassion, Jesus asked him, "What do you want me to do for you?" Bartimaeus replied, "Rabbi, I want to see."
  
  Jesus, recognizing Bartimaeus' faith, declared, "Go, your faith has healed you." Instantly, Bartimaeus regained his sight. Overwhelmed with gratitude, he followed Jesus on the way.
  
  This story of Blind Bartimaeus is a powerful testament to the transformative power of faith and the compassion of Jesus. It teaches us the importance of persistence in seeking God's mercy and the incredible outcomes that result from trusting in His healing touch.`,
  
  imageUrl: require('./Assets/011.jpg'),
  bckgimg: require('./Assets/Stories/003.jpg'),


},
{
  id: 5,
  title: `Naaman's Servant Girl`,
  intro: `A Message of Compassion and Healing`,
  content: `In the land of Aram, there lived a powerful and esteemed military commander named Naaman. Despite his military prowess, Naaman was afflicted with a skin disease, leprosy. In his household, there was a young Israelite girl who served as a maid to Naaman's wife.

  Observing her master's suffering, the servant girl told her mistress about the prophet Elisha in Samaria, believing that he could heal Naaman. The news reached Naaman, and with hope for a cure, he went to the king of Aram, who sent him with a letter to the king of Israel.
  
  Confused and anxious, the king of Israel tore his clothes, fearing that Naaman's request was an attempt to provoke conflict. Elisha, aware of the situation, sent a message to the king, asking him to send Naaman to him.
  
  When Naaman arrived at Elisha's house, he expected an elaborate healing ritual. Instead, Elisha sent a messenger to instruct Naaman to wash seven times in the Jordan River. Initially offended by the simplicity of the command, Naaman's servants convinced him to obey.
  
  As Naaman dipped himself in the Jordan River seven times, his skin was miraculously restored, and he became clean. Overwhelmed with gratitude, Naaman returned to Elisha, acknowledging the God of Israel as the true God and offering gifts.
  
  The story of Naaman's servant girl is a beautiful narrative of compassion and faith. The young maid, though in a position of servitude, cared for her master's well-being, leading to the healing of a mighty commander and a declaration of faith in the God of Israel.`,
  imageUrl: require('./Assets/003.jpg'),
  bckgimg: require('./Assets/Stories/003.jpg'),

},
{
  id: 6,
  title: `Jonah and the Whale`,
  intro: `A Tale of Obedience, Repentance, and Divine Mercy`,
  content: `In the ancient city of Nineveh, God called upon a prophet named Jonah to deliver a message of repentance to its people. Jonah, however, sought to escape this daunting task and boarded a ship bound for Tarshish, hoping to flee from the presence of God.

  During the sea journey, a great storm arose, threatening to engulf the ship. The sailors, realizing that the storm was a result of Jonah's disobedience, reluctantly threw him overboard to appease the raging sea. As Jonah sank into the depths, a massive whale, appointed by God, swallowed him.
  
  Inside the belly of the whale, Jonah faced a time of deep reflection and prayer. In his distress, Jonah cried out to God, repenting for his disobedience and expressing his commitment to fulfill the divine mission. God, in His mercy, commanded the whale to vomit Jonah onto dry land.
  
  Freed from the whale, Jonah received God's call once again. This time, he obeyed and traveled to Nineveh. As he proclaimed God's message of impending judgment, the people of Nineveh, from the greatest to the least, heeded the warning. They fasted, repented, and turned from their wicked ways.
  
  Witnessing Nineveh's repentance, God showed mercy and compassion, sparing the city from the foretold disaster. Jonah, however, struggled to understand God's mercy, feeling displeased that the judgment he had foretold did not come to pass.
  
  The story of Jonah and the whale teaches profound lessons about obedience, repentance, and the boundless mercy of God. It reminds us that God's compassion extends to all who genuinely turn to Him, even in the face of our own shortcomings.`,
  imageUrl: require('./Assets/008.jpg'),
},
{
  id: 7,
  title: `The Sower and the Seed`,
  intro: `A Lesson in Spiritual Growth`,
  content: `LORD YESHUA, surrounded by a multitude of eager listeners, shared a parable to convey profound truths about the condition of human hearts and the reception of God's Word.

  A sower went out to sow seed, scattering it across different types of soil. Some fell along the path, trampled by those who passed by and devoured by birds. This represents hearts that hear the message but quickly dismiss it, allowing distractions and worldly concerns to snatch away the Word.
  
  Other seeds fell on rocky ground, where the soil was shallow. These seeds sprouted quickly, but due to lack of roots, they withered away in the scorching sun. This reflects those who receive the Word with joy initially but lack depth in their faith. When faced with trials or persecution, their faith quickly fades.
  
  Some seeds fell among thorns, which grew up and choked the plants. This signifies individuals who hear the Word, but the cares of this world and the deceitfulness of wealth stifle their spiritual growth. The Word is overshadowed by the worries and desires of life.
  
  Yet, there is also seed that falls on good soil, producing a bountiful harvest. This represents the receptive heart, open to God's Word, allowing it to take root and bear fruit in abundance. Those who hear, understand, and apply the Word with perseverance produce a harvest that glorifies God.
  
  The parable of The Sower and the Seed serves as a call to self-examination and a reminder of the various responses people have to God's message. It emphasizes the importance of cultivating hearts that are receptive, deep-rooted, and free from the thorns of worldly distractions to yield a rich harvest in one's spiritual journey.`,
  imageUrl: require('./Assets/009.jpg'),
}

];

const MainPage = () => { 

  // const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} initialParams={{StoryData}}/>
              <Stack.Screen name="StoryPage" component={StoryPageScreen} initialParams={{StoryData}}/>
              <Stack.Screen name="ReadStory" component={ReadStory} initialParams={{StoryData}}/>
            </Stack.Navigator>
      </NavigationContainer>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  
});

export default MainPage;
